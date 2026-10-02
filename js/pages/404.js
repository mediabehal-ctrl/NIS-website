export function notFound() {
  return `
    <section class="section" style="text-align:center;padding:5rem 1.5rem;">
      <div class="container container-narrow">
        <span class="eyebrow">404</span>
        <h1 style="margin:.75rem 0;">That page doesn't exist.</h1>
        <p class="lead" style="margin:0 auto 2rem;">Either the link is old, or the address is a little off. Let's get you back on the path that does work.</p>
        <div class="btn-group" style="justify-content:center;">
          <a href="#/" class="btn btn-primary btn-lg">Back home</a>
          <a href="#/practice" class="btn btn-secondary btn-lg">Browse practice areas</a>
        </div>
      </div>
    </section>
  `
}
