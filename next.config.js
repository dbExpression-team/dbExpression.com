const { NEXT_PUBLIC_DOCS_URL } = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
        destination: `${NEXT_PUBLIC_DOCS_URL}`
      },
      {
        source: '/docs/:path*',
        destination: `${NEXT_PUBLIC_DOCS_URL}/:path*`
      }
    ]
  },
}

module.exports = nextConfig