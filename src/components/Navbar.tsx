"use client";

import * as React from "react";
import { Link, usePathname } from "next-view-transition";
import { ShoppingCart, Menu, User, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface CartCountProps {
  count: number;
}

function CartCount({ count }: CartCountProps) {
  return (
    <div className="relative group cursor-pointer">
      <ShoppingCart className="w-5 h-5 text-black transition-transform group-hover:scale-110" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-matte-gold text-[0.6875rem] font-medium text-black shadow-lg ring-2 ring-white">
          {count}
        </span>
      )}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="group -ml-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/50 transition-all duration-300 hover:border-matte-gold/50"
        >
          <Menu className="w-5 h-5 text-black transition-transform group-hover:rotate-90" />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5e6d3]">
            <span className="text-black font-playfair text-lg">E</span>
          </div>
          <span className="hidden text-xl font-display font-bold tracking-tight sm:block">
            Lumière
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {["Home", "Women", "Men", "Accessories", "New Arrivals"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative text-sm font-medium text-black transition-all hover:text-[#d4af37]"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-matte-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/wishlist">
            <User className="w-5 h-5 text-black transition-transform hover:scale-110" />
          </Link>
          <CartCount count={2} />
          <Button variant="outline" size="icon" className="rounded-full border-white/20">
            <Instagram className="w-4 h-4 text-black" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/20 bg-white/95 backdrop-blur-xl mobile-menu">
          <div className="flex flex-col gap-4 px-6 py-8">
            {["Home", "Women", "Men", "Accessories", "New Arrivals"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-4 rounded-lg px-4 py-3 transition-all hover:bg-white/50"
              >
                {item === "Home" && (
                  <span className="w-2 h-2 rounded-full bg-matte-gold" />
                )}
                <span className="font-medium text-black">{item}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
