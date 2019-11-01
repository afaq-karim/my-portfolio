<<<<<<< HEAD
const builtAt = new Date().toISOString()
=======
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa
import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Afaq Karim - Front-End Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
<<<<<<< HEAD
      { hid: 'description', name: 'description', content: pkg.description },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#c1c1c1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@karim-afaq' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:updated_time', content: builtAt }
=======
      { hid: 'description', name: 'description', content: pkg.description }
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i&display=swap'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
<<<<<<< HEAD
  loading: {
    color: '#5a46ff',
    height: '3px'
  },
=======
  loading: { color: '#fff' },
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
<<<<<<< HEAD
  plugins: [
    { src: '~/plugins/vue-picture-swipe.js', ssr: false }
  ],
=======
  plugins: [{ src: '~/plugins/vue-picture-swipe.js', ssr: false }],
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
