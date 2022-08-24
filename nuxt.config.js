export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'codedevents',
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './static/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/phone-number-input.js',
    './plugins/vue-toast.js'
  ],

   // Auto import components: https://go.nuxtjs.dev/config-components
   components: true,

   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
   buildModules: [
     // https://go.nuxtjs.dev/tailwindcss
     '@nuxtjs/tailwindcss',
     '@nuxtjs/color-mode',
     '@nuxtjs/dotenv'
   ],
 
   // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
     // https://go.nuxtjs.dev/axios
     '@nuxtjs/axios',
   ],
 
   // Axios module configuration: https://go.nuxtjs.dev/config-axios
   env: {
     baseUrl: process.env.BASE_URL
   },
   axios: {
     // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
     baseURL: 'https://api.codedevents.com/',
   },
   tailwindcss: {
     jit: true,
   },
 
   // Build Configuration: https://go.nuxtjs.dev/config-build
   build: {
   },
   colorMode: {
     classSuffix: ""
   }
}
