module.exports = {
  title: "Recipes",
  description: "Diego Garcia's Blog",
  head: [
    ['link', { rel: 'icon', href: '/icon.svg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/icon-152x152.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: {
      'vuepress-plugin-mathjax',
      '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: true,
        generateSWConfig: {
          cleanupOutdatedCaches: true
        }
      }
  },
  themeConfig: {
    sidebar: 'auto',
    logo: '/icon.svg',
    nav: [
      {text: 'Home', link: '/'},
      // {text: 'Tags', link: '/tags/'}
    ]
  },
};
