import Link from 'next/link';
import FeaturedProductCard from '@/components/home/featured-product-card';
import { products } from '@/lib/products';

export default function FeaturedProductsSection() {
  return (
    <section className="bg-[#f8f5f0]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#101820]/45">Featured</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Products for a consistent home routine
            </h2>
          </div>
          <Link
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[#101820] underline-offset-4 transition hover:text-[#101820]/70 hover:underline"
            href="/products">
            View all products
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3 md:gap-8">
          {products.map(product => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
