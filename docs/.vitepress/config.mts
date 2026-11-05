import { defineConfig } from 'vitepress'

export default defineConfig({
base: '/openlaws-website/',
title: 'OpenLaws',
  description: 'The models will become interchangeable. The knowledge will remain.',
  appearance: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/openlaws-favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap', rel: 'stylesheet' }]
  ],
  themeConfig: {
    logo: {
      light: '/openlaws-logo-light.svg',
      dark: '/openlaws-logo-dark.svg',
      alt: 'OpenLaws'
    },
    siteTitle: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/openlaws-org' },
      { icon: 'linkedin', link: 'https://linkedin.com/company/88049357/' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'OpenLaws — Legal Knowledge Factory',
      description: 'The models will become interchangeable. The knowledge will remain.',
      themeConfig: {
        nav: [
          { text: 'Story', link: '/story' },
          { text: 'Pipeline', link: '/pipeline' },
          { text: 'openlaws.com ↗', link: 'https://openlaws.com' }
        ],
        footer: {
          message: 'Open where openness creates trust. Protected where judgment creates value.',
          copyright: '© 2014–2026 OpenLaws · openlaws.com · openlaws.org'
        }
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      link: '/de/',
      title: 'OpenLaws — Legal Knowledge Factory',
      description: 'Die Modelle werden austauschbar. Das Wissen bleibt.',
      themeConfig: {
        nav: [
          { text: 'Die Geschichte', link: '/de/story' },
          { text: 'Pipeline', link: '/de/pipeline' },
          { text: 'openlaws.com ↗', link: 'https://openlaws.com' }
        ],
        footer: {
          message: 'Offen, wo Offenheit Vertrauen schafft. Geschützt, wo Urteilskraft den Wert ausmacht.',
          copyright: '© 2014–2026 OpenLaws · openlaws.com · openlaws.org'
        }
      }
    }
  }
})
