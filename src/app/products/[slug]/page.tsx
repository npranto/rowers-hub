import AddToCart from '@/components/add-to-cart';
import { formatPrice } from '@/lib/pricing';
import { getProductBySlug, getProducts } from '@/lib/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const generateStaticParams = () => {
  const allProducts = getProducts();

  if (!Array.isArray(allProducts)) return [];

  return allProducts
    .filter(
      product =>
        product &&
        typeof product.slug === 'string' &&
        product.slug.trim() !== '',
    )
    .map(product => ({
      slug: product.slug,
    }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product not found | RowersHub',
      description: 'Product not found',
      notFound: true,
    };
  }

  return {
    title: `${product.name} | RowersHub`,
    description: product?.description ?? '',
    openGraph: {
      title: `${product?.name} | RowersHub`,
      description: product?.description ?? '',
      images: [product?.image ?? ''],
    },
  };
};

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-14">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#eee7db] shadow-sm">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            Product detail
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 text-xl text-black/65">{product.subtitle}</p>
          <p className="mt-6 text-black/70">{product.description}</p>

          <div className="mt-8 flex items-end gap-3">
            <p className="text-3xl font-semibold">
              {formatPrice(product.price)}
            </p>
            {product.compareAtPrice ? (
              <p className="pb-1 text-lg text-black/40 line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            ) : null}
          </div>

          <div className="mt-8">
            <AddToCart itemId={product.slug} label="Add to cart" />
          </div>
        </section>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Features</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {product.features.map(feature => (
            <li
              key={feature}
              className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm shadow-sm">
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Specs</h2>
        <ul className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
          {product.specs.map(spec => (
            <li
              key={spec.label}
              className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm shadow-sm flex flex-col items-start">
              <span className="font-semibold">{spec.label}</span>
              <span className="whitespace-pre-line text-black/65">
                {spec.value}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
