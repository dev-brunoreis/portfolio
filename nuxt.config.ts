export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/fonts',
      '@pinia/nuxt',
      '@nuxt/icon',
      '@nuxtjs/color-mode',
      'nuxt-gtag',
      '@nuxtjs/robots',
      '@nuxtjs/sitemap'
    ],
    plugins: [
      './plugins/easterEgg.js'
    ],
    gtag: {
      id: 'G-CZLDXWKQDV'
    },
    robots: {
      rules: [
        {
          userAgent: '*',
          allow: '/'
        }
      ],
      sitemap: 'https://brunoreis.dev/sitemap.xml'
    },
    sitemap: {
      hostname: 'https://brunoreis.dev',
      routes: async () => {
        return ['/' ];
      }
    }
  })
  