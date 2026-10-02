import { ctaBand } from './components.js'

export function contact() {
  return `
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span class="sep" aria-hidden>/</span><span class="current">Contact</span>
        </nav>
        <h1>Reach the person who'll run the file.</h1>
        <p class="lead">No ticketing systems, no phone trees, no voicemail that evaporates. Call, WhatsApp, or send us a message and a real consultant responds within one business day — in whichever language is easiest for you.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-2" style="align-items:start;gap:3rem;">
          <div>
            <h2 style="margin-top:0;">Three offices, one team</h2>
            <div id="offices" class="office-list">
              <div class="office-card">
                <span class="office-tag">Brampton</span>
                <h3>Head office</h3>
                <p class="line"><span>120 King Street East, Suite 280<br>Brampton, ON L6W 1Z6</span></p>
                <p class="line"><a href="tel:+14165550199">(416) 555-0199</a></p>
                <p class="line"><a href="mailto:brampton@nijjarlaw.ca">brampton@nijjarlaw.ca</a></p>
              </div>
              <div class="office-card">
                <span class="office-tag">Toronto</span>
                <h3>Downtown office</h3>
                <p class="line"><span>255 University Avenue, Suite 540<br>Toronto, ON M5G 2W4</span></p>
                <p class="line"><a href="tel:+14165550198">(416) 555-0198</a></p>
                <p class="line"><a href="mailto:toronto@nijjarlaw.ca">toronto@nijjarlaw.ca</a></p>
              </div>
              <div class="office-card">
                <span class="office-tag">Mississauga</span>
                <h3>West-end office</h3>
                <p class="line"><span>3401 Rathburn Road West, Suite 1102<br>Mississauga, ON L5B 2M1</span></p>
                <p class="line"><a href="tel:+14165550198">(519) 555-0197</a></p>
                <p class="line"><a href="mailto:mississauga@nijjarlaw.ca">mississauga@nijjarlaw.ca</a></p>
              </div>
            </div>
          </div>

          <aside>
            <div class="card" style="margin-bottom:1rem;">
              <h3 style="margin-top:0;">Hours</h3>
              <div class="hours-list">
                <p><strong>Mon–Fri</strong><span>9:00 AM – 6:00 PM</span></p>
                <p><strong>Saturday</strong><span>10:00 AM – 2:00 PM</span></p>
                <p><strong>Sunday</strong><span>Closed · call for urgent matters</span></p>
              </div>
              <p class="muted" style="font-size:.8125rem;">We'll confirm your preferred appointment time when we reply.</p>
            </div>
            <div class="card">
              <h3 style="margin-top:0;">Prefer written first?</h3>
              <p class="muted" style="font-size:.9rem;">Use the form — or call. Whatever is easier for you.</p>
              <div class="btn-group">
                <a href="tel:+14165550199" class="btn btn-primary btn-block">Call (416) 555-0199</a>
                <a href="mailto:info@nijjarlaw.ca" class="btn btn-secondary btn-block">Email</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--c-paper-soft);">
      <div class="container container-narrow">
        <div class="form-card">
          <h2 style="margin-top:0;">Send us a message</h2>
          <p class="muted" style="font-size:.9rem;">We reply within one business day. For urgent matters, call or WhatsApp instead.</p>
          <form data-form="contact" novalidate>
            <div class="form-row">
              <div class="form-field">
                <label for="c-first">First name <span class="required" aria-hidden>*</span></label>
                <input type="text" id="c-first" name="first" required autocomplete="given-name" placeholder="Jane">
              </div>
              <div class="form-field">
                <label for="c-last">Last name <span class="required" aria-hidden>*</span></label>
                <input type="text" id="c-last" name="last" required autocomplete="family-name" placeholder="Doe">
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="c-email">Email <span class="required" aria-hidden>*</span></label>
                <input type="email" id="c-email" name="email" required autocomplete="email" placeholder="you@example.com">
              </div>
              <div class="form-field">
                <label for="c-phone">Phone</label>
                <input type="tel" id="c-phone" name="phone" autocomplete="tel" placeholder="+1 ...">
              </div>
            </div>
            <div class="form-field">
              <label for="c-topic">Which area is this about? <span class="required" aria-hidden>*</span></label>
              <select id="c-topic" name="topic" required>
                <option value="" selected disabled>Choose a practice area…</option>
                <option>Express Entry</option>
                <option>Provincial Nominee Program</option>
                <option>Family sponsorship</option>
                <option>Study permit / PGWP</option>
                <option>Work permit / LMIA</option>
                <option>Citizenship</option>
                <option>Caregivers</option>
                <option>Refugee / asylum (IRB)</option>
                <option>Humanitarian &amp; Compassionate</option>
                <option>Inadmissibility / appeals</option>
                <option>Notary services</option>
                <option>Other / not sure</option>
              </select>
            </div>
            <div class="form-field">
              <label for="c-lang">Preferred language</label>
              <select id="c-lang" name="lang">
                <option>English</option>
                <option>French</option>
                <option>Punjabi</option>
                <option>Urdu</option>
                <option>Hindi</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-field">
              <label for="c-msg">How can we help? <span class="required" aria-hidden>*</span></label>
              <textarea id="c-msg" name="message" required rows="5" placeholder="Tell us a bit about your situation — nothing is confidential, but it helps us prepare for our conversation."></textarea>
            </div>
            <div class="form-consent">
              <label class="checkbox">
                <input type="checkbox" name="consent" required>
                I consent to Nijjar Immigration Services contacting me about this enquiry.
              </label>
            </div>
            <button type="submit" class="btn btn-primary btn-lg">Send message</button>
            <p class="form-note muted" style="font-size:.78rem;margin-top:.75rem;">
              We only use your contact details to respond to this enquiry. We don't share your information.
            </p>
          </form>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 style="margin-top:0;">Not sure yet? Start with a free assessment</h2>
        <p class="lead">Skip the "is this the right topic?" question — a 30-minute conversation sorts it out and tells you the strongest path your profile allows.</p>
        <div class="btn-group">
          <a href="#/assessment" class="btn btn-primary btn-lg">Free Assessment</a>
        </div>
      </div>
    </section>
  `
}
