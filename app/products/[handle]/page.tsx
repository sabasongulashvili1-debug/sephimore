import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { formatPrice, PRODUCT_BY_HANDLE_QUERY, storefrontApiRequest } from "@/lib/shopify";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ProductActions } from "@/components/ProductActions";

interface ProductDetail {
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
}

async function getProduct(handle: string): Promise<ProductDetail | null> {
  try {
    const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
    return data?.data?.product || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) return {};
  return {
    title: `${product.title} — Saphimère`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.images.edges[0]
        ? [{ url: product.images.edges[0].node.url }]
        : [],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            {product.images.edges.length > 0 ? (
              product.images.edges.map((img, i) => (
                <div key={i} className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src={img.node.url}
                    alt={img.node.altText || product.title}
                    fill
                    priority={i === 0}
                    className="object-cover"
                  />
                </div>
              ))
            ) : (
              <div className="aspect-square bg-muted" />
            )}
          </div>

          {/* Right column */}
          <div className="md:sticky md:top-28 md:self-start">
            <Link
              href="/"
              className="text-xs tracking-luxury uppercase text-muted-foreground hover:text-primary"
            >
              ← Back to Collection
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl mt-6 mb-3">{product.title}</h1>
            <p className="text-2xl font-serif mb-8">
              {formatPrice(
                product.priceRange.minVariantPrice.amount,
                product.priceRange.minVariantPrice.currencyCode
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 whitespace-pre-line">
              {product.description}
            </p>

            {/* Variant selector + Add to Bag — client only */}
            <ProductActions product={product} />

            <div className="mt-10 space-y-4 text-sm text-muted-foreground border-t border-border pt-8">
              <p>✦ Complimentary shipping on all orders</p>
              <p>✦ 30-day returns and exchanges</p>
              <p>✦ Lifetime craftsmanship guarantee</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}