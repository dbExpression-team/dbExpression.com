const { DOCS_URL } = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true
  },
  async redirects() {
    return [
      {
        source: '/rtd/:slug*',
        destination: '/docs/:slug*',
        permanent: false
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/docs',
        destination: `${DOCS_URL}/docs`
      },
      {
        source: '/docs/:path*',
        destination: `${DOCS_URL}/docs/:path*`
      }
    ]
  },
}

module.exports = nextConfig