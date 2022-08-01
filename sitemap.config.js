const config = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_UTL||'https://stream-clocks.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    outDir: './out',
    exclude: ['/server-sitemap.xml'], 
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://stream-clocks.com/server-sitemap.xml',
      ],
    },
  };

export default config;