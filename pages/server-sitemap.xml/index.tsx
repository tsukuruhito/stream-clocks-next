import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const fields = [
    {
      loc: 'https://stream-clocks.com',
      lastmod: new Date().toISOString(),
    }
  ]

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}