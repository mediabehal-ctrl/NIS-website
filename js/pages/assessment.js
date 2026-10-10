/* Free assessment booking — no backend, client-side confirmation */
export function assessment() {
  return `
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span class="sep" aria-hidden>/</span><span class="current">Free Assessment</span>
        </nav>
        <h1>30 minutes, no card, <em>no obligation</em>.</h1>
        <p class="lead">Pick a time that works for you. A senior consultant will map the strongest route for your profile — and tell you honestly whether it qualifies or not. This is a conversation, not a pitch.</p>
      </div>
    </section>

    <section class="section">
      <div class="container container-narrow">
        <form class="assess-form" id="assess-form" aria-label="Assessment booking form">
          <h3>Book your free assessment</h3>
          <div class="form-row">
            <label>Full name *
              <input name="name" type="text" required autocomplete="name" placeholder="Your name" />
            </label>
            <label>Email *
              <input name="email" type="email" required autocomplete="email" placeholder="you@example.com" />
            </label>
          </div>
          <div class="form-row">
            <label>Phone
              <input name="phone" type="tel" autocomplete="tel" placeholder="+1 ..." />
            </label>
            <label>Preferred language
              <select name="lang">
                <option>English</option>
                <option>Punjabi</option>
                <option>French</option>
                <option>Hindi</option>
                <option>Urdu</option>
                <option>Mandarin</option>
                <option>Spanish</option>
              </select>
            </label>
          </div>
          <div class="form-row">
            <label>I'm interested in *
              <select name="area" required>
                <option value="">Select a pathway…</option>
                <option value="not-sure">Not sure yet</option>
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
            <label>Best day to reach you
              <select name="day">
                <option value="any">Any day</option>
                <option value="weekday">Weekday (Mon–Fri)</option>
                <option value="weekend">Weekend (Sat–Sun)</option>
              </select>
            </label>
          </div>
          <label>Anything you want us to know before the call?
            <textarea name="notes" rows="4" placeholder="Current status, timeline, any recent correspondence with IRCC, etc."></textarea>
          </label>
          <div class="form-note">
            By booking, you agree that Nijjar Immigration Services may contact you to schedule your assessment.
            We will not share your information with third parties.
          </div>
          <button type="submit" class="btn btn-primary btn-lg">Confirm my free assessment →</button>
          <div class="book-confirm" role="status" aria-live="polite">
            <div class="check-big" aria-hidden="true">✓</div>
            <h3>Request confirmed</h3>
            <p>We've received your booking. A senior consultant will reach out within one business day to lock in your 30-minute slot.</p>
          </div>
        </form>
      </div>
    </section>
  `;
}

export function bindAssessment(el) {
  const form = el.querySelector("#assess-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const confirm = el.querySelector(".book-confirm");
      confirm.classList.add("show");
      form.querySelectorAll("input, select, textarea, .btn").forEach((f) => {
        f.disabled = true;
      });
    });
  }
}
