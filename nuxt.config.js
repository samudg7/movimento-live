export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
/*   server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
    timing: false
  }, */
  router: {
    base: '/movimento-live/'
  },

  head: {
    title: 'Scuola Danza Grazia Paulon',
    htmlAttrs: {
      lang: 'it'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Scopri Scuola Danza Grazia Paulon, la migliore scuola di danza in Italia. Corsi di ballo per tutti i livelli, eventi e spettacoli imperdibili!' },
      { name: 'keywords', content: 'scuola di danza, danza Italia, corsi di ballo, danza classica, danza moderna, pilates, pilates reformer, eventi di danza, spettacoli di ballo' },
      { name: 'author', content: 'samdeg' },
      { name: 'robots', content: 'index, follow' }, // Allow search engines to index

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Scuola Danza Grazia Paulon' },
      { property: 'og:description', content: 'Unisciti alla nostra scuola di danza e vivi la passione per il ballo con i migliori insegnanti in Italia.' },
      { property: 'og:image', content: '' }, // Replace with your real image URL
      { property: 'og:url', content: 'https://samudg7.github.io/movimento-live/' },
      { property: 'og:site_name', content: 'Scuola Danza Grazia Paulon' },


      // Twitter Card (for better preview on Twitter)
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Scuola Danza Grazia Paulon' },
      { name: 'twitter:description', content: 'Scopri Scuola Danza Grazia Paulon, la migliore scuola di danza in Italia con corsi di ballo per tutti i livelli.' },
      { name: 'twitter:image', content: '' }, // Replace with your real image URL
      { name: 'twitter:site', content: '' } // Replace with your Twitter handle if available

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '@/static/css/mobile-first.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://samudg7.github.io/movimento-live/' } // Canonical URL to avoid duplicate content issues

    ],
     script:[
       {
         src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
         type: 'text/javascript'
       },
       {
        src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js',
        type: 'text/javascript'
      },

     ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/main.css',
    '@/static/css/mobile-first.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
