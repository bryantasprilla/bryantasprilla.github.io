/* ============================================================
   translations.js — all UI strings indexed by language code
   Usage: window.I18N_TRANSLATIONS['en']['keyName']
   ============================================================ */
window.I18N_TRANSLATIONS = {

  en: {
    /* ---- Navbar ---- */
    navHome:       'Home',
    navAbout:      'About',
    navExperience: 'Experience',
    navSkills:     'Skills',
    navContact:    'Contact',

    /* ---- Hero ---- */
    heroSubtitle:    'Global Product Leader | Turning AI Innovation into Trusted Enterprise SaaS',
    heroGetInTouch:  'Get In Touch',
    heroDownloadCV:  'Download Resume',

    /* ---- About ---- */
    aboutTitle:  'About Me',
    aboutLead:   'I build AI-powered SaaS products that make complex industries work better.',
    aboutBody:   'Over the past nine years, I\u2019ve led global product teams across healthcare, financial services, and compliance, translating regulatory and operational complexity into scalable, revenue-generating software. I was responsible for introducing and deploying LLM-powered capabilities into production, turning emerging AI into trusted features that customers quickly adopted. My experience across the U.S., Middle East, and Europe has shaped how I approach product leadership with both commercial focus and global awareness.',

    /* ---- Sidebar ---- */
    sidebarHeading: 'My Journey',
    nav0Title: 'Growing Up',
    nav0Meta:  '\uD83C\uDDFA\uD83C\uDDF8 USA \u00B7 1995',
    nav1Title: 'Joining the Army',
    nav1Meta:  '\uD83C\uDDFA\uD83C\uDDF8 USA \u00B7 2012',
    nav2Title: 'Education',
    nav2Meta:  '\uD83C\uDDFA\uD83C\uDDF8 USA \u00B7 2013',
    nav3Title: 'Epic Systems',
    nav3Meta:  '\uD83C\uDDFA\uD83C\uDDF8 USA \u00B7 2017',
    nav4Title: 'Moving to Dubai',
    nav4Meta:  '\uD83C\uDDE6\uD83C\uDDEA UAE \u00B7 2019',
    nav5Title: 'Epic Dubai',
    nav5Meta:  '\uD83C\uDDE6\uD83C\uDDEA UAE \u00B7 2019',
    nav6Title: 'Moving to Bulgaria',
    nav6Meta:  '\uD83C\uDDE7\uD83C\uDDEC Bulgaria \u00B7 2022',
    nav7Title: 'AML RightSource',
    nav7Meta:  '\uD83C\uDDE7\uD83C\uDDEC Bulgaria \u00B7 2022',

    /* ---- Panel 0: Growing Up ---- */
    p0Location: 'Queens, New York',
    p0Title:    'Growing Up',
    p0Date:     '1995',
    p0Body1:    'I was born and raised in Queens, New York, to two hardworking Colombian immigrants. Growing up in one of the most culturally diverse places in the world shaped my curiosity early. Being surrounded by different languages, traditions, and perspectives developed my love for learning about people and cultures.',
    p0Body2:    'I got my first job at 15 at AMC Theaters in Kips Bay, Manhattan. Earning my own paycheck at that age gave me a sense of responsibility and independence that stayed with me. It was the first time I understood the connection between effort and reward, and it cemented my drive for success.',
    p0FunFact:  '<strong>Fun Fact:</strong> I once sold concessions to Bruno Mars. He tried to pay with a $100 bill for $9 worth of popcorn, and I had to turn him down. Policy is policy.',

    /* ---- Panel 1: Army ---- */
    p1Location: 'United States',
    p1Title:    'Joining the Army',
    p1Date:     '2012',
    p1Body1:    'When I turned 17, I enlisted in the United States Army Reserves before starting university. I trained as a Chemical, Biological, Radiological, and Nuclear Specialist (74D), graduating as the Distinguished Honor Graduate of my class and earning my first medal in the process.',
    p1Body2:    'The Army taught me discipline, resilience, and how to lead under pressure. It forced me to make decisions with incomplete information and stay calm when the stakes were high. Those lessons have shaped how I lead teams and navigate complexity in my professional life.',
    p1FunFact:  '<strong>Fun Fact:</strong> Our capstone project involved testing and decontaminating real Sarin nerve agent. It was a powerful reminder that confidence comes from preparation.',

    /* ---- Panel 2: Education ---- */
    p2Location: 'Long Island, New York',
    p2Title:    'Education',
    p2Date:     '2013',
    p2Body1:    'I studied at Adelphi University in Long Island, graduating Magna Cum Laude from the Honors College with a BBA in Accounting. While I did not pursue accounting in the traditional sense, the financial rigor and analytical discipline shaped how I approach product strategy and business decisions today.',
    p2Body2:    'Serving as President of the International Student Society deepened my appreciation for working across cultures and perspectives. It reinforced something I already felt growing up in Queens: diversity of thought makes everything better.',
    p2FunFact:  '<strong>Fun Fact:</strong> This is where I met my wife. Also, Flavor Flav is an alumnus, which still surprises people.',

    /* ---- Panel 3: Epic Systems ---- */
    p3Location: 'Verona, Wisconsin',
    p3Title:    'Epic Systems',
    p3Date:     '2017',
    p3Body1:    'My first role after university was at Epic Systems in Wisconsin, the largest healthcare software provider in the United States. Surrounded by some of the brightest and most ambitious minds I had ever worked with, I learned how to think systematically, solve complex operational problems, and build software that supports mission-critical workflows.',
    p3Body2:    'Epic gave me my foundation in product thinking, stakeholder management, and high-stakes execution. I worked directly with hospital leadership and IT teams to solve financial and operational challenges across billing and revenue cycle systems.',
    p3FunFact:  '<strong>Fun Fact:</strong> While living in Madison, I took my wife to see Metallica. James Hetfield threw his guitar pick into the crowd and I caught it. I still have it.',

    /* ---- Panel 4: Moving to Dubai ---- */
    p4Location: 'Dubai, UAE',
    p4Title:    'Moving to Dubai',
    p4Date:     '2019',
    p4Body1:    'In recognition of my leadership and technical performance, I was asked to relocate to Dubai to lead and grow Epic\u2019s billing presence across the Middle East. What began as an opportunity quickly became a responsibility to expand our footprint in the region, strengthen client relationships, and ensure the unique regulatory and operational needs of Middle Eastern healthcare systems were reflected in our product strategy.',
    p4Body2:    'This was my first time living outside the United States, and it reshaped how I think about leadership. I was not just implementing software. I was building trust across cultures, navigating complex insurance systems, and advocating for regional requirements with US-based development teams. From celebrating Diwali with neighbors to hosting Iftar dinners with coworkers, I made it a point to immerse myself fully. Understanding culture deeply made me a stronger leader and a more thoughtful problem solver.',
    p4FunFact:  '<strong>Fun Fact:</strong> I discovered I\u2019m allergic to camels. Irony at its finest.',

    /* ---- Panel 5: Epic Dubai ---- */
    p5Location: 'Dubai, UAE',
    p5Title:    'Epic Dubai',
    p5Date:     '2019',
    p5Body1:    'Leading billing initiatives across the Middle East was the first true test of my professional maturity. Working with healthcare systems across multiple countries required me to operate with both technical depth and cultural awareness. I translated ambiguous insurance regulations, aligned stakeholders across time zones, and designed solutions that worked in real hospital environments.',
    p5Body2:    'My proudest achievement was identifying a way to resolve a client\u2019s largest and most persistent set of insurance denials without requiring new development. By leveraging existing tools creatively and rethinking the workflow, we unlocked 2.1 million dirhams in additional revenue. That moment reinforced something that has stayed with me: the best solutions are not always new features, but new ways of understanding the system.',
    p5FunFact:  '<strong>Fun Fact:</strong> My daughter was born in Dubai in 2020, just two weeks before the COVID shutdown. Being able to stay home with her during those early months was an unexpected blessing.',

    /* ---- Panel 6: Moving to Bulgaria ---- */
    p6Location: 'Varna, Bulgaria',
    p6Title:    'Moving to Bulgaria',
    p6Date:     '2022',
    p6Body1:    'In 2022, my family and I moved to the northern coast of Bulgaria and settled in my wife\u2019s hometown. Watching my daughter grow up close to extended family is a daily reminder of why I work hard.',
    p6Body2:    'Immersing myself in a new language and culture without defaulting to English stretched me in new ways. It reinforced something I have learned repeatedly throughout my life: growth happens when you are willing to be uncomfortable.',
    p6FunFact:  '<strong>Fun Fact:</strong> My wife and I got married in Bulgaria in 2017, less than 30 minutes from where we live now. We did not know then that life would bring us back.',

    /* ---- Panel 7: AML RightSource ---- */
    p7Location: 'Varna, Bulgaria',
    p7Title:    'AML RightSource',
    p7Date:     '2022 \u2013 Present',
    p7Body1:    'Bulgaria brought me into the world of compliance and risk, industries where mistakes carry real consequences. At <a href="https://www.amlrightsource.com" target="_blank" rel="noopener">AML RightSource</a>, I did not just experiment with AI. I was the first person in the organization to put LLM-powered capabilities into production for our customers.',
    p7Body2:    'At a time when many institutions were skeptical of AI, I championed its responsible implementation and shaped how it would integrate into real investigative workflows. I worked closely with engineering to embed LLMs into core products such as media monitoring and case management, focusing on explainability, measurable efficiency gains, and user trust. Within six months, these capabilities achieved universal adoption across our existing customer base.',
    p7Body3:    'Beyond AI, I led the organization\u2019s first strategic product roadmap and managed a portfolio responsible for $6M in ARR. Over time, I rose to Director of Product, overseeing four products and partnering closely with sales, procurement, customer success, and marketing. This chapter reinforced a principle I strongly believe in: innovation only matters if customers trust it, adopt it, and see tangible business impact.',
    p7FunFact:  '<strong>Fun Fact:</strong> During this time, I also built a house from the ground up. It\u2019s one of the most personal and challenging projects I\u2019ve faced.',

    /* ---- Fun fact shared label (aria) ---- */
    funFactAriaReveal: 'Reveal fun fact',

    /* ---- Skills ---- */
    skillsTitle: 'Core Competencies',

    skillCard1Title: 'GRC & Compliance',
    skillCard2Title: 'Product Management',
    skillCard3Title: 'Technology & AI',
    skillCard4Title: 'Leadership & Business',
    skillCard5Title: 'Education & Certifications',

    skillEduHeading:   'Education',
    skillCertHeading:  'Certifications',
    skillLangHeading:  'Languages',

    skillEduInstitution: 'Adelphi University \u2013 Garden City, New York',
    skillEduDegree:      'B.B.A. in Accounting, GPA 3.78',
    skillEduHonors:      'Honors College | Dean\u2019s List | Presidential Scholarship',

    skillCert1: 'Product Roadmapping Micro-Certification (PRC)\u2122',
    skillCert2: 'Product Analytics Micro-Certification (PAC)\u2122',
    skillCert3: 'McKinsey Forward Program',
    skillCert4: 'Epic: Resolute Hospital Billing, Hospital Coding, Claims & Remittance',

    skillLang1: 'English \u2013 Fluent',
    skillLang2: 'Spanish \u2013 Fluent',
    skillLang3: 'Bulgarian \u2013 B1',

    /* ---- Contact ---- */
    contactTitle:    'Get In Touch',
    contactLead:     'Interested in discussing product strategy, GRC solutions, or collaboration opportunities? I\u2019d love to hear from you.',
    contactLocation: 'Currently based in Bulgaria | Open to global opportunities',
    linkedinLabel:   'LinkedIn Profile',

    /* ---- Footer ---- */
    footerRights: 'All rights reserved.',
  },

  /* ================================================================
     SPANISH (Colombian)
     ================================================================ */
  es: {
    /* ---- Navbar ---- */
    navHome:       'Inicio',
    navAbout:      'Sobre m\u00ed',
    navExperience: 'Experiencia',
    navSkills:     'Habilidades',
    navContact:    'Contacto',

    /* ---- Hero ---- */
    heroSubtitle:    'L\u00edder Global de Producto | Convirtiendo la Innovaci\u00f3n en IA en SaaS Empresarial de Confianza',
    heroGetInTouch:  'Cont\u00e1ctame',
    heroDownloadCV:  'Descargar CV',

    /* ---- About ---- */
    aboutTitle:  'Sobre m\u00ed',
    aboutLead:   'Construyo productos SaaS impulsados por IA que mejoran el funcionamiento de industrias complejas.',
    aboutBody:   'Durante los \u00faltimos nueve a\u00f1os, he liderado equipos de producto globales en los sectores de salud, servicios financieros y cumplimiento normativo, convirtiendo la complejidad regulatoria y operativa en software escalable y generador de ingresos. Fui responsable de introducir e implementar capacidades basadas en LLM en producci\u00f3n, transformando la IA emergente en funcionalidades de confianza que los clientes adoptaron r\u00e1pidamente. Mi experiencia en EE.\u00a0UU., Medio Oriente y Europa ha moldeado mi enfoque del liderazgo de producto con una perspectiva comercial y consciencia global.',

    /* ---- Sidebar ---- */
    sidebarHeading: 'Mi Trayectoria',
    nav0Title: 'Creciendo',
    nav0Meta:  '\uD83C\uDDFA\uD83C\uDDF8 EE.\u00a0UU. \u00B7 1995',
    nav1Title: 'El Ej\u00e9rcito',
    nav1Meta:  '\uD83C\uDDFA\uD83C\uDDF8 EE.\u00a0UU. \u00B7 2012',
    nav2Title: 'Educaci\u00f3n',
    nav2Meta:  '\uD83C\uDDFA\uD83C\uDDF8 EE.\u00a0UU. \u00B7 2013',
    nav3Title: 'Epic Systems',
    nav3Meta:  '\uD83C\uDDFA\uD83C\uDDF8 EE.\u00a0UU. \u00B7 2017',
    nav4Title: 'A D\u00fabai',
    nav4Meta:  '\uD83C\uDDE6\uD83C\uDDEA EAU \u00B7 2019',
    nav5Title: 'Epic D\u00fabai',
    nav5Meta:  '\uD83C\uDDE6\uD83C\uDDEA EAU \u00B7 2019',
    nav6Title: 'A Bulgaria',
    nav6Meta:  '\uD83C\uDDE7\uD83C\uDDEC Bulgaria \u00B7 2022',
    nav7Title: 'AML RightSource',
    nav7Meta:  '\uD83C\uDDE7\uD83C\uDDEC Bulgaria \u00B7 2022',

    /* ---- Panel 0: Growing Up ---- */
    p0Location: 'Queens, Nueva York',
    p0Title:    'Creciendo',
    p0Date:     '1995',
    p0Body1:    'Nac\u00ed y crec\u00ed en Queens, Nueva York, hijo de dos inmigrantes colombianos trabajadores. Crecer en uno de los lugares m\u00e1s culturalmente diversos del mundo despert\u00f3 mi curiosidad desde temprano. Estar rodeado de diferentes idiomas, tradiciones y perspectivas desarroll\u00f3 mi pasi\u00f3n por aprender sobre personas y culturas.',
    p0Body2:    'Tuve mi primer trabajo a los 15 a\u00f1os en AMC Theaters en Kips Bay, Manhattan. Ganarme mi propio sueldo a esa edad me dio un sentido de responsabilidad e independencia que me acompa\u00f1\u00f3 siempre. Fue la primera vez que entend\u00ed la conexi\u00f3n entre el esfuerzo y la recompensa, y ciment\u00f3 mis ganas de salir adelante.',
    p0FunFact:  '<strong>Dato curioso:</strong> Una vez le vend\u00ed crispetas al cantante Bruno Mars. Intent\u00f3 pagar con un billete de $100 por $9 de crispetas y tuve que declinar. Las reglas son las reglas.',

    /* ---- Panel 1: Army ---- */
    p1Location: 'Estados Unidos',
    p1Title:    'El Ej\u00e9rcito',
    p1Date:     '2012',
    p1Body1:    'A los 17 a\u00f1os me alist\u00e9 en la Reserva del Ej\u00e9rcito de los Estados Unidos antes de comenzar la universidad. Me form\u00e9 como Especialista Qu\u00edmico, Biol\u00f3gico, Radiol\u00f3gico y Nuclear (74D), gradu\u00e1ndome como el Destacado Graduado de Honor de mi clase y gan\u00e1ndome mi primera medalla en el proceso.',
    p1Body2:    'El Ej\u00e9rcito me ense\u00f1\u00f3 disciplina, resiliencia y c\u00f3mo liderar bajo presi\u00f3n. Me oblig\u00f3 a tomar decisiones con informaci\u00f3n incompleta y a mantener la calma cuando las apuestas eran altas. Esas lecciones han moldeado c\u00f3mo lidero equipos y enfrento la complejidad en mi vida profesional.',
    p1FunFact:  '<strong>Dato curioso:</strong> Nuestro proyecto final involucraba probar y descontaminar agente nervioso Sar\u00edn real. Fue un recordatorio contundente de que la seguridad viene de la preparaci\u00f3n.',

    /* ---- Panel 2: Education ---- */
    p2Location: 'Long Island, Nueva York',
    p2Title:    'Educaci\u00f3n',
    p2Date:     '2013',
    p2Body1:    'Estudi\u00e9 en la Universidad Adelphi en Long Island, gradu\u00e1ndome Magna Cum Laude del Honors College con una Licenciatura en Contabilidad. Aunque no me dedic\u00e9 a la contabilidad en el sentido tradicional, el rigor financiero y la disciplina anal\u00edtica moldean c\u00f3mo abordo la estrategia de producto y las decisiones de negocio hoy.',
    p2Body2:    'Ser Presidente de la Sociedad Internacional de Estudiantes profundiz\u00f3 mi valoraci\u00f3n por trabajar entre culturas y perspectivas distintas. Refuerz\u00f3 algo que ya sent\u00eda desde que crec\u00ed en Queens: la diversidad de pensamiento lo mejora todo.',
    p2FunFact:  '<strong>Dato curioso:</strong> Fue aqu\u00ed donde conoc\u00ed a mi esposa. Adem\u00e1s, Flavor Flav es ex alumno, lo cual sigue sorprendiendo a la gente.',

    /* ---- Panel 3: Epic Systems ---- */
    p3Location: 'Verona, Wisconsin',
    p3Title:    'Epic Systems',
    p3Date:     '2017',
    p3Body1:    'Mi primer cargo despu\u00e9s de la universidad fue en Epic Systems en Wisconsin, el mayor proveedor de software de salud de los Estados Unidos. Rodeado de personas brillantes y muy comprometidas, aprend\u00ed a pensar de forma sistem\u00e1tica, resolver problemas operativos complejos y construir software que soporta procesos cr\u00edticos.',
    p3Body2:    'Epic me dio las bases en pensamiento de producto, gesti\u00f3n de stakeholders y ejecuci\u00f3n de alto impacto. Trabaj\u00e9 directamente con la direcci\u00f3n de hospitales y equipos de TI para resolver retos financieros y operativos en sistemas de facturaci\u00f3n y ciclo de ingresos.',
    p3FunFact:  '<strong>Dato curioso:</strong> Viviendo en Madison, llev\u00e9 a mi esposa a ver a Metallica. James Hetfield lanz\u00f3 su p\u00faa al p\u00fablico y yo la atrap\u00e9. Todav\u00eda la tengo.',

    /* ---- Panel 4: Moving to Dubai ---- */
    p4Location: 'D\u00fabai, EAU',
    p4Title:    'A D\u00fabai',
    p4Date:     '2019',
    p4Body1:    'En reconocimiento a mi desempe\u00f1o como l\u00edder y en lo t\u00e9cnico, me pidieron trasladarme a D\u00fabai para liderar y expandir la operaci\u00f3n de facturaci\u00f3n de Epic en el Medio Oriente. Lo que empez\u00f3 como una oportunidad se convirti\u00f3 r\u00e1pidamente en la responsabilidad de ampliar nuestra presencia en la regi\u00f3n, fortalecer las relaciones con los clientes y asegurarnos de que las necesidades regulatorias y operativas propias de los sistemas de salud del Medio Oriente se vieran reflejadas en nuestra estrategia de producto.',
    p4Body2:    'Fue la primera vez que viv\u00ed fuera de los Estados Unidos, y eso transform\u00f3 la forma en que entiendo el liderazgo. No solo estaba implementando software. Estaba construyendo confianza entre culturas, navegando sistemas de seguros complejos y abogando por las necesidades regionales ante los equipos de desarrollo en EE.\u00a0UU. Desde celebrar el Diwali con los vecinos hasta organizar cenas de Iftar con los compa\u00f1eros de trabajo, me propuse vivirlo de verdad. Entender la cultura a fondo me hizo un l\u00edder m\u00e1s s\u00f3lido y alguien que resuelve problemas con m\u00e1s cabeza.',
    p4FunFact:  '<strong>Dato curioso:</strong> Descubr\u00ed que soy al\u00e9rgico a los camellos. Iron\u00eda en su m\u00e1xima expresi\u00f3n.',

    /* ---- Panel 5: Epic Dubai ---- */
    p5Location: 'D\u00fabai, EAU',
    p5Title:    'Epic D\u00fabai',
    p5Date:     '2019',
    p5Body1:    'Liderar iniciativas de facturaci\u00f3n en todo el Medio Oriente fue la primera prueba real de mi madurez profesional. Trabajar con sistemas de salud en varios pa\u00edses me exigi\u00f3 operar con profundidad t\u00e9cnica y sensibilidad cultural. Interpret\u00e9 regulaciones de seguros ambiguas, aline\u00e9 a los stakeholders entre zonas horarias y dise\u00f1\u00e9 soluciones que funcionaban en entornos hospitalarios reales.',
    p5Body2:    'Mi logro m\u00e1s orgulloso fue encontrar la manera de resolver el grupo de negaciones de seguros m\u00e1s grande y persistente de un cliente sin necesidad de nuevo desarrollo. Aprovechando las herramientas existentes de forma creativa y repensando el flujo de trabajo, desbloqueamos 2.1 millones de d\u00edrems en ingresos adicionales. Ese momento refuerz\u00f3 algo que me ha acompa\u00f1ado: las mejores soluciones no siempre son nuevas funcionalidades, sino nuevas formas de entender el sistema.',
    p5FunFact:  '<strong>Dato curioso:</strong> Mi hija naci\u00f3 en D\u00fabai en 2020, justo dos semanas antes del cierre por COVID. Poder quedarme en casa con ella durante esos primeros meses fue una bendici\u00f3n que no esperaba.',

    /* ---- Panel 6: Moving to Bulgaria ---- */
    p6Location: 'Varna, Bulgaria',
    p6Title:    'A Bulgaria',
    p6Date:     '2022',
    p6Body1:    'En 2022, mi familia y yo nos mudamos a la costa norte de Bulgaria y nos asentamos en el pueblo natal de mi esposa. Ver a mi hija crecer cerca de la familia extendida es un recordatorio diario de por qu\u00e9 me esfuerzo tanto.',
    p6Body2:    'Meterme de lleno en un nuevo idioma y una nueva cultura, sin refugiarme en el ingl\u00e9s, me ret\u00f3 de formas que no esperaba. Refuerz\u00f3 algo que he aprendido varias veces a lo largo de mi vida: uno crece cuando est\u00e1 dispuesto a sentirse inc\u00f3modo.',
    p6FunFact:  '<strong>Dato curioso:</strong> Mi esposa y yo nos casamos en Bulgaria en 2017, a menos de 30 minutos de donde vivimos ahora. En ese momento no sab\u00edamos que la vida nos iba a traer de vuelta.',

    /* ---- Panel 7: AML RightSource ---- */
    p7Location: 'Varna, Bulgaria',
    p7Title:    'AML RightSource',
    p7Date:     '2022 \u2013 Presente',
    p7Body1:    'Bulgaria me meti\u00f3 de lleno al mundo del cumplimiento normativo y el riesgo, industrias donde los errores tienen consecuencias reales. En <a href="https://www.amlrightsource.com" target="_blank" rel="noopener">AML RightSource</a>, no solo experiment\u00e9 con IA. Fui la primera persona en la organizaci\u00f3n en llevar capacidades basadas en LLM a producci\u00f3n para nuestros clientes.',
    p7Body2:    'En un momento en que muchas instituciones le ten\u00edan desconfianza a la IA, defend\u00ed su implementaci\u00f3n responsable y defin\u00ed c\u00f3mo se integrar\u00eda en flujos de trabajo investigativos reales. Trabaj\u00e9 de la mano con ingenier\u00eda para incorporar LLMs en productos clave como monitoreo de medios y gesti\u00f3n de casos, con foco en la trazabilidad, ganancias de eficiencia medibles y la confianza del usuario. En seis meses, estas capacidades lograron una adopci\u00f3n total entre nuestra base de clientes existente.',
    p7Body3:    'M\u00e1s all\u00e1 de la IA, lider\u00e9 el primer roadmap estrat\u00e9gico de producto de la organizaci\u00f3n y administr\u00e9 un portafolio responsable de $6M en ARR. Con el tiempo, ascend\u00ed a Director de Producto, liderando cuatro productos y trabajando de cerca con ventas, adquisiciones, \u00e9xito del cliente y mercadeo. Este cap\u00edtulo refuerz\u00f3 un principio en el que creo profundamente: la innovaci\u00f3n solo importa si los clientes conf\u00edan en ella, la adoptan y ven resultados concretos.',
    p7FunFact:  '<strong>Dato curioso:</strong> En ese mismo tiempo, constru\u00ed una casa desde cero. Es uno de los proyectos m\u00e1s personales y exigentes que he enfrentado.',

    /* ---- Fun fact shared label (aria) ---- */
    funFactAriaReveal: 'Revelar dato curioso',

    /* ---- Skills ---- */
    skillsTitle: 'Competencias Principales',

    skillCard1Title: 'GRC y Cumplimiento',
    skillCard2Title: 'Gesti\u00f3n de Producto',
    skillCard3Title: 'Tecnolog\u00eda e IA',
    skillCard4Title: 'Liderazgo y Negocios',
    skillCard5Title: 'Educaci\u00f3n y Certificaciones',

    skillEduHeading:   'Educaci\u00f3n',
    skillCertHeading:  'Certificaciones',
    skillLangHeading:  'Idiomas',

    skillEduInstitution: 'Universidad Adelphi \u2013 Garden City, Nueva York',
    skillEduDegree:      'BBA en Contabilidad, GPA 3.78',
    skillEduHonors:      'Honors College | Cuadro de Honor | Beca Presidencial',

    skillCert1: 'Microcertificaci\u00f3n en Roadmapping de Producto (PRC)\u2122',
    skillCert2: 'Microcertificaci\u00f3n en An\u00e1lisis de Producto (PAC)\u2122',
    skillCert3: 'Programa McKinsey Forward',
    skillCert4: 'Epic: Facturaci\u00f3n Hospitalaria, Codificaci\u00f3n, Reclamaciones y Remesas',

    skillLang1: 'Ingl\u00e9s \u2013 Nativo',
    skillLang2: 'Espa\u00f1ol \u2013 Nativo',
    skillLang3: 'B\u00falgaro \u2013 B1',

    /* ---- Contact ---- */
    contactTitle:    'Cont\u00e1ctame',
    contactLead:     '\u00bfTe interesa hablar sobre estrategia de producto, soluciones GRC u oportunidades de colaboraci\u00f3n? Con mucho gusto.',
    contactLocation: 'Actualmente en Bulgaria | Abierto a oportunidades globales',
    linkedinLabel:   'Perfil de LinkedIn',

    /* ---- Footer ---- */
    footerRights: 'Todos los derechos reservados.',
  },

};
