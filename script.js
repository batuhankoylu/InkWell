const scrollButtons = document.querySelectorAll("[data-scroll]");
const revealItems = document.querySelectorAll(".reveal");
const roleButtons = document.querySelectorAll(".role-switch__btn");
const nav = document.querySelector("#site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const parallaxItems = document.querySelectorAll("[data-parallax]");
const langButtons = document.querySelectorAll(".lang-switch__btn");
const forms = {
  user: document.querySelector("#user-form"),
  artist: document.querySelector("#artist-form"),
};
const feedback = document.querySelector("#form-feedback");

const i18n = {
  tr: {
    htmlLang: "tr",
    title: "Inkwell - Dovme Dunyasini Kesfet",
    description:
      "Inkwell ile aradigin dovmeciye veya dogru musteriye daha kolay ulas, konforlu bir eslesme deneyimi yas.",
    ogTitle: "Inkwell - Dovme Dunyasini Kesfet",
    ogDescription: "Inkwell ile kullanicilar ve dovmeciler arasinda hizli, rahat ve guvenli bir baglanti kur.",
    skipLink: "Ana icerige gec",
    menuLabel: "Menüyü aç/kapat",
    navLabel: "Ana menu",
    navAbout: "Hakkimizda",
    navFeatures: "Ozellikler",
    navScreens: "Ekranlar",
    navWaitlist: "Bekleme Listesi",
    navContact: "Iletisim",
    topCta: "Erken Erisim",
    heroEyebrow: "Yeni Nesil Dovme Platformu",
    heroTitle: "Aradigin dovme stilini ve dogru kisiyi daha hizli bul.",
    heroText:
      "Inkwell, dovmeci ile musteri arasinda rahat ve guven veren bir baglanti kurar. Musteri ihtiyacina uygun sanatciya ulasir, sanatci da dogru musteriyle kolayca eslesir.",
    heroCtaPrimary: "Bekleme Listesine Katil",
    heroCtaSecondary: "Nasil Calisir?",
    aboutEyebrow: "Hakkimizda",
    aboutTitle: "Vizyonumuz: dovme surecini herkes icin daha net, hizli ve konforlu hale getirmek.",
    aboutLead:
      "Inkwell, musteri tarafinda karar vermeyi kolaylastirir; sanatci tarafinda ise dogru talebi bulmayi hizlandirir. Ilk fikirden iletisime ve planlamaya kadar tum adimlar sade, anlasilir ve rahat bir deneyime donusur.",
    featuresEyebrow: "Ozellikler",
    featuresTitle: "Daha hizli eslesme, daha rahat iletisim ve daha guclu profil deneyimi.",
    featureTitle1: "Akilli Kesif Akisi",
    featureText1: "Tarz, butce ve lokasyon filtreleriyle musteri aradigini daha kisa surede bulur.",
    featureTitle2: "Sanatci Profilleri",
    featureText2: "Sanatcilar uzmanligini net gosteren profillerle dogru musteriye daha kolay ulasir.",
    featureTitle3: "Konforlu Eslestirme",
    featureText3: "Kullanici beklentisi ile sanatci hizmetini dogal bir akista bulusturan sistem.",
    featureTitle4: "Guvenli Iletisim",
    featureText4: "Ilk mesajdan randevu planlamasina kadar herkes icin rahat ve kontrollu iletisim.",
    screensEyebrow: "Uygulama Ekranlari",
    screensTitle: "Inkwell deneyimini arayuz uzerinden kesfet.",
    waitlistEyebrow: "Bekleme Listesi",
    waitlistTitle: "Ilk kullanicilar arasinda yerini al, erken erisim avantajlarini yakala.",
    roleUserBtn: "Kullanici Kaydi",
    roleArtistBtn: "Dovmeci Kaydi",
    labelUserName: "Ad Soyad",
    labelUserEmail: "E-posta",
    labelUserCity: "Sehir",
    userNamePlaceholder: "Adiniz Soyadiniz",
    userCityPlaceholder: "Istanbul",
    consentUser: "Bilgilendirme ve erken erisim iletisimi almayi kabul ediyorum.",
    submitUser: "Kullanici Olarak Kaydol",
    labelArtistName: "Studyo / Sanatci Adi",
    labelArtistEmail: "E-posta",
    labelArtistStyle: "Uzmanlik Stili",
    labelArtistCity: "Sehir",
    artistNamePlaceholder: "Studio Ink",
    artistStylePlaceholder: "Realism, Fine Line...",
    artistCityPlaceholder: "Ankara",
    consentArtist: "Bilgilendirme ve erken erisim iletisimi almayi kabul ediyorum.",
    submitArtist: "Dovmeci Olarak Kaydol",
    contactEyebrow: "Iletisim",
    contactTitle: "Ortakliklar, sanatci katilimi ve erken erisim icin Inkwell ile iletisimde kal.",
    contactCta: "Hemen Bekleme Listesine Katil",
    footerCopy: "© 2026 Inkwell. Tum haklari saklidir.",
    validationError: "Lutfen tum zorunlu alanlari eksiksiz doldurun.",
    submitSuccessUser: "Kullanici kaydiniz alindi. Inkwell erken erisim duyurulari e-posta ile iletilecek.",
    submitSuccessArtist: "Dovmeci kaydiniz alindi. Inkwell erken erisim duyurulari e-posta ile iletilecek.",
    logoAlt: "Inkwell logosu",
    heroScreenAlt: "Inkwell kesfet ekrani",
  },
  en: {
    htmlLang: "en",
    title: "Inkwell - Discover Tattoo Experience",
    description:
      "Find the right tattoo artist or customer faster with Inkwell and enjoy a comfortable matching experience.",
    ogTitle: "Inkwell - Discover Tattoo Experience",
    ogDescription: "Inkwell creates a fast, comfortable and trusted connection between clients and tattoo artists.",
    skipLink: "Skip to main content",
    menuLabel: "Open or close menu",
    navLabel: "Main navigation",
    navAbout: "About",
    navFeatures: "Features",
    navScreens: "Screens",
    navWaitlist: "Waitlist",
    navContact: "Contact",
    topCta: "Early Access",
    heroEyebrow: "Next-Gen Tattoo Platform",
    heroTitle: "Find the right tattoo style and person faster.",
    heroText:
      "Inkwell builds a trusted and comfortable connection between artists and clients. Clients find the right artist faster, and artists connect with better-fit requests.",
    heroCtaPrimary: "Join the Waitlist",
    heroCtaSecondary: "How It Works",
    aboutEyebrow: "About",
    aboutTitle: "Our vision is to make the tattoo journey clearer, faster and more comfortable for everyone.",
    aboutLead:
      "Inkwell simplifies decisions for clients and helps artists find the right demand quickly. From first idea to communication and planning, every step becomes simple and smooth.",
    featuresEyebrow: "Features",
    featuresTitle: "Faster matching, easier communication and stronger profile experience.",
    featureTitle1: "Smart Discovery Flow",
    featureText1: "Clients find what they need faster with style, budget and location filters.",
    featureTitle2: "Artist Profiles",
    featureText2: "Artists reach better-fit clients through clear profiles that show their expertise.",
    featureTitle3: "Comfortable Matching",
    featureText3: "A natural system that aligns client expectations with artist services.",
    featureTitle4: "Secure Communication",
    featureText4: "Comfortable and controlled communication from first message to appointment planning.",
    screensEyebrow: "App Screens",
    screensTitle: "Explore the Inkwell experience through the interface.",
    waitlistEyebrow: "Waitlist",
    waitlistTitle: "Be among the first users and unlock early-access benefits.",
    roleUserBtn: "User Signup",
    roleArtistBtn: "Artist Signup",
    labelUserName: "Full Name",
    labelUserEmail: "Email",
    labelUserCity: "City",
    userNamePlaceholder: "Your full name",
    userCityPlaceholder: "Istanbul",
    consentUser: "I agree to receive updates and early-access communications.",
    submitUser: "Sign Up as User",
    labelArtistName: "Studio / Artist Name",
    labelArtistEmail: "Email",
    labelArtistStyle: "Primary Style",
    labelArtistCity: "City",
    artistNamePlaceholder: "Studio Ink",
    artistStylePlaceholder: "Realism, Fine Line...",
    artistCityPlaceholder: "Ankara",
    consentArtist: "I agree to receive updates and early-access communications.",
    submitArtist: "Sign Up as Artist",
    contactEyebrow: "Contact",
    contactTitle: "Stay in touch with Inkwell for partnerships, artist onboarding and early access.",
    contactCta: "Join the Waitlist Now",
    footerCopy: "© 2026 Inkwell. All rights reserved.",
    validationError: "Please fill in all required fields.",
    submitSuccessUser: "Your user registration has been received. Inkwell early-access updates will be sent by email.",
    submitSuccessArtist: "Your artist registration has been received. Inkwell early-access updates will be sent by email.",
    logoAlt: "Inkwell logo",
    heroScreenAlt: "Inkwell discover screen",
  },
};

let currentLang = localStorage.getItem("inkwell-lang") || "tr";

const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
};

