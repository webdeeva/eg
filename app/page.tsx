import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductCards from '@/components/ProductCards';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <div className="gradient-bg">
      <Hero />
      <About />
      <ProductCards />
      <Newsletter />
    </div>
  );
}