import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="container py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-serif text-2xl mb-3">
            Và‧ra Sephim<em className="text-gradient-gold not-italic">è</em>re
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Heirloom-quality fine jewelry, crafted to be worn every day and treasured for a lifetime.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-luxury uppercase mb-4 text-foreground">Discover the Collection</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Necklaces | Timeless chains in pure gold & platinum</li>
            <li>Bracelets | Investment bullion for your wrist</li>
            <li>Rings | Solid investment pieces</li>
            <li>Pendants & Charms | Add pure value to any look</li>
            <li>Earrings | Stunning clarity, zero alloys</li>
            <li>Redesign your existing gold | Give Gold a New Life </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-luxury uppercase mb-4 text-foreground">Care</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/legal/shipping" className="hover:text-primary transition-colors">Shipping</Link></li>
            <li><Link href="/legal/refund" className="hover:text-primary transition-colors">Returns</Link></li>
            <li><Link href="/#craft" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
            <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()}Vara Sephimère. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/legal/shipping" className="hover:text-primary transition-colors">Shipping</Link>
            <Link href="/legal/refund" className="hover:text-primary transition-colors">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};