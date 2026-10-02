/*
 * i18n — EN/FR strings. FR covers the shared chrome (header/footer/CTA).
 * Page bodies stay EN until full FR copy is approved by the firm (see brief §7).
 */
const bundles = {
  en: {
    brand_tag: "Canada's Immigration Specialists",
    nav_home: "Home",
    nav_about: "About",
    nav_practice: "Practice Areas",
    nav_results: "Results",
    nav_resources: "Resources",
    nav_fees: "Fees",
    nav_contact: "Contact",
    nav_assessment: "Free Assessment",
    nav_portal: "Client Portal",
    nav_cta: "Book a Free Consultation",
    topbar_loc: "Brampton · Etobicoke · ON",
    topbar_call: "Free urgent line",
    footer_disclaimer:
      "Visiting this website and submitting a contact form does not create a lawyer–client or consultant–client relationship. An engagement is formed only once a retainer is signed.",
    footer_privacy: "Privacy Policy",
    cta_primary: "Book a Free Consultation",
    cta_secondary: "Call (416) 555-0199",
  },
  fr: {
    brand_tag: "Spécialistes en immigration au Canada",
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_practice: "Champs de pratique",
    nav_results: "Résultats",
    nav_resources: "Ressources",
    nav_fees: "Tarifs",
    nav_contact: "Contact",
    nav_assessment: "Évaluation gratuite",
    nav_portal: "Portail client",
    nav_cta: "Réserver une consultation gratuite",
    topbar_loc: "Brampton · Etobicoke · ON",
    topbar_call: "Ligne d'urgence gratuite",
    footer_disclaimer:
      "Visiter ce site et envoyer un formulaire ne crée pas de relation avocat-client ou consultant-client. Une relation est formée uniquement après la signature d'un mandat.",
    footer_privacy: "Politique de confidentialité",
    cta_primary: "Réserver une consultation gratuite",
    cta_secondary: "Tél. (416) 555-0199",
  },
};

let _lang = "en";

export function detectLang() {
  const saved = typeof localStorage !== "undefined" ? localStorage.getItem("nis-lang")
    : null;
  if (saved === "fr" || saved === "en") return saved;
  const nav = typeof navigator !== "undefined" ? navigator.language : "";
  return /^fr/i.test(nav) ? "fr" : "en";
}

export function setLang(lang) {
  if (bundles[lang]) _lang = lang;
}

export function t(key) {
  return (bundles[_lang] && bundles[_lang][key]) || bundles.en[key] || key;
}

export function i18n(lang) {
  return bundles[lang] || bundles.en;
}
