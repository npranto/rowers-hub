'use client';

import { useCart } from '@/components/cart';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export type AddToCartOptions = {
  /** Cart lines are keyed by product slug. */
  itemId: string;
  quantity?: number;
  /** Optional post-add navigation (serializable for Server → Client props). */
  redirectTo?: string;
};

/**
 * Cart mutation + optional navigation. Keeps UI components free of cart/routing details.
 */
export function useAddToCart() {
  const { addItem } = useCart();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function addToCart({ itemId, quantity = 1, redirectTo }: AddToCartOptions) {
    if (!itemId.trim()) return;

    addItem(itemId, quantity);

    if (!redirectTo) return;

    startTransition(() => {
      router.push(redirectTo);
    });
  }

  return { addToCart, isPending };
}
