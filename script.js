const scrollButtons = document.querySelectorAll("[data-scroll]");
const revealItems = document.querySelectorAll(".reveal");
const roleButtons = document.querySelectorAll(".role-switch__btn");
const nav = document.querySelector("#site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const parallaxItems = document.querySelectorAll("[data-parallax]");
const forms = {
  user: document.querySelector("#user-form"),
  artist: document.querySelector("#artist-form"),
};
const feedback = document.querySelector("#form-feedback");

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
      if (feedback) feedback.textContent = "Lutfen tum zorunlu alanlari eksiksiz doldurun.";
      return;
    }

    const role = form.id === "artist-form" ? "Dovmeci" : "Kullanici";
    if (feedback) {
      feedback.textContent = `${role} kaydiniz alindi. Inkwell erken erisim duyurulari e-posta ile iletilecek.`;
    }
    form.reset();
  });
});
