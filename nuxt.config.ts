export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    indexable: process.env.NODE_ENV === 'production',
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/fonts',
        '@pinia/nuxt',
        '@nuxt/icon',
        '@nuxtjs/color-mode',
        'nuxt-gtag',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        'nitro-cloudflare-dev'
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
            return ['/'];
        }
    },
    site: { url: 'brunoreis.dev' },
    nitro: {
        preset: "cloudflare-pages"
    },
})
