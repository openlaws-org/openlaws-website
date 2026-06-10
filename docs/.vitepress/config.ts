export default {
  title: "OpenLaws",
  description: "Freies Wissen für Gesetze",
  themeConfig: {
    logo: '/logo.svg', // Kannst du später hinzufügen
    nav: [
      { text: 'Startseite', link: '/' },
      { text: 'Leitfaden', link: '/guide' }
    ],
    sidebar: [
      {
        text: 'Dokumentation',
        items: [
          { text: 'Einführung', link: '/guide' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/clemenswass' } // Hier später dein echtes Github-Repo rein
    ]
  }
}