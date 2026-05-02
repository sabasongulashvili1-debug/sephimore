import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type LegalContent = {
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

const CONTENT: Record<string, LegalContent> = {
  privacy: {
    title: "Privacy Policy",
    intro: "At Saphimère, we are committed to protecting the privacy of every person who visits our atelier, online or otherwise. This policy explains what information we collect, how we use it, and the choices you have.",
    sections: [
      {
        heading: "Information We Collect",
        body: [
          "We collect information you provide directly to us — such as your name, email, shipping address, and payment details — when you place an order, sign up for our newsletter, or contact our concierge.",
          "We also collect limited technical information automatically, including your browser type, device, and pages visited, to improve your experience on our site.",
        ],
      },
      {
        heading: "How We Use Your Information",
        body: [
          "Your information is used to process orders, deliver your jewelry, respond to enquiries, and send carefully curated updates if you have opted in.",
          "We never sell your personal information. We share data only with trusted partners — payment processors, shipping carriers, and analytics providers — strictly to fulfill these purposes.",
        ],
      },
      {
        heading: "Your Rights",
        body: ["You may request access to, correction of, or deletion of your personal data at any time. To exercise these rights, write to hello@sephimere.co."],
      },
      {
        heading: "Cookies",
        body: ["We use cookies to remember your preferences and understand how our site is used. You can disable cookies through your browser settings, though some features may not function as intended."],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    intro: "These terms govern your use of sephimere.co and the purchase of any pieces from our collection. By placing an order, you agree to the terms outlined below.",
    sections: [
      {
        heading: "Orders & Acceptance",
        body: [
          "All orders are subject to acceptance and availability. We reserve the right to decline or cancel any order at our discretion, including in cases of pricing errors or suspected fraud.",
          "Prices are displayed in the currency shown at checkout and are inclusive of applicable taxes where required by law.",
        ],
      },
      {
        heading: "Product Information",
        body: ["Each piece is hand-finished, and slight variations in stone, finish, and weight are part of the character of solid-gold jewelry. Photographs are representative; minor differences should be expected."],
      },
      {
        heading: "Intellectual Property",
        body: ["All content on this site — including imagery, designs, and text — is the property of Sephimère and may not be reproduced without written consent."],
      },
      {
        heading: "Limitation of Liability",
        body: ["To the fullest extent permitted by law, Sephimère shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website."],
      },
    ],
  },
  shipping: {
    title: "Shipping Policy",
    intro: "Each Sephimère piece is prepared, inspected, and packaged by hand. We ship worldwide with fully insured, signature-required couriers.",
    sections: [
      {
        heading: "Processing Time",
        body: ["In-stock pieces are dispatched within 2–3 business days. Made-to-order and engraved pieces require 2–3 weeks before dispatch."],
      },
      {
        heading: "Delivery",
        body: [
          "Domestic orders typically arrive within 2–4 business days of dispatch. International orders arrive within 5–10 business days, depending on destination and customs clearance.",
          "All shipments are fully insured and require an adult signature on delivery.",
        ],
      },
      {
        heading: "Duties & Taxes",
        body: ["International orders may be subject to import duties and taxes determined by the destination country. These charges are the responsibility of the recipient."],
      },
      {
        heading: "Tracking",
        body: ["A tracking number is sent by email as soon as your order is dispatched. If you do not receive it within the expected window, please contact hello@saphimere.co."],
      },
    ],
  },
  refund: {
    title: "Refund Policy",
    intro: "We want every Sephimère piece to feel exactly right. If it doesn't, we are happy to offer a return or exchange under the following conditions.",
    sections: [
      {
        heading: "Return Window",
        body: ["Unworn pieces in their original packaging may be returned within 30 days of delivery for a full refund or exchange."],
      },
      {
        heading: "Final Sale",
        body: ["Engraved, resized, and made-to-order pieces are final sale and cannot be returned, except in the case of a manufacturing defect."],
      },
      {
        heading: "How to Initiate a Return",
        body: ["Write to hello@sephimere.co with your order number and reason for return. We will respond within one business day with a prepaid return label and instructions."],
      },
      {
        heading: "Refund Processing",
        body: ["Once your return is received and inspected, refunds are issued to the original payment method within 5–7 business days."],
      },
      {
        heading: "Lifetime Care",
        body: ["Beyond the return window, every Sephimère piece is covered by our complimentary lifetime cleaning and tightening service. Repairs from wear are offered at cost."],
      },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = CONTENT[slug];
  if (!content) return {};
  return {
    title: `${content.title} — Sephimère`,
  };
}

export function generateStaticParams() {
  return Object.keys(CONTENT).map((slug) => ({ slug }));
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = CONTENT[slug];

  if (!content) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <article className="container max-w-3xl py-20 md:py-28">
          <p className="text-xs tracking-luxury uppercase text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Sephimère</Link>
            <span className="mx-2">/</span>
            <span>Legal</span>
          </p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">{content.title}</h1>
          <p className="text-muted-foreground leading-relaxed mb-12">{content.intro}</p>
          <div className="space-y-10">
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-2xl mb-4">{section.heading}</h2>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {section.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-16">
            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}. Questions? Write to{" "}
            <a href="mailto:hello@sephimere.co" className="underline hover:text-primary">hello@sephimere.co</a>.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}