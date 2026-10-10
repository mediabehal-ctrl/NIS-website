/* i18n — EN/FR bundles for shared chrome pages. */
const bundles = {
  en: {
    brand_tag: "Canada's Immigration Specialists",
    nav_home: "Home",
    nav_about: "About",
    nav_practice: "Practice Areas",
    nav_assessment: "Free Assessment",
    nav_contact: "Contact",
    nav_cta: "Book a Free Consultation",
    topbar_loc: "Brampton · Toronto · ON",
    topbar_call: "Free urgent line",
    footer_disclaimer:
      "Visiting this website and submitting a contact form does not create a lawyer–client or consultant–client relationship. An engagement is formed only once a retainer is signed.",
    footer_privacy: "Privacy Policy",
  },
  fr: {
    brand_tag: "Spécialistes en immigration au Canada",
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_practice: "Champs de pratique",
    nav_assessment: "Évaluation gratuite",
    nav_contact: "Contact",
    nav_cta: "Réserver une consultation gratuite",
    topbar_loc: "Brampton · Toronto · ON",
    topbar_call: "Ligne d'urgence gratuite",
    footer_disclaimer:
      "Visiter ce site et envoyer un formulaire ne crée pas de relation avocat-client ou consultant-client. Une relation est formée uniquement après la signature d'un mandat.",
    footer_privacy: "Politique de confidentialité",
  },
};

let _lang = typeof localStorage !== "undefined"
  ? (localStorage.getItem("nis-lang") === "fr" ? "fr" : "en")
  : "en";

export function t(key) {
  return (bundles[_lang] && bundles[_lang][key]) || bundles.en[key] || key;
}

export function detect() {
  try {
    const saved = localStorage.getItem("nis-lang");
    if (saved === "fr" || saved === "en") { _lang = saved; return; }
    const nav = (navigator.language || "en").toLowerCase();
    _lang = nav.startsWith("fr") ? "fr" : "en";
  } catch(e) { _lang = "en"; }
}

export function setLang(lang) {
  if (bundles[lang]) {
    _lang = lang;
    if (typeof localStorage !== "undefined") localStorage.setItem("nis-lang", lang);
  }
}
