import { GetServerSidePropsContext } from "next";

const generationSiteMapXml = async () => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  xml += `<url>
    <loc>https://stream-clocks.com/</loc>
    <lastmod>2022-08-01</lastmod>
    </url>
  `;
  xml += `</urlset>`;
  return xml;
}

export async function getServerSideProps({ res }:GetServerSidePropsContext) {
  const xml = await generationSiteMapXml();

  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 24時間のキャッシュ
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
}
const Page = () => null
export default Page;