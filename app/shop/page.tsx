import ProductGrid from '@/components/ProductGrid';

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Our Products</h1>
      <ProductGrid />
    </div>
  );
}