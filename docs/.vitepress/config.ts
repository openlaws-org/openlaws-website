import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenLaws',
  description: 'Transforming legal knowledge into practical solutions. The models will become interchangeable. The knowledge will remain.',
  lang: 'en-US',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap', rel: 'stylesheet' }]
  ],
  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      alt: 'OpenLaws'
    },
    siteTitle: false,
    nav: [
      { text: 'Architecture', link: '/guide' },
      { text: 'Repositories', link: '/repositories' },
      { text: 'Brand & Design', link: '/brand' },
      { text: 'openlaws.com', link: 'https://openlaws.com' }
    ],
    sidebar: [
      {
        text: 'Legal Knowledge Factory',
        items: [
          { text: 'Overview & Architecture', link: '/guide' },
          { text: 'Ecosystem Repositories', link: '/repositories' },
          { text: 'Brand & Design System', link: '/brand' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/openlaws-org' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/clemenswass/' }
    ],
    footer: {
      message: 'The models will become interchangeable. The knowledge will remain.',
      copyright: '© 2026 OpenLaws (openlaws-org)'
    },
    search: {
      provider: 'local'
    }
  }
})
