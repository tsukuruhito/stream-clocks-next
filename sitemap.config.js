const config = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_UTL||'https://stream-clocks.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    outDir: './out',
    exclude: ['/server-sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://example.com/server-sitemap.xml', // <==== Add here
      ],
    },
  };

export default config;