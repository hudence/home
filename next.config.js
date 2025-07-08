/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 只在生產環境使用 basePath
  basePath: process.env.NODE_ENV === 'production' ? '/home' : '',
  // 不使用 assetPrefix
  assetPrefix: '',
}

module.exports = nextConfig 