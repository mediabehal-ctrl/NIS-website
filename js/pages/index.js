/* Page registry — maps routes to { title, description, render(params) } objects.
   app.js consumes this as `pages`. */
import { home } from './home.js'
import { practice, pathwayDetail } from './practice.js'
import { about } from './about.js'
import { contact } from './contact.js'
import { assessment } from './assessment.js'
import { privacy } from './privacy.js'
import { notFound } from './404.js'
import { PATHWAYS } from './pathways.js'

function makePage(page, { params = {} } = {}) {
  return {
    title: page.title,
    description: page.description || '',
    render: () => page.render(params),
  }
}

/* Static pages */
const staticPages = {
  '/': {
    title: 'Home',
    description: 'Regulated Canadian immigration consultants. Express Entry, PNP, family sponsorship, study & work permits — one honest, multilingual team.',
    render: () => home(),
  },
  '/practice': {
    title: 'Practice Areas',
    description: 'All 13 immigration practice areas we handle: Express Entry, PNP, family sponsorship, study & work permits, citizenship, caregivers, LMIA, refugee/asylum, H&C, appeals, notary and more.',
    render: () => practice(),
  },
  '/about': {
    title: 'About Us',
    description: 'The team behind Nijjar Immigration Services — a regulated, multilingual immigration practice serving Toronto, Mississauga and Brampton.',
    render: () => about(),
  },
  '/contact': {
    title: 'Contact',
    description: 'Reach Nijjar Immigration Services. Three GTA offices, one business-day response, in English, French, Punjabi, Urdu and Hindi.',
    render: () => contact(),
  },
  '/assessment': {
    title: 'Free Assessment',
    description: 'Book a free, no-obligation 30-minute eligibility assessment. A regulated consultant maps your best route and tells you honestly if you qualify.',
    render: () => assessment(),
  },
  '/privacy': {
    title: 'Privacy Policy',
    description: 'How we collect, use and protect your personal information.',
    render: () => privacy(),
  },
  '/404': {
    title: 'Page not found',
    description: 'The page you were looking for is not available.',
    render: () => notFound(),
  },
}

/* Dynamic pathway detail pages: /practice/<slug> */
function buildPathwayRoutes() {
  const routes = {}
  for (const p of PATHWAYS) {
    routes[`/practice/${p.slug}`] = {
      title: `${p.title} — Nijjar Immigration Services`,
      description: p.blurb,
      render: () => pathwayDetail(null, { slug: p.slug }),
    }
  }
  return routes
}

export const pages = { ...staticPages, ...buildPathwayRoutes() }
