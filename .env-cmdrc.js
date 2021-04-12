module.exports = {
    local: {
      NODE_ENV: 'development',
      PORT: '8080',
  
      // API_URL: 'https://api.dev.my-nuxt-project.com', // If you are using the `@nuxtjs/axios` package, you need to set environment variables.
    },
    prod: {
      DOMAIN_NAME: 'battlelineproductions.com', // Enter the domain created above.
      REDIRECT_DOMAIN_NAME: 'www.battlelineproductions.com',
      NODE_ENV: 'production',
      NUXT_TELEMETRY_DISABLED: '1',
      DOMAIN_HOSTED_ZONE: 'battlelineproductions.com.',
      ASSETS_DOMAIN_NAME: 'cdn.battlelineproductions.com',
      ASSETS_ACM_ARN: 'arn:aws:acm:us-east-1:098170852411:certificate/b19d95de-6177-446d-ae1f-45195e5b08b8'
  
      // API_URL: 'https://api.my-nuxt-project.com', // If you are using the `@nuxtjs/axios` package, you need to set environment variables.
    },
  }