const { withPlaiceholder } = require('@plaiceholder/next')

module.exports = withPlaiceholder({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    config.module.rules.push({
      test: /\.md|graphql$/,
      use: 'raw-loader',
    })

    return config
  },

  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],
    domains: ['www.datocms-assets.com'],
  },


  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: 'https://admin.sanny.io/dashboard',
        permanent: false,
      },
    ]
  },
})