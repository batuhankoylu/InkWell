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
    title: "Inkwell - Dövme Dünyasını Keşfet",
    description:
      "Inkwell, doğru dövme stilini ve doğru sanatçıyı güvenle buluşturan bir eşleşme deneyimi sunar.",
    ogTitle: "Inkwell - Dövme Dünyasını Keşfet",
    ogDescription:
      "Inkwell; keşiften iletişime, teklif almadan randevu oluşturmaya kadar tüm süreci tek akışta birleştirir.",
    skipLink: "Ana içeriğe geç",
    menuLabel: "Menüyü aç/kapat",
    navLabel: "Ana menu",
    navAbout: "Hakkımızda",
    navFeatures: "Özellikler & Ekranlar",
    navScreens: "Ekranlar",
    navWaitlist: "Bekleme Listesi",
    navContact: "İletişim",
    topCta: "Erken Erişim",
    heroEyebrow: "Yeni Nesil Dövme Platformu",
    heroTitle: "Doğru dövme stilini, doğru sanatçıyla buluştur.",
    heroText:
      "Inkwell, dövme yaptırmak isteyenlerle alanında uzman sanatçıları güvenle bir araya getirir. Kullanıcılar için en doğru eşleşmeyi sunar, sanatçılar için ise kendileri için en uygun müşterilerle buluşmasını sağlar.",
    heroCtaPrimary: "Bekleme Listesine Katıl",
    heroCtaSecondary: "Nasıl Çalışır?",
    aboutEyebrow: "Hakkımızda",
    aboutTitle: "Misyonumuz",
    aboutLead: "",
    aboutMissionTitle: "Misyonumuz",
    missionText1: "Dövme sürecini herkes için daha net, hızlı ve konforlu hale getirmek.",
    missionText2:
      "Inkwell, dövme yaptırmak isteyenler için karar sürecini sadeleştirir; sanatçılar için doğru taleple buluşmayı kolaylaştırır.",
    visionTitle: "Vizyonumuz",
    visionText:
      "Dövme dünyasında sanatçılar ve kullanıcılar arasında güvene dayalı en güçlü bağlantıyı kuran, doğru eşleşmenin standart olduğu bir platform olmak.",
    fsEyebrow: "Özellikler & Ekranlar",
    fsTitle: "Doğru eşleşmeler, akıcı iletişim ve uçtan uca tasarlanmış bir dövme deneyimi.",
    fsLead:
      "Inkwell; keşiften iletişime, teklif almadan randevu oluşturmaya kadar tüm süreci tek bir akışta birleştirir. Kullanıcılar ilham alır, tarzına uygun sanatçıları keşfeder ve doğrudan fiyat teklifi alarak karar verir. Sanatçılar ise çalışmalarını öne çıkarır, doğru kitleye ulaşır ve kendileri için en uygun projelerle buluşur.",
    ppTitle1: "Kişiselleştirilmiş Ana Akış",
    ppText1: "Takip ettiğin sanatçıların paylaşımlarını tek bir akışta keşfet, ilhamını sürekli güncel tut.",
    ppAlt1: "Inkwell kişiselleştirilmiş ana akış ekranı",
    ppTitle2: "Gelişmiş Keşfet & Arama",
    ppText2: "Tarz, şehir, hashtag veya sanatçıya göre arama yaparak sana en uygun dövmeleri ve sanatçıları kolayca bul.",
    ppAlt2: "Inkwell keşfet ve arama ekranı",
    ppTitle3: "Sanatçılar İçin Güçlü Paylaşım",
    ppText3: "Tasarım ve uygulama çalışmalarını hashtag’lerle paylaş, görünürlüğünü artır ve doğru kitleye ulaş.",
    ppAlt3: "Inkwell paylaşım ekranı",
    ppTitle4: "Teklif Al & Karşılaştır",
    ppText4:
      "Yaptırmak istediğin dövmeyi yükle, birden fazla sanatçıdan teklif al ve sana en uygun olanı seç. Tüm teklifler bağımsız değerlendirilir, süreç tamamen şeffaf ve kontrollüdür.",
    ppAlt4: "Inkwell teklif ve karşılaştırma ekranı",
    ppTitle5: "Mesajlaşma & Güvenli İletişim",
    ppText5:
      "Sanatçılarla doğrudan iletişime geç, randevu oluştur ve süreci kolayca yönet. Gelişmiş şikayet sistemi ile güvenli bir ortamda iletişim kur.",
    ppAlt5: "Inkwell mesajlaşma ekranı",
    ppTitle6: "Profil & Portfolyo Yönetimi",
    ppText6:
      "Sanatçılar için güçlü bir vitrin, kullanıcılar için ilham kaynağı. Paylaşımlarını, beğenilerini ve bağlantılarını tek bir yerden yönet.",
    ppAlt6: "Inkwell profil ve portfolyo ekranı",
    waitlistEyebrow: "Bekleme Listesi",
    waitlistTitle: "İlk kullanıcılar arasında yerini al, erken erişim avantajlarını yakala.",
    roleUserBtn: "Kullanıcı Kaydı",
    roleArtistBtn: "Dövmeci Kaydı",
    labelUserName: "Ad Soyad",
    labelUserEmail: "E-posta",
    labelUserCity: "Şehir",
    userNamePlaceholder: "Adınız Soyadınız",
    userCityPlaceholder: "İstanbul",
    consentUser: "Bilgilendirme ve erken erişim iletişimi almayı kabul ediyorum.",
    submitUser: "Kullanıcı Olarak Kaydol",
    labelArtistName: "Stüdyo / Sanatçı Adı",
    labelArtistEmail: "E-posta",
    labelArtistStyle: "Uzmanlık Stili",
    labelArtistCity: "Şehir",
    artistNamePlaceholder: "Studio Ink",
    artistStylePlaceholder: "Realism, Fine Line...",
    artistCityPlaceholder: "Ankara",
    consentArtist: "Bilgilendirme ve erken erişim iletişimi almayı kabul ediyorum.",
    submitArtist: "Dövmeci Olarak Kaydol",
    contactEyebrow: "İletişim",
    contactTitle: "Ortaklıklar, sanatçı katılımı ve erken erişim için Inkwell ile iletişimde kal.",
    contactCta: "Hemen Bekleme Listesine Katıl",
    footerCopy: "© 2026 Inkwell. Tüm hakları saklıdır.",
    validationError: "Lütfen tüm zorunlu alanları eksiksiz doldurun.",
    submitSuccessUser: "Kullanıcı kaydınız alındı. Inkwell erken erişim duyuruları e-posta ile iletilecek.",
    submitSuccessArtist: "Dövmeci kaydınız alındı. Inkwell erken erişim duyuruları e-posta ile iletilecek.",
    logoAlt: "Inkwell logosu",
    heroScreenAlt: "Inkwell keşfet ekranı",
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
    navFeatures: "Features & Screens",
    navScreens: "Screens",
    navWaitlist: "Waitlist",
    navContact: "Contact",
    topCta: "Early Access",
    heroEyebrow: "Next-Gen Tattoo Platform",
    heroTitle: "Find the right tattoo style with the right artist.",
    heroText:
      "Inkwell brings together people who want tattoos and expert artists with confidence. It offers the best match for users and helps artists connect with the clients that fit them best.",
    heroCtaPrimary: "Join the Waitlist",
    heroCtaSecondary: "How It Works",
    aboutEyebrow: "About",
    aboutTitle: "Mission",
    aboutLead: "",
    aboutMissionTitle: "Mission",
    missionText1: "Make the tattoo process clearer, faster and more comfortable for everyone.",
    missionText2:
      "Inkwell simplifies the decision process for people who want tattoos and helps artists connect with the right requests.",
    visionTitle: "Vision",
    visionText:
      "To build the strongest trust-based connection between artists and users in the tattoo world—where the right match is the standard.",
    fsEyebrow: "Features & Screens",
    fsTitle: "Right matches, smooth communication, and an end-to-end tattoo experience—designed for you.",
    fsLead:
      "Inkwell brings everything together in one flow—from discovery to communication and creating appointments without having to wait for offers. Users get inspired, discover artists that fit their style, and decide with direct pricing. Artists showcase their work, reach the right audience, and meet the projects that fit them best.",
    ppTitle1: "Personalized Main Feed",
    ppText1: "Discover posts from the artists you follow in one flow, and keep your inspiration fresh.",
    ppAlt1: "Inkwell personalized main feed screen",
    ppTitle2: "Advanced Discover & Search",
    ppText2: "Search by style, city, hashtag or artist to quickly find the tattoos and artists that fit you best.",
    ppAlt2: "Inkwell discover and search screen",
    ppTitle3: "Strong Sharing for Artists",
    ppText3: "Share design and workflow work with hashtags to increase visibility and reach the right audience.",
    ppAlt3: "Inkwell sharing screen",
    ppTitle4: "Get Offers & Compare",
    ppText4:
      "Upload the tattoo you want, receive offers from multiple artists, and choose the best match for you. All offers are evaluated independently—so the process stays transparent and controlled.",
    ppAlt4: "Inkwell offers and comparison screen",
    ppTitle5: "Messaging & Secure Communication",
    ppText5:
      "Message artists directly, create appointments, and manage the process easily. Communicate in a safe environment with an advanced complaint system.",
    ppAlt5: "Inkwell messaging screen",
    ppTitle6: "Profile & Portfolio Management",
    ppText6:
      "A strong showcase for artists and a source of inspiration for users. Manage your posts, likes and connections in one place.",
    ppAlt6: "Inkwell profile and portfolio screen",
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
  setText("mission-title", t.aboutMissionTitle);
  setText("mission-text-1", t.missionText1);
  setText("mission-text-2", t.missionText2);
  setText("vision-title", t.visionTitle);
  setText("vision-text", t.visionText);

  setText("fs-eyebrow", t.fsEyebrow);
  setText("fs-title", t.fsTitle);
  setText("fs-lead", t.fsLead);

  setText("pp-title-1", t.ppTitle1);
  setText("pp-text-1", t.ppText1);
  setText("pp-title-2", t.ppTitle2);
  setText("pp-text-2", t.ppText2);
  setText("pp-title-3", t.ppTitle3);
  setText("pp-text-3", t.ppText3);
  setText("pp-title-4", t.ppTitle4);
  setText("pp-text-4", t.ppText4);
  setText("pp-title-5", t.ppTitle5);
  setText("pp-text-5", t.ppText5);
  setText("pp-title-6", t.ppTitle6);
  setText("pp-text-6", t.ppText6);

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

  const ppIds = [1, 2, 3, 4, 5, 6];
  ppIds.forEach((i) => {
    const img = document.getElementById(`pp-media-${i}`);
    if (!img) return;
    img.alt = t[`ppAlt${i}`] || img.alt;
  });

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
  const disableParallax = reduceMotion;

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

// Mobile: dokununca flip (hover yerine)
const fsCards = document.querySelectorAll(".fs-slider .pp-card");
if (fsCards.length) {
  const isMobile = () => window.matchMedia("(max-width: 900px)").matches;

  fsCards.forEach((card) => {
    card.addEventListener("click", () => {
      if (!isMobile()) return;
      card.classList.toggle("is-flipped");
    });
  });
}
