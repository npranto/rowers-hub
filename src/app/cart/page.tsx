'use client';

import { useCart } from '@/components/cart';
import CartSummary from '@/components/cart-summary';
import Link from 'next/link';

export default function CartPage() {
  const { count } = useCart();
  const isCartEmpty = count === 0;

  if (isCartEmpty) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <h1 className="text-2xl font-semibold">Your cart is empty</h1>
        <p className="mt-3 text-black/65">Add a product before checkout.</p>
        <Link
          href="/products"
          className="mt-6 inline-flex rounded-full bg-[#101820] px-5 py-3 text-sm font-semibold text-white hover:bg-[#24343b] focus:outline-none focus:ring-2 focus:ring-[#101820] focus:ring-offset-2">
          Shop products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <h1 className="text-2xl font-semibold">Cart</h1>

      <CartSummary />

      <Link
        href="/checkout"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#101820] px-5 py-3 text-sm font-semibold text-white hover:bg-[#24343b] focus:outline-none focus:ring-2 focus:ring-[#101820] focus:ring-offset-2">
        Continue to checkout
      </Link>
    </div>
  );
}
