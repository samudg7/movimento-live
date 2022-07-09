export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target:'static',
/*   server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  }, */
  router: {
    base: '/movimento-live/'
  },

  head: {
    title: 'movimento-live',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet',
       href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" }
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
