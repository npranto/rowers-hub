'use client';

import CheckoutInfo from '@/components/checkout-info';
import { useCart } from '@/components/cart';
import Link from 'next/link';

export default function CheckoutPage() {
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
      <CheckoutInfo />
    </div>
  );
}
