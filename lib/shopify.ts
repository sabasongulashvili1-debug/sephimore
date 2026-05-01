export const SHOPIFY_STOREFRONT_URL = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`;

export interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
    images: { edges: Array<{ node: { url: string; altText: string | null } }> };
    variants: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          price: { amount: string; currencyCode: string };
          availableForSale: boolean;
          selectedOptions: Array<{ name: string; value: string }>;
        };
      }>;
    };
    options: Array<{ name: string; values: string[] }>;
  };
}

export const STOREFRONT_QUERY = `
  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          id title description handle
          priceRange { minVariantPrice { amount currencyCode } }
          images(first: 5) { edges { node { url altText } } }
          variants(first: 10) {
            edges {
              node {
                id title
                price { amount currencyCode }
                availableForSale
                selectedOptions { name value }
              }
            }
          }
          options { name values }
        }
      }
    }
  }
`;

export const PRODUCT_BY_HANDLE_QUERY = `
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      id title description handle
      priceRange { minVariantPrice { amount currencyCode } }
      images(first: 10) { edges { node { url altText } } }
      variants(first: 20) {
        edges {
          node {
            id title
            price { amount currencyCode }
            availableForSale
            selectedOptions { name value }
          }
        }
      }
      options { name values }
    }
  }
`;

export async function storefrontApiRequest(
  query: string,
  variables: Record<string, unknown> = {},
  options: { revalidate?: number } = {}
) {
  const isServer = typeof window === "undefined";

console.log("TOKEN:", process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN);

  const fetchOptions: RequestInit & { next?: { revalidate: number } } = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
    },
    body: JSON.stringify({ query, variables }),
  };

  // next: { revalidate } only works on the server
  if (isServer) {
    fetchOptions.next = { revalidate: options.revalidate ?? 60 };
  }

  const response = await fetch(SHOPIFY_STOREFRONT_URL, fetchOptions);

  if (response.status === 402) {
    throw new Error("Shopify: Payment required — upgrade your Shopify plan.");
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  if (data.errors) {
    throw new Error(
      `Shopify API error: ${data.errors.map((e: { message: string }) => e.message).join(", ")}`
    );
  }
  return data;
}

export function formatPrice(amount: string | number, currencyCode: string) {
  const value = typeof amount === "string" ? parseFloat(amount) : amount;
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
    }).format(value);
  } catch {
    return `${currencyCode} ${value.toFixed(2)}`;
  }
}