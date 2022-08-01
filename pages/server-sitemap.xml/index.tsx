
import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const fields = [
    {
      loc: process.env.NEXT_PUBLIC_SITE_URL||'https://example.com',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ]

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}