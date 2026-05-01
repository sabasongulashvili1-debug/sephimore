import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARTICLES } from "@/lib/articles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — Saphimère Journal`,
    description: article.excerpt,
  };
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const others = ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <article className="container max-w-3xl py-16 md:py-24">
          <Link
            href="/journal"
            className="text-xs tracking-luxury uppercase text-muted-foreground hover:text-primary transition-colors mb-8 inline-block"
          >
            ← The Journal
          </Link>
          <span className="text-xs tracking-luxury uppercase text-primary mb-4 block">{article.category}</span>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">{article.title}</h1>
          <div className="text-xs tracking-luxury uppercase text-muted-foreground mb-10">
            {article.date} — {article.readTime}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden mb-12">
            <Image src={article.image} alt={article.title} fill priority className="object-cover" />
          </div>
          <div className="space-y-6 text-foreground/80 leading-relaxed text-[17px]">
            {article.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>

        {others.length > 0 && (
          <section className="bg-secondary/40 py-20 md:py-24">
            <div className="container max-w-6xl">
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Continue reading</h2>
              <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                {others.map((p) => (
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
                    <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}