const applyLanguage = (lang) => {
  const t = i18n[lang] || i18n.tr;
  currentLang = lang;
  localStorage.setItem("inkwell-lang", lang);
  document.documentElement.lang = t.htmlLang;
  document.title = t.title;

  const metaDesc = document.querySelector('meta[name="description"]');
  const metaOgTitle = document.querySelector('meta[property="og:title"]');
  const metaOgDesc = document.querySelector('meta[property="og:description"]');
  const metaTwitterTitle = document.querySelector('meta[name="twitter:title"]');
  const metaTwitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (metaDesc) metaDesc.setAttribute("content", t.description);
  if (metaOgTitle) metaOgTitle.setAttribute("content", t.ogTitle);
  if (metaOgDesc) metaOgDesc.setAttribute("content", t.ogDescription);
  if (metaTwitterTitle) metaTwitterTitle.setAttribute("content", t.ogTitle);
  if (metaTwitterDesc) metaTwitterDesc.setAttribute("content", t.ogDescription);

  setText("skip-link", t.skipLink);
  setText("nav-about", t.navAbout);
  setText("nav-features", t.navFeatures);
  setText("nav-screens", t.navScreens);
  setText("nav-waitlist", t.navWaitlist);
  setText("nav-contact", t.navContact);
  setText("top-cta", t.topCta);
  setText("hero-eyebrow", t.heroEyebrow);
  setText("hero-title", t.heroTitle);
  setText("hero-text", t.heroText);
  setText("hero-cta-primary", t.heroCtaPrimary);
  setText("hero-cta-secondary", t.heroCtaSecondary);
  setText("about-eyebrow", t.aboutEyebrow);
  setText("about-title", t.aboutTitle);
  setText("about-lead", t.aboutLead);
  setText("features-eyebrow", t.featuresEyebrow);
  setText("features-title", t.featuresTitle);
  setText("feature-title-1", t.featureTitle1);
  setText("feature-text-1", t.featureText1);
  setText("feature-title-2", t.featureTitle2);
  setText("feature-text-2", t.featureText2);
  setText("feature-title-3", t.featureTitle3);
  setText("feature-text-3", t.featureText3);
  setText("feature-title-4", t.featureTitle4);
  setText("feature-text-4", t.featureText4);
  setText("screens-eyebrow", t.screensEyebrow);
  setText("screens-title", t.screensTitle);
  setText("waitlist-eyebrow", t.waitlistEyebrow);
  setText("waitlist-title", t.waitlistTitle);
  setText("role-user-btn", t.roleUserBtn);
  setText("role-artist-btn", t.roleArtistBtn);
  setText("label-user-name", t.labelUserName);
  setText("label-user-email", t.labelUserEmail);
  setText("label-user-city", t.labelUserCity);
  setText("consent-user", t.consentUser);
  setText("submit-user", t.submitUser);
  setText("label-artist-name", t.labelArtistName);
  setText("label-artist-email", t.labelArtistEmail);
  setText("label-artist-style", t.labelArtistStyle);
  setText("label-artist-city", t.labelArtistCity);
  setText("consent-artist", t.consentArtist);
  setText("submit-artist", t.submitArtist);
  setText("contact-eyebrow", t.contactEyebrow);
  setText("contact-title", t.contactTitle);
  setText("contact-cta", t.contactCta);
  setText("footer-copy", t.footerCopy);

  const userName = document.getElementById("user-name");
  const userCity = document.getElementById("user-city");
  const artistName = document.getElementById("artist-name");
  const artistStyle = document.getElementById("artist-style");
  const artistCity = document.getElementById("artist-city");
  if (userName) userName.placeholder = t.userNamePlaceholder;
  if (userCity) userCity.placeholder = t.userCityPlaceholder;
  if (artistName) artistName.placeholder = t.artistNamePlaceholder;
  if (artistStyle) artistStyle.placeholder = t.artistStylePlaceholder;
  if (artistCity) artistCity.placeholder = t.artistCityPlaceholder;

  if (menuToggle) menuToggle.setAttribute("aria-label", t.menuLabel);
  if (nav) nav.setAttribute("aria-label", t.navLabel);
  const logoImage = document.getElementById("logo-image");
  const heroScreenImage = document.getElementById("hero-screen-image");
  if (logoImage) logoImage.alt = t.logoAlt;
  if (heroScreenImage) heroScreenImage.alt = t.heroScreenAlt;

  langButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
};

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = nav.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);
    if (!clickedInsideMenu && !clickedToggle && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.focus();
    }
  });
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.dataset.lang || "tr");
  });
});

scrollButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.scroll);
    if (!target) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
    if (nav && menuToggle && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

const setupParallax = () => {
  if (!parallaxItems.length) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const disableParallax = reduceMotion || window.innerWidth <= 900;

  if (disableParallax) {
    parallaxItems.forEach((item) => item.style.setProperty("--parallax-y", "0px"));
    return;
  }

  const scrollY = window.scrollY;
  parallaxItems.forEach((item) => {
    const speed = Number(item.dataset.parallax || 0.04);
    const elementTop = item.getBoundingClientRect().top + scrollY;
    const distance = scrollY - elementTop;
    const y = Math.max(-18, Math.min(18, distance * speed));
    item.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
  });
};

let parallaxFrame = null;
const requestParallax = () => {
  if (parallaxFrame) return;
  parallaxFrame = window.requestAnimationFrame(() => {
    setupParallax();
    parallaxFrame = null;
  });
};

window.addEventListener("scroll", requestParallax, { passive: true });
window.addEventListener("resize", requestParallax);
setupParallax();

roleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const role = btn.dataset.role;

    roleButtons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");

    Object.entries(forms).forEach(([key, form]) => {
      if (!form) return;
      form.classList.toggle("is-active", key === role);
    });

    if (feedback) feedback.textContent = "";
  });
});

Object.values(forms).forEach((form) => {
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      if (feedback) feedback.textContent = i18n[currentLang].validationError;
      return;
    }

    const role = form.id === "artist-form" ? "Dovmeci" : "Kullanici";
    if (feedback) {
      feedback.textContent = role === "Dovmeci" ? i18n[currentLang].submitSuccessArtist : i18n[currentLang].submitSuccessUser;
    }
    form.reset();
  });
});

applyLanguage(currentLang);
