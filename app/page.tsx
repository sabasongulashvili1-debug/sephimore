import { storefrontApiRequest, STOREFRONT_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { HomeClient } from "@/components/HomeClient";
import { NewsletterForm } from "@/components/NewsletterForm";
import type { Metadata } from "next";
import Image from "next/image";
import { ARTICLES } from "@/lib/articles";
import Link from "next/link";
import { SiteManifestWidget } from "@/components/SiteManifestWidget";
import { AboutSection } from "@/components/about-section";

export const metadata: Metadata = {
  title: "Vara Sephimère — Fine Jewelry, Crafted to Treasure",
  description:
    "Heirloom-quality fine jewelry. Discover handcrafted necklaces, rings, and earrings made to be worn every day.",
  openGraph: {
    title: "Vara Sephimère — Fine Jewelry, Crafted to Treasure",
    description: "Heirloom-quality fine jewelry. Handcrafted necklaces, rings, and earrings.",
    type: "website",
  },
};


async function getProducts(): Promise<ShopifyProduct[]> {
  try {
    const data = await storefrontApiRequest(STOREFRONT_QUERY, { first: 24, query: null });
    return data?.data?.products?.edges || [];
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative">
          <div className="grid gap-[12px] md:grid-cols-2 min-h-[80vh]">
            <div className="flex flex-col justify-center px-8 md:px-16 py-20 order-2 md:order-1">
              <span className="text-xs tracking-luxury uppercase text-primary mb-6">New Collection</span>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-0">
                Pieces that<br />
                <em className="text-gradient-gold not-italic">whisper</em><br />
                forever.
              </h1>
               <SiteManifestWidget layout="banner" align="left" scale="1.2" border="false"/>
              <p className="text-muted-foreground max-w-md mb-10 leading-relaxed">
                Quietly luxurious. Endlessly wearable. Each piece is hand-finished in our atelier
                from solid gold and ethically sourced stones.
              </p>
              <HomeClient />
            </div>
            <div className="relative order-1 md:order-2 min-h-[50vh] md:min-h-full">
              <Image
                src="/assets/hero-jewelry.jpg"
                alt="Delicate gold necklaces and diamond rings on cream marble"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-20 text-center container">
          <p className="font-serif text-2xl md:text-3xl italic max-w-3xl mx-auto leading-relaxed text-foreground/80">
            "Jewelry is the most personal of all arts — a quiet declaration of who you are."
          </p>
        </section>

        {/* Collection */}
        <section id="collection" className="container pb-24">
          <div className="text-center mb-16">
            <span className="text-xs tracking-luxury uppercase text-primary mb-3 block">The Collection</span>
            <h2 className="font-serif text-4xl md:text-5xl">Crafted to Treasure</h2>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-24 border border-dashed border-border rounded-sm">
              <h3 className="font-serif text-2xl mb-3">No products found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Your atelier is ready. Add products in your Shopify admin to see them here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
              {products.map((p) => (
                <ProductCard key={p.node.id} product={p} />
              ))}
            </div>
          )}
        </section>

        {/* About */}
        <AboutSection />
        {/* Craft / Values */}
<section id="craft" className="container py-24 md:py-32">
  <div className="text-center mb-16 max-w-2xl mx-auto">
    <span className="text-xs tracking-luxury uppercase text-primary mb-3 block">The Craft</span>
    <h2 className="font-serif text-4xl md:text-5xl mb-6">Made slowly. Worn forever.</h2>
    <p className="text-muted-foreground leading-relaxed">Five Guarantees that accompanies every piece that leaves the atelier.</p>
  </div>

  <div className="border border-border/60">
    {/* Row 1: 3 items */}
    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/60">
      {[
        { n: "01", t: "Guaranteed Purity", d: "Every piece is crafted from 99.99% fine gold or platinum and hallmarked for purity, gram weight and maker." },
        { n: "02", t: "Timeless Quality", d: "Hypoallergenic, antimicrobial, and naturally resistant to oxidation or discoloration." },
        { n: "03", t: "Sustainably Crafted", d: "Consciously and environmentally friendly made." },
      ].map((v) => (
        <div key={v.n} className="bg-background p-10">
          <div className="font-serif text-sm text-primary mb-6">{v.n}</div>
          <h3 className="font-serif text-2xl mb-4">{v.t}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
        </div>
      ))}
    </div>

    {/* Row 2: 2 items centered */}
    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/60 border-t border-border/60 md:mx-auto md:max-w-[66.666%]">
      {[
        { n: "04", t: "Certified Value", d: "Accompanied by an official Certificate of Authenticity." },
        { n: "05", t: "Liquid Jewelry", d: "Sold strictly by gram weight to allow investment grade jewelry to be objectively valued worldwide using the international standard gold price." },
      ].map((v) => (
        <div key={v.n} className="bg-background p-10">
          <div className="font-serif text-sm text-primary mb-6">{v.n}</div>
          <h3 className="font-serif text-2xl mb-4">{v.t}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Testimonials */}
        <section className="bg-foreground text-background py-[12px] xl:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-xs tracking-luxury uppercase text-primary mb-3 block">Worn & Loved</span>
              <h2 className="font-serif text-4xl md:text-5xl">In their words.</h2>
            </div>
            <div className="w-full ">
             <SiteManifestWidget layout="carousel" theme="dark" border="true" align="center" scale="1"/>
            </div>
          </div>
        </section>

        {/* Journal */}
<section id="journal" className="container py-24 md:py-32">
  <div className="flex items-end justify-between mb-16">
    <div>
      <span className="text-xs tracking-luxury uppercase text-primary mb-3 block">The Journal</span>
      <h2 className="font-serif text-4xl md:text-5xl">Notes from the atelier.</h2>
    </div>
    <Link href="/journal" className="hidden md:inline-block text-xs tracking-luxury uppercase border-b border-foreground/40 pb-1 hover:text-primary hover:border-primary transition-colors">
      All Stories
    </Link>
  </div>
  <div className="grid md:grid-cols-3 gap-8 md:gap-10">
    {ARTICLES.map((p) => (
      <Link key={p.slug} href={`/journal/${p.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden mb-5">
          <Image src={p.image} alt={p.title} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <span className="text-xs tracking-luxury uppercase text-primary mb-3 block">{p.cat}</span>
        <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
      </Link>
    ))}
  </div>
</section>

        {/* FAQ */}
        <section className="bg-secondary/40 py-24 md:py-32">
          <div className="container max-w-3xl">
            <div className="text-center mb-16">
              <span className="text-xs tracking-luxury uppercase text-primary mb-3 block">FAQ</span>
              <h2 className="font-serif text-4xl md:text-5xl">Good to know.</h2>
            </div>
            <div className="divide-y divide-border/60 border-y border-border/60">
              {[
                { q: "Is your jewelry made of solid gold?", a: "Yes — every piece is solid 14k, 18k or 24k recycled gold. We never plate or fill. The metal you see is the same all the way through." },
                { q: "Can I wear my pieces every day?", a: "Absolutely. Sephimère is designed for everyday wear — in the shower, swimming, sleeping. Solid gold and properly set stones are made for life." },
                { q: "How long does shipping take?", a: "Most pieces ship within 2–3 business days. Made-to-order designs take 2–3 weeks. Worldwide shipping is complimentary on orders over $250." },
                { q: "What if I need a different size?", a: "Free resizing within the first year on most rings. Just write to us — we'll send a prepaid label and return your piece resized in about two weeks." },
                { q: "Do you offer repairs?", a: "Yes. Every Vara Sephimère piece is backed by a lifetime craftsmanship guarantee. Cleaning and repair of manufacturing defects is always free." },
              ].map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-serif text-lg pr-8">{f.q}</span>
                    <span className="text-primary text-2xl font-light transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="contact" className="container pt-24 md:pt-32 pb-16 md:pb-20">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs tracking-luxury uppercase text-primary mb-3 block">Stay Close</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Letters from the <em className="text-gradient-gold not-italic">atelier</em>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Quiet, infrequent notes — new pieces, behind-the-scenes from the workshop, and small guides for caring for what you love. No noise.
            </p>
            {/* Newsletter form is client-only */}
            <NewsletterForm />
            <p className="text-xs text-muted-foreground mt-6">
              Or write to us directly at{" "}
              <a href="mailto:hello@sephimere.com" className="text-foreground hover:text-primary transition-colors underline underline-offset-4">
                hello@sephimere.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}