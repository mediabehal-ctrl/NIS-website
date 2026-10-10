/* 404 */
export function notFound() {
  return `
    <section class="section notfound">
      <div class="container container-narrow" style="text-align:center;">
        <div class="nf-code" aria-hidden="true">404</div>
        <h1>Page not found</h1>
        <p class="muted">The page you're looking for may have moved, or was removed.</p>
        <div class="btn-group mt-4" style="justify-content:center;">
          <a href="#/" class="btn btn-primary">Back to home</a>
          <a href="#/practice" class="btn btn-secondary">Practice areas</a>
        </div>
      </div>
    </section>
  `;
}
