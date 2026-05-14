/**
 * @fileoverview Internationalization (i18n) and UI interaction logic
 * for the SmartPalm platform by TempWise (UPC).
 * @version 1.0.0
 */

/**
 * Translation dictionary containing localized strings.
 * Organized by language code and hierarchical keys.
 * @type {Object.<string, Object.<string, string>>}
 */

  const translations = {
    en: {
      /* ... (English strings) ... */
      "nav.benefits":   "Benefits",
      "nav.segments":   "Segments",
      "nav.pricing":    "Pricing",
      "nav.team":       "Team",
      "nav.login":      "Login",
      "hero.title":     "Revolutionize <em>palm oil</em> farming in the Amazon",
      "hero.subtitle":  "SmartPalm delivers real-time agronomic intelligence directly to your farm — no internet required. Edge computing + LoRaWAN + AI calibrated with INIA parameters.",
      "hero.cta.grower":    "Download App",
      "hero.cta.agronomist":"Web Dashboard",
      "hero.stat1": "Uptime offline",
      "hero.stat2": "Day free trial",
      "hero.stat3": "Alert latency",
      "trust.inia":  "INIA Certified Parameters",
      "trust.edge":  "Edge Computing",
      "trust.ai":    "AI-Powered Alerts",
      "trust.app":   "iOS & Android App",
      "about.label": "About the Product",
      "about.title": "Precision agriculture, even without signal",
      "about.desc":  "See how SmartPalm nodes collect soil, climate, and phytosanitary data in real time — syncing via LoRaWAN mesh and processing everything at the edge, so farmers always have actionable insights.",
      "alert.info":  "Informational",
      "alert.warn":  "Warning",
      "alert.crit":  "Critical",
      "video.product.placeholder": "SmartPalm Product Demo Video",
      "video.team.placeholder":    "TempWise Team Introduction Video",
      "benefits.label": "Key Benefits",
      "benefits.title": "Everything your farm needs, built for the Amazon",
      "benefits.desc":  "Four pillars that make SmartPalm the most reliable agronomic intelligence platform for tropical palm oil cultivation.",
      "feat1.title": "100% Offline Operation",
      "feat1.desc":  "Edge computing + LoRaWAN mesh means your nodes collect and process data locally. No mobile signal, no Wi-Fi, no problem — intelligence lives at the farm, not in the cloud.",
      "feat2.title": "Critical Real-Time Alerts",
      "feat2.desc":  "Three-tier alert system (Informational → Warning → Critical) for water stress, phytosanitary events, and extreme weather. Get notified under 2 seconds via mobile notification.",
      "feat3.title": "AI + INIA Parameters",
      "feat3.desc":  "Our agronomic engine is calibrated with INIA's research data for Amazonian palm oil varieties — delivering recommendations aligned with Peru's best agricultural science.",
      "feat4.title": "Exportable Technical Reports",
      "feat4.desc":  "Generate PDF and CSV agronomic reports per block, per period, or per node — ready to share with cooperatives, certifying bodies, or financial institutions.",
      "seg.label":       "Who is SmartPalm for?",
      "seg.title":       "Built for two critical players in the value chain",
      "seg.grower.tag":  "🌴 Palm Grower / Agricultor",
      "seg.grower.title":"Manage your plantation from your phone, no internet needed",
      "seg.grower.desc": "Designed for farmers in remote Amazonian areas with limited connectivity. Get alerts, recommendations, and crop health status directly on your mobile device via SmartPalm App.",
      "seg.grower.p1":   "Simple interface, works without WiFi or 4G",
      "seg.grower.p2":   "Push alerts for pests, irrigation, and fertilization",
      "seg.grower.p3":   "Available in Spanish for Amazonian communities",
      "seg.grower.p4":   "Long-range sensors cover up to 15 km per gateway",
      "seg.grower.cta":  "Download App",
      "seg.agro.tag":    "🔬 Agronomist / Ingeniero Agrónomo",
      "seg.agro.title":  "Monitor and manage multiple plantations from one dashboard",
      "seg.agro.desc":   "A professional web platform for agronomic consultants overseeing multiple clients and farms. Advanced analytics, report generation, and multi-site sensor management.",
      "seg.agro.p1":     "Multi-farm, multi-client portfolio management",
      "seg.agro.p2":     "Advanced charts: NDVI trends, soil moisture maps",
      "seg.agro.p3":     "Exportable PDF/CSV technical reports",
      "seg.agro.p4":     "Agronomic AI recommendations with INIA calibration",
      "seg.agro.cta":    "Access Web Platform",
      "pricing.label":   "Pricing Plans",
      "pricing.title":   "Transparent pricing for every farm size",
      "pricing.desc":    "No free tier — but every plan includes a 30-day free trial with no credit card required. Cancel anytime.",
      "plan1.name":  "🌱 Semilla",
      "plan1.ha":    "Up to 10 hectares",
      "plan1.f1":    "Up to 5 IoT sensor nodes",
      "plan1.f2":    "SmartPalm mobile app",
      "plan1.f3":    "Real-time push alerts",
      "plan1.f4":    "Monthly basic reports",
      "plan1.f5":    "INIA AI recommendations",
      "plan2.name":  "🌾 Cosecha",
      "plan2.ha":    "10 – 50 hectares",
      "plan2.popular":"Most Popular",
      "plan2.f1":    "Up to 20 IoT sensor nodes",
      "plan2.f2":    "Mobile app + Web dashboard",
      "plan2.f3":    "Critical & warning alerts with SMS",
      "plan2.f4":    "Weekly exportable PDF/CSV reports",
      "plan2.f5":    "Multi-block management",
      "plan2.f6":    "Agronomist portal access",
      "plan3.name":  "🏆 Palma Pro",
      "plan3.price": "Custom",
      "plan3.ha":    "50+ hectares · Enterprise",
      "plan3.f1":    "Unlimited IoT nodes",
      "plan3.f2":    "All Cosecha features",
      "plan3.f3":    "Dedicated agronomic advisor",
      "plan3.f4":    "Custom API integration & webhooks",
      "plan3.f5":    "SLA 99.9% with priority support",
      "plan3.f6":    "Multi-cooperative management",
      "plan3.cta":   "Contact Sales",
      "plan.permonth":"/ month",
      "plan.trial":  "30-day free trial",
      "plan.cta.trial":"Start Free Trial",
      "team.label":  "Meet the Team",
      "team.title":  "Built by Software Engineering students at UPC",
      "team.desc":   "TempWise is a student startup from Universidad Peruana de Ciencias Aplicadas (UPC). We are six software engineers passionate about AgTech, IoT, and sustainable agriculture in Peru.",
      "team.role":   "Software Engineer · UPC",
      "team.video.title": "Meet us in person 👋",
      "footer.brand.desc": "IoT precision agriculture for palm oil cultivation in the Peruvian Amazon. By TempWise · UPC Software Engineering.",
      "footer.product": "Product",
      "footer.company": "Company",
      "footer.legal":   "Legal",
      "footer.about":   "About",
      "footer.tos":     "📋 Terms of Service",
      "footer.privacy": "Privacy Policy",
      "footer.cookies": "Cookie Policy",
      "footer.rights":  "All rights reserved.",
    },
    es: {
      /* ... (Spanish strings) ... */
      "nav.benefits":   "Beneficios",
      "nav.segments":   "Segmentos",
      "nav.pricing":    "Precios",
      "nav.team":       "Equipo",
      "nav.login":      "Ingresar",
      "hero.title":     "Revoluciona el cultivo de <em>palma aceitera</em> en la Amazonía",
      "hero.subtitle":  "SmartPalm entrega inteligencia agronómica en tiempo real directamente a tu campo — sin internet. Edge computing + LoRaWAN + IA calibrada con parámetros del INIA.",
      "hero.cta.grower":    "Descargar App",
      "hero.cta.agronomist":"Acceder al Dashboard",
      "hero.stat1": "Disponibilidad sin internet",
      "hero.stat2": "Días de prueba gratuita",
      "hero.stat3": "Latencia de alertas",
      "trust.inia":  "Parámetros Certificados INIA",
      "trust.edge":  "Edge Computing",
      "trust.ai":    "Alertas con IA",
      "trust.app":   "App iOS & Android",
      "about.label": "Sobre el Producto",
      "about.title": "Agricultura de precisión, incluso sin señal",
      "about.desc":  "Conoce cómo los nodos SmartPalm recopilan datos de suelo, clima y fitosanidad en tiempo real — sincronizando por red LoRaWAN y procesando todo en el edge, para que los agricultores siempre tengan información accionable.",
      "alert.info":  "Informativo",
      "alert.warn":  "Advertencia",
      "alert.crit":  "Crítico",
      "video.product.placeholder": "Video Demostración de SmartPalm",
      "video.team.placeholder":    "Video de Presentación del Equipo TempWise",
      "benefits.label": "Beneficios Clave",
      "benefits.title": "Todo lo que tu cultivo necesita, diseñado para la Amazonía",
      "benefits.desc":  "Cuatro pilares que hacen de SmartPalm la plataforma de inteligencia agronómica más confiable para el cultivo tropical de palma aceitera.",
      "feat1.title": "100% Operación Offline",
      "feat1.desc":  "Edge computing + malla LoRaWAN significa que tus nodos recopilan y procesan datos localmente. Sin señal móvil, sin Wi-Fi, sin problema — la inteligencia vive en el campo, no en la nube.",
      "feat2.title": "Alertas Críticas en Tiempo Real",
      "feat2.desc":  "Sistema de alerta de tres niveles (Informativo → Advertencia → Crítico) para estrés hídrico, eventos fitosanitarios y clima extremo. Recibe notificaciones en menos de 2 segundos.",
      "feat3.title": "IA + Parámetros INIA",
      "feat3.desc":  "Nuestro motor agronómico está calibrado con datos de investigación del INIA para variedades amazónicas de palma aceitera — entregando recomendaciones alineadas con la mejor ciencia agrícola del Perú.",
      "feat4.title": "Reportes Técnicos Exportables",
      "feat4.desc":  "Genera reportes agronómicos en PDF y CSV por bloque, por período o por nodo — listos para compartir con cooperativas, organismos certificadores o entidades financieras.",
      "seg.label":       "¿Para quién es SmartPalm?",
      "seg.title":       "Diseñado para dos actores clave en la cadena de valor",
      "seg.grower.tag":  "🌴 Agricultor / Palm Grower",
      "seg.grower.title":"Gestiona tu plantación desde tu celular, sin internet",
      "seg.grower.desc": "Diseñado para agricultores en zonas remotas de la Amazonía con conectividad limitada. Recibe alertas, recomendaciones y el estado de salud del cultivo directamente en tu dispositivo móvil.",
      "seg.grower.p1":   "Interfaz simple, funciona sin WiFi ni 4G",
      "seg.grower.p2":   "Alertas push para plagas, riego y fertilización",
      "seg.grower.p3":   "Disponible en español para comunidades amazónicas",
      "seg.grower.p4":   "Sensores de largo alcance cubren hasta 15 km por gateway",
      "seg.grower.cta":  "Descargar Aplicación",
      "seg.agro.tag":    "🔬 Ingeniero Agrónomo / Agronomist",
      "seg.agro.title":  "Monitorea y gestiona múltiples plantaciones desde un dashboard",
      "seg.agro.desc":   "Una plataforma web profesional para ingenieros agrónomos que asesoran múltiples clientes y fundos. Analítica avanzada, generación de reportes y gestión multi-sitio de sensores.",
      "seg.agro.p1":     "Gestión de portafolio multi-fundo y multi-cliente",
      "seg.agro.p2":     "Gráficos avanzados: tendencias NDVI, mapas de humedad",
      "seg.agro.p3":     "Reportes técnicos exportables en PDF/CSV",
      "seg.agro.p4":     "Recomendaciones IA con calibración INIA",
      "seg.agro.cta":    "Acceder a la Plataforma Web",
      "pricing.label":   "Planes y Precios",
      "pricing.title":   "Precios transparentes para cada tamaño de fundo",
      "pricing.desc":    "Sin capa gratuita — pero todos los planes incluyen 30 días de prueba sin tarjeta de crédito. Cancela cuando quieras.",
      "plan1.name":  "🌱 Semilla",
      "plan1.ha":    "Hasta 10 hectáreas",
      "plan1.f1":    "Hasta 5 nodos sensores IoT",
      "plan1.f2":    "App móvil SmartPalm",
      "plan1.f3":    "Alertas push en tiempo real",
      "plan1.f4":    "Reportes básicos mensuales",
      "plan1.f5":    "Recomendaciones IA INIA",
      "plan2.name":  "🌾 Cosecha",
      "plan2.ha":    "10 – 50 hectáreas",
      "plan2.popular":"Más Popular",
      "plan2.f1":    "Hasta 20 nodos sensores IoT",
      "plan2.f2":    "App móvil + Dashboard web",
      "plan2.f3":    "Alertas críticas y de advertencia con SMS",
      "plan2.f4":    "Reportes semanales exportables PDF/CSV",
      "plan2.f5":    "Gestión multi-bloque",
      "plan2.f6":    "Acceso al portal del agrónomo",
      "plan3.name":  "🏆 Palma Pro",
      "plan3.price": "A medida",
      "plan3.ha":    "50+ hectáreas · Empresarial",
      "plan3.f1":    "Nodos IoT ilimitados",
      "plan3.f2":    "Todas las características de Cosecha",
      "plan3.f3":    "Asesor agronómico dedicado",
      "plan3.f4":    "Integración API personalizada y webhooks",
      "plan3.f5":    "SLA 99.9% con soporte prioritario",
      "plan3.f6":    "Gestión multi-cooperativa",
      "plan3.cta":   "Contactar Ventas",
      "plan.permonth":"/ mes",
      "plan.trial":  "30 días de prueba gratis",
      "plan.cta.trial":"Iniciar Prueba Gratis",
      "team.label":  "Conoce al Equipo",
      "team.title":  "Creado por estudiantes de Ingeniería de Software de la UPC",
      "team.desc":   "TempWise es una startup estudiantil de la Universidad Peruana de Ciencias Aplicadas (UPC). Somos seis ingenieros de software apasionados por el AgTech, el IoT y la agricultura sostenible en Perú.",
      "team.role":   "Ingeniero de Software · UPC",
      "team.video.title": "Conócenos en persona 👋",
      "footer.brand.desc": "Agricultura de precisión IoT para el cultivo de palma aceitera en la Amazonía peruana. Por TempWise · Ingeniería de Software UPC.",
      "footer.product": "Producto",
      "footer.company": "Empresa",
      "footer.legal":   "Legal",
      "footer.about":   "Nosotros",
      "footer.tos":     "📋 Términos y Condiciones de Servicio",
      "footer.privacy": "Política de Privacidad",
      "footer.cookies": "Política de Cookies",
      "footer.rights":  "Todos los derechos reservados.",
    }
  };

  /**
   * Currently selected language.
   * @type {string}
   * @default 'en'
   */
  let currentLang = 'en';

  /**
   * Updates the DOM elements with translations based on the provided language.
   * Targets elements with the `data-i18n` attribute.
   * 
   * @function applyTranslations
   * @param {('en'|'es')} lang - The language code to apply.
   * @returns {void}
   */
  function applyTranslations(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (key === 'hero.title') {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });
    document.documentElement.setAttribute('lang', lang === 'es' ? 'es-419' : 'en');
  }


  /**
   * Toggles the application language between English and Spanish.
   * Updates the UI label and triggers the DOM translation update.
   * 
   * @function toggleLang
   * @returns {void}
   */
  function toggleLang() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    document.getElementById('langLabel').textContent = currentLang === 'en' ? 'ES' : 'EN';
    applyTranslations(currentLang);
  }

  /**
   * Reference to the main navigation header.
   * @type {HTMLElement}
   */
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  /**
   * Displays the mobile navigation menu and disables body scrolling.
   * @function openMobileNav
   * @returns {void}
   */
  function openMobileNav()  { document.getElementById('mobileNav').classList.add('open'); document.body.style.overflow = 'hidden'; }

  /**
   * Hides the mobile navigation menu and restores body scrolling.
   * @function closeMobileNav
   * @returns {void}
   */
  function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); document.body.style.overflow = ''; }

  /**
   * IntersectionObserver to trigger entry animations.
   * Uses a staggered delay if multiple elements intersect at once.
   * 
   * @type {IntersectionObserver}
   */
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  /**
   * Initialize observation for all elements with the `data-animate` attribute.
   */
  document.querySelectorAll('[data-animate]').forEach(el => animObserver.observe(el));