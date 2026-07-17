import FeaturedProductCard from '@/components/home/featured-products-section/featured-product-card';
import { products } from '@/lib/products';

export const metadata = {
  title: 'Products | RowersHub',
  description: 'Browse our products and find the perfect rower for your home.',
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
          Shop
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Home fitness products with a premium rowing feel.
        </h1>
        <p className="mt-4 text-lg text-black/65">
          Learn more about how our products can help you achieve your fitness
          goals.
        </p>
      </header>

      <section
        className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Products">
        {products.map(product => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
