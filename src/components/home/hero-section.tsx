import Link from 'next/link';
import { products } from '@/lib/products';
import HeroProductFan from './hero-product-fan';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#101820] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(216,199,163,0.14),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="max-w-xl lg:max-w-none">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8c7a3]">Explore Rowers</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:mt-5 lg:text-6xl xl:text-7xl">
            Premium rowing commerce, built lightweight.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
            Browse Hydrow-inspired products, read AI-generated fitness content, and complete a real Stripe Checkout test
            flow with Shopify order creation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#101820] shadow-sm transition hover:bg-[#f2ede5] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101820]">
              Shop products
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101820]">
              Read blog
            </Link>
          </div>
        </div>

        <HeroProductFan products={products} />
      </div>
    </section>
  );
}
