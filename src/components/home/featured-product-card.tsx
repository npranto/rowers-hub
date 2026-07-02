import { formatPrice } from '@/lib/pricing';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import AddToCart from '../add-to-cart';

type FeaturedProductCardProps = {
  product: Product;
};

export default function FeaturedProductCard({ product }: FeaturedProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-[#101820]/8 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <Link
        href={`/products/${product.slug}`}
        aria-label={`View ${product.name}`}
        className="block overflow-hidden">
        <div className="relative aspect-[4/3] bg-[#eee7db] transition duration-300 group-hover:bg-[#e8e0d2]">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            className="object-contain p-6 transition duration-300 group-hover:scale-[1.02]"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
        <div>
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
            <Link href={`/products/${product.slug}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[#101820]/60">{product.subtitle}</p>
        </div>

        <div className="mt-auto flex items-baseline gap-2">
          <p className="text-lg font-semibold">{formatPrice(product.price)}</p>
          {product.compareAtPrice ? (
            <p className="text-sm text-[#101820]/40 line-through">{formatPrice(product.compareAtPrice)}</p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2.5">
          <AddToCart itemId={product.id} label="Add to Cart" />
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-[#101820]/12 px-4 text-sm font-semibold transition hover:bg-[#f7f3ec] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820] focus-visible:ring-offset-2"
            href={`/products/${product.slug}`}>
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
