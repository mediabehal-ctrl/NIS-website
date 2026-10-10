/* Shared page components */
export function ctaBand() {
  return `
    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Not sure which path fits? <em>Start with a conversation.</em></h2>
          <p>A 30-minute, no-charge consultation where a regulated consultant maps your best route and tells you honestly whether you qualify. No card. No obligation.</p>
        </div>
        <div class="btn-group">
          <a href="#/assessment" class="btn btn-primary btn-lg">Book a Free Assessment</a>
          <a href="tel:+14165550199" class="btn btn-ghost btn-lg">Call (416) 555-0199</a>
        </div>
      </div>
    </section>
  `;
}

export function faqList(items) {
  return `
    <div class="faq-list">
      ${items.map((it) => `
        <div class="faq-item">
          <button class="faq-q" type="button" aria-expanded="${it.open || false}">${it.q}</button>
          <div class="faq-a"><p>${it.a}</p></div>
        </div>
      `).join("")}
    </div>
  `;
}

export function bindFaq(root) {
  const items = root.querySelectorAll(".faq-item");
  items.forEach((el) => {
    const btn = el.querySelector(".faq-q");
    btn?.addEventListener("click", () => {
      const nowOpen = el.classList.contains("open");
      items.forEach((x) => { x.classList.remove("open"); x.querySelector(".faq-q")?.setAttribute("aria-expanded", "false"); });
      if (!nowOpen) {
        el.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}
