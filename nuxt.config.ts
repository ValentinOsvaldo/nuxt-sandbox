// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      titleTemplate: '%s - Aeto team sandbox',
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    apiUrl: process.env.API_URL,
    public: {
      apiUrl: process.env.API_URL,
    },
  },
});
