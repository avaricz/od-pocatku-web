// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/flower.svg' }]
    }
  },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/base.scss" as *;'
        }
      }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image'],
  nitro: {
    prerender: {
      routes: ['/'],
      ignore: ['/api/**']  
    },
    experimental: {
      database: true,
    },
    database: {
      events: {
        connector: 'sqlite',
        options: { name: 'events-db' }
      },
    },
    // runtimeConfig: {
    //   databasePath: '.data/events-db.sqlite' // Nastav cestu k databázi
    // }
    
  },
//   runtimeConfig: {
//     public: {
//         apiBase: "/api", 
//     }
// }
  
})