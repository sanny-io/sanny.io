const { withPlaiceholder } = require('@plaiceholder/next')

module.exports = withPlaiceholder({
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    config.module.rules.push({
      test: /\.graphql$/,
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
        source: '/admin',
        destination: 'https://sanny-io.admin.datocms.com',
        permanent: false,
      },
    ]
  },
})