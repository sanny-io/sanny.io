import { withPayload } from '@payloadcms/next/withPayload'
import configureBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = configureBundleAnalyzer({
  enabled: process.env.ANALYZE === '1'
})

/**
 * @type {import('next').NextConfig}
 */
export default withBundleAnalyzer(withPayload({
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
      'pg-native': false,
    }

    return config
  },

  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],

    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'sanny-io.test',
        port: '3000',
        pathname: '/**',
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
}))