import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://hugoqdesh.vercel.app/`,
      lastModified: new Date(),
    },
    {
      url: `https://hugoqdesh.vercel.app/about`,
      lastModified: new Date(),
    },
    {
      url: `https://hugoqdesh.vercel.app/projects`,
      lastModified: new Date(),
    },
    {
      url: `https://hugoqdesh.vercel.app/hire`,
      lastModified: new Date(),
    },
  ];
}
