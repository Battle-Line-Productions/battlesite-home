const config = require('./src/configs');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { gaId } = config.analytics

module.exports = {
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
  plugins: [
    { src: '~/filters/capitalize.js' },
    { src: '~/filters/lowercase.js' },
    { src: '~/filters/uppercase.js' },
    { src: '~/filters/trim.js' },
    { src: '~/filters/placeholder.js' },
    { src: '~/filters/formatDate.js' }
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
    '@nuxtjs/google-gtag'
  ],
  'google-gtag': {
    id: gaId,
    debug: true,
    disableAutoPageTrack: false
  },
  srcDir: './src',
  serverMiddleware: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cookieParser(),
  ],
  build: {
    standalone: true,
  },
  render: {
    etag: false,
    compressor: { threshold: Infinity },
  }
}
