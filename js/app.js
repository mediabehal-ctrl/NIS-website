/* App entry — router, layout mount, bind */
import { renderHeader } from "./layout/header.js";
import { renderFooter } from "./layout/footer.js";
import { detect as i18nDetect } from "./i18n.js";

import { home } from "./pages/home.js";
import { about } from "./pages/about.js";
import { practice } from "./pages/practice.js";
import { practiceArea, bindPracticeArea } from "./pages/pathways.js";
import { contact, bindContact } from "./pages/contact.js";
import { assessment, bindAssessment } from "./pages/assessment.js";
import { privacy, legal } from "./pages/privacy.js";
import { notFound } from "./pages/404.js";

const router = {
  "/":              () => home(),
  "/about":         () => about(),
  "/practice":      () => practice(),
  "/contact":       () => contact(),
  "/assessment":    () => assessment(),
  "/privacy":       () => privacy(),
  "/tos":           () => legal(),
};

function bindPage(page, el) {
  if (page === "contact")    bindContact(el);
  if (page === "assessment") bindAssessment(el);
  if (page && page.startsWith("/practice/")) bindPracticeArea(el);
}

function routeChange() {
  const hash = location.hash.replace(/^#/, "") || "/";
  const parts = hash.replace(/\/+$/, "").split("/").filter(Boolean);

  let page = "404";
  let content = notFound;

  if (parts.length === 0) {
    page = "home";
    content = home;
  } else if (parts[0] === "about") {
    page = "about";
    content = about;
  } else if (parts[0] === "practice" && parts.length === 1) {
    page = "practice";
    content = practice;
  } else if (parts[0] === "practice" && parts.length === 2) {
    page = `/practice/${parts[1]}`;
    content = () => practiceArea(parts[1]);
  } else if (parts[0] === "contact") {
    page = "contact";
    content = contact;
  } else if (parts[0] === "assessment") {
    page = "assessment";
    content = assessment;
  } else if (parts[0] === "privacy") {
    page = "privacy";
    content = privacy;
  } else if (parts[0] === "tos") {
    page = "tos";
    content = legal;
  } else {
    content = notFound;
  }

  const root = document.getElementById("site-main");
  renderHeader();
  root.innerHTML = content();
  renderFooter();

  // Title
  const titles = {
    home: "Nijjar Immigration Services — Canada's Immigration Specialists",
    about: "About — Nijjar Immigration Services",
    practice: "Practice Areas — Nijjar Immigration Services",
    contact: "Contact — Nijjar Immigration Services",
    assessment: "Free Assessment — Nijjar Immigration Services",
    privacy: "Privacy — Nijjar Immigration Services",
    tos: "Legal — Nijjar Immigration Services",
  };
  const base = " — Nijjar Immigration Services";
  const p = page.startsWith("/practice/") ? page.split("/")[2] : page;
  document.title = (titles[page] ? titles[page] : p ? p.replace(/-/g, " ") + base : base);

  bindPage(page, root);
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.addEventListener("DOMContentLoaded", () => {
  i18nDetect();
  window.addEventListener("hashchange", routeChange);
  routeChange();

  // Intro logo sequence — once per browsing session, reduced-motion aware
  const intro = document.getElementById("intro");
  if (intro) {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const SEEN = "nijjar_intro_seen";
    const alreadySeen = !reduced && sessionStorage.getItem(SEEN) === "1";

    if (reduced || alreadySeen) {
      // Skip intro entirely for reduced-motion or repeat visits
      intro.classList.add("is-done");
      setTimeout(() => { if (intro.parentNode) intro.remove(); }, 50);
    } else {
      // Lock scroll while intro plays (no scrollbar from the enlarged logo)
      const prevOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      sessionStorage.setItem(SEEN, "1");
      intro.classList.add("is-playing");

      const finish = () => {
        intro.classList.add("is-done");
        document.documentElement.style.overflow = prevOverflow;
        // Let the fade+de-blur transition run, then remove from the DOM
        setTimeout(() => { if (intro.parentNode) intro.remove(); }, 700);
      };

      const logo = intro.querySelector(".intro-logo");
      let done = false;
      const onEnd = (e) => {
        if (e.target !== logo) return;
        // Fire on 'animationend' and 'animationcancel' for robustness
        if (e.animationName === "introZoom") {
          onEnd._done = true;
          if (!done) { done = true; finish(); }
        }
      };
      logo.addEventListener("animationend", onEnd, { once: true });
      logo.addEventListener("animationcancel", onEnd, { once: true });
      // Safety net in case animationend doesn't fire or the tab is slow
      setTimeout(() => { if (!done) { done = true; finish(); } }, 3400);
    }
  }
});
