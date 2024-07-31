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
    minimumCacheTTL: 31536000,
    loader: 'custom',
    // loaderFile: './image-loader.ts',
    // deviceSizes: [640, 768, 1024, 1280, 1400],

    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'sanny-io.test',
        port: '3000',
        pathname: '/**',
      },
    ],

    formats: ['image/avif', 'image/webp'],
  },

  transpilePackages: ['next-image-export-optimizer'],

  typescript: {
    ignoreBuildErrors: true,
  },

  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "false",
    nextImageExportOptimizer_exportFolderName: "optimized-images",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
}))