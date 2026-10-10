/* Contact */
import { t } from "../i18n.js";

export function contact() {
  return `
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span class="sep" aria-hidden>/</span><span class="current">Contact</span>
        </nav>
        <h1>Talk to a licensed consultant — <em>not a call centre</em>.</h1>
        <p class="lead">Same person who answers your phone, builds your file, and files it. Three offices across Ontario. Six languages on request. No hold music, no "can you please hold" loop.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-copy">
            <span class="eyebrow" style="color:var(--c-gold);">Three offices, one practice</span>
            <div class="contact-offices">
              <div class="contact-office">
                <h3>Toronto (HQ)</h3>
                <p>1 First Street, Apt 801<br/>Toronto, ON M5V 1K2</p>
              </dir>
              <div class="contact-office">
                <h3>Kitchener</h3>
                <p>325 Weber St, Fl 5<br/>Kitchener, ON N2A 1V4</p>
              </div>
              <div class="contact-office">
                <h3>Hamilton</h3>
                <p>250 King St E, Suite 300<br/>Hamilton, ON L8P 1C2</p>
              </div>
            </div>
            <div style="margin-top:2rem;">
              <h3 style="margin-bottom:1.2rem;">Call or message</h3>
              <div class="btn-group" style="flex-wrap:wrap;gap:1rem;">
                <a href="tel:+14165550199" class="btn btn-primary">Call (416) 555-0199</a>
                <a href="https://wa.me/14165550199" target="_blank" rel="noopener" class="btn btn-secondary">WhatsApp</a>
                <a href="mailto:nil@nisimmigration.ca" class="btn btn-ghost">nil@nisimmigration.ca</a>
              </div>
            </div>
          </div>

          <form class="contact-form" id="contact-form" data-lp-id="nis_contact" aria-label="Contact form">
            <h3>Send us a message</h3>
            <label>Full name *
              <input name="name" type="text" required autocomplete="name" placeholder="Your name" />
            </label>
            <label>Email *
              <input name="email" type="email" required autocomplete="email" placeholder="you@example.com" />
            </label>
            <label>Phone
              <input name="phone" type="tel" autocomplete="tel" placeholder="+1 ..." />
            </label>
            <label>I'm interested in…
              <select name="area">
                <option value="general">General enquiry</option>
                <option value="express-entry">Express Entry</option>
                <option value="pnp">PNP</option>
                <option value="family-sponsorship">Family Sponsorship</option>
                <option value="study-permit">Study Permit</option>
                <option value="work-permit">Work Permit</option>
                <option value="citizenship">Citizenship</option>
                <option value="refugee-asylum">Refugee / Asylum</option>
                <option value="appeals">Appeals / Removal</option>
              </select>
            </label>
            <label>Message *
              <textarea name="message" required rows="5" placeholder="Tell us about your situation in a sentence or two."></textarea>
            </label>
            <div class="form-note">By submitting, you agree that we may contact you about your enquiry. We don't sell or share your details. (PIPEDA)</div>
            <button type="submit" class="btn btn-primary btn-lg">Send message →</button>
            <div class="form-success" role="status" aria-live="polite">Thanks — we'll reply within one business day.</div>
          </form>
        </div>
      </div>
    </section>
  `;
}

export function bindContact(el) {
  const form = el.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const success = el.querySelector(".form-success");
      if (success) success.classList.add("show");
      form.reset();
      form.querySelectorAll(".btn").forEach((b) => {
        b.disabled = true;
        b.textContent = "Sent ✓";
      });
      setTimeout(() => {
        form.querySelectorAll(".btn").forEach((b) => {
          b.disabled = false;
          b.textContent = "Send message →";
        });
        success.classList.remove("show");
      }, 6000);
    });
  }
}
