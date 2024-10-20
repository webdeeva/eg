"use client";

import Link from 'next/link';
import { ShoppingBag, User } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80' : 'bg-gradient-to-b from-background/80 to-transparent'
    }`}>
      <div className="backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Beauty Shop
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/shop" className="text-foreground hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/booking" className="text-foreground hover:text-primary transition-colors">
              Booking
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-foreground hover:text-primary transition-colors">
              <ShoppingBag size={24} />
            </Link>
            <Link href="/account" className="text-foreground hover:text-primary transition-colors">
              <User size={24} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;