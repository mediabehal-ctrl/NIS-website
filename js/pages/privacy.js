/* Privacy / T&Cs — minimal placeholder pages */
export function privacy() {
  return `
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span class="sep" aria-hidden>/</span><span class="current">Privacy</span>
        </nav>
        <h1>Privacy policy</h1>
        <p class="muted">Updated 2025 · Full legal text coming</p>
      </div>
    </section>
    <section class="section">
      <div class="container container-narrow">
        <p>Nijjar Immigration Services collects only the information required to provide immigration consulting services to you, and only with your explicit consent.</p>
        <p class="mt-2">We do not sell, rent, or share your personal information with third parties. Information is retained only for as long as required by IRCC and Canadian law, and is protected in line with PIPEDA.</p>
        <p class="mt-2">To request access or deletion of your data, contact <a href="mailto:nil@nisimmigration.ca">nil@nisimmigration.ca</a>.</p>
      </div>
    </section>
  `;
}

export function legal() {
  return `
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a><span class="sep" aria-hidden>/</span><span class="current">Legal</span>
        </nav>
        <h1>Terms of service</h1>
        <p class="muted">Updated 2025 · Full legal text coming</p>
      </div>
    </section>
    <section class="section">
      <div class="container container-narrow">
        <p>All engagements with Nijjar Immigration Services are governed by a written service agreement. Estimates are itemized in advance. Government fees are pass-through and billed separately.</p>
        <p class="mt-2">Disputes are resolved under the laws of Ontario, Canada.</p>
        <p class="mt-2">Contact <a href="mailto:nil@nisimmigration.ca">nil@nisimmigration.ca</a> for the full terms.</p>
      </div>
    </section>
  `;
}
