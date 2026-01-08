// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-01-08',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/content'
  ]
})
