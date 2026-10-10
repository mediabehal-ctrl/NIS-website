/* Header renderer */
import { t } from "../i18n.js";

const NAV = [
  { route: "#/",              label: () => t("nav_home") },
  { route: "#/about",         label: () => t("nav_about") },
  { route: "#/practice",      label: () => t("nav_practice") },
  { route: "#/assessment",    label: () => t("nav_assessment") },
  { route: "#/contact",       label: () => t("nav_contact") },
];

export function renderHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;
  const currentHash = window.location.hash || "#/";

  const isNavActive = (route) => {
    if (route === "#/") return currentHash === "#/" || currentHash === "" || currentHash === "#";
    return currentHash.startsWith(route);
  };

  header.innerHTML = `
    <div class="topbar">
      <div class="container">
        <span class="topbar-loc">${t("topbar_loc")}</span>
        <a href="tel:+14165550199" class="topbar-call">${t("topbar_call")}: (416) 555-0199</a>
      </div>
    </div>
    <div class="header">
      <div class="container">
        <a href="#/" class="brand">
          <span class="brand-word">
            <span class="brand-nijjar">NIJJAR</span>
            <span class="brand-mig">IMMIGRATION</span>
          </span>
          <span class="brand-tag">${t("brand_tag")}</span>
        </a>
        <nav class="site-nav" id="site-nav" aria-label="Primary">
          ${NAV.map((n) => `
            <a href="${n.route}" ${isNavActive(n.route) ? 'class="is-active" aria-current="page"' : ""}>
              ${n.label()}
            </a>
          `).join("")}
        </nav>
        <div class="header-actions">
          <a href="#/assessment" class="btn btn-primary btn-sm">${t("nav_cta")}</a>
          <button class="hamburger" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>
  `;

  const toggle = header.querySelector("#nav-toggle");
  const nav = header.querySelector("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
}
