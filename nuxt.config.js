const config = require('./src/configs');

const { gaId } = config.analytics

module.exports = {
  mode: 'universal',
  target: 'server',
  telemetry: false,
  srcDir: 'src/',
  head: {
    titleTemplate: '%s',
    title: 'Battleline Productions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;600;700;800;900&display=swap' },
      ...config.icons.map((href) => ({ rel: 'stylesheet', href }))
    ]
  },
  css: [
    '~/assets/scss/theme.scss'
  ],
  serverMiddleware: [
    { path: '/api', handler: '~/api/index.js' }
  ],
  plugins: [
    { src: '~/filters/capitalize.js' },
    { src: '~/filters/lowercase.js' },
    { src: '~/filters/uppercase.js' },
    { src: '~/filters/trim.js' },
    { src: '~/filters/placeholder.js' },
    { src: '~/filters/formatDate.js' },
    { src: "~/plugins/notifier.js" },
    { src: '~/plugins/vee-validate.js', ssr: false }
  ],
  components: true,
  buildModules: [
    ['@nuxtjs/vuetify', {
      customVariables: ['~/assets/scss/vuetify/variables/_index.scss'],
      optionsPath: '~/configs/vuetify.js',
      treeShake: true,
      defaultAssets: {
        font: false
      }
    }]
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/google-gtag'
  ],
  'google-gtag': {
    id: gaId,
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false // disable if you don't want to track each page route with router.afterEach(...).
  },
  build: {
    transpile: ["vee-validate/dist/rules"],
    publicPath: process.env.SERVERLESS_NUXT_PUBLIC_PATH
  },
  auth: {
    localStorage: false,
    strategies: {
      local: false,
      auth0: {
        domain: 'dev-v6i7rzbv.us.auth0.com',
        clientId: 'A5HaTA3NxmEZmNTdSzUVJqNN4P6zfURc',
        scope: ['openid', 'profile', 'offline_access'],
        accessType: 'offline',
        responseType: 'code',
        grantType: 'authorization_code',
        codeChallengeMethod: 'S256',
      }
    }
  }
}
