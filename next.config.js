/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 對於 https://hudence.site/home/ 部署
  basePath: '/home',
  // 不使用 assetPrefix，讓靜態資源路徑正確
  assetPrefix: '',
}

module.exports = nextConfig 