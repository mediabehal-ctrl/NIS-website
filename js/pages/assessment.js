import { ctaBand } from './components.js'

export function assessment() {
  return `
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span class="sep" aria-hidden>/</span><span class="current">Free Assessment</span>
        </nav>
        <h1>Find out if you qualify — in one conversation.</h1>
        <p class="lead">A 30-minute, no-charge consultation where a regulated consultant maps your best route and tells you honestly whether you qualify. No card. No obligation. No "we'll call you back with a quote."</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-2" style="grid-template-columns:1fr 1.35fr;align-items:start;gap:3rem;">
          <aside>
            <div class="card" style="margin-bottom:1rem;">
              <h3 style="margin-top:0;">What you'll get</h3>
              <ul class="checklist">
                <li>An eligibility read across every path that fits you</li>
                <li>The strongest route, and the realistic timeline for it</li>
                <li>An itemized estimate — no hourly billing, no surprises</li>
                <li>A next-step plan you can act on today</li>
              </ul>
            </div>
            <div class="card">
              <h3 style="margin-top:0;">Prefer to call?</h3>
              <p class="muted" style="font-size:.9rem;">Talk now, or WhatsApp. Same consultant, same answer, either way.</p>
              <div class="btn-group" style="flex-direction:column;align-items:stretch;">
                <a href="tel:+14165550199" class="btn btn-primary btn-block">Call (416) 555-0199</a>
                <a href="https://wa.me/141****0199" target="_blank" rel="noopener" class="btn btn-secondary btn-block">WhatsApp</a>
              </div>
            </div>
          </aside>

          <div class="form-card">
            <h2 style="margin-top:0;">Book your free assessment</h2>
            <form data-form="assessment" novalidate>
              <div class="form-row">
                <div class="form-field">
                  <label for="a-first">First name <span class="required" aria-hidden>*</span></label>
                  <input type="text" id="a-first" name="first" required autocomplete="given-name">
                </div>
                <div class="form-field">
                  <label for="a-last">Last name <span class="required" aria-hidden>*</span></label>
                  <input type="text" id="a-last" name="last" required autocomplete="family-name">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label for="a-email">Email <span class="required" aria-hidden>*</span></label>
                  <input type="email" id="a-email" name="email" required autocomplete="email">
                </div>
                <div class="form-field">
                  <label for="a-phone">Phone <span class="required" aria-hidden>*</span></label>
                  <input type="tel" id="a-phone" name="phone" required autocomplete="tel">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label for="a-status">Where are you right now?</label>
                  <select id="a-status" name="status">
                    <option>I'm outside Canada</option>
                    <option>I'm in Canada on a study or work permit</option>
                    <option>I have permanent residence (PR)</option>
                    <option>I'm a Canadian citizen or sponsoring from Canada</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="form-field">
                  <label for="a-lang">Preferred language</label>
                  <select id="a-lang" name="lang">
                    <option>English</option>
                    <option>French</option>
                    <option>Punjabi</option>
                    <option>Urdu</option>
                    <option>Hindi</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div class="form-field">
                <label for="a-msg">Tell us about your situation</label>
                <textarea id="a-msg" name="message" rows="4" placeholder="Country you're from, work history, family in Canada, any past applications or refusals — whatever you've got."></textarea>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label for="a-date">Preferred day (optional)</label>
                  <input type="date" id="a-date" name="date">
                </div>
              </div>
              <div class="form-consent">
                <label class="checkbox">
                  <input type="checkbox" name="consent" required>
                  I consent to Nijjar Immigration Services contacting me about this assessment request.
                </label>
              </div>
              <button type="submit" class="btn btn-primary btn-lg">Request my free assessment</button>
              <p class="form-note muted" style="font-size:.78rem;margin-top:.75rem;">
                We'll confirm your appointment time in a reply or a call. We don't share your details with anyone.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--c-paper-soft);">
      <div class="container container-narrow">
        <h2 style="margin-top:0;">What happens after you book</h2>
        <div class="steps" style="grid-template-columns:1fr 1fr;margin-top:1.5rem;">
          <div class="step"><h4>1. We confirm</h4><p>A consultant checks in within one business day to lock a time — call or video, your choice.</p></div>
          <div class="step"><h4>2. Your 30-min consultation</h4><p>We map every route, pick the strongest, and give you a realistic timeline and itemized quote.</p></div>
          <div class="step"><h4>3. Your written plan</h4><p>You get a short plan: what we'll file, by when, for what fee. No hourly billing, no surprise line items.</p></div>
          <div class="step"><h4>4. You decide</h4><p>If it's a fit, we start. If it isn't, we'll point you somewhere it is. No pressure either way.</p></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container container-narrow">
        <h2>A few honest notes before you book</h2>
        <div class="faq-list">
          <div class="faq-item">
            <button class="faq-q" type="button" aria-expanded="false">Is this really free?</button>
            <div class="faq-a"><p>Yes. The consultation is free and there's no obligation. We charge only for the work — the assessment conversation itself costs you nothing.</p></div>
          </div>
          <div class="faq-item">
            <button class="faq-q" type="button" aria-expanded="false">What's the difference between assessment and a consultation?</button>
            <div class="faq-a"><p>Same thing, here. An assessment is a focused 30-minute conversation. A "consultation" is the same conversation. We use both words because clients arrive using both, but you're getting the same outcome: an honest read on your eligibility.</p></div>
          </div>
          <div class="faq-item">
            <button class="faq-q" type="button" aria-expanded="false">Do I need documents ready?</button>
            <div class="faq-a"><p>Not for the call. Bring whatever you have — passport, any old application letters, your CRS score if you've checked one — and we'll tell you what you need next if you proceed.</p></div>
          </div>
        </div>
      </div>
    </section>
  `
}
