/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: '',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
}

module.exports = nextConfig