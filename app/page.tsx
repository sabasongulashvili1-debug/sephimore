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

export const metadata: Metadata = {
  title: "Sephimère — Fine Jewelry, Crafted to Treasure",
  description:
    "Heirloom-quality fine jewelry. Discover handcrafted necklaces, rings, and earrings made to be worn every day.",
  openGraph: {
    title: "Sephimère — Fine Jewelry, Crafted to Treasure",
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
        <section id="about" className="bg-secondary/40 py-24 md:py-32">
          <div className="container grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/assets/atelier.jpg"
                alt="Jeweler hand-finishing a gold ring at the Sephimère atelier"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs tracking-luxury uppercase text-primary mb-4 block">Our Story</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
                A house built on <em className="text-gradient-gold not-italic">quiet luxury</em>.
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>Sephimère began with a single ring — slipped onto a finger and never taken off again. That feeling, of a piece becoming part of you, is the standard we hold every design to.</p>
                <p>Founded in 2019, our small atelier brings together master goldsmiths and stone-setters who have spent decades perfecting their craft. Every piece is made by hand in limited runs, with the same care once reserved for heirloom commissions.</p>
                <p>We believe jewelry should be intimate, not loud. Worn in the morning, in the shower, on a wedding day, on a quiet Tuesday. Made to outlast trends — and us.</p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-border/60">
                {[["2019", "Founded"], ["14k", "Solid gold"], ["100%", "Hand-finished"]].map(([val, label]) => (
                  <div key={label}>
                    <div className="font-serif text-3xl text-gradient-gold mb-1">{val}</div>
                    <div className="text-xs tracking-luxury uppercase text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Craft / Values */}
        <section id="craft" className="container py-24 md:py-32">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs tracking-luxury uppercase text-primary mb-3 block">The Craft</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Made slowly. Worn forever.</h2>
            <p className="text-muted-foreground leading-relaxed">Four principles guide every piece that leaves the atelier.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60">
            {[
              { n: "01", t: "Solid Gold", d: "14k and 18k recycled gold throughout. No plating, no filling — what you see is what it is, all the way through." },
              { n: "02", t: "Ethically Sourced", d: "Conflict-free diamonds and traceable gemstones from partners we visit, know by name, and trust completely." },
              { n: "03", t: "Hand-Finished", d: "Every clasp soldered, every stone set, every surface polished by hand in small batches in our atelier." },
              { n: "04", t: "Made to Last", d: "A lifetime craftsmanship guarantee. Free cleaning and repair, because heirlooms should outlive us." },
            ].map((v) => (
              <div key={v.n} className="bg-background p-10">
                <div className="font-serif text-sm text-primary mb-6">{v.n}</div>
                <h3 className="font-serif text-2xl mb-4">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
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
                { q: "Is your jewelry made of solid gold?", a: "Yes — every piece is solid 14k or 18k recycled gold. We never plate or fill. The metal you see is the same all the way through." },
                { q: "Can I wear my pieces every day?", a: "Absolutely. Sephimère is designed for everyday wear — in the shower, swimming, sleeping. Solid gold and properly set stones are made for life." },
                { q: "How long does shipping take?", a: "Most pieces ship within 2–3 business days. Made-to-order designs take 2–3 weeks. Worldwide shipping is complimentary on orders over $250." },
                { q: "What if I need a different size?", a: "Free resizing within the first year on most rings. Just write to us — we'll send a prepaid label and return your piece resized in about two weeks." },
                { q: "Do you offer repairs?", a: "Yes. Every Sephimère piece is backed by a lifetime craftsmanship guarantee. Cleaning and repair of manufacturing defects is always free." },
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