/* Footer renderer */
import { t } from "../i18n.js";

export function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;
  const year = new Date().getFullYear();

  footer.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="brand-word footer-word">
          <span class="brand-nijjar fw-nijjar">NIJJAR</span>
          <span class="brand-mig fw-mig">IMMIGRATION</span>
        </span>
        <p>Canada's immigration specialists. One honest, multilingual team — Express Entry, Provincial Nominee, family sponsorship, study & work permits, citizenship, IRB proceedings.</p>
        <div class="footer-badges" aria-label="Regulatory membership">
          <span class="fbadge">CICC · ICRC</span>
          <span class="fbadge">RCIC-IRB</span>
          <span class="fbadge">BBB A+</span>
          <span class="fbadge">PIPEDA</span>
        </div>
      </div>
      <div class="footer-col">
        <h4>Practice Areas</h4>
        <ul>
          <li><a href="#/practice/express-entry">Express Entry</a></li>
          <li><a href="#/practice/pnp">Provincial Nominee (PNP)</a></li>
          <li><a href="#/practice/family-sponsorship">Family Sponsorship</a></li>
          <li><a href="#/practice/study-permit">Study &amp; PGWP</a></li>
          <li><a href="#/practice/work-permit">Work Permits</a></li>
          <li><a href="#/practice/citizenship">Citizenship</a></li>
          <li><a href="#/practice/appeals-removal">Inadmissibility &amp; Appeals</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Client</h4>
        <ul>
          <li><a href="#/assessment">Free Assessment</a></li>
          <li><a href="#/about">About the Firm</a></li>
          <li><a href="#/contact">Contact</a></li>
          <li><a href="#/practice">All practice areas →</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+14165550199">(416) 555-0199</a></li>
          <li><a href="mailto:hello@niscanada.com">hello@niscanada.com</a></li>
          <li>Brampton · Toronto · ON</li>
          <li>Mon–Fri 9:00–6:00 · Sat 10:00–2:00</li>
          <li style="margin-top:.5rem;">
            <a href="https://wa.me/14165550199" target="_blank" rel="noopener" style="color:#4ade80;font-weight:600;">WhatsApp us →</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© ${year} Nijjar Immigration Services. All rights reserved.</div>
      <div class="links">
        <span>PIPEDA compliant</span>
        <span class="sep" aria-hidden="true">·</span>
        <a href="#/privacy">${t("footer_privacy")}</a>
      </div>
    </div>
    <div style="padding:1rem 1.5rem 1.75rem;max-width:1180px;margin:0 auto;font-size:.72rem;color:rgba(255,255,255,.42);line-height:1.7;border-top:1px solid rgba(255,255,255,.06);margin-top:.5rem;">
      ${t("footer_disclaimer")} Licensed immigration consultant registration available on request. Services available in English, French, Punjabi, Urdu, Hindi, and other common community languages on request.
    </div>
  `;
}
