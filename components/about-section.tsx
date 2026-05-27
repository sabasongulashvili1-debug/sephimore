"use client";

import Image from "next/image";
import { useState } from "react";

export const AboutSection = () => {
  const [aboutExpanded, setAboutExpanded] = useState(false);

  return (
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
            <p>Founded in 2019, the small atelier brought together master goldsmiths and stone-setters who have spent decades perfecting their craft. Every piece is made by hand in limited runs, with the same care once reserved for heirloom commissions.</p>
            <p>In 2026 The Vara Jewelers family, active goldsmith jewlers in Sardinia since the early 1400's, acquired Sephimère to expand Và‧ra Jewelers</p>
            <p>We believe jewelry should be intimate, not loud. Worn in the morning, in the shower, on a wedding day, on a quiet Tuesday. Made to outlast trends — and us.</p>
          </div>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${aboutExpanded ? "max-h-[600px] mt-5" : "max-h-0"}`}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>For too long, the jewellery industry has hidden massive markups behind brand prestige and marketing illusions. Vara Goldsmith Jewelers is changing that. By stripping away the noise, we treat bullion jewellery as what it truly should be: a beautiful, appreciating asset.</p>
              <p><span className="text-foreground font-medium">Purity Without Compromise:</span> We work exclusively in 24K gold and pure 999 platinum. No alloys, no dilution — just pure, unadulterated precious metal.</p>
              <p><span className="text-foreground font-medium">Live Market Rates:</span> Every piece we sell is priced by the gram in real-time, tracking the current global market value. You buy according to the market, ensuring your jewellery acts as a true investment.</p>
              <p><span className="text-foreground font-medium">Honest Craftsmanship:</span> While traditional retailers charge up to a 1,000% premium, we apply a single, honest fabrication fee to cover the artisan's work.</p>
              <p><span className="text-foreground font-medium">A Full-Circle Investment:</span> Bullion you can wear, and liquidity you can trust. Enjoy your pieces today, and sell into the marketplace knowing what price to expect for your bullion jewelry.</p>
              <p className="italic">Vara Goldsmith Jewelers delivers pure authenticity and fundamental investment value, merging the security of bullion with the beauty of bench-made craftsmanship.</p>
            </div>
          </div>

          <button
            onClick={() => setAboutExpanded(!aboutExpanded)}
            className="mt-6 text-xs tracking-luxury cursor-pointer uppercase text-primary flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            {aboutExpanded ? "Read less" : "More"}
            <span className={`transition-transform duration-300  ${aboutExpanded ? "rotate-180" : ""}`}>↓</span>
          </button>

          <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-border/60">
            {[["2019", "Founded"], ["24k", "Solid gold"], ["100%", "Custom Hand-Made"]].map(([val, label]) => (
              <div key={label}>
                <div className="font-serif text-3xl text-gradient-gold mb-1">{val}</div>
                <div className="text-xs tracking-luxury uppercase text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};