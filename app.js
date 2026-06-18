/**
 * ====================================
 * SMARTPALM LANDING - APP.JS
 * JavaScript: i18n + Animaciones
 * ====================================
 */

/* ============================
   TRANSLATIONS
=========================== */
const translations = {
  es: {
    /* Navigation */
    "nav.cta": "Descargar App",
    "nav.cta.dashboard": "Acceder al Dashboard",
    "nav.inicio": "Inicio",
    "nav.problema": "Problema",
    "nav.como-funciona": "Cómo funciona",
    "nav.sectores": "Sectores",
    "nav.beneficios": "Beneficios",
    "nav.planes": "Planes",
    "nav.equipo": "Nosotros",

    /* Hero - Home */
    "hero.badge": "🌴 Solución para la palma aceitera en la Amazonía",
    "hero.title": "Tu palma te avisa cuando te necesita. Tú decides cuando actuar.",
    "hero.subtitle": "SmartPalm te alerta cuando tu palma necesita atención, aunque estés en medio de la Amazonía sin internet.",
    "hero.cta.primary": "📱 Descargar App",
    "hero.cta.secondary": "O conoce a tu ingeniero agrónomo →",
    "hero.badge.floating": "✓ Funciona sin internet",

    /* Hero - Agricultor */
    "agro.hero.badge": "🌴 Para dueños de cultivos de palma",
    "agro.hero.title": "Monitorea tu palma desde tu celular",
    "agro.hero.subtitle": "Recibe alertas cuando tu cultivo necesite atención. Sin internet, sin complicaciones.",
    "agro.hero.cta.primary": "📱 Descargar App",
    "agro.hero.cta.secondary": "Ver cómo funciona ↓",
    "agro.hero.badge.floating": "✓ Funciona sin internet",
    "agro.hero.agronomist.question": "¿Eres ingeniero agrónomo?",
    "agro.hero.agronomist.link": "Tenemos una oferta para ti →",

    /* Hero - Agrónomo */
    "agroano.hero.badge": "🔬 Para ingenieros agrónomos",
    "agroano.hero.title": "Supervisa todas tus plantaciones desde un solo lugar",
    "agroano.hero.subtitle": "Dashboard profesional con estado de salud por zona (óptimo, en riesgo y crítico), alertas priorizadas por severidad y reportes técnicos automáticos.",
    "agroano.hero.cta.primary": "🔬 Acceder al Dashboard",
    "agroano.hero.cta.secondary": "Ver cómo funciona ↓",
    "agroano.hero.badge.floating": "✓ Monitoreo 24/7 de todas tus plantaciones",
    "agroano.hero.state.optimal": "óptimo",
    "agroano.hero.state.risk": "en riesgo",
    "agroano.hero.state.critical": "crítico",

    /* Problem Section */
    "problem.title": "Cultivar palma en la Amazonía es un desafío constante",
    "problem.subtitle": "El 70% de las 95,000 hectáreas de palma aceitera en Perú son manejadas por pequeños y medianos productores que enfrentan estos problemas:",
    "problem.card1.title": "No sabes qué está pasando en tu cultivo",
    "problem.card1.desc": "No estás todos los días en el fundo y no te enterás del problema hasta que ya hizo daño.",
    "problem.card2.title": "Tu parcela no tiene internet",
    "problem.card2.desc": "Las herramientas tecnológicas que existen requieren WiFi o señal celular que en la Amazonía no tienes.",
    "problem.card3.title": "Las pérdidas son grandes",
    "problem.card3.desc": "Una plaga detectada tarde puede destruir hectáreas completas. El ingreso de toda una familia depende de tus decisiones.",

    /* Problem - Agricultor */
    "agro.problem.title": "Sabemos lo difícil que es cultivar palma en la Amazonía",
    "agro.problem.card1.title": "No sabes cuándo tu palma necesita agua",
    "agro.problem.card1.desc": "El estrés hídrico puede destruir tu cosecha si no lo detectas a tiempo.",
    "agro.problem.card2.title": "Las plagas llegan sin aviso",
    "agro.problem.card2.desc": "Sin monitoreo constante, una plaga puede afectar todo tu bloque en pocos días.",
    "agro.problem.card3.title": "Configura tus propias alarmas",
    "agro.problem.card3.desc": "Personaliza los thresholds de riesgo según las necesidades de tu cultivo.",

    /* Problem - Agrónomo */
    "agroano.problem.title": "Sabemos los desafíos de supervisar cultivos en la Amazonía",
    "agroano.problem.card1.title": "Tomas decisiones sin evidencia del campo",
    "agroano.problem.card1.desc": "El 70% de las 95,000 hectáreas de palma en Perú son manejadas por pequeños productores con acceso limitado a herramientas tecnológicas.",
    "agroano.problem.card2.title": "Las visitas a campo son discontinuas y costosas",
    "agroano.problem.card2.desc": "Ucayali tiene solo 40 técnicos para miles de hectáreas. No puedes estar en todas tus plantaciones al mismo tiempo.",
    "agroano.problem.card3.title": "Reportes manuales sin trazabilidad",
    "agroano.problem.card3.desc": "Generar reportes técnicos para cooperativas y certificadoras toma horas y los datos no están vinculados a las alertas ni intervenciones.",

    /* How it Works - HOME */
    "how.title": "Así funciona SmartPalm",
    "how.farmer.title": "Para el agricultor",
    "how.farmer.step1.title": "Sensores en tu campo",
    "how.farmer.step1.desc": "Pequeños dispositivos miden humedad, temperatura y condiciones del suelo 24/7",
    "how.farmer.step2.title": "Alertas en tu celular",
    "how.farmer.step2.desc": "Recibe notificaciones claras como \"Tu palma necesita agua\" aunque no tengas internet",
    "how.farmer.step3.title": "Actúas a tiempo",
    "how.farmer.step3.desc": "Salvas tu cosecha detectando problemas antes de que sea tarde",
    "how.farmer.cta": "Quiero monitorear mi fundo →",
    "how.agronomist.title": "Para el ingeniero agrónomo",
    "how.agronomist.step1.title": "Tus clientes tienen sensores",
    "how.agronomist.step1.desc": "Cada fundo monitorea 24/7 con dispositivos que miden humedad, temperatura y más",
    "how.agronomist.step2.title": "Datos en tu dashboard",
    "how.agronomist.step2.desc": "Visualiza todas tus plantaciones desde tu computadora, sin necesidad de estar en campo",
    "how.agronomist.step3.title": "Reportes profesionales",
    "how.agronomist.step3.desc": "Genera reportes en PDF y CSV para cooperativas y certificadoras con un clic",
    "how.agronomist.cta": "Acceder al dashboard →",

    /* How it Works - AGRICULTOR page */
    "agro.how.title": "Así funciona SmartPalm",
    "agro.how.step1.title": "Sensores en tu campo",
    "agro.how.step1.desc": "Pequeños dispositivos miden humedad y temperatura del suelo",
    "agro.how.step2.title": "Tu celular recibe los datos",
    "agro.how.step2.desc": "Aunque no tengas internet ni señal celular",
    "agro.how.step3.title": "Recibe alertas a tiempo",
    "agro.how.step3.desc": "Sabrás exactamente cuándo actuar para cuidar tu palma",
    "agro.how.cta": "Prueba 30 días gratis",

    /* How it Works - AGRÓNOMO page */
    "agroano.how.title": "Cómo SmartPalm ayuda a tu trabajo",
    "agroano.how.step1.title": "Sensores 24/7 en cada fundo",
    "agroano.how.step1.desc": "Dispositivos IoT miden humedad, temperatura, pH y conductividad eléctrica. Los datos se procesan y detectamos cuando un parámetro supera los umbrales INIA.",
    "agroano.how.step2.title": "Dashboard con estado de salud por zona",
    "agroano.how.step2.desc": "Cada zona tiene estado óptimo, en riesgo o crítico (regla peor-gana). Recibes alertas clasificadas por severidad: crítico, warning o informativo.",
    "agroano.how.step3.title": "Aprueba recomendaciones y genera reportes",
    "agroano.how.step3.desc": "El motor de IA genera recomendaciones que tú apruebas. Planifica visitas de campo (incluso offline), registra inspecciones y genera reportes PDF/CSV con trazabilidad completa.",
    "agroano.how.cta": "Prueba el dashboard",

    /* Team Video */
    "team.video.title": "Conoce al equipo detrás de SmartPalm",
    "team.video.subtitle": "Somos estudiantes de la UPC apasionados por resolver problemas reales del campo peruano",
    "video.team.placeholder": "Video: About the Team - TempWise",
    "video.team.hint": "Click para reproducir",
    "video.contact": "¿Tienes preguntas? Escríbenos a",
    "video.hint": "Click para reproducir",

    /* Product Video */
    "agro.video.title": "Mira cómo SmartPalm ayuda a productores como tú",
    "agro.video.placeholder": "Video: SmartPalm para Agricultores",
    "agro.video.cta": "📱 Descargar App",

    "agroano.video.title": "Mira cómo SmartPalm facilita tu supervisión técnica",
    "agroano.video.placeholder": "Video: SmartPalm para Agrónomos",
    "agroano.video.cta": "🔬 Acceder al Dashboard",

    /* Selector */
    "selector.title": "¿Con cuál te identificas más?",
    "selector.farmer.title": "Soy dueño de cultivos de palma",
    "selector.farmer.desc": "Quiero monitorear mi fundo desde mi celular",
    "selector.farmer.cta": "Ir a la página del Agricultor →",
    "selector.agronomist.title": "Soy ingeniero agrónomo",
    "selector.agronomist.desc": "Quiero supervisar mis plantaciones profesionalmente",
    "selector.agronomist.cta": "Ir a la página del Agrónomo →",

    /* Benefits */
    "agro.benefits.title": "Todo lo que necesitas para cuidar tu palma",
    "agro.benefits.subtitle": "Simple, sin internet, en tu idioma",
    "agro.benefits.card1.title": "App móvil intuitiva",
    "agro.benefits.card1.desc": "Diseñada para cualquier agricultor. Monitorea tu palma desde tu celular sin complicaciones.",
    "agro.benefits.card2.title": "Alertas claras",
    "agro.benefits.card2.desc": "Sabrás exactamente qué hacer, no solo que hay un problema. Como 'Riega el Bloque C ahora'.",
    "agro.benefits.card3.title": "Recomendaciones del INIA",
    "agro.benefits.card3.desc": "Consejos que cualquier persona puede entender, basados en investigación real.",
    "agro.benefits.card4.title": "Reportes simples",
    "agro.benefits.card4.desc": "Genera reportes semanales de tu fundo. Descárgalos en PDF en segundos.",

    /* Benefits - Agrónomo */
    "agroano.benefits.title": "Herramientas profesionales para agrónomos",
    "agroano.benefits.subtitle": "Todo lo que necesitas para supervisar mejor",
    "agroano.benefits.card1.title": "Dashboard multi-plantación",
    "agroano.benefits.card1.desc": "Consolida todas tus plantaciones en una sola vista. Estado de salud por zona con lógica peor-gana y tendencia histórica de parámetros.",
    "agroano.benefits.card2.title": "Series de tiempo y comparación entre zonas",
    "agroano.benefits.card2.desc": "Visualiza la evolución de humedad, temperatura y pH por zona. Compara hasta 3 zonas en paralelo para identificar patrones.",
    "agroano.benefits.card3.title": "Alertas por nivel de severidad",
    "agroano.benefits.card3.desc": "Clasificadas como crítico, warning o informativo. Cada alerta se vincula a la zona y sensor que la originó.",
    "agroano.benefits.card4.title": "Planificación de visitas de campo",
    "agroano.benefits.card4.desc": "Agenda visitas, registra inspecciones desde el campo (incluso sin internet) y vincúlalas a alertas activas. Sincronización automática.",
    "agroano.benefits.card5.title": "Recomendaciones IA calibradas INIA",
    "agroano.benefits.card5.desc": "Motor de IA genera recomendaciones automáticas basadas en los parámetros INIA para palma aceitera amazónica. Tú revisas y apruebas.",
    "agroano.benefits.card6.title": "Trazabilidad completa",
    "agroano.benefits.card6.desc": "Recomendación → Inspección → Intervención. Cada decisión queda vinculada y genera un reporte trazable para cooperativas y certificadoras.",
    "agroano.benefits.card7.title": "Reportes automáticos en PDF y CSV",
    "agroano.benefits.card7.desc": "Genera reportes técnicos listos para exportar. Incluyen estado de salud, alertas del período, intervenciones ejecutadas y recomendaciones pendientes.",
    "agroano.benefits.card8.title": "Acceso desde cualquier dispositivo",
    "agroano.benefits.card8.desc": "Plataforma web responsive. Accede desde tu computadora de escritorio en la oficina o desde tu tablet en el campo.",

    /* Pricing */
    "pricing.permonth": "/mes",
    "pricing.cta.trial": "Iniciar prueba gratis",
    "pricing.cta.contact": "Contactar ventas",

    "agro.pricing.title": "Planes según el tamaño de tu fundo",
    "agro.pricing.subtitle": "Todos incluyen 30 días de prueba gratis",
    "agro.pricing.plan1.tag": "Hasta 10 hectáreas",
    "agro.pricing.plan1.f1": "App en tu celular",
    "agro.pricing.plan1.f2": "Hasta 5 sensores",
    "agro.pricing.plan1.f3": "Alertas de agua y plagas",
    "agro.pricing.plan1.f4": "Reportes básicos",
    "agro.pricing.plan1.f5": "Recomendaciones INIA",
    "agro.pricing.plan2.tag": "10 a 50 hectáreas",
    "agro.pricing.plan2.badge": "⭐ Más popular",
    "agro.pricing.plan2.f1": "Todo lo de Semilla",
    "agro.pricing.plan2.f2": "Hasta 20 sensores",
    "agro.pricing.plan2.f3": "Alertas por SMS",
    "agro.pricing.plan2.f4": "Reportes semanales",
    "agro.pricing.plan2.f5": "Gestión por bloques",
    "agro.pricing.plan2.f6": "Acceso para tu asesor",
    "agro.pricing.plan2.note": "📱 Incluye acceso gratuito para 1 asesor técnico",
    "agro.pricing.contact": "50+ hectáreas?",
    "agro.pricing.contact.link": "Contactar ventas →",

    /* Pricing - Agrónomo */
    "agro.pricing.title": "Planes según el tamaño de tu operación",
    "agro.pricing.plan1.tag": "Para fundos de 10 a 50 hectáreas",
    "agro.pricing.plan1.badge": "⭐ Recomendado",
    "agro.pricing.plan1.f1": "Dashboard completo",
    "agro.pricing.plan1.f2": "Hasta 20 sensores",
    "agro.pricing.plan1.f3": "Reportes semanales",
    "agro.pricing.plan1.f4": "Multi-bloque",
    "agro.pricing.plan1.f5": "Acceso multi-cliente",
    "agro.pricing.plan1.f6": "Alertas por SMS",
    "agro.pricing.plan2.tag": "Cooperativas y grandes fundos",
    "agro.pricing.plan2.price": "A medida",
    "agro.pricing.plan2.f1": "Sensores ilimitados",
    "agro.pricing.plan2.f2": "Todo lo de Cosecha",
    "agro.pricing.plan2.f3": "Asesor agrónomo dedicado",
    "agro.pricing.plan2.f4": "Reportes personalizados",
    "agro.pricing.plan2.f5": "Capacitación para tu equipo",

    /* Pricing Table */
    "pricing.table.feature": "Característica",
    "pricing.table.plan1": "Semilla",
    "pricing.table.plan2": "Cosecha",
    "pricing.table.plan3": "Palma Pro",
    "pricing.table.price": "Precio",
    "pricing.table.hectares": "Hectáreas",
    "pricing.table.sensors": "Sensores",
    "pricing.table.app": "App móvil",
    "pricing.table.sms": "Alertas SMS",
    "pricing.table.dashboard": "Dashboard",
    "pricing.table.advisor": "Asesor técnico",
    "pricing.table.custom": "A medida",
    "pricing.table.unlimited": "Ilimitados",
    "pricing.table.upto10": "Hasta 10",
    "pricing.table.reports": "Reportes",
    "pricing.table.clients": "Multi-cliente",

    /* Team */
    "team.title": "Conoce al equipo detrás de SmartPalm",
    "team.subtitle": "Somos estudiantes de la UPC apasionados por la tecnología y el campo peruano",
    "team.role": "Ingeniero de Software · UPC",

    /* Footer */
    "footer.cta.title": "¿Listo para optimizar tu gestión?",
    "footer.cta.subtitle": "Únete a la red de agrónomos que ya están transformando la productividad de la palma.",
    "footer.cta.button": "🔬 Acceder al Dashboard",
    "footer.cta.button.farmer": "📱 Descargar App",
    "footer.brand.desc": "Tecnología satelital e inteligencia artificial aplicada a la supervisión técnica de cultivos tropicales de alto rendimiento.",
    "footer.platform.title": "Plataforma",
    "footer.platform.alerts": "Alertas de Estrés",
    "footer.resources.title": "Recursos",
    "footer.resources.help": "Centro de Ayuda",
    "footer.resources.blog": "Blog Agrónomo",
    "footer.contact.title": "Contacto",
    "footer.contact.email": "hola@smartpalm.pe",
    "footer.contact.schedule": "Agenda una demo",
    "footer.terms": "Términos de Uso",
    "footer.privacy": "Privacidad",
    "footer.copyright": "© 2026 SmartPalm · Soluciones Tecnológicas para el Agro",
    "footer.social.linkedin": "LinkedIn",
    "footer.social.instagram": "Instagram",
    "footer.social.youtube": "YouTube",

    /* Dashboard Mockup */
    "dashboard.stat1": "Plantaciones",
    "dashboard.stat2": "Sensores activos",
    "dashboard.stat3": "Alertas activas",
    "dashboard.zone.optimal": "óptimo",
    "dashboard.zone.risk": "en riesgo",
    "dashboard.zone.critical": "crítico",
    "dashboard.alert1": "Estrés hídrico – Fundo Los Palomos",
    "dashboard.alert2": "pH bajo – Bloque 3",

    /* Phone Alert */
    "phone.alert.title": "Tu palma necesita agua",
    "phone.alert.location": "Bloque C",
    "phone.alert.time": "Hace 5 minutos",
    "phone.label": "Vista de la App SmartPalm",

    /* Modal - Contactar Ventas */
    "modal.contact.title": "Hablar con ventas",
    "modal.contact.subtitle": "Cuéntanos sobre tu fundo y te ayudaremos a elegir el mejor plan",
    "modal.contact.field1": "Nombre completo",
    "modal.contact.field1.placeholder": "Ej: Juan Pérez",
    "modal.contact.field2": "WhatsApp",
    "modal.contact.field2.placeholder": "+51 999 123 456",
    "modal.contact.field3": "Ubicación del fundo",
    "modal.contact.field3.placeholder": "Ej: Ucayali, Aguaytía",
    "modal.contact.field4": "Número de hectáreas",
    "modal.contact.field4.placeholder": "Ej: 25",
    "modal.contact.field5": "¿Ya tienes sensores o es primera vez?",
    "modal.contact.field5.opt1": "Primera vez con tecnología de monitoreo",
    "modal.contact.field5.opt2": "Ya tengo sensores pero quiero mejorar",
    "modal.contact.field5.opt3": "No estoy seguro",
    "modal.contact.field6": "Cuéntanos más sobre tu fundo (opcional)",
    "modal.contact.field6.placeholder": "Ej: Tengo 3 bloques de palma aceitera en...",
    "modal.contact.submit": "📱 Enviar por WhatsApp",
    "modal.contact.note": "Te responderemos en menos de 24 horas",
    "modal.contact.success.title": "¡Mensaje enviado!",
    "modal.contact.success.msg": "Te contactaremos por WhatsApp en menos de 24 horas.",
    "modal.contact.success.close": "Cerrar"
  },

  en: {
    /* Navigation */
    "nav.cta": "Download App",
    "nav.cta.dashboard": "Access Dashboard",
    "nav.inicio": "Home",
    "nav.problema": "Problem",
    "nav.como-funciona": "How it works",
    "nav.sectores": "Segments",
    "nav.beneficios": "Benefits",
    "nav.planes": "Plans",
    "nav.equipo": "Us",

    /* Hero - Home */
    "hero.badge": "🌴 Solution for palm oil in the Peruvian Amazon",
    "hero.title": "Your palm alerts you when it needs you. You decide when to act.",
    "hero.subtitle": "SmartPalm alerts you when your palm needs attention, even in the middle of the Amazon with no internet.",
    "hero.cta.primary": "📱 Download App",
    "hero.cta.secondary": "Or meet your agronomist →",
    "hero.badge.floating": "✓ Works without internet",

    /* Hero - Farmer */
    "agro.hero.badge": "🌴 For palm oil farmers",
    "agro.hero.title": "Monitor your palm from your phone",
    "agro.hero.subtitle": "Get alerts when your crop needs attention. No internet, no complications.",
    "agro.hero.cta.primary": "📱 Download App",
    "agro.hero.cta.secondary": "See how it works ↓",
    "agro.hero.badge.floating": "✓ Works without internet",
    "agro.hero.agronomist.question": "Are you an agronomist?",
    "agro.hero.agronomist.link": "We have an offer for you →",

    /* Hero - Agronomist */
    "agroano.hero.badge": "🔬 For agronomists",
    "agroano.hero.title": "Supervise all your plantations from one place",
    "agroano.hero.subtitle": "Professional dashboard with zone health status (optimal, at risk and critical), severity-ranked alerts, and automatic technical reports.",
    "agroano.hero.cta.primary": "🔬 Access Dashboard",
    "agroano.hero.cta.secondary": "See how it works ↓",
    "agroano.hero.badge.floating": "✓ 24/7 monitoring of all your plantations",
    "agroano.hero.state.optimal": "optimal",
    "agroano.hero.state.risk": "at risk",
    "agroano.hero.state.critical": "critical",

    /* Problem Section */
    "problem.title": "Growing palm in the Amazon is a constant challenge",
    "problem.subtitle": "70% of the 95,000 hectares of palm oil in Peru are managed by small and medium producers who face these problems:",
    "problem.card1.title": "You don't know what's happening in your crop",
    "problem.card1.desc": "You're not at the farm every day, so you don't find out about the problem until it's already done damage.",
    "problem.card2.title": "Your farm has no internet",
    "problem.card2.desc": "Existing tech tools require WiFi or cell signal that you don't have in the Amazon.",
    "problem.card3.title": "Losses are significant",
    "problem.card3.desc": "A pest detected late can destroy entire hectares. Your family's income depends on your decisions.",

    /* Problem - Farmer */
    "agro.problem.title": "We know how hard it is to grow palm in the Amazon",
    "agro.problem.card1.title": "You don't know when your palm needs water",
    "agro.problem.card1.desc": "Water stress can destroy your harvest if you don't detect it in time.",
    "agro.problem.card2.title": "Pests arrive without warning",
    "agro.problem.card2.desc": "Without constant monitoring, a pest can affect your entire block in a few days.",
    "agro.problem.card3.title": "Customize your own alarms",
    "agro.problem.card3.desc": "Set your own risk thresholds according to your crop needs.",

    /* Problem - Agronomist */
    "agroano.problem.title": "We know the challenges of supervising crops in the Amazon",
    "agroano.problem.card1.title": "You make decisions without field evidence",
    "agroano.problem.card1.desc": "70% of Peru's 95,000 hectares of palm are managed by small producers with limited access to technological tools.",
    "agroano.problem.card2.title": "Field visits are infrequent and costly",
    "agroano.problem.card2.desc": "Ucayali has only 40 technicians for thousands of hectares. You can't be in all your plantations at the same time.",
    "agroano.problem.card3.title": "Manual reports without traceability",
    "agroano.problem.card3.desc": "Generating technical reports for cooperatives and certifying bodies takes hours and data isn't linked to alerts or interventions.",

    /* How it Works - HOME */
    "how.title": "Here's how SmartPalm works",
    "how.farmer.title": "For the farmer",
    "how.farmer.step1.title": "Sensors in your field",
    "how.farmer.step1.desc": "Small devices measure humidity, temperature and soil conditions 24/7",
    "how.farmer.step2.title": "Alerts on your phone",
    "how.farmer.step2.desc": "Receive clear notifications like \"Your palm needs water\" even without internet",
    "how.farmer.step3.title": "Act in time",
    "how.farmer.step3.desc": "Save your harvest by detecting problems before it's too late",
    "how.farmer.cta": "I want to monitor my farm →",
    "how.agronomist.title": "For the agronomist",
    "how.agronomist.step1.title": "Your clients have sensors",
    "how.agronomist.step1.desc": "Each farm monitors 24/7 with devices that measure humidity, temperature and more",
    "how.agronomist.step2.title": "Data on your dashboard",
    "how.agronomist.step2.desc": "View all your plantations from your computer, without being in the field",
    "how.agronomist.step3.title": "Professional reports",
    "how.agronomist.step3.desc": "Generate PDF and CSV reports for cooperatives and certifying bodies with one click",
    "how.agronomist.cta": "Access the dashboard →",

    /* How it Works - AGRICULTOR page */
    "agro.how.title": "Here's how SmartPalm works",
    "agro.how.step1.title": "Sensors in your field",
    "agro.how.step1.desc": "Small devices measure soil humidity and temperature",
    "agro.how.step2.title": "Your phone receives the data",
    "agro.how.step2.desc": "Even if you have no internet or cell signal",
    "agro.how.step3.title": "Get timely alerts",
    "agro.how.step3.desc": "You'll know exactly when to act to care for your palm",
    "agro.how.cta": "Try 30 days free",

    /* How it Works - AGRÓNOMO page */
    "agroano.how.title": "How SmartPalm helps your work",
    "agroano.how.step1.title": "24/7 sensors on every farm",
    "agroano.how.step1.desc": "IoT devices measure humidity, temperature, pH and electrical conductivity. We process the data and detect when a parameter exceeds INIA thresholds.",
    "agroano.how.step2.title": "Dashboard with zone health status",
    "agroano.how.step2.desc": "Each zone has optimal, at risk or critical status (worst-wins rule). You receive alerts classified by severity: critical, warning or informational.",
    "agroano.how.step3.title": "Approve recommendations and generate reports",
    "agroano.how.step3.desc": "The AI engine generates recommendations you approve. Plan field visits (even offline), register inspections and generate PDF/CSV reports with full traceability.",
    "agroano.how.cta": "Try the dashboard",

    /* Team Video */
    "team.video.title": "Meet the team behind SmartPalm",
    "team.video.subtitle": "We're UPC students passionate about solving real problems in Peruvian agriculture",
    "video.team.placeholder": "Video: About the Team - TempWise",
    "video.team.hint": "Click to play",
    "video.contact": "Questions? Write to us at",
    "video.hint": "Click to play",

    /* Product Video */
    "agro.video.title": "See how SmartPalm helps farmers like you",
    "agro.video.placeholder": "Video: SmartPalm for Farmers",
    "agro.video.cta": "📱 Download App",

    "agroano.video.title": "See how SmartPalm makes your technical supervision easier",
    "agroano.video.placeholder": "Video: SmartPalm for Agronomists",
    "agroano.video.cta": "🔬 Access Dashboard",

    /* Selector */
    "selector.title": "Which one describes you best?",
    "selector.farmer.title": "I'm a palm oil farmer",
    "selector.farmer.desc": "I want to monitor my farm from my phone",
    "selector.farmer.cta": "Go to Farmer page →",
    "selector.agronomist.title": "I'm an agronomist",
    "selector.agronomist.desc": "I want to professionally supervise plantations",
    "selector.agronomist.cta": "Go to Agronomist page →",

    /* Benefits */
    "agro.benefits.title": "Everything you need to care for your palm",
    "agro.benefits.subtitle": "Simple, without internet, in your language",
    "agro.benefits.card1.title": "Intuitive mobile app",
    "agro.benefits.card1.desc": "Designed for any farmer. Monitor your palm from your phone without complications.",
    "agro.benefits.card2.title": "Clear alerts",
    "agro.benefits.card2.desc": "You'll know exactly what to do, not just that there's a problem. Like 'Water Block C now'.",
    "agro.benefits.card3.title": "INIA recommendations",
    "agro.benefits.card3.desc": "Advice anyone can understand, based on real research.",
    "agro.benefits.card4.title": "Simple reports",
    "agro.benefits.card4.desc": "Generate weekly reports of your farm. Download as PDF in seconds.",

    /* Benefits - Agronomist */
    "agroano.benefits.title": "Professional tools for agronomists",
    "agroano.benefits.subtitle": "Everything you need to supervise better",
    "agroano.benefits.card1.title": "Multi-plantation dashboard",
    "agroano.benefits.card1.desc": "Consolidate all your plantations in one view. Zone health status with worst-wins logic and historical parameter trends.",
    "agroano.benefits.card2.title": "Time series and zone comparison",
    "agroano.benefits.card2.desc": "View the evolution of humidity, temperature and pH per zone. Compare up to 3 zones in parallel to identify patterns.",
    "agroano.benefits.card3.title": "Severity-ranked alerts",
    "agroano.benefits.card3.desc": "Classified as critical, warning or informational. Each alert is linked to the zone and sensor that originated it.",
    "agroano.benefits.card4.title": "Field visit planning",
    "agroano.benefits.card4.desc": "Schedule visits, register inspections from the field (even offline) and link them to active alerts. Automatic synchronization.",
    "agroano.benefits.card5.title": "INIA-calibrated AI recommendations",
    "agroano.benefits.card5.desc": "AI engine generates automatic recommendations based on INIA parameters for Amazonian oil palm. You review and approve.",
    "agroano.benefits.card6.title": "Full traceability",
    "agroano.benefits.card6.desc": "Recommendation → Inspection → Intervention. Every decision is linked and generates a traceable report for cooperatives and certifying bodies.",
    "agroano.benefits.card7.title": "Automatic PDF and CSV reports",
    "agroano.benefits.card7.desc": "Generate ready-to-export technical reports. Include health status, period alerts, executed interventions, and pending recommendations.",
    "agroano.benefits.card8.title": "Access from any device",
    "agroano.benefits.card8.desc": "Responsive web platform. Access from your desktop at the office or your tablet in the field.",

    /* Pricing */
    "pricing.permonth": "/month",
    "pricing.cta.trial": "Start free trial",
    "pricing.cta.contact": "Contact sales",

    "agro.pricing.title": "Plans based on your farm size",
    "agro.pricing.subtitle": "All include 30 days free trial",
    "agro.pricing.plan1.tag": "Up to 10 hectares",
    "agro.pricing.plan1.f1": "App on your phone",
    "agro.pricing.plan1.f2": "Up to 5 sensors",
    "agro.pricing.plan1.f3": "Water and pest alerts",
    "agro.pricing.plan1.f4": "Basic reports",
    "agro.pricing.plan1.f5": "INIA recommendations",
    "agro.pricing.plan2.tag": "10 to 50 hectares",
    "agro.pricing.plan2.badge": "⭐ Most popular",
    "agro.pricing.plan2.f1": "Everything in Semilla",
    "agro.pricing.plan2.f2": "Up to 20 sensors",
    "agro.pricing.plan2.f3": "SMS alerts",
    "agro.pricing.plan2.f4": "Weekly reports",
    "agro.pricing.plan2.f5": "Block management",
    "agro.pricing.plan2.f6": "Access for your advisor",
    "agro.pricing.plan2.note": "📱 Includes free access for 1 technical advisor",
    "agro.pricing.contact": "50+ hectares?",
    "agro.pricing.contact.link": "Contact sales →",

    /* Pricing - Agronomist */
    "agro.pricing.title": "Plans based on your operation size",
    "agro.pricing.plan1.tag": "For farms of 10 to 50 hectares",
    "agro.pricing.plan1.badge": "⭐ Recommended",
    "agro.pricing.plan1.f1": "Complete dashboard",
    "agro.pricing.plan1.f2": "Up to 20 sensors",
    "agro.pricing.plan1.f3": "Weekly reports",
    "agro.pricing.plan1.f4": "Multi-block",
    "agro.pricing.plan1.f5": "Multi-client access",
    "agro.pricing.plan1.f6": "SMS alerts",
    "agro.pricing.plan2.tag": "Cooperatives and large farms",
    "agro.pricing.plan2.price": "Custom",
    "agro.pricing.plan2.f1": "Unlimited sensors",
    "agro.pricing.plan2.f2": "Everything in Cosecha",
    "agro.pricing.plan2.f3": "Dedicated agronomist advisor",
    "agro.pricing.plan2.f4": "Custom reports",
    "agro.pricing.plan2.f5": "Training for your team",

    /* Pricing Table */
    "pricing.table.feature": "Feature",
    "pricing.table.plan1": "Semilla",
    "pricing.table.plan2": "Cosecha",
    "pricing.table.plan3": "Palma Pro",
    "pricing.table.price": "Price",
    "pricing.table.hectares": "Hectares",
    "pricing.table.sensors": "Sensors",
    "pricing.table.app": "Mobile app",
    "pricing.table.sms": "SMS alerts",
    "pricing.table.dashboard": "Dashboard",
    "pricing.table.advisor": "Technical advisor",
    "pricing.table.custom": "Custom",
    "pricing.table.unlimited": "Unlimited",
    "pricing.table.upto10": "Up to 10",
    "pricing.table.reports": "Reports",
    "pricing.table.clients": "Multi-client",

    /* Team */
    "team.title": "Meet the team behind SmartPalm",
    "team.subtitle": "We're UPC students passionate about technology and Peruvian agriculture",
    "team.role": "Software Engineer · UPC",

    /* Footer */
    "footer.cta.title": "Ready to optimize your management?",
    "footer.cta.subtitle": "Join the network of agronomists already transforming palm productivity.",
    "footer.cta.button": "🔬 Access Dashboard",
    "footer.cta.button.farmer": "📱 Download App",
    "footer.brand.desc": "Satellite technology and artificial intelligence applied to technical supervision of high-yield tropical crops.",
    "footer.platform.title": "Platform",
    "footer.platform.alerts": "Stress Alerts",
    "footer.resources.title": "Resources",
    "footer.resources.help": "Help Center",
    "footer.resources.blog": "Agronomist Blog",
    "footer.contact.title": "Contact",
    "footer.contact.email": "hola@smartpalm.pe",
    "footer.contact.schedule": "Schedule a demo",
    "footer.terms": "Terms of Use",
    "footer.privacy": "Privacy",
    "footer.copyright": "© 2026 SmartPalm · Technology Solutions for Agriculture",
    "footer.social.linkedin": "LinkedIn",
    "footer.social.instagram": "Instagram",
    "footer.social.youtube": "YouTube",

    /* Dashboard Mockup */
    "dashboard.stat1": "Plantations",
    "dashboard.stat2": "Active sensors",
    "dashboard.stat3": "Active alerts",
    "dashboard.alert1": "Water stress – Fundo Los Palomos",
    "dashboard.alert2": "Low pH – Block 3",
    "dashboard.zone.optimal": "optimal",
    "dashboard.zone.risk": "at risk",
    "dashboard.zone.critical": "critical",

    /* Phone Alert */
    "phone.alert.title": "Your palm needs water",
    "phone.alert.location": "Block C",
    "phone.alert.time": "5 minutes ago",
    "phone.label": "SmartPalm App View",

    /* Modal - Contact Sales */
    "modal.contact.title": "Talk to sales",
    "modal.contact.subtitle": "Tell us about your farm and we'll help you choose the best plan",
    "modal.contact.field1": "Full name",
    "modal.contact.field1.placeholder": "Ex: John Smith",
    "modal.contact.field2": "WhatsApp",
    "modal.contact.field2.placeholder": "+51 999 123 456",
    "modal.contact.field3": "Farm location",
    "modal.contact.field3.placeholder": "Ex: Ucayali, Aguaytía",
    "modal.contact.field4": "Number of hectares",
    "modal.contact.field4.placeholder": "Ex: 25",
    "modal.contact.field5": "Do you already have sensors or is this your first time?",
    "modal.contact.field5.opt1": "First time with monitoring technology",
    "modal.contact.field5.opt2": "I already have sensors but want to improve",
    "modal.contact.field5.opt3": "I'm not sure",
    "modal.contact.field6": "Tell us more about your farm (optional)",
    "modal.contact.field6.placeholder": "Ex: I have 3 palm oil blocks in Ucayali...",
    "modal.contact.submit": "📱 Send via WhatsApp",
    "modal.contact.note": "We'll reply within 24 hours",
    "modal.contact.success.title": "Message sent!",
    "modal.contact.success.msg": "We'll contact you via WhatsApp within 24 hours.",
    "modal.contact.success.close": "Close"
  }
};

/* ============================
   STATE
=========================== */
let currentLang = localStorage.getItem('smartpalm_lang') || 'es';

/* ============================
   TRANSLATION FUNCTION
=========================== */
function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });
  document.documentElement.setAttribute('lang', lang === 'es' ? 'es-419' : 'en');
}

/* ============================
   TOGGLE LANGUAGE
=========================== */
function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('smartpalm_lang', currentLang);
  const toggle = document.getElementById('langToggle');
  toggle.classList.toggle('lang-en', currentLang === 'en');
  toggle.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === currentLang);
  });
  applyTranslations(currentLang);
}

/* ============================
   HEADER SCROLL
=========================== */
const header = document.getElementById('mainHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ============================
   MOBILE NAV
=========================== */
function openMobileNav() {
  document.getElementById('mobileNav').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================
   SALES MODAL
   =========================== */
function openSalesModal() {
  document.getElementById('salesForm').style.display = '';
  document.getElementById('salesSuccess').style.display = 'none';
  document.getElementById('salesModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSalesModal() {
  document.getElementById('salesModal').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('salesForm').style.display = '';
  document.getElementById('salesSuccess').style.display = '';
  document.getElementById('salesForm').reset();
}

function handleSalesSubmit(e) {
  e.preventDefault();
  const form = e.target;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const nombre = form.nombre.value.trim();
  const whatsapp = form.whatsapp.value.trim();
  const ubicacion = form.ubicacion.value.trim();
  const hectareas = form.hectareas.value.trim();
  const primeravez = form.primeravez.value;
  const mensaje = form.mensaje.value.trim();

  const contacto = {
    nombre,
    whatsapp,
    ubicacion,
    hectareas,
    primeravez,
    mensaje,
    timestamp: new Date().toISOString()
  };

  const historial = JSON.parse(localStorage.getItem('smartpalm_contactos') || '[]');
  historial.push(contacto);
  localStorage.setItem('smartpalm_contactos', JSON.stringify(historial));

  document.getElementById('salesForm').style.display = 'none';
  document.getElementById('salesSuccess').style.display = 'block';
  applyTranslations(currentLang);
}

const salesModal = document.getElementById('salesModal');
if (salesModal) {
  salesModal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeSalesModal();
  });
}

/* ============================
   SCROLL ANIMATIONS
   =========================== */
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-animate]').forEach(el => animObserver.observe(el));

/* ============================
   INITIALIZE
=========================== */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.classList.toggle('lang-en', currentLang === 'en');
    toggle.querySelectorAll('.lang-opt').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === currentLang);
    });
  }
  applyTranslations(currentLang);
});
