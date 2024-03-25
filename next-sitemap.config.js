/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://dbexpression.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: '*',
          disallow: ['/docs/reference/statements', '/docs/about' ],
        }
      ],
      additionalSitemaps: [
        'https://dbexpression.com/docs/sitemap.xml'
      ]
    }
  }