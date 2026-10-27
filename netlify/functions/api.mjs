// ============================================================
//  API DEL CALENDARIO DE PEPRESI (Netlify Functions + Netlify Blobs)
//  Guarda respuestas y fotos, decide la fecha con el reloj del
//  servidor y solo entrega el contenido de los días ya abiertos.
// ============================================================
import { getStore } from '@netlify/blobs';
import { createHmac, timingSafeEqual, randomBytes } from 'node:crypto';
import DAYS from './days.mjs';

// ---------- CONFIGURACIÓN ----------
const TEST_UNTIL = '2026-11-30';   // desde este día (hora de Madrid) se acaba el modo revisión
const YEAR = 2026;
const TZ = 'Europe/Madrid';
// La contraseña NO va aquí: se pone en Netlify como variable de entorno CALENDAR_PASSWORD.

const COOKIE = 'pepresi';
const PHOTO_RE = /^[a-f0-9]{24}\.(jpg|png|webp|gif)$/;
const MIME = { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif' };

const json = (x, status = 200, headers = {}) =>
  new Response(JSON.stringify(x), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex', ...headers } });
const emptyState = () => ({ opened: {}, completed: {}, answers: {} });
const isObj = (x) => x && typeof x === 'object' && !Array.isArray(x);

function token(pw) { return createHmac('sha256', String(pw)).update('pepresi-calendario').digest('hex'); }
function safeEq(a, b) { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && timingSafeEqual(x, y); }
function readCookie(req, name) {
  const c = req.headers.get('cookie') || '';
  for (const part of c.split(/;\s*/)) { const i = part.indexOf('='); if (i > 0 && part.slice(0, i) === name) return decodeURIComponent(part.slice(i + 1)); }
  return '';
}
function madridNow(now = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now).map((x) => [x.type, x.value]));
  return { ymd: `${p.year}-${p.month}-${p.day}`, y: +p.year, m: +p.month, d: +p.day };
}
function phase(now) {
  const t = madridNow(now);
  if (t.ymd < TEST_UNTIL) return { mode: 'prueba', unlocked: 24 };
  const unlocked = t.y > YEAR ? 24 : (t.y < YEAR || t.m < 12) ? 0 : Math.min(t.d, 24);
  return { mode: 'real', unlocked };
}
function imageExt(buf) {
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'jpg';
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return 'png';
  if (buf.slice(0, 4).toString() === 'RIFF' && buf.slice(8, 12).toString() === 'WEBP') return 'webp';
  if (buf.slice(0, 3).toString() === 'GIF') return 'gif';
  return null;
}
async function wipe(store, prefix) {
  const { blobs } = await store.list({ prefix });
  await Promise.all(blobs.map((b) => store.delete(b.key)));
}

// Lógica separada del arranque para poder probarla.
export async function handle(req, { store, password, now = new Date() }) {
  const url = new URL(req.url);
  const a = url.searchParams.get('a') || '';
  const post = req.method === 'POST';

  if (!password) return json({ error: 'Falta la variable CALENDAR_PASSWORD en Netlify' }, 500);

  // ---------- Entrar ----------
  if (a === 'login') {
    if (!post) return json({ error: 'Método no permitido' }, 405);
    await new Promise((r) => setTimeout(r, 500)); // frena intentos repetidos
    let pw = '';
    try { pw = (await req.json()).password; } catch {}
    if (typeof pw !== 'string' || !safeEq(pw, password)) return json({ error: 'Contraseña incorrecta' }, 401);
    const secure = url.protocol === 'https:' ? '; Secure' : '';
    return json({ ok: true }, 200, { 'Set-Cookie': `${COOKIE}=${token(password)}; Path=/; Max-Age=${86400 * 400}; HttpOnly; SameSite=Lax${secure}` });
  }
  if (!safeEq(readCookie(req, COOKIE), token(password))) return json({ error: 'login' }, 401);

  const { mode, unlocked } = phase(now);
  if (mode === 'real') {
    const old = await store.list({ prefix: 'prueba/' });
    if (old.blobs.length) await wipe(store, 'prueba/'); // el 30 de noviembre empieza todo de cero
  }
  const stateKey = `${mode}/estado`;

  switch (a) {
    case 'state': {
      const days = {};
      for (let n = 1; n <= unlocked; n++) if (DAYS[n]) days[n] = DAYS[n];
      const data = (await store.get(stateKey, { type: 'json' })) || emptyState();
      return json({ now: Date.now(), mode, unlocked, testUntil: TEST_UNTIL, data, days });
    }
    case 'save': {
      if (!post) return json({ error: 'Método no permitido' }, 405);
      const raw = await req.text();
      if (raw.length > 2 * 1024 * 1024) return json({ error: 'Demasiado grande' }, 413);
      let j; try { j = JSON.parse(raw); } catch { return json({ error: 'Datos no válidos' }, 400); }
      if (!isObj(j) || j.mode !== mode) return json({ error: 'mode', mode }, 409);
      if (!isObj(j.data)) return json({ error: 'Datos no válidos' }, 400);
      const clean = { opened: {}, completed: {}, answers: {}, updatedAt: Date.now() };
      for (const k of ['opened', 'completed', 'answers']) {
        const src = isObj(j.data[k]) ? j.data[k] : {};
        for (const day of Object.keys(src)) if (+day >= 1 && +day <= unlocked) clean[k][day] = src[day]; // nada de días futuros
      }
      await store.setJSON(stateKey, clean);
      return json({ ok: true });
    }
    case 'upload': {
      if (!post) return json({ error: 'Método no permitido' }, 405);
      let file;
      try { file = (await req.formData()).get('foto'); } catch { return json({ error: 'too_large' }, 413); }
      if (!file || typeof file.arrayBuffer !== 'function') return json({ error: 'upload' }, 400);
      const buf = Buffer.from(await file.arrayBuffer());
      if (buf.length > 5.5 * 1024 * 1024) return json({ error: 'too_large' }, 413);
      const ext = imageExt(buf);
      if (!ext) return json({ error: 'unsupported_type' }, 415);
      const id = randomBytes(12).toString('hex') + '.' + ext;
      await store.set(`${mode}/fotos/${id}`, buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length), { metadata: { type: MIME[ext] } });
      return json({ id });
    }
    case 'photo': {
      const id = url.searchParams.get('id') || '';
      const m = id.match(PHOTO_RE);
      if (!m) return json({ error: 'No encontrada' }, 404);
      const b = await store.get(`${mode}/fotos/${id}`, { type: 'arrayBuffer' });
      if (!b) return json({ error: 'No encontrada' }, 404);
      return new Response(b, { headers: { 'Content-Type': MIME[m[1]], 'Cache-Control': 'private, max-age=31536000, immutable' } });
    }
    case 'delphoto': {
      if (!post) return json({ error: 'Método no permitido' }, 405);
      let id = ''; try { id = (await req.json()).id; } catch {}
      if (PHOTO_RE.test(String(id))) await store.delete(`${mode}/fotos/${id}`);
      return json({ ok: true });
    }
    case 'reset': {
      if (!post) return json({ error: 'Método no permitido' }, 405);
      if (mode !== 'prueba') return json({ error: 'Solo se puede borrar en modo revisión' }, 403);
      await wipe(store, 'prueba/');
      return json({ ok: true });
    }
  }
  return json({ error: 'Acción desconocida' }, 404);
}

export default async (req) =>
  handle(req, { store: getStore({ name: 'pepresi', consistency: 'strong' }), password: process.env.CALENDAR_PASSWORD });

export const config = { path: '/api' };
