/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['cdn.pixabay.com']
  },
  redirects: async () => {
    return[
      {
        source: '/image',
        destination:'/',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
