export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff', height: '5px' },
  /*
   ** Global CSS
   */
  css: ['~assets/styles/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/core-components.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://my-nuxt-blog-bc8fb.firebaseio.com'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isClient, isDev }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true,
            emitWarning: true
          }
        });
      }
    }
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  layoutTransition: {
    name: 'fade',
    mode: 'out-in'
  }
};
