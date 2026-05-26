import Link from "next/link";
import { CartDrawer } from "./CartDrawer";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="container flex items-center justify-between h-20 gap-6">
        <div className="flex-1 hidden md:flex gap-4 lg:gap-8 text-xs lg:text-sm tracking-luxury uppercase">
          <Link href="/#collection" className="hover:text-primary transition-colors">Shop</Link>
          <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/#craft" className="hover:text-primary transition-colors">Craft</Link>
          <Link href="/#journal" className="hover:text-primary transition-colors">Journal</Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <Link href="/" className="flex-1  md:flex-none text-start md:px-4">
          <span className="font-serif text-2xl md:text-3xl tracking-wide whitespace-nowrap">
           Và‧ra Sephim<em className="text-gradient-gold not-italic">è</em>re
          </span>
        </Link>
        <div className="flex-1 flex justify-end items-center gap-2">
          <CartDrawer />
        </div>
      </div>
    </header>
  );
};
