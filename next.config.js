/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 暫時移除路徑配置進行測試
  // assetPrefix: process.env.DEPLOYMENT_TYPE === 'custom' ? '/home' : 
  //              process.env.NODE_ENV === 'production' ? '/home' : '',
  // basePath: process.env.DEPLOYMENT_TYPE === 'custom' ? '/home' : 
  //           process.env.NODE_ENV === 'production' ? '/home' : '',
}

module.exports = nextConfig 