// Poco a poco — flashcards, vocabulary quizzes, grammar drills, and history for Spanish 1.

const CATEGORIES = {
  terms: {
    name: "basic terms",
    items: [
      { es: "hola", en: "hello" },
      { es: "adiós", en: "goodbye" },
      { es: "buenos días", en: "good morning" },
      { es: "buenas tardes", en: "good afternoon" },
      { es: "buenas noches", en: "good night" },
      { es: "por favor", en: "please" },
      { es: "gracias", en: "thank you" },
      { es: "de nada", en: "you're welcome" },
      { es: "sí", en: "yes" },
      { es: "no", en: "no" },
      { es: "¿cómo estás?", en: "how are you?" },
      { es: "muy bien", en: "very well" },
      { es: "más o menos", en: "so-so" },
      { es: "hasta luego", en: "see you later" },
      { es: "¿cómo te llamas?", en: "what's your name?" },
      { es: "me llamo…", en: "my name is…" },
      { es: "mucho gusto", en: "nice to meet you" },
      { es: "¿de dónde eres?", en: "where are you from?" },
      { es: "soy de…", en: "I'm from…" },
      { es: "¿cuántos años tienes?", en: "how old are you?" },
      { es: "¿cómo se dice…?", en: "how do you say…?" },
      { es: "señor", en: "Mr. / sir" },
      { es: "señora", en: "Mrs. / ma'am" }
    ]
  },
  colors: {
    name: "colors",
    items: [
      { es: "rojo", en: "red", swatch: "#d62828" },
      { es: "azul", en: "blue", swatch: "#1d4ed8" },
      { es: "verde", en: "green", swatch: "#2e9e4f" },
      { es: "amarillo", en: "yellow", swatch: "#f2c500" },
      { es: "anaranjado", en: "orange", swatch: "#f0771f" },
      { es: "morado", en: "purple", swatch: "#7b3fa0" },
      { es: "rosado", en: "pink", swatch: "#f08ab0" },
      { es: "negro", en: "black", swatch: "#1a1a1a" },
      { es: "blanco", en: "white", swatch: "#ffffff" },
      { es: "gris", en: "gray", swatch: "#8d8d8d" },
      { es: "café", en: "brown", swatch: "#7a4b23", note: "also called marrón", noteEs: "también se dice «marrón»" }
    ]
  },
  numbers: {
    name: "numbers",
    items: [
      { es: "uno", en: "one (1)" },
      { es: "dos", en: "two (2)" },
      { es: "tres", en: "three (3)" },
      { es: "cuatro", en: "four (4)" },
      { es: "cinco", en: "five (5)" },
      { es: "seis", en: "six (6)" },
      { es: "siete", en: "seven (7)" },
      { es: "ocho", en: "eight (8)" },
      { es: "nueve", en: "nine (9)" },
      { es: "diez", en: "ten (10)" },
      { es: "once", en: "eleven (11)" },
      { es: "doce", en: "twelve (12)" },
      { es: "trece", en: "thirteen (13)" },
      { es: "catorce", en: "fourteen (14)" },
      { es: "quince", en: "fifteen (15)" },
      { es: "dieciséis", en: "sixteen (16)" },
      { es: "diecisiete", en: "seventeen (17)" },
      { es: "dieciocho", en: "eighteen (18)" },
      { es: "diecinueve", en: "nineteen (19)" },
      { es: "veinte", en: "twenty (20)" },
      { es: "treinta", en: "thirty (30)" },
      { es: "cuarenta", en: "forty (40)" },
      { es: "cincuenta", en: "fifty (50)" },
      { es: "sesenta", en: "sixty (60)" },
      { es: "setenta", en: "seventy (70)" },
      { es: "ochenta", en: "eighty (80)" },
      { es: "noventa", en: "ninety (90)" },
      { es: "cien", en: "one hundred (100)" }
    ]
  },
  verbs: {
    name: "verbs",
    items: [
      { es: "hablar", en: "to speak", note: "yo hablo · tú hablas · él habla" },
      { es: "comer", en: "to eat", note: "yo como · tú comes · ella come" },
      { es: "vivir", en: "to live", note: "yo vivo · tú vives · él vive" },
      { es: "ser", en: "to be (identity, origin)", note: "yo soy · tú eres · él es" },
      { es: "estar", en: "to be (location, feelings)", note: "yo estoy · tú estás · él está" },
      { es: "tener", en: "to have", note: "yo tengo · tú tienes · ella tiene" },
      { es: "ir", en: "to go", note: "yo voy · tú vas · él va" },
      { es: "hacer", en: "to do / to make", note: "yo hago · tú haces · ella hace" },
      { es: "querer", en: "to want", note: "yo quiero · tú quieres · él quiere" },
      { es: "poder", en: "to be able to (can)", note: "yo puedo · tú puedes · ella puede" },
      { es: "gustar", en: "to be pleasing (to like)", note: "me gusta · te gusta · le gusta" },
      { es: "estudiar", en: "to study", note: "yo estudio · tú estudias · él estudia" },
      { es: "trabajar", en: "to work", note: "yo trabajo · tú trabajas · ella trabaja" },
      { es: "leer", en: "to read", note: "yo leo · tú lees · él lee" },
      { es: "escribir", en: "to write", note: "yo escribo · tú escribes · ella escribe" },
      { es: "escuchar", en: "to listen", note: "yo escucho · tú escuchas · él escucha" },
      { es: "mirar", en: "to look at / watch", note: "yo miro · tú miras · ella mira" },
      { es: "necesitar", en: "to need", note: "yo necesito · tú necesitas · él necesita" },
      { es: "beber", en: "to drink", note: "yo bebo · tú bebes · ella bebe" },
      { es: "correr", en: "to run", note: "yo corro · tú corres · él corre" },
      { es: "venir", en: "to come", note: "yo vengo · tú vienes · ella viene" },
      { es: "decir", en: "to say / to tell", note: "yo digo · tú dices · él dice" },
      { es: "ver", en: "to see", note: "yo veo · tú ves · ella ve" },
      { es: "dar", en: "to give", note: "yo doy · tú das · él da" },
      { es: "saber", en: "to know (facts, information)", note: "yo sé · tú sabes · ella sabe" },
      { es: "conocer", en: "to know (people, places)", note: "yo conozco · tú conoces · él conoce" },
      { es: "jugar", en: "to play", note: "yo juego · tú juegas · ella juega" },
      { es: "dormir", en: "to sleep", note: "yo duermo · tú duermes · él duerme" },
      { es: "empezar", en: "to begin", note: "yo empiezo · tú empiezas · ella empieza" }
    ]
  },
  nouns: {
    name: "nouns",
    items: [
      { es: "el libro", en: "book", note: "masculine" },
      { es: "la escuela", en: "school", note: "feminine" },
      { es: "el lápiz", en: "pencil", note: "masculine" },
      { es: "la clase", en: "class", note: "feminine" },
      { es: "la casa", en: "house", note: "feminine" },
      { es: "el perro", en: "dog", note: "masculine" },
      { es: "el gato", en: "cat", note: "masculine" },
      { es: "la mesa", en: "table", note: "feminine" },
      { es: "la silla", en: "chair", note: "feminine" },
      { es: "la puerta", en: "door", note: "feminine" },
      { es: "la ventana", en: "window", note: "feminine" },
      { es: "el profesor", en: "teacher (male)", note: "masculine" },
      { es: "la profesora", en: "teacher (female)", note: "feminine" },
      { es: "el estudiante", en: "student (male)", note: "masculine" },
      { es: "la estudiante", en: "student (female)", note: "feminine" },
      { es: "el padre", en: "father", note: "masculine" },
      { es: "la madre", en: "mother", note: "feminine" },
      { es: "el hermano", en: "brother", note: "masculine" },
      { es: "la hermana", en: "sister", note: "feminine" },
      { es: "el agua", en: "water", note: "feminine, but uses el" },
      { es: "el pan", en: "bread", note: "masculine" },
      { es: "la leche", en: "milk", note: "feminine" },
      { es: "la manzana", en: "apple", note: "feminine" },
      { es: "el teléfono", en: "phone", note: "masculine" },
      { es: "la ciudad", en: "city", note: "feminine" },
      { es: "el país", en: "country", note: "masculine" },
      { es: "la familia", en: "family", note: "feminine" },
      { es: "el día", en: "day", note: "masculine" },
      { es: "la noche", en: "night", note: "feminine" }
    ]
  }
};

const GRAMMAR_QUESTIONS = [
  {
    text: "___ libro es nuevo.",
    options: ["El", "La", "Los", "Las"],
    answer: "El",
    why: "Libro is masculine and singular, so it uses el."
  },
  {
    text: "___ escuela es grande.",
    options: ["La", "El", "Los", "Las"],
    answer: "La",
    why: "Escuela is feminine and singular, so it uses la."
  },
  {
    text: "___ libros son rojos.",
    options: ["Los", "El", "La", "Las"],
    answer: "Los",
    why: "Libros is masculine plural, so it uses los."
  },
  {
    text: "The plural of “el libro” is:",
    options: ["los libros", "las libros", "el libros", "los libro"],
    answer: "los libros",
    why: "The article becomes los and the noun takes -s: los libros."
  },
  {
    text: "La casa ___.",
    options: ["blanca", "blanco", "blancas", "blancos"],
    answer: "blanca",
    why: "Adjectives match the noun in gender and number. Casa is feminine singular, so blanca."
  },
  {
    text: "Dos perros ___.",
    options: ["negros", "negro", "negra", "negras"],
    answer: "negros",
    why: "Perros is masculine plural, so the adjective also takes -os: negros."
  },
  {
    text: "Yo ___ estudiante.",
    options: ["soy", "estoy", "es", "está"],
    answer: "soy",
    why: "Use ser for identity and origin: yo soy estudiante."
  },
  {
    text: "Ella ___ en la escuela.",
    options: ["está", "es", "son", "están"],
    answer: "está",
    why: "Use estar for location: ella está en la escuela."
  },
  {
    text: "Nosotros ___ español.",
    options: ["hablamos", "hablan", "hablo", "hablas"],
    answer: "hablamos",
    why: "-ar verbs take -amos for nosotros: nosotros hablamos."
  },
  {
    text: "Ellos ___ pizza.",
    options: ["comen", "come", "comemos", "como"],
    answer: "comen",
    why: "-er verbs take -en for ellos: ellos comen."
  },
  {
    text: "Yo ___ a la escuela todos los días.",
    options: ["voy", "vas", "va", "vamos"],
    answer: "voy",
    why: "Ir is irregular in the present: yo voy, tú vas, él va."
  },
  {
    text: "Tú ___ quince años.",
    options: ["tienes", "tiene", "tengo", "tenemos"],
    answer: "tienes",
    why: "Tener is irregular: yo tengo, tú tienes, él tiene. Age uses tener."
  },
  {
    text: "Me ___ los gatos.",
    options: ["gustan", "gusta", "gusto", "gustas"],
    answer: "gustan",
    why: "Gustar agrees with the thing liked: gatos is plural, so gustan."
  },
  {
    text: "¿___ te llamas? — Me llamo Ana.",
    options: ["Cómo", "Cuántos", "Quién", "Dónde"],
    answer: "Cómo",
    why: "¿Cómo te llamas? means “What is your name?”"
  },
  {
    text: "¿___ años tienes?",
    options: ["Cuántos", "Cómo", "Qué", "Cuál"],
    answer: "Cuántos",
    why: "¿Cuántos años tienes? asks “How old are you?” — años is plural, so cuántos."
  },
  {
    text: "To show respect when speaking to a teacher, you use:",
    options: ["usted", "tú", "vosotros", "ellos"],
    answer: "usted",
    why: "Usted is the formal “you” used with teachers, adults, and strangers."
  },
  {
    text: "“¿De dónde eres?” — Yo ___ de México.",
    options: ["soy", "estoy", "es", "está"],
    answer: "soy",
    why: "Origin takes ser: yo soy de México."
  },
  {
    text: "___ 10 años (write the number in Spanish).",
    options: ["diez", "doce", "nueve", "dieciséis"],
    answer: "diez",
    why: "Diez = 10. Watch the spelling of nueve (9) and dieciséis (16)."
  }
];

// Spanish versions of the grammar questions, in the same order.
const GRAMMAR_ES = [
  { text: "___ libro es nuevo.", why: "Libro es masculino y singular, así que se usa el." },
  { text: "___ escuela es grande.", why: "Escuela es femenino y singular, así que se usa la." },
  { text: "___ libros son rojos.", why: "Libros es masculino plural, así que se usa los." },
  { text: "El plural de «el libro» es:", why: "El artículo cambia a los y el sustantivo toma -s: los libros." },
  { text: "La casa ___.", why: "Los adjetivos concuerdan en género y número. Casa es femenino singular, así que blanca." },
  { text: "Dos perros ___.", why: "Perros es masculino plural, así que el adjetivo también toma -os: negros." },
  { text: "Yo ___ estudiante.", why: "Se usa ser para la identidad y el origen: yo soy estudiante." },
  { text: "Ella ___ en la escuela.", why: "Se usa estar para la ubicación: ella está en la escuela." },
  { text: "Nosotros ___ español.", why: "Los verbos -ar toman -amos con nosotros: nosotros hablamos." },
  { text: "Ellos ___ pizza.", why: "Los verbos -er toman -en con ellos: ellos comen." },
  { text: "Yo ___ a la escuela todos los días.", why: "Ir es irregular en presente: yo voy, tú vas, él va." },
  { text: "Tú ___ quince años.", why: "Tener es irregular: yo tengo, tú tienes, él tiene. La edad se expresa con tener." },
  { text: "Me ___ los gatos.", why: "Gustar concuerda con lo que gusta: gatos es plural, así que gustan." },
  { text: "¿___ te llamas? — Me llamo Ana.", why: "¿Cómo te llamas? se usa para preguntar el nombre de alguien." },
  { text: "¿___ años tienes?", why: "¿Cuántos años tienes? pregunta la edad. Años es plural, así que cuántos." },
  { text: "Para mostrar respeto al hablar con un maestro, se usa:", why: "«Usted» es la forma formal de «tú»; en México se usa con maestros, adultos y desconocidos." },
  { text: "«¿De dónde eres?» — Yo ___ de México.", why: "El origen se expresa con ser: yo soy de México." },
  { text: "___ 10 años (escribe el número en español).", why: "Diez = 10. Cuidado con la ortografía de nueve (9) y dieciséis (16)." }
];

// Every visible string, in both languages. Keys must exist in both tables.
const I18N = {
  en: {
    pageTitle: "Poco a poco",
    headerTitle: "Poco a poco",
    headerTagline: "Flashcards and quizzes for basic terms, colors, numbers, verbs, and nouns — plus grammar practice and Latin American history.",
    tabStudy: "Study",
    tabPractice: "Practice",
    tabGrammar: "Grammar",
    tabHistory: "History",
    chipTerms: "Basic Terms",
    chipColors: "Colors",
    chipNumbers: "Numbers",
    chipVerbs: "Verbs",
    chipNouns: "Nouns",
    chipMixed: "Mixed",
    studyHint: "Tap the card to flip it. Use ← → to move through the deck.",
    tapToSee: "tap to see English",
    tapToSeeSpanish: "tap to see Spanish",
    inEnglish: "en inglés",
    inSpanish: "en español",
    dirEs: "Spanish → English",
    dirEn: "English → Spanish",
    prevCard: "← Back",
    nextCard: "Next →",
    shuffleDeck: "Shuffle this deck",
    loading: "Loading…",
    grammarHint: "Choose the word that fits. After you answer, you'll see the rule behind it.",
    questionOf: "Question {n} of {total}",
    scoreLabel: "Score: {n}",
    correctFeedback: "¡Correcto!",
    wrongFeedback: "Not quite — the answer is “{answer}”.",
    nextQuestion: "Next question →",
    seeResults: "See results →",
    practiceComplete: "Practice complete",
    outOf: "{score} out of {total} correct",
    perfectTitle: "¡Perfecto!",
    goodTitle: "¡Buen trabajo!",
    keepTitle: "¡Sigue practicando!",
    perfectMsg: "You know this set cold. Try another category or take on Mixed.",
    almostMsg: "Almost there — flip through the cards once more and try again.",
    keepMsg: "Study the cards first, then come back for another round. You've got this.",
    practiceAgain: "Practice again",
    askMeaning: "What does “{word}” mean?",
    askSpanish: "How do you say “{word}” in Spanish?",
    historyHint: "The big dates and ideas from Latin American history, in order.",
    era1Label: "Before 1492",
    era1Title: "Three great civilizations",
    era1a: "<strong>Maya</strong> city-states in Mesoamerica, such as Tikal, built pyramids and kept detailed calendars and writing.",
    era1b: "<strong>Aztec</strong> empire centered on Tenochtitlan, a city built on islands in a lake (founded 1325).",
    era1c: "<strong>Inca</strong> empire in the Andes, with its capital at Cusco, thousands of miles of roads, and records kept on knotted cords called <em>quipus</em>.",
    era2Title: "Columbus and the Columbian Exchange",
    era2a: "Christopher Columbus reaches the Caribbean, opening permanent contact between Europe and the Americas.",
    era2b: "The <strong>Columbian Exchange</strong> moved corn, potatoes, tomatoes, and chocolate to Europe, and horses, wheat, and sugar to the Americas.",
    era2c: "European diseases also crossed the ocean, and Indigenous populations fell sharply.",
    era3Title: "The conquest",
    era3a: "Hernán Cortés defeats the Aztecs and takes Tenochtitlan in 1521; Francisco Pizarro defeats the Inca in 1533.",
    era3b: "Weapons and horses helped, but so did alliances with groups that resisted Aztec and Inca rule, and above all disease.",
    era3c: "Spain built a colonial empire ruled from Mexico City and Lima, with forced labor systems like the <em>encomienda</em>.",
    era4Title: "Colonial life and mixing of cultures",
    era4a: "Catholic missions spread Spanish language and religion across the colonies.",
    era4b: "Indigenous, Spanish, and African peoples lived, worked, and married together, creating <em>mestizo</em> culture.",
    era4c: "This blend shaped Latin American food, music, art, and the Spanish spoken today.",
    era5Title: "Independence",
    era5a: "Haiti becomes the first Latin American nation to win independence, in 1804.",
    era5b: "Mexico begins its fight in 1810 with Father Miguel Hidalgo and wins independence in 1821.",
    era5c: "Simón Bolívar and José de San Martín free much of South America in the 1810s and 1820s; Brazil separates from Portugal peacefully in 1822.",
    era6Title: "Revolution and modern nations",
    era6a: "The Mexican Revolution starts in 1910; the Panama Canal opens in 1914.",
    era6b: "The Cuban Revolution brings Fidel Castro to power in 1959.",
    era6c: "Military dictatorships in the 1960s and 1970s gave way to elected governments in the 1980s and 1990s.",
    era7Title: "Latin America now",
    era7a: "More than 30 countries and territories make up Latin America and the Caribbean.",
    era7b: "Spanish is the official language almost everywhere except Brazil (Portuguese), Belize, Guyana, and Suriname.",
    era7c: "Writers like Gabriela Mistral, Pablo Neruda, and Gabriel García Márquez are read around the world.",
    glossaryTitle: "Key words",
    glos1: "native people of the Americas",
    glos2: "a territory ruled by another country",
    glos3: "of mixed Indigenous and European heritage",
    glos4: "freedom from colonial rule",
    glos5: "a major, often violent, change in government",
    glos6: "Inca recording tool made of knotted cords",
    footer: "¡Buena suerte! · A little practice every day goes a long way."
  },
  es: {
    pageTitle: "Poco a poco",
    headerTitle: "Poco a poco",
    headerTagline: "Tarjetas y cuestionarios sobre términos básicos, colores, números, verbos y sustantivos, además de práctica de gramática e historia de Latinoamérica.",
    tabStudy: "Estudiar",
    tabPractice: "Practicar",
    tabGrammar: "Gramática",
    tabHistory: "Historia",
    chipTerms: "Términos básicos",
    chipColors: "Colores",
    chipNumbers: "Números",
    chipVerbs: "Verbos",
    chipNouns: "Sustantivos",
    chipMixed: "Mixto",
    studyHint: "Toca la tarjeta para darle vuelta. Usa ← → para recorrer la baraja.",
    tapToSee: "toca para ver inglés",
    tapToSeeSpanish: "toca para ver español",
    inEnglish: "en inglés",
    inSpanish: "en español",
    dirEs: "Español → Inglés",
    dirEn: "Inglés → Español",
    prevCard: "← Atrás",
    nextCard: "Siguiente →",
    shuffleDeck: "Mezclar las tarjetas",
    loading: "Cargando…",
    grammarHint: "Elige la palabra correcta. Después de responder verás la regla.",
    questionOf: "Pregunta {n} de {total}",
    scoreLabel: "Puntos: {n}",
    correctFeedback: "¡Correcto!",
    wrongFeedback: "Casi — la respuesta es «{answer}».",
    nextQuestion: "Siguiente pregunta →",
    seeResults: "Ver resultados →",
    practiceComplete: "Práctica completada",
    outOf: "{score} de {total} correctas",
    perfectTitle: "¡Perfecto!",
    goodTitle: "¡Buen trabajo!",
    keepTitle: "¡Sigue practicando!",
    perfectMsg: "Ya dominas esta serie. Prueba otra categoría o el modo Mixto.",
    almostMsg: "Casi lo logras: repasa las tarjetas una vez más y vuelve a intentarlo.",
    keepMsg: "Estudia las tarjetas primero y luego regresa a intentarlo. ¡Échale ganas!",
    practiceAgain: "Practicar de nuevo",
    askMeaning: "¿Qué significa «{word}»?",
    askSpanish: "¿Cómo se dice «{word}» en español?",
    historyHint: "Las fechas y las ideas más importantes de la historia latinoamericana, en orden.",
    era1Label: "Antes de 1492",
    era1Title: "Tres grandes civilizaciones",
    era1a: "Las ciudades-estado <strong>mayas</strong> de Mesoamérica, como Tikal, construyeron pirámides y llevaron calendarios y escritura detallados.",
    era1b: "El imperio <strong>mexica</strong> (azteca), con centro en Tenochtitlan, una ciudad construida sobre islas del lago de Texcoco (fundada en 1325).",
    era1c: "El imperio <strong>inca</strong> en los Andes, con su capital en Cusco, miles de kilómetros de caminos y registros en cuerdas con nudos llamadas <em>quipus</em>.",
    era2Title: "Colón y el intercambio colombino",
    era2a: "Cristóbal Colón llega al Caribe y abre un contacto permanente entre Europa y América.",
    era2b: "El <strong>intercambio colombino</strong> llevó maíz, papas, jitomates y chocolate a Europa, y caballos, trigo y azúcar a América.",
    era2c: "Las enfermedades europeas también cruzaron el océano y la población indígena disminuyó drásticamente.",
    era3Title: "La conquista",
    era3a: "Hernán Cortés derrota a los mexicas y toma Tenochtitlan en 1521; Francisco Pizarro derrota a los incas en 1533.",
    era3b: "Ayudaron las armas y los caballos, pero también las alianzas con pueblos que resistían el dominio mexica e inca y, sobre todo, las enfermedades.",
    era3c: "España construyó un imperio colonial gobernado desde la Ciudad de México y Lima, con sistemas de trabajo forzado como la <em>encomienda</em>.",
    era4Title: "La vida colonial y la mezcla de culturas",
    era4a: "Las misiones católicas difundieron el idioma español y la religión por las colonias.",
    era4b: "Pueblos indígenas, españoles y africanos convivieron, trabajaron y se mezclaron, creando la cultura <em>mestiza</em>.",
    era4c: "Esta mezcla dio forma a la comida, la música, el arte y el español que se habla hoy en Latinoamérica.",
    era5Title: "La independencia",
    era5a: "Haití se convierte en 1804 en la primera nación latinoamericana en lograr su independencia.",
    era5b: "México inicia su lucha en 1810 con el cura Miguel Hidalgo y logra la independencia en 1821.",
    era5c: "Simón Bolívar y José de San Martín liberan gran parte de Sudamérica en las décadas de 1810 y 1820; Brasil se separa de Portugal de forma pacífica en 1822.",
    era6Title: "Revolución y naciones modernas",
    era6a: "La Revolución mexicana da inicio en 1910; el Canal de Panamá se inaugura en 1914.",
    era6b: "La Revolución cubana lleva a Fidel Castro al poder en 1959.",
    era6c: "Las dictaduras militares de los años sesenta y setenta dieron paso a gobiernos electos en los años ochenta y noventa.",
    era7Title: "Latinoamérica hoy",
    era7a: "Más de 30 países y territorios forman Latinoamérica y el Caribe.",
    era7b: "El español es idioma oficial en casi todas partes, excepto en Brasil (portugués), Belice, Guyana y Surinam.",
    era7c: "Escritores como Gabriela Mistral, Pablo Neruda y Gabriel García Márquez se leen en todo el mundo.",
    glossaryTitle: "Palabras clave",
    glos1: "pueblos originarios de América",
    glos2: "territorio gobernado por otro país",
    glos3: "de ascendencia indígena y europea",
    glos4: "libertad del dominio colonial",
    glos5: "un cambio grande, a menudo violento, de gobierno",
    glos6: "sistema inca de registro con cuerdas anudadas",
    footer: "¡Buena suerte! · Un poco de práctica cada día ayuda mucho."
  }
};

let lang = "en";

function fill(text, vars) {
  return text.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? vars[name] : match));
}

function t(key, vars) {
  const table = I18N[lang] || I18N.en;
  const text = table[key] ?? I18N.en[key] ?? key;
  return vars ? fill(text, vars) : text;
}

// Notes on the back of a card, in the language currently selected.
const NOTE_ES = {
  masculine: "masculino",
  feminine: "femenino",
  "feminine, but uses el": "femenino, pero usa «el»"
};

function itemNote(item) {
  if (lang === "es") return item.noteEs || NOTE_ES[item.note] || item.note || "";
  return item.note || "";
}

function applyTranslations() {
  document.documentElement.lang = lang;
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function setLang(next) {
  if (next === lang) return;
  lang = next;
  applyTranslations();

  // Refresh the card note, then restart whichever quiz is on screen so its
  // questions match the new language.
  renderCard();
  if (state.view === "practice") practiceQuiz.start();
  if (state.view === "grammar") grammarQuiz.start();
}

const QUIZ_LENGTH = 10;

const els = {
  tabs: document.querySelectorAll(".tab"),
  categoryBar: document.getElementById("categoryBar"),
  chips: document.querySelectorAll(".chip"),
  views: {
    study: document.getElementById("view-study"),
    practice: document.getElementById("view-practice"),
    grammar: document.getElementById("view-grammar"),
    history: document.getElementById("view-history")
  },
  card: document.getElementById("card"),
  frontWord: document.getElementById("frontWord"),
  backWord: document.getElementById("backWord"),
  frontSwatch: document.getElementById("frontSwatch"),
  backSwatch: document.getElementById("backSwatch"),
  backNote: document.getElementById("backNote"),
  frontSub: document.getElementById("frontSub"),
  backSub: document.getElementById("backSub"),
  dirBtns: document.querySelectorAll(".dir-btn"),
  cardCounter: document.getElementById("cardCounter"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  shuffleBtn: document.getElementById("shuffleBtn")
};

const state = {
  view: "study",
  category: "terms",
  direction: "es",
  deck: [],
  index: 0
};

/* ---------- helpers ---------- */

function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function poolFor(category) {
  if (category === "mixed") {
    return Object.values(CATEGORIES).flatMap((c) => c.items);
  }
  return CATEGORIES[category].items.slice();
}

/* ---------- study mode ---------- */

function buildDeck() {
  const pool = poolFor(state.category);
  state.deck = state.category === "mixed" ? shuffle(pool) : pool;
  state.index = 0;
  renderCard();
}

function setFaceVisibility(flipped) {
  els.card.querySelector(".card-front").setAttribute("aria-hidden", flipped ? "true" : "false");
  els.card.querySelector(".card-back").setAttribute("aria-hidden", flipped ? "false" : "true");
}

function renderCard() {
  const item = state.deck[state.index];
  if (!item) return;

  els.card.classList.remove("is-flipped");
  els.card.setAttribute("aria-pressed", "false");
  setFaceVisibility(false);

  const spanishFront = state.direction === "es";

  els.frontWord.textContent = spanishFront ? item.es : item.en;
  els.backWord.textContent = spanishFront ? item.en : item.es;
  els.frontSub.textContent = spanishFront ? t("tapToSee") : t("tapToSeeSpanish");
  els.backSub.textContent = spanishFront ? t("inEnglish") : t("inSpanish");
  els.backNote.textContent = itemNote(item);
  els.cardCounter.textContent = `${state.index + 1} / ${state.deck.length}`;

  [els.frontSwatch, els.backSwatch].forEach((el) => {
    if (item.swatch) {
      el.style.background = item.swatch;
      el.hidden = false;
    } else {
      el.style.background = "";
      el.hidden = true;
    }
  });
}

function flipCard() {
  els.card.classList.toggle("is-flipped");
  const flipped = els.card.classList.contains("is-flipped");
  els.card.setAttribute("aria-pressed", flipped ? "true" : "false");
  setFaceVisibility(flipped);
}

function stepCard(direction) {
  if (!state.deck.length) return;
  state.index = (state.index + direction + state.deck.length) % state.deck.length;
  renderCard();
}

function setDirection(direction) {
  state.direction = direction;

  els.dirBtns.forEach((btn) => {
    const active = btn.dataset.dir === direction;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  renderCard();
}

/* ---------- quiz engine ---------- */

function createQuiz(prefix, buildQuestions) {
  const refs = {
    progress: document.getElementById(`${prefix}Progress`),
    score: document.getElementById(`${prefix}Score`),
    body: document.getElementById(`${prefix}Body`),
    question: document.getElementById(`${prefix}Question`),
    options: document.getElementById(`${prefix}Options`),
    feedback: document.getElementById(`${prefix}Feedback`),
    why: document.getElementById(`${prefix}Why`),
    next: document.getElementById(`${prefix}Next`),
    done: document.getElementById(`${prefix}Done`),
    title: document.getElementById(`${prefix}Title`),
    result: document.getElementById(`${prefix}Result`),
    message: document.getElementById(`${prefix}Message`),
    again: document.getElementById(`${prefix}Again`)
  };

  const game = { questions: [], index: 0, score: 0, answered: false };

  function start() {
    game.questions = buildQuestions();
    game.index = 0;
    game.score = 0;
    game.answered = false;

    refs.done.hidden = true;
    refs.body.hidden = false;
    refs.score.textContent = t("scoreLabel", { n: 0 });

    render();
  }

  function render() {
    const q = game.questions[game.index];
    game.answered = false;

    refs.progress.textContent = t("questionOf", { n: game.index + 1, total: game.questions.length });
    refs.question.textContent = q.text;

    refs.options.replaceChildren();
    q.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.textContent = option;
      btn.addEventListener("click", () => answer(btn, option, q));
      refs.options.append(btn);
    });

    refs.feedback.textContent = "";
    refs.feedback.className = "feedback";
    if (refs.why) refs.why.textContent = "";
    refs.next.hidden = true;
  }

  function answer(btn, choice, q) {
    if (game.answered) return;
    game.answered = true;

    const correct = choice === q.answer;
    if (correct) game.score += 1;

    refs.options.querySelectorAll(".option").forEach((optionBtn) => {
      optionBtn.disabled = true;
      if (optionBtn.textContent === q.answer) optionBtn.classList.add("is-correct");
    });
    if (!correct) btn.classList.add("is-wrong");

    refs.feedback.textContent = correct
      ? t("correctFeedback")
      : t("wrongFeedback", { answer: q.answer });
    refs.feedback.classList.add(correct ? "is-good" : "is-bad");
    if (refs.why) refs.why.textContent = q.why || "";
    refs.score.textContent = t("scoreLabel", { n: game.score });

    const last = game.index === game.questions.length - 1;
    refs.next.textContent = t(last ? "seeResults" : "nextQuestion");
    refs.next.hidden = false;
  }

  function next() {
    if (!game.answered) return;
    if (game.index === game.questions.length - 1) {
      finish();
    } else {
      game.index += 1;
      render();
    }
  }

  function finish() {
    const total = game.questions.length;
    const score = game.score;

    refs.body.hidden = true;
    refs.done.hidden = false;
    refs.progress.textContent = t("practiceComplete");
    refs.result.textContent = t("outOf", { score, total });

    if (score === total) {
      refs.title.textContent = t("perfectTitle");
      refs.message.textContent = t("perfectMsg");
    } else if (score >= total * 0.7) {
      refs.title.textContent = t("goodTitle");
      refs.message.textContent = t("almostMsg");
    } else {
      refs.title.textContent = t("keepTitle");
      refs.message.textContent = t("keepMsg");
    }
  }

  refs.next.addEventListener("click", next);
  refs.again.addEventListener("click", start);

  return { start };
}

/* ---------- question builders ---------- */

function vocabularyQuestions() {
  const pool = poolFor(state.category);
  const picks = shuffle(pool).slice(0, Math.min(QUIZ_LENGTH, pool.length));

  return picks.map((item) => {
    const esToEn = Math.random() < 0.6;
    const answer = esToEn ? item.en : item.es;
    const distractors = shuffle(pool.filter((x) => x.es !== item.es && x.en !== item.en))
      .slice(0, 3)
      .map((x) => (esToEn ? x.en : x.es));

    return {
      text: esToEn
        ? t("askMeaning", { word: item.es })
        : t("askSpanish", { word: item.en }),
      options: shuffle([answer, ...distractors]),
      answer,
      why: ""
    };
  });
}

function grammarQuestions() {
  const localized = GRAMMAR_QUESTIONS.map((q, i) => {
    const es = GRAMMAR_ES[i];
    return lang === "es" && es ? { ...q, text: es.text, why: es.why } : q;
  });

  return shuffle(localized)
    .slice(0, Math.min(QUIZ_LENGTH, localized.length))
    .map((q) => ({ ...q, options: shuffle(q.options) }));
}

const practiceQuiz = createQuiz("practice", vocabularyQuestions);
const grammarQuiz = createQuiz("grammar", grammarQuestions);

/* ---------- view + category switching ---------- */

function setView(view) {
  state.view = view;

  els.tabs.forEach((tab) => {
    const active = tab.dataset.view === view;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });

  Object.entries(els.views).forEach(([name, section]) => {
    section.hidden = name !== view;
  });

  // Category chips only apply to the flashcard decks and vocabulary quiz.
  els.categoryBar.hidden = view === "grammar" || view === "history";

  if (view === "practice") practiceQuiz.start();
  if (view === "grammar") grammarQuiz.start();
}

function setCategory(category) {
  state.category = category;

  els.chips.forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.category === category);
  });

  buildDeck();
  if (state.view === "practice") practiceQuiz.start();
}

/* ---------- events ---------- */

els.tabs.forEach((tab) => tab.addEventListener("click", () => setView(tab.dataset.view)));
els.chips.forEach((chip) => chip.addEventListener("click", () => setCategory(chip.dataset.category)));
els.dirBtns.forEach((btn) => btn.addEventListener("click", () => setDirection(btn.dataset.dir)));

els.card.addEventListener("click", flipCard);
els.prevBtn.addEventListener("click", () => stepCard(-1));
els.nextBtn.addEventListener("click", () => stepCard(1));
els.shuffleBtn.addEventListener("click", () => {
  state.deck = shuffle(state.deck);
  state.index = 0;
  renderCard();
});

document.addEventListener("keydown", (event) => {
  if (state.view !== "study") return;
  if (event.key === "ArrowRight") stepCard(1);
  if (event.key === "ArrowLeft") stepCard(-1);
  if (event.key === " " && event.target === els.card) {
    event.preventDefault();
    flipCard();
  }
});

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

applyTranslations();
buildDeck();
