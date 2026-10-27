// ============================================================
//  CONTENIDO DE LOS 24 DÍAS (editable)
//  Respeta comillas y comas.
//  cat: E = Esperanza·Agradecer, P = Paz·Dar, A = Alegría·Disfrutar, M = Amor·Compartir
//  Tipos de campo (t): textarea, text, date, link, rating (1-10), choice (options), photos
//  note: aviso bajo la explicación (noteOk: true lo muestra en verde)
//  El servidor solo envía el contenido de los días que ya se pueden abrir.
// ============================================================
export default {
  "1": {
    "cat": "E",
    "title": "Siéntete orgulloso de ti",
    "intro": [
      "¡Empieza diciembre! Antes de pensar en todo lo que viene, vamos a mirar un momento lo que has conseguido este año.",
      "Seguro que hay algo que al principio te parecía difícil y que, gracias a tu esfuerzo, has logrado."
    ],
    "mission": "Escribe aquí de qué te sientes especialmente orgulloso este 2026 y por qué.",
    "phases": [
      {
        "fields": [
          {
            "t": "textarea",
            "id": "orgullo",
            "label": "Mi orgullo de 2026"
          }
        ]
      }
    ]
  },
  "2": {
    "cat": "A",
    "title": "Nos vamos a ver al Valencia Basket",
    "intro": [
      "¡Hoy toca una sorpresa deportiva! Tenemos pendiente ir juntos a disfrutar de un partido del Valencia Basket."
    ],
    "mission": "Estamos buscando un partido que nos encaje y, en cuanto tengamos la fecha, te avisaremos para que reserves el día. Después del partido, vuelve aquí para contarnos el resultado y subir una fotografía de recuerdo.",
    "note": "Fecha del partido: pendiente de confirmar",
    "phases": [
      {
        "title": "Después del partido",
        "fields": [
          {
            "t": "text",
            "id": "resultado",
            "label": "Resultado del partido",
            "ph": "Valencia Basket – rival"
          },
          {
            "t": "photos",
            "id": "fotos",
            "label": "Foto de recuerdo",
            "optional": false
          }
        ]
      }
    ]
  },
  "3": {
    "cat": "P",
    "title": "Lo que ya no usas puede hacer feliz a alguien",
    "intro": [
      "Seguro que tienes algún juego, libro o juguete que ya no utilizas, pero que todavía está en perfecto estado."
    ],
    "mission": "Elige algo tuyo que pueda tener una segunda vida y prepáralo para donarlo. Escribe aquí qué has elegido y a quién o dónde lo vas a entregar.",
    "phases": [
      {
        "fields": [
          {
            "t": "text",
            "id": "que",
            "label": "¿Qué has elegido?"
          },
          {
            "t": "text",
            "id": "donde",
            "label": "¿A quién o dónde lo vas a entregar?"
          },
          {
            "t": "photos",
            "id": "fotos",
            "label": "Foto",
            "optional": true
          }
        ]
      }
    ]
  },
  "4": {
    "cat": "E",
    "title": "Tres personas, tres gracias",
    "intro": [
      "A lo largo de este año seguro que ha habido personas que te han ayudado, te han acompañado o han hecho algo bonito por ti."
    ],
    "mission": "Elige a tres personas y dales las gracias de verdad. Puede ser en persona, por mensaje o con una llamada. Después, escribe aquí quiénes son y por qué les has dado las gracias.",
    "phases": [
      {
        "title": "Primera persona",
        "fields": [
          {
            "t": "text",
            "id": "p1",
            "label": "¿Quién es?"
          },
          {
            "t": "textarea",
            "id": "m1",
            "label": "¿Por qué le has dado las gracias?",
            "rows": 3
          }
        ]
      },
      {
        "title": "Segunda persona",
        "fields": [
          {
            "t": "text",
            "id": "p2",
            "label": "¿Quién es?"
          },
          {
            "t": "textarea",
            "id": "m2",
            "label": "¿Por qué le has dado las gracias?",
            "rows": 3
          }
        ]
      },
      {
        "title": "Tercera persona",
        "fields": [
          {
            "t": "text",
            "id": "p3",
            "label": "¿Quién es?"
          },
          {
            "t": "textarea",
            "id": "m3",
            "label": "¿Por qué le has dado las gracias?",
            "rows": 3
          }
        ]
      }
    ]
  },
  "5": {
    "cat": "M",
    "title": "Una Navidad esquiando",
    "intro": [
      "¡Este año la Navidad también se vive entre montañas!"
    ],
    "mission": "Aprovecha vuestro viaje a Andorra durante el puente de diciembre para descubrir las luces y la decoración navideña. Haz una fotografía juntos y súbela aquí para guardar un recuerdo especial de esta Navidad.",
    "note": "Puedes completarla en cualquier momento del puente",
    "noteOk": true,
    "phases": [
      {
        "fields": [
          {
            "t": "photos",
            "id": "fotos",
            "label": "Nuestra foto en Andorra",
            "optional": false
          }
        ]
      }
    ]
  },
  "6": {
    "cat": "P",
    "title": "Un regalo para alguien que no conoces",
    "intro": [
      "Hay regalos que hacen especial ilusión precisamente porque no esperamos nada a cambio."
    ],
    "mission": "Este año participarás en la iniciativa solidaria del trabajo de Ampi. Elige un regalo pensando en el niño que lo recibirá, prepáralo y escribe aquí qué has escogido y por qué. También puedes subir una fotografía.",
    "note": "Fecha y detalles de la entrega: pendientes de confirmar",
    "phases": [
      {
        "fields": [
          {
            "t": "textarea",
            "id": "regalo",
            "label": "¿Qué has escogido y por qué?"
          },
          {
            "t": "photos",
            "id": "fotos",
            "label": "Foto del regalo",
            "optional": true
          }
        ]
      }
    ]
  },
  "7": {
    "cat": "E",
    "title": "Lo extraordinario de lo cotidiano",
    "intro": [
      "A veces las cosas más importantes son las que tenemos todos los días y casi nunca nos paramos a valorar."
    ],
    "mission": "Elige algo de tu vida cotidiana que te haga sentir afortunado y escribe aquí por qué es tan especial.",
    "phases": [
      {
        "fields": [
          {
            "t": "textarea",
            "id": "cotidiano",
            "label": "Me siento afortunado por…"
          }
        ]
      }
    ]
  },
  "8": {
    "cat": "E",
    "title": "Cuando tus padres eran pequeños…",
    "intro": [
      "Aunque cueste imaginarlo, mamá y papá también fueron niños y vivieron aventuras que quizá todavía no conoces."
    ],
    "mission": "Pregúntales por uno de sus recuerdos favoritos de la infancia. Escucha sus historias y escribe aquí lo que te hayan contado. Si encontráis una fotografía antigua, ¡súbela también!",
    "phases": [
      {
        "fields": [
          {
            "t": "textarea",
            "id": "historia",
            "label": "Lo que me han contado",
            "rows": 6
          },
          {
            "t": "photos",
            "id": "fotos",
            "label": "Foto antigua",
            "optional": true
          }
        ]
      }
    ]
  },
  "9": {
    "cat": "P",
    "title": "Una compra que no es para ti",
    "intro": [
      "Hoy toca ir de compras, pero esta vez no vas a elegir nada para ti."
    ],
    "mission": "Participa en la Campaña del Kilo del colegio. Elige los alimentos que quieres aportar, prepáralos y llévalos al colegio. Después, escribe aquí qué has comprado.",
    "phases": [
      {
        "fields": [
          {
            "t": "textarea",
            "id": "compra",
            "label": "¿Qué has comprado?"
          }
        ]
      }
    ]
  },
  "10": {
    "cat": "P",
    "title": "Hoy el protagonista es otro",
    "intro": [
      "Hoy el objetivo es muy sencillo: hacer que alguien tenga un día un poquito mejor gracias a ti."
    ],
    "mission": "Prepara un detalle inesperado para alguien. Puede ser una sorpresa, una nota o cualquier gesto que creas que le hará ilusión. Después, vuelve aquí y cuéntanos qué has hecho.",
    "phases": [
      {
        "fields": [
          {
            "t": "textarea",
            "id": "detalle",
            "label": "¿Qué has hecho y para quién?"
          }
        ]
      }
    ]
  },
  "11": {
    "cat": "A",
    "title": "Hoy eliges restaurante tú",
    "intro": [
      "¿Tienes fichado algún restaurante que todavía no hayas probado? Pues esta vez tú decides dónde vamos."
    ],
    "mission": "Busca un restaurante al que tengas ganas de ir y escribe aquí su nombre y la fecha en la que te gustaría que fuéramos. No tiene que ser este fin de semana: ¡elige el día que prefieras!",
    "phases": [
      {
        "fields": [
          {
            "t": "text",
            "id": "restaurante",
            "label": "Restaurante"
          },
          {
            "t": "date",
            "id": "fecha",
            "label": "¿Qué día vamos?"
          }
        ]
      }
    ]
  },
  "12": {
    "cat": "A",
    "title": "Una tarde de bolos",
    "intro": [
      "¡Prepara la puntería porque tenemos pendiente una partida de bolos!"
    ],
    "mission": "Escribe aquí qué día te gustaría que fuéramos. Cuando juguemos, vuelve para contarnos quién ha ganado y, si puedes, sube una foto del marcador.",
    "phases": [
      {
        "title": "Antes del plan",
        "fields": [
          {
            "t": "date",
            "id": "fecha",
            "label": "¿Qué día te gustaría que fuéramos?"
          }
        ]
      },
      {
        "title": "Después de jugar",
        "fields": [
          {
            "t": "text",
            "id": "ganador",
            "label": "¿Quién ha ganado?"
          },
          {
            "t": "photos",
            "id": "fotos",
            "label": "Foto del marcador",
            "optional": true
          }
        ]
      }
    ]
  },
  "13": {
    "cat": "M",
    "title": "Un almuerzo los cuatro juntos",
    "intro": [
      "Hay planes que son especiales por la compañía. Y un almuerzo con Dolo, Isi y Ampi es uno de ellos."
    ],
    "mission": "¡Hoy nos vamos los cuatro a almorzar a Rausell! Disfruta del plan y después sube aquí una fotografía de los cuatro juntos para guardar el recuerdo.",
    "note": "Domingo 13 de diciembre · Rausell",
    "noteOk": true,
    "phases": [
      {
        "fields": [
          {
            "t": "photos",
            "id": "fotos",
            "label": "Foto de los cuatro",
            "optional": false
          }
        ]
      }
    ]
  },
  "14": {
    "cat": "P",
    "title": "El regalo de tu tiempo",
    "intro": [
      "Hay algo que puedes regalar sin comprar absolutamente nada: tu tiempo."
    ],
    "mission": "Elige a alguien, pregúntale qué le gustaría hacer contigo y dedica un rato a ese plan, aunque no sea tu favorito. Después, escribe aquí con quién has estado y qué habéis hecho.",
    "phases": [
      {
        "fields": [
          {
            "t": "text",
            "id": "quien",
            "label": "¿Con quién has estado?"
          },
          {
            "t": "textarea",
            "id": "que",
            "label": "¿Qué habéis hecho?"
          }
        ]
      }
    ]
  },
  "15": {
    "cat": "E",
    "title": "El podio de 2026",
    "intro": [
      "Si tuvieras que entregar las medallas de oro, plata y bronce a los mejores momentos de este año, ¿cuáles subirían al podio?"
    ],
    "mission": "Escribe tus tres mejores días o momentos de 2026, ordenados del primero al tercero. Si tienes fotografías, puedes subirlas.",
    "phases": [
      {
        "fields": [
          {
            "t": "text",
            "id": "oro",
            "label": "Medalla de oro"
          },
          {
            "t": "text",
            "id": "plata",
            "label": "Medalla de plata"
          },
          {
            "t": "text",
            "id": "bronce",
            "label": "Medalla de bronce"
          },
          {
            "t": "photos",
            "id": "fotos",
            "label": "Fotos del podio",
            "optional": true
          }
        ]
      }
    ]
  },
  "16": {
    "cat": "A",
    "title": "Misión: Atraco al Banco Central",
    "intro": [
      "¡Tenemos una misión!",
      "Nos espera el Escape Room Atraco al Banco Central, donde tendremos que resolver los enigmas antes de que se acabe el tiempo."
    ],
    "mission": "Escribe aquí qué día te gustaría que fuéramos. Después de la experiencia, vuelve para contarnos si hemos conseguido escapar.",
    "phases": [
      {
        "title": "Antes de la misión",
        "fields": [
          {
            "t": "date",
            "id": "fecha",
            "label": "¿Qué día vamos?"
          }
        ]
      },
      {
        "title": "Después de la misión",
        "fields": [
          {
            "t": "choice",
            "id": "escapamos",
            "label": "¿Hemos conseguido escapar?",
            "options": [
              "¡Sí, escapamos!",
              "Nos pilló el tiempo"
            ]
          },
          {
            "t": "textarea",
            "id": "comentario",
            "label": "¿Cómo ha ido?",
            "rows": 3,
            "optional": true
          }
        ]
      }
    ]
  },
  "17": {
    "cat": "P",
    "title": "Una Navidad sin esperar nada a cambio",
    "intro": [
      "Una felicitación escrita con cariño puede hacer mucha más ilusión de la que imaginas."
    ],
    "mission": "Elige a alguien y prepárale una felicitación navideña escrita a mano. Cuéntale algo bonito, deséale algo especial o recuérdale por qué es importante para ti. Entrégasela y después escribe aquí a quién se la has dado.",
    "phases": [
      {
        "fields": [
          {
            "t": "text",
            "id": "quien",
            "label": "¿A quién se la has dado?"
          },
          {
            "t": "photos",
            "id": "fotos",
            "label": "Foto de la felicitación",
            "optional": true
          }
        ]
      }
    ]
  },
  "18": {
    "cat": "M",
    "title": "Un plan para compartir en 2027",
    "intro": [
      "¡El próximo año está lleno de planes que todavía no hemos vivido!"
    ],
    "mission": "Piensa en algo que te gustaría hacer con todos nosotros en 2027. Puede ser una escapada, una excursión, una actividad o cualquier plan que te haga ilusión. Escríbelo aquí y dinos cuándo te gustaría organizarlo.",
    "phases": [
      {
        "fields": [
          {
            "t": "textarea",
            "id": "plan",
            "label": "El plan"
          },
          {
            "t": "text",
            "id": "cuando",
            "label": "¿Cuándo? (fecha o época de 2027)",
            "ph": "En Semana Santa, en verano…"
          }
        ]
      }
    ]
  },
  "19": {
    "cat": "A",
    "title": "En busca de la mejor tortilla",
    "intro": [
      "¡Vamos a descubrir un sitio nuevo en Valencia donde probar una buena tortilla de patata!",
      "Esta vez te proponemos probar La Martinuca."
    ],
    "mission": "Escribe aquí qué día te gustaría que fuéramos. Después, vuelve para contarnos qué te ha parecido su tortilla y si repetirías.",
    "phases": [
      {
        "title": "Antes del plan",
        "fields": [
          {
            "t": "date",
            "id": "fecha",
            "label": "¿Qué día vamos?"
          }
        ]
      },
      {
        "title": "Después de probarla",
        "fields": [
          {
            "t": "rating",
            "id": "nota",
            "label": "Nota para la tortilla"
          },
          {
            "t": "textarea",
            "id": "comentario",
            "label": "¿Qué te ha parecido?",
            "rows": 3
          },
          {
            "t": "choice",
            "id": "repetir",
            "label": "¿Repetirías?",
            "options": [
              "Sí, repetiría",
              "No"
            ]
          }
        ]
      }
    ]
  },
  "20": {
    "cat": "A",
    "title": "Las mejores bravas de Valencia",
    "intro": [
      "¡Tenemos una visita pendiente a Timoteo!",
      "Vamos a probar las bravas que ganaron el premio a las mejores de Valencia el año pasado."
    ],
    "mission": "Elige qué día vamos. Después de probarlas, vuelve aquí y puntúalas del 1 al 10. ¿Merecen el premio?",
    "phases": [
      {
        "title": "Antes del plan",
        "fields": [
          {
            "t": "date",
            "id": "fecha",
            "label": "¿Qué día vamos?"
          }
        ]
      },
      {
        "title": "Después de probarlas",
        "fields": [
          {
            "t": "rating",
            "id": "nota",
            "label": "Nota para las bravas"
          },
          {
            "t": "choice",
            "id": "premio",
            "label": "¿Merecen el premio?",
            "options": [
              "Sí, lo merecen",
              "No tanto"
            ]
          }
        ]
      }
    ]
  },
  "21": {
    "cat": "M",
    "title": "Cena de hermanos de Navidad",
    "intro": [
      "¡Una de las mejores tradiciones de estas fechas!",
      "Una cena para disfrutar entre hermanos, ponerse al día y pasar un buen rato juntos."
    ],
    "mission": "Reserva la fecha de vuestra cena navideña y, cuando llegue el día, haz una fotografía de todos los hermanos y súbela aquí.",
    "note": "Fecha de la cena: pendiente de confirmar",
    "phases": [
      {
        "fields": [
          {
            "t": "photos",
            "id": "fotos",
            "label": "Foto de los hermanos",
            "optional": false
          }
        ]
      }
    ]
  },
  "22": {
    "cat": "M",
    "title": "La sobremesa más divertida",
    "intro": [
      "Esta Nochebuena tienes una misión importante: ¡ser el encargado de la diversión familiar!"
    ],
    "mission": "Prepara un juego para disfrutar todos juntos en Nochebuena. Puede ser un trivial familiar, un concurso de anécdotas o lo que se te ocurra. Tú decides. Escribe aquí qué juego vas a preparar y después vuelve para contarnos cómo ha ido.",
    "phases": [
      {
        "title": "Antes de Nochebuena",
        "fields": [
          {
            "t": "textarea",
            "id": "juego",
            "label": "¿Qué juego vas a preparar?"
          }
        ]
      },
      {
        "title": "Después de la sobremesa",
        "fields": [
          {
            "t": "textarea",
            "id": "como",
            "label": "¿Cómo ha ido?"
          },
          {
            "t": "text",
            "id": "ganador",
            "label": "¿Quién ganó?",
            "optional": true
          }
        ]
      }
    ]
  },
  "23": {
    "cat": "E",
    "title": "El verdadero regalo de Navidad",
    "intro": [
      "La Navidad es mucho más que regalos, comidas y vacaciones.",
      "Es el momento en el que celebramos el nacimiento de Jesús, pero también una oportunidad para agradecer todo lo bueno que tenemos y valorar a las personas que nos rodean."
    ],
    "mission": "Escribe por qué la Navidad es especial para ti. Qué es lo que más te gusta de estas fechas, qué significan para ti y qué hace que cada año las esperes con ilusión.",
    "phases": [
      {
        "fields": [
          {
            "t": "textarea",
            "id": "navidad",
            "label": "La Navidad para mí",
            "rows": 7
          }
        ]
      }
    ]
  },
  "24": {
    "cat": "M",
    "title": "El DJ de Nochebuena",
    "intro": [
      "¡Esta noche la música corre de tu cuenta!"
    ],
    "mission": "Prepara una playlist especial para Nochebuena con canciones que os gusten a todos. Pega aquí el enlace y ponla esta noche para compartir la mejor música con el resto de la familia.",
    "phases": [
      {
        "fields": [
          {
            "t": "link",
            "id": "playlist",
            "label": "Enlace de la playlist",
            "ph": "https://open.spotify.com/…"
          }
        ]
      }
    ]
  }
};
