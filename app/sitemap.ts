import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://stream-clocks.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://stream-clocks.com/effects/',
      lastModified: new Date(),
    }
  ]
}