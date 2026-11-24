const translations = {
  en: {
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_policies: "Policies",
    nav_contact: "Contact",
    cta_book: "Book Now",
    hero_title: "Elevate Your Natural Beauty",
    hero_subtitle: "Lash extensions, brow lamination, and precision nail care in [City, State]. Clean techniques, tailored results, effortless booking.",
    hero_cta: "Explore Services & Book",
    services_title: "Services & Pricing",
    services_subtitle: "Select a category to view durations and starting rates.",
    tab_lashes: "Lashes",
    tab_brows: "Brows",
    tab_nails: "Nails",
    book_item: "Select",
    gallery_title: "Recent Work",
    gallery_subtitle: "Real results from our studio chair.",
    gal_1: "Lash Set / Before & After Slot",
    gal_2: "Brow Lamination Slot",
    gal_3: "Gel-X / Manicure Slot",
    reviews_title: "Client Reviews",
    reviews_subtitle: "Verified feedback from local clients.",
    rev_1: "\"Super clean studio and my hybrid lashes lasted over three weeks with great retention.\"",
    rev_2: "\"Best brow shaping and tint I have found in town. Natural and balanced.\"",
    rev_3: "\"Attention to detail on cuticle work and builder gel is unmatched.\"",
    policies_title: "Studio Policies",
    policies_subtitle: "Clear guidelines so every appointment runs smoothly.",
    pol_1_title: "Booking Deposit",
    pol_1_desc: "A non-refundable deposit is required to secure your spot and goes toward your total.",
    pol_2_title: "Rescheduling & Cancellations",
    pol_2_desc: "Please notify us at least 24 hours in advance to reschedule without losing your deposit.",
    pol_3_title: "Late Arrival",
    pol_3_desc: "Appointments arriving more than 10–15 minutes late may need to be modified or rescheduled.",
    pol_4_title: "Fill Eligibility",
    pol_4_desc: "Fills require at least 40% of extensions remaining within 2–3 weeks; otherwise a full set applies.",
    footer_addr: "123 Main Street, Suite 200, [City, State] ZIP",
    footer_hours_title: "Hours",
    footer_hours: "Tue–Sat: 9:00 AM – 7:00 PM | Sun–Mon: Closed",
    footer_social_title: "Connect"
  },
  es: {
    nav_services: "Servicios",
    nav_gallery: "Galería",
    nav_policies: "Políticas",
    nav_contact: "Contacto",
    cta_book: "Reservar",
    hero_title: "Realza tu belleza natural",
    hero_subtitle: "Extensiones de pestañas, laminado de cejas y cuidado de uñas en [Ciudad, Estado]. Técnica limpia, resultados a medida y reserva rápida.",
    hero_cta: "Ver Servicios y Reservar",
    services_title: "Servicios y Precios",
    services_subtitle: "Elige una categoría para ver duración y precios base.",
    tab_lashes: "Pestañas",
    tab_brows: "Cejas",
    tab_nails: "Uñas",
    book_item: "Elegir",
    gallery_title: "Trabajos Recientes",
    gallery_subtitle: "Resultados reales en nuestro estudio.",
    gal_1: "Espacio Pestañas / Antes y Después",
    gal_2: "Espacio Laminado de Cejas",
    gal_3: "Espacio Gel-X / Manicura",
    reviews_title: "Reseñas de Clientas",
    reviews_subtitle: "Opiniones reales de clientas locales.",
    rev_1: "\"El estudio es impecable y mis pestañas híbridas duraron más de tres semanas con excelente retención.\"",
    rev_2: "\"El mejor diseño y tinte de cejas que he encontrado aquí. Muy natural y armónico.\"",
    rev_3: "\"El detalle en cutícula y builder gel no tiene comparación.\"",
    policies_title: "Políticas del Salón",
    policies_subtitle: "Reglas claras para que cada cita fluya sin contratiempos.",
    pol_1_title: "Depósito de Reserva",
    pol_1_desc: "Se solicita un depósito no reembolsable para apartar tu espacio y se abona al servicio.",
    pol_2_title: "Cambios y Cancelaciones",
    pol_2_desc: "Avisa con al menos 24 horas de anticipación para reagendar sin perder tu depósito.",
    pol_3_title: "Llegadas Tarde",
    pol_3_desc: "Si llegas con más de 10–15 minutos de retraso, el servicio podría ajustarse o reagendarse.",
    pol_4_title: "Retoques (Refills)",
    pol_4_desc: "Requieren al menos 40% de extensiones en 2–3 semanas; de lo contrario aplica set completo.",
    footer_addr: "123 Main Street, Suite 200, [Ciudad, Estado] ZIP",
    footer_hours_title: "Horarios",
    footer_hours: "Mar–Sáb: 9:00 AM – 7:00 PM | Dom–Lun: Cerrado",
    footer_social_title: "Redes"
  }
};

const servicesData = {
  lashes: [
    { en: "Classic Full Set", es: "Set Clásico Completo", duration: "120 min", price: "$140" },
    { en: "Hybrid Full Set", es: "Set Híbrido Completo", duration: "135 min", price: "$165" },
    { en: "Volume / Mega Volume", es: "Volumen / Mega Volumen", duration: "150 min", price: "$190+" },
    { en: "Lash Lift & Tint", es: "Lifting y Tinte de Pestañas", duration: "60 min", price: "$95" }
  ],
  brows: [
    { en: "Brow Lamination", es: "Laminado de Cejas", duration: "45 min", price: "$85" },
    { en: "Brow Shaping & Tint", es: "Diseño y Tinte de Cejas", duration: "30 min", price: "$45" },
    { en: "Brow Lamination + Tint + Shape", es: "Laminado + Diseño + Tinte", duration: "60 min", price: "$115" }
  ],
  nails: [
    { en: "Gel-X Extensions", es: "Extensiones Gel-X", duration: "90 min", price: "$80+" },
    { en: "Builder Gel (BIAB) Manicure", es: "Manicura Builder Gel (BIAB)", duration: "75 min", price: "$70+" },
    { en: "Tiered Nail Art Add-On", es: "Diseño Nail Art por Nivel", duration: "15–30 min", price: "$15+" }
  ]
};

let currentLang = "en";
let currentTab = "lashes";

function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;

  const items = servicesData[currentTab] || [];

  container.innerHTML = items.map(item => `
    <div class="service-card">
      <div>
        <strong>${item[currentLang]}</strong>
        <div class="service-meta">${item.duration}</div>
      </div>
      <div class="service-right">
        <span class="price">${item.price}</span>
        <a href="#booking" class="btn btn-outline">${translations[currentLang].book_item}</a>
      </div>
    </div>
  `).join("");
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  renderServices();
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentTab = btn.dataset.tab;
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b === btn));
    renderServices();
  });
});

renderServices();