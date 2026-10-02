/* ============================================================================
   NIJJAR IMMIGRATION — App: router + layout + page registry
   ============================================================================ */

import { renderHeader } from './layout/header.js'
import { renderFooter } from './layout/footer.js'
import { pages } from './pages/index.js'
import { i18n, detectLang, setLang, t } from './i18n.js'

const main = document.getElementById('main')
const header = document.getElementById('site-header')
const footer = document.getElementById('site-footer')
const floatUI = document.getElementById('floating-ui')

let currentPath = '/'

/* Detect language (EN primary; FR stub for shared chrome) */
try {
  localStorage.setItem('nis-lang', detectLang())
} catch {}
let currentLang = detectLang()
setLang(currentLang)

function getPath() {
  return (location.hash || '#/').slice(1) || '/'
}

function matchPage(path) {
  // Exact match
  if (pages[path]) return { page: pages[path], params: {} }
  // Pathway detail slugs
  for (const key of Object.keys(pages)) {
    if (key.startsWith('/practice/') && key === path) return { page: pages[key], params: {} }
  }
  return null
}

function updateNavState(path) {
  const links = document.querySelectorAll('[data-nav]')
  links.forEach(a => {
    const target = a.getAttribute('data-nav')
    if (target === path) {
      a.setAttribute('aria-current', 'page')
    } else if (path.startsWith(target + '/') && target !== '/' ) {
      a.setAttribute('aria-current', 'location')
    } else {
      a.removeAttribute('aria-current')
    }
  })
}

function closeMobileNav() {
  const nav = document.querySelector('.mobile-nav')
  const btn = document.querySelector('.mobile-toggle')
  if (nav) nav.classList.remove('open')
  if (btn) {
    btn.setAttribute('aria-expanded', 'false')
    btn.querySelector('span')?.setAttribute('hidden', 'hidden')
  }
}

function render(path) {
  currentPath = path
  const match = matchPage(path) || matchPage('/404')
  const page = match ? match.page : pages['/404']

  // Reset document metadata
  document.title = page.title + ' | Nijjar Immigration Services'
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc && page.description) metaDesc.setAttribute('content', page.description)
  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) canonical.setAttribute('href', location.origin + location.pathname + path)

  if (page.lang) {
    // Localized shared chrome
    const navCta = document.querySelector('[data-i18n-cta]')
    if (navCta) navCta.textContent = t('nav_cta')
  }

  main.innerHTML = page.render(match.params)
  main.scrollTop = 0
  window.scrollTo({ top: 0, behavior: 'instant' })
  currentPath = path

  // Post-render hydration: FAQ toggles, form handlers
  hydratePage(page, match.params)

  updateNavState(path)

  // Re-bind mobile nav toggle
  bindMobileNav()
  closeMobileNav()
}

function bindMobileNav() {
  const toggle = document.querySelector('.mobile-toggle')
  const nav = document.querySelector('.mobile-nav')
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open')
      toggle.setAttribute('aria-expanded', String(open))
    })
  }
}

function hydratePage(page, params) {
  // FAQ accordions
  main.querySelectorAll('.faq-q').forEach(f => {
    if (!f) return
    f.addEventListener('click', () => {
      const item = f.closest('.faq-item')
      if (!item) return
      item.classList.toggle('open')
      f.setAttribute('aria-expanded', item.classList.contains('open'))
    })
  })

  // Language toggle in header
  const langBtn = document.querySelector('.lang-toggle')
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'fr' : 'en'
      setLang(currentLang)
      try { localStorage.setItem('nis-lang', currentLang) } catch {}
      render(currentPath)
    })
  }

  // Form submissions (demo handlers)
  main.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      handleFormSubmit(form, page)
    })
  })

  // Anchor scrolling for subpages (e.g. #contact inside page)
  main.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1)
      const target = document.getElementById(id)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}

function handleFormSubmit(form, page) {
  const name = form.getAttribute('data-form')
  const btn = form.querySelector('[type="submit"]')
  const originalText = btn ? btn.textContent : ''
  if (btn) {
    btn.disabled = true
    btn.textContent = 'Sending…'
  }
  // Simulate async send — in production this POSTs to /api/contact
  setTimeout(() => {
    if (btn) {
      btn.disabled = false
      btn.textContent = originalText
    }
    const wrap = form.closest('.form-card') || form.parentElement
    const note = document.createElement('div')
    note.className = 'callout'
    note.style.cssText = 'border-left-color: var(--c-success); background: var(--c-success-soft); margin-top: 1rem;'
    note.innerHTML = `<p><strong>Thank you.</strong> We've received your message and will get back to you within one business day. For urgent matters, please call us directly.</p>`
    form.after(note)
    form.reset()
    note.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, 650)
}

/* Boot */
renderHeader()
renderFooter()
renderFloatUI()

window.addEventListener('hashchange', () => render(getPath()))
if (location.hash) {
  render(getPath())
} else {
  history.replaceState(null, '', '#/')
  render('/')
}

function renderFloatUI() {
  floatUI.innerHTML = `
    <a class="float-whatsapp" href="https://wa.me/14165550199?text=Hi%2C%20I'd%20like%20to%20ask%20about%20a%20Canadian%20immigration%20application."
       target="_blank" rel="noopener"
       aria-label="Chat with us on WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.02 1-1.02 2.45 1.04 2.87 1.19 3.07c.15.2 2.1 3.34 5.1 4.68.72.32 1.28.51 1.71.65.72.24 1.38.2 1.9.12.57-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2.05 21.95a.5.5 0 0 0 .56.6L8 21.21C9.48 22.03 11.17 22.5 13 22.5c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.7 0-3.27-.48-4.62-1.31l-.33-.2-3.2.74.76-3.12-.22-.35A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/></svg>
    </a>
  `
}
