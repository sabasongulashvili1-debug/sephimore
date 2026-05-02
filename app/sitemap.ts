import { storefrontApiRequest, STOREFRONT_QUERY } from "@/lib/shopify";
import { ARTICLES } from "@/lib/articles";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sephimere.com";

  // Fetch products
  let productUrls: MetadataRoute.Sitemap = [];
  try {
    const data = await storefrontApiRequest(STOREFRONT_QUERY, { first: 100, query: null });
    const products = data?.data?.products?.edges || [];
    productUrls = products.map((p: any) => ({
      url: `${baseUrl}/products/${p.node.handle}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  } catch {}

  // Journal articles
  const articleUrls = ARTICLES.map((a) => ({
    url: `${baseUrl}/journal/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Legal pages
  const legalUrls = ["privacy", "terms", "shipping", "refund"].map((slug) => ({
    url: `${baseUrl}/legal/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...productUrls,
    ...articleUrls,
    ...legalUrls,
  ];
}