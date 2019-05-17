import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
 head: {
  htmlAttrs: {
    lang: 'en'
  },
  title: pkg.name,
  meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      "http-equiv": 'Content-type',
      "content": 'text/html'
    },
    {
      name: 'rating',
      content: 'general'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:site_name',
      content: 'Palatable"'
    },
    {
      property: 'og:url',
      content: 'http://shahezad.hurekadev.info/'
    },
    {
      property: 'og:determiner',
      content: 'auto'
    },
    {
      property: 'og:description',
      content: 'Blog built in VueJS'
    },
    {
      property: 'og:updated_time',
      content: '2019-04-16T10:02:38+00:00'
    },
    {
      property: 'og:image',
      content: 'http://shahezad.hurekadev.info/_nuxt/img/f8ea4a6.png'
    },
    {
      property: 'og:image:secure_url',
      content: 'http://shahezad.hurekadev.info/_nuxt/img/f8ea4a6.png'
    },
    {
      property: 'og:image:type',
      content: 'image/png'
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    }
  ],
  link: [
  ],
  script: [
  ]
},


  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/nuxt-quill-plugin.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Methods':  'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers':  'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin'
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      
    }
  }
}
