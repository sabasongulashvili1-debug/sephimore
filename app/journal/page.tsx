import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Journal — Sephimère",
  description: "Notes from the Sephimère atelier — care guides, styling, and sourcing stories.",
};

export default function JournalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-20 md:py-28">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs tracking-luxury uppercase text-primary mb-3 block">The Journal</span>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Notes from the atelier.</h1>
          <p className="text-muted-foreground leading-relaxed">
            Care guides, styling notes, and stories from the people and places behind every piece.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {ARTICLES.map((p) => (
            <Link key={p.slug} href={`/journal/${p.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden mb-5">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="text-xs tracking-luxury uppercase text-primary mb-3 block">{p.category}</span>
              <h2 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">{p.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}