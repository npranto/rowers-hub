import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';

type HeroProductFanProps = {
  products: Product[];
};

const FAN_ROTATIONS = [-7, 0, 7] as const;
// const FAN_Z_INDEX = [1, 3, 2] as const;

export default function HeroProductFan({ products }: HeroProductFanProps) {
  return (
    <div className="relative flex items-center justify-center py-6 lg:justify-end lg:py-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 m-auto size-56 rounded-full bg-[#d8c7a3]/10 blur-3xl sm:size-72"
      />

      <div className="relative flex items-center justify-center">
        {products.map((product, index) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            aria-label={`View ${product.name}`}
            className={`relative aspect-square w-32 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-[#f7f3ec] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)] transition duration-300 hover:z-10 hover:scale-[1.04] hover:shadow-[0_28px_60px_-12px_rgba(0,0,0,0.6)] sm:w-40 md:w-44 lg:w-52 hover:z-[${products.length - index}]`}
            style={{
              marginLeft: index === 0 ? 0 : '-2.75rem',
              transform: `rotate(${FAN_ROTATIONS[index] ?? 0}deg)`,
            }}>
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              className="object-contain p-3"
              sizes="(min-width: 1024px) 208px, (min-width: 768px) 176px, 128px"
              priority={index === 1}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
