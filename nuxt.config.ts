// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/image', 'nuxt-aos'],
    css: ['~/assets/css/main.css'],
    ssr: true,
    app: {
        baseURL: process.env.NUXT_BASE_URL || '/'
    },
    aos: {
        duration: 900,
        once: true,
    },
    runtimeConfig: {
        public: {
            upwork: process.env.UPWORK,
            upwork_profile_link: process.env.UPWORK_PROFILE_LINK || "https://www.upwork.com/freelancers/~01c7919289f0d9ee3a?mp_source=share",
            domain: process.env.NUXT_PUBLIC_DOMAIN || "zrinasoft.com",
        },
    }
})
