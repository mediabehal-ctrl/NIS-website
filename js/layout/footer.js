/* Footer renderer */
import { t } from '../i18n.js'

export function renderFooter() {
  const footer = document.getElementById('site-footer')
  if (!footer) return

  const year = new Date().getFullYear()

  footer.innerHTML = `
    <div class="footer-grid">
      <div class="footer-col footer-brand">
        <span class="brand-name">Nijjar Immigration Services</span>
        <p>Canada's immigration specialists. Express Entry, Provincial Nominee, family sponsorship, study & work permits, citizenship, IRB proceedings. CICC-regulated · RCIC-IRB.</p>
        <div class="footer-badges" aria-label="Regulatory membership">
          <span class="fbadge">CICC · ICRC</span>
          <span class="fbadge">RCIC-IRB</span>
          <span class="fbadge">BBB A+ Accredited</span>
          <span class="fbadge">ICRA Member</span>
        </div>
      </div>

      <div class="footer-col">
        <h4>Practice Areas</h4>
        <ul>
          <li><a href="#/practice/express-entry">Express Entry</a></li>
          <li><a href="#/practice/pnp">Provincial Nominee (PNP)</a></li>
          <li><a href="#/practice/family-sponsorship">Family Sponsorship</a></li>
          <li><a href="#/practice/study-permit">Study & PGWP</a></li>
          <li><a href="#/practice/work-permit">Work Permits</a></li>
          <li><a href="#/practice/citizenship">Citizenship</a></li>
          <li><a href="#/practice/appeals-removal">Inadmissibility & Appeals</a></li>
          <li><a href="#/practice">All practice areas →</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Client</h4>
        <ul>
          <li><a href="#/assessment">Free Assessment</a></li>
          <li><a href="#/portal">Client Portal</a></li>
          <li><a href="#/results">Results & Testimonials</a></li>
          <li><a href="#/resources">Resources & Blog</a></li>
          <li><a href="#/fees">Fees & Consultation</a></li>
          <li><a href="#/about">About the Firm</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+14165550199">(416) 555-0199</a></li>
          <li><a href="mailto:hello@niscanada.com">hello@niscanada.com</a></li>
          <li>Brampton, ON · Etobicoke, ON</li>
          <li>Mon–Fri 9:00–5:00 · Sat 10:00–2:00</li>
          <li style="margin-top:.75rem;">
            <a href="https://wa.me/14165550199" target="_blank" rel="noopener" style="color:#4ade80;font-weight:600;">WhatsApp us →</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div>© ${year} Nijjar Immigration Services. All rights reserved.</div>
      <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap;">
        <span>PIPEDA compliant</span>
        <span aria-hidden="true">·</span>
        <a href="#/privacy">Privacy Policy</a>
        <span aria-hidden="true">·</span>
        <a href="#/terms">Terms</a>
      </div>
    </div>

    <div class="container" style="padding:1.25rem 1.5rem 2rem;border-top:1px solid rgba(255,255,255,.1);font-size:.75rem;color:rgba(255,255,255,.55);line-height:1.7;">
      <p style="margin:0;">${t('footer_disclaimer')} Licensed immigration consultant registration available on request. Services available in English, French, Punjabi, Urdu, Hindi, and other common community languages on request.</p>
    </div>
  `
}
