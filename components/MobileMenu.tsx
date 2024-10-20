import Link from 'next/link';
import { Home, Info, ShoppingBag, Image, BookOpen, Calendar } from 'lucide-react';

const MobileMenu = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-gray-700">
      <div className="flex justify-around py-2">
        <Link href="/" className="flex flex-col items-center text-xs">
          <Home size={24} />
          <span>Home</span>
        </Link>
        <Link href="/about" className="flex flex-col items-center text-xs">
          <Info size={24} />
          <span>About</span>
        </Link>
        <Link href="/shop" className="flex flex-col items-center text-xs">
          <ShoppingBag size={24} />
          <span>Shop</span>
        </Link>
        <Link href="/gallery" className="flex flex-col items-center text-xs">
          <Image size={24} />
          <span>Gallery</span>
        </Link>
        <Link href="/blog" className="flex flex-col items-center text-xs">
          <BookOpen size={24} />
          <span>Blog</span>
        </Link>
        <Link href="/booking" className="flex flex-col items-center text-xs">
          <Calendar size={24} />
          <span>Booking</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileMenu;