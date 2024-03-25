const { NEXT_PUBLIC_DOCS_URL } = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  basePath: "/dbExpression.com",
  reactStrictMode: true,
  images: { unoptimized: true },
}

module.exports = nextConfig