// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/tailwind.css'
  ],

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {

    head: {
      title: 'Nuxt Test Project',

      meta: [
        {
          name: 'description', content: 'Everything about NUXT3',
        }
      ],

      link: [
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  },

  runtimeConfig: {

    currencyKey: process.env.CURRENCY_API_KEY
  }

})



