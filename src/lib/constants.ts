// ===========================================
// ALTFINCA - Constantes y Contenido
// ===========================================

export const SITE_CONFIG = {
  name: "AltFinca",
  tagline: "Inversiones que marcan la diferencia",
  description:
    "Inversión inmobiliaria diferente: subastas judiciales, fincas rústicas, campings y hoteles rurales. Análisis profesional y acompañamiento integral.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://altfinca.es",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@altfinca.es",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+34 900 000 000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34600000000",
};

export const NAVIGATION = [
  { label: "Inicio", href: "/" },
  { label: "Subastas", href: "/subastas" },
  { label: "Fincas", href: "/fincas" },
  { label: "Campings", href: "/campings" },
  { label: "Hoteles", href: "/hoteles" },
  { label: "Contacto", href: "/contacto" },
];

export const NICHOS = {
  subastas: {
    id: "subastas",
    title: "Subastas Judiciales",
    shortTitle: "Subastas",
    icon: "Gavel",
    description: "Compra inmuebles hasta 50% bajo mercado. Análisis y acompañamiento.",
    roi: "20-40%",
    href: "/subastas",
    color: "blue",
    whatsappMessage: "Hola, me interesa información sobre subastas judiciales",
  },
  fincas: {
    id: "fincas",
    title: "Fincas Rústicas",
    shortTitle: "Fincas",
    icon: "Wheat",
    description: "Tierra que genera ingresos: agrícola, forestal, cinegética, fotovoltaica...",
    roi: "4-10%",
    href: "/fincas",
    color: "green",
    whatsappMessage: "Hola, me interesa información sobre fincas rústicas",
  },
  campings: {
    id: "campings",
    title: "Campings",
    shortTitle: "Campings",
    icon: "Tent",
    description: "El turismo outdoor no para de crecer. Negocios rentables con demanda creciente.",
    roi: "12-18%",
    href: "/campings",
    color: "orange",
    whatsappMessage: "Hola, me interesa información sobre campings en venta",
  },
  hoteles: {
    id: "hoteles",
    title: "Hoteles Rurales",
    shortTitle: "Hoteles",
    icon: "Hotel",
    description: "Experiencias únicas, rentabilidad real. Inversión + estilo de vida.",
    roi: "10-18%",
    href: "/hoteles",
    color: "purple",
    whatsappMessage: "Hola, me interesa información sobre hoteles rurales",
  },
};

export const HOME_CONTENT = {
  hero: {
    title: "Inversión Inmobiliaria que Sale de lo Común",
    subtitle:
      "Olvídate de pisos saturados y rentabilidades del 3%. Te abrimos la puerta a inversiones diferentes: mayor rentabilidad, menos competencia, más oportunidades.",
    cta: "Explorar Oportunidades",
  },
  servicios: [
    {
      icon: "Search",
      title: "Búsqueda personalizada",
      description: "Encontramos oportunidades que encajan con tu perfil inversor",
    },
    {
      icon: "BarChart3",
      title: "Análisis profesional",
      description: "Cada oportunidad analizada en profundidad antes de presentártela",
    },
    {
      icon: "Bell",
      title: "Alertas en tiempo real",
      description: "Las mejores oportunidades llegan a tu móvil antes que a nadie",
    },
    {
      icon: "Handshake",
      title: "Acompañamiento completo",
      description: "Desde la primera visita hasta la escritura y más allá",
    },
    {
      icon: "Shield",
      title: "Gestión post-compra",
      description: "Si lo necesitas, gestionamos tu inversión para que solo cobres",
    },
  ],
  porQueNosotros: [
    "NO somos una inmobiliaria tradicional",
    "Conocemos profundamente cada nicho",
    "Trabajamos solo con inversores serios",
    "Cobramos por resultados",
    "Acceso a oportunidades off-market",
  ],
  proceso: [
    {
      step: 1,
      title: "Conversación inicial",
      description: "20 minutos para entender qué buscas y cómo podemos ayudarte",
      icon: "Phone",
    },
    {
      step: 2,
      title: "Alertas activas",
      description: "Recibes oportunidades filtradas según tu perfil inversor",
      icon: "Target",
    },
    {
      step: 3,
      title: "Primera inversión",
      description: "Analizamos, negociamos y celebramos juntos tu éxito",
      icon: "Rocket",
    },
  ],
  ctaFinal: {
    title: "Mientras otros compiten por el mismo piso,",
    subtitle: "tú puedes acceder a oportunidades diferentes.",
    cta: "Agenda Tu Consulta Gratuita",
  },
};

export const SUBASTAS_CONTENT = {
  meta: {
    title: "Invierte en Subastas Judiciales | Hasta 50% Bajo Mercado | AltFinca",
    description:
      "Te ayudamos a encontrar e invertir en subastas judiciales rentables. Análisis profesional, alertas personalizadas y acompañamiento completo.",
  },
  hero: {
    badge: "+42% más subastas en 2025",
    title: "Invierte en Subastas Judiciales",
    titleAccent: "Hasta 50% Bajo Mercado",
    subtitle:
      "Te encontramos las mejores oportunidades de subasta, analizamos cada propiedad por ti y te acompañamos en todo el proceso. Sin sorpresas.",
    cta: "Descubre Oportunidades",
    trust: [
      { value: "+127", label: "inversores" },
      { value: "+3.200", label: "subastas analizadas" },
      { value: "38%", label: "ahorro medio" },
    ],
  },
  ejemplo: {
    badge: "OPORTUNIDAD",
    urgencia: "Cierra en 3 días",
    titulo: "Piso 3 hab. con terraza",
    ubicacion: "Toledo, Castilla-La Mancha",
    precioSubasta: 45000,
    tasacion: 78000,
    valorMercado: 72000,
    descuento: 37,
    ahorro: 27000,
  },
  problemas: [
    {
      icon: "Clock",
      title: "No tienes tiempo",
      description: "Revisar cientos de subastas cada día es un trabajo a tiempo completo",
    },
    {
      icon: "AlertTriangle",
      title: "Miedo a los riesgos",
      description: "Cargas ocultas, ocupantes, estado real... demasiadas incógnitas",
    },
    {
      icon: "FileText",
      title: "Proceso complejo",
      description: "Pujas, depósitos, escrituras, posesión... un laberinto burocrático",
    },
    {
      icon: "XCircle",
      title: "Oportunidades perdidas",
      description: "Las mejores subastas vuelan en horas. Sin alertas, llegas tarde",
    },
  ],
  solucion: {
    title: "Te quitamos el trabajo y el riesgo. Tú solo decides si invertir.",
    checks: [
      "Análisis de rentabilidad (compra + reforma + venta/alquiler)",
      "Verificación de cargas y situación legal",
      "Estado de ocupación y estrategia de posesión",
      "Comparativa de precios de mercado real",
      "Valoración de riesgos y recomendación honesta",
    ],
  },
  beneficios: [
    {
      icon: "Search",
      title: "Búsqueda Inteligente",
      description: "Filtros avanzados que encuentran lo que otros no ven",
    },
    {
      icon: "Zap",
      title: "Alertas Inmediatas",
      description: "Las oportunidades llegan a tu móvil en tiempo real",
    },
    {
      icon: "BarChart3",
      title: "Análisis Profesional",
      description: "Cada subasta analizada en profundidad antes de enviártela",
    },
    {
      icon: "Users",
      title: "Acompañamiento Total",
      description: "Desde la puja hasta las llaves, siempre a tu lado",
    },
  ],
  proceso: [
    { step: 1, title: "Cuéntanos tu perfil", description: "Presupuesto, zonas, objetivos" },
    { step: 2, title: "Recibe alertas", description: "Oportunidades filtradas para ti" },
    { step: 3, title: "Decide con datos", description: "Análisis completo de cada subasta" },
    { step: 4, title: "Te acompañamos", description: "Puja, adjudicación y posesión" },
  ],
  testimonios: [
    {
      nombre: "Miguel R.",
      ubicacion: "Madrid",
      texto:
        "Llevaba meses mirando subastas sin atreverme. Con su análisis me quedó clarísimo cuáles merecían la pena y cuáles no.",
      resultado: "+32% rentabilidad en 8 meses",
      avatar: "M",
    },
    {
      nombre: "Carmen G.",
      ubicacion: "Valencia",
      texto:
        "Lo que más valoro es la honestidad. Me han desaconsejado 2 subastas que yo quería. Eso no lo hace cualquiera.",
      resultado: "3 inmuebles en cartera",
      avatar: "C",
    },
    {
      nombre: "Javier L.",
      ubicacion: "Barcelona",
      texto:
        "El papeleo me daba pavor. Ellos se ocuparon de todo y me mantuvieron informado en cada paso.",
      resultado: "Ahorro de 45.000€",
      avatar: "J",
    },
  ],
  precios: [
    {
      nombre: "Básico",
      precio: 49,
      periodo: "mes",
      descripcion: "Para empezar a explorar",
      destacado: false,
      features: [
        "Alertas (5/semana)",
        "Análisis básico",
        "Soporte por email",
        "Guías y recursos",
      ],
    },
    {
      nombre: "Profesional",
      precio: 149,
      periodo: "mes",
      descripcion: "El más elegido",
      destacado: true,
      features: [
        "Alertas ilimitadas",
        "Análisis completo",
        "Verificación de cargas",
        "Soporte WhatsApp",
        "1 llamada/mes",
      ],
    },
    {
      nombre: "Premium",
      precio: 349,
      periodo: "mes",
      descripcion: "Acompañamiento total",
      destacado: false,
      features: [
        "Todo lo de Profesional",
        "Acompañamiento en pujas",
        "Gestión adjudicación",
        "Coordinación abogado/notario",
        "Llamadas ilimitadas",
      ],
    },
  ],
  faq: [
    {
      pregunta: "¿Qué es una subasta judicial y cómo funciona?",
      respuesta:
        "Una subasta judicial es un proceso por el cual un juzgado vende un bien (normalmente inmueble) para saldar deudas. Cualquier persona puede participar depositando el 5% del valor de tasación y pujando en el Portal de Subastas del BOE. Las pujas son online y duran 20 días naturales.",
    },
    {
      pregunta: "¿Cuáles son los riesgos de invertir en subastas?",
      respuesta:
        "Los principales riesgos son: cargas anteriores que sobreviven a la subasta, ocupantes que dificultan la posesión, estado real del inmueble (no siempre se puede visitar) y gastos ocultos. Por eso es crucial analizar cada subasta en profundidad antes de pujar.",
    },
    {
      pregunta: "¿Puedo financiar la compra con hipoteca?",
      respuesta:
        "Es complicado pero posible. La mayoría de subastas requieren pago al contado en plazos cortos (20-40 días). Algunos bancos ofrecen préstamos puente o hipotecas rápidas, pero debes tenerlo preaprobado antes de pujar.",
    },
    {
      pregunta: "¿Cuánto tiempo tarda todo el proceso?",
      respuesta:
        "Desde que ganas la subasta hasta que tienes las llaves pueden pasar de 2 a 6 meses, dependiendo de si hay ocupantes, el juzgado que lo tramita y la complejidad del caso. Sin ocupantes y con juzgado ágil, 2-3 meses es factible.",
    },
    {
      pregunta: "¿Qué impuestos y gastos tiene una subasta?",
      respuesta:
        "Debes pagar el ITP (del 6% al 10% según comunidad) o IVA si es de banco, gastos de notaría, registro y gestoría. En total, calcula un 10-12% adicional sobre el precio de remate. Además, pueden existir deudas de comunidad pendientes.",
    },
  ],
};

export const FINCAS_CONTENT = {
  meta: {
    title: "Inversión en Fincas Rústicas | Terrenos con Rentabilidad Real | AltFinca",
    description:
      "Encuentra fincas rústicas rentables: agrícolas, forestales, cinegéticas. Análisis de inversión, ayudas PAC y acompañamiento completo.",
  },
  hero: {
    title: "Invierte en Fincas Rústicas",
    titleAccent: "Tierra que Genera Ingresos Reales",
    subtitle:
      "Encontramos fincas agrícolas, forestales y cinegéticas con rentabilidad probada. Analizamos cada propiedad, verificamos ayudas PAC y te acompañamos.",
    cta: "Descubre Fincas Rentables",
    trust: [
      { value: "+180", label: "hectáreas intermediadas" },
      { value: "4,2%", label: "rentabilidad media" },
      { value: "+35", label: "inversores" },
    ],
  },
  tipos: [
    {
      icon: "Wheat",
      titulo: "Agrícola",
      descripcion: "Cultivos secano, regadío, olivar, almendros, viñedo",
      rentabilidad: "3-6% anual",
    },
    {
      icon: "TreePine",
      titulo: "Forestal",
      descripcion: "Masas forestales con aprovechamiento maderero",
      rentabilidad: "2-4% anual",
    },
    {
      icon: "Target",
      titulo: "Cinegética",
      descripcion: "Cotos de caza menor y mayor",
      rentabilidad: "4-8% anual",
    },
    {
      icon: "Home",
      titulo: "Recreativa",
      descripcion: "Fincas con casa rural, uso personal + alquiler",
      rentabilidad: "Variable",
    },
    {
      icon: "Sun",
      titulo: "Fotovoltaica",
      descripcion: "Terrenos para plantas solares, contratos 25 años",
      rentabilidad: "6-10% anual",
    },
  ],
};

export const CAMPINGS_CONTENT = {
  meta: {
    title: "Inversión en Campings en España | Negocios Turísticos Rentables | AltFinca",
    description:
      "Compra campings rentables en España. Análisis de negocio, valoración profesional y acompañamiento en la adquisición. Sector en crecimiento.",
  },
  hero: {
    title: "Invierte en Campings",
    titleAccent: "El Sector Turístico que No Para de Crecer",
    subtitle:
      "Te ayudamos a encontrar campings rentables en venta, analizamos cada negocio en profundidad y te acompañamos hasta que tengas las llaves.",
    cta: "Ver Campings en Venta",
    trust: [
      { value: "+12", label: "campings intermediados" },
      { value: "+15%", label: "crecimiento anual" },
      { value: "12-18%", label: "ROI medio" },
    ],
  },
  tipos: [
    {
      titulo: "Tradicional",
      inversion: "500K - 2M€",
      roi: "10-15%",
    },
    {
      titulo: "Glamping/Premium",
      inversion: "300K - 1.5M€",
      roi: "15-25%",
    },
    {
      titulo: "Área Autocaravanas",
      inversion: "100K - 500K€",
      roi: "12-20%",
    },
    {
      titulo: "Camping Costa",
      inversion: "1M - 5M€",
      roi: "8-14%",
    },
  ],
};

export const HOTELES_CONTENT = {
  meta: {
    title: "Inversión en Hoteles Rurales | Turismo de Experiencia Rentable | AltFinca",
    description:
      "Compra tu hotel rural o casa rural con encanto. Análisis de negocio, valoración profesional y acompañamiento integral.",
  },
  hero: {
    title: "Invierte en Hoteles Rurales",
    titleAccent: "Experiencias Únicas, Rentabilidad Real",
    subtitle:
      "El turismo rural y de experiencias crece cada año. Te ayudamos a encontrar hoteles rurales, casas rurales y posadas con encanto.",
    cta: "Descubre Hoteles en Venta",
  },
  tipos: [
    {
      titulo: "Casa Rural",
      habitaciones: "3-6 hab",
      inversion: "150K - 400K€",
    },
    {
      titulo: "Hotel Boutique",
      habitaciones: "8-15 hab",
      inversion: "400K - 1M€",
    },
    {
      titulo: "Hotel con Encanto",
      habitaciones: "15-30 hab",
      inversion: "800K - 2M€",
    },
    {
      titulo: "Hotel + Spa",
      habitaciones: "Variable",
      inversion: "1M - 3M€",
    },
  ],
};

export const FORM_OPTIONS = {
  presupuesto: [
    { value: "", label: "Selecciona tu presupuesto" },
    { value: "menos-50k", label: "Menos de 50.000€" },
    { value: "50k-100k", label: "50.000€ - 100.000€" },
    { value: "100k-250k", label: "100.000€ - 250.000€" },
    { value: "250k-500k", label: "250.000€ - 500.000€" },
    { value: "500k-1m", label: "500.000€ - 1.000.000€" },
    { value: "mas-1m", label: "Más de 1.000.000€" },
  ],
  experiencia: [
    { value: "", label: "Selecciona tu experiencia" },
    { value: "ninguna", label: "Sin experiencia previa" },
    { value: "poca", label: "He invertido 1-2 veces" },
    { value: "media", label: "Invierto regularmente" },
    { value: "experto", label: "Inversor profesional" },
  ],
};

export const FOOTER_LINKS = {
  nichos: [
    { label: "Subastas Judiciales", href: "/subastas" },
    { label: "Fincas Rústicas", href: "/fincas" },
    { label: "Campings", href: "/campings" },
    { label: "Hoteles Rurales", href: "/hoteles" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "/sobre-nosotros" },
    { label: "Contacto", href: "/contacto" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Aviso Legal", href: "/legal/aviso-legal" },
    { label: "Privacidad", href: "/legal/privacidad" },
    { label: "Cookies", href: "/legal/cookies" },
  ],
};
