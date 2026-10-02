/* Header renderer — uses i18n t() for localized chrome */
import { t } from '../i18n.js'

const NAV = [
  { href: '#/',             key: 'nav_home' },
  { href: '#/about',        key: 'nav_about' },
  { href: '#/practice',     key: 'nav_practice' },
  { href: '#/results',      key: 'nav_results' },
  { href: '#/resources',    key: 'nav_resources' },
  { href: '#/fees',         key: 'nav_fees' },
  { href: '#/contact',      key: 'nav_contact' },
]

const PH = (icon, label) => `
  <a href="tel:+14165550199" style="display:inline-flex;align-items:center;gap:.375rem;text-decoration:none;">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${icon}</svg>
    <span>${label}</span>
  </a>
`

export function renderHeader() {
  const header = document.getElementById('site-header')
  if (!header) return

  const phoneIcon = '<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z"/>'
  const clockIcon = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>'

  header.innerHTML = `
    <div class="header-top">
      <div class="header-top-inner">
        <div style="display:flex;gap:1.25rem;align-items:center;flex-wrap:wrap;">
          ${PH(clockIcon, 'Mon–Fri 9:00–5:00 · Sat 10:00–2:00')}
          <a href="mailto:hello@niscanada.com" style="text-decoration:none;">hello@niscanada.com</a>
        </div>
        <div class="header-top-right">
          ${PH(phoneIcon, 'Urgent line (416) 555-0199')}
          <button class="lang-toggle" type="button" aria-label="Toggle language">EN / FR</button>
        </div>
      </div>
    </div>

    <div class="header-main">
      <a class="brand" href="#/" aria-label="Nijjar Immigration Services — Home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 21V9l9-6 9 6v12"/>
            <path d="M9 21v-6h6v6"/>
          </svg>
        </span>
        <span class="brand-text">
          <span class="brand-name">Nijjar Immigration</span>
          <span class="brand-tag">${t('brand_tag')}</span>
        </span>
      </a>

      <nav class="nav" aria-label="Primary navigation">
        ${NAV.map(n => `
          <a href="${n.href}" data-nav="${n.href.slice(1)}">${t(n.key)}</a>
        `).join('')}
        <div class="nav-cta">
          <a href="#/assessment" class="btn btn-primary btn-sm" data-i18n-cta>${t('nav_cta')}</a>
        </div>
      </nav>

      <button class="mobile-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
        </svg>
      </button>
    </div>

    <nav class="mobile-nav" aria-label="Mobile navigation">
      ${NAV.map(n => `<a href="${n.href}" data-nav="${n.href.slice(1)}">${t(n.key)}</a>`).join('')}
      <a href="#/assessment" class="btn btn-primary">${t('nav_cta')}</a>
      <a href="#/portal" class="btn btn-secondary">${t('nav_portal')}</a>
    </nav>
  `
}
