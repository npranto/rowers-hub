'use client';

import { getCartLinesWithProducts, getCartSubtotal } from '@/lib/cart';
import { useCart } from '../cart';
import Link from 'next/link';
import { formatPrice } from '@/lib/pricing';

export default function CartSummary() {
  const { items, updateItem, removeItem } = useCart();

  const lines = getCartLinesWithProducts(items);
  const subtotal = getCartSubtotal(items);

  if (lines.length === 0) {
    return (
      <>
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="mt-3 text-black/65">Add a product before checkout.</p>
        <Link
          href="/products"
          className="mt-6 inline-flex rounded-full bg-[#101820] px-5 py-3 text-sm font-semibold text-white hover:bg-[#24343b]">
          Shop products
        </Link>
      </>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-semibold">Cart</h2>

      <section
        className="mt-4 sm:mt-6 rounded-3xl bg-white shadow-sm"
        aria-label="Cart summary">
        <ul className="divide-y divide-black/10">
          {lines.map(line => (
            <li key={line.product.slug} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{line.product.name}</h3>
                  <p className="mt-1 text-sm text-black/55">
                    {line.product.subtitle}
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    {formatPrice(line.product.price)}
                  </p>
                </div>

                <p className="font-semibold">{formatPrice(line.lineTotal)}</p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <label
                  className="text-sm font-medium"
                  htmlFor={`qty-${line.product.slug}`}>
                  Qty
                </label>
                <div className="relative">
                  <select
                    id={`qty-${line.product.slug}`}
                    className="appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-sm focus:border-[#101820] focus:outline-none focus:ring-2 focus:ring-[#101820]/30 transition cursor-pointer shadow-sm"
                    value={line.quantity}
                    onChange={event =>
                      updateItem(line.product.slug, Number(event.target.value))
                    }
                    aria-label={`Select quantity for ${line.product.name}`}>
                    {Array.from({ length: 9 }, (_, index) => index + 1).map(
                      qty => (
                        <option
                          key={qty}
                          value={qty}
                          className="bg-white text-black text-sm">
                          {qty}
                        </option>
                      ),
                    )}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                      <path
                        d="M7 8l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <button
                  type="button"
                  className="ml-2 flex items-center gap-1 rounded-lg border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 shadow-sm transition hover:bg-red-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2"
                  onClick={() => removeItem(line.product.slug)}
                  aria-label={`Remove ${line.product.name} from cart`}>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5">
        <p className="font-semibold">Subtotal</p>
        <p className="text-xl font-semibold">{formatPrice(subtotal)}</p>
      </div>

      <Link
        href="/checkout"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#101820] px-5 py-3 text-sm font-semibold text-white hover:bg-[#24343b] focus:outline-none focus:ring-2 focus:ring-[#101820] focus:ring-offset-2">
        Continue to checkout
      </Link>
    </>
  );
}
