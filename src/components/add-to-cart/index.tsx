'use client';

import { useAddToCart } from '@/hooks/use-add-to-cart';
import { type ReactNode } from 'react';
import Button, { type ButtonProps } from '../ui/button';

export type AddToCartProps = Omit<ButtonProps, 'children' | 'onClick'> & {
  itemId: string;
  label?: string;
  quantity?: number;
  /** When set, navigate here after add (e.g. `/cart` on PDP). */
  redirectTo?: string;
};

/**
 * Presentational add-to-cart control. Behavior lives in `useAddToCart`.
 */
export default function AddToCart({
  itemId,
  label = 'Add to Cart',
  quantity = 1,
  redirectTo,
  disabled,
  ...buttonProps
}: AddToCartProps): ReactNode {
  const { addToCart, isPending } = useAddToCart();

  return (
    <Button
      variant="primary"
      size="md"
      disabled={disabled || isPending}
      aria-busy={isPending || undefined}
      onClick={() => addToCart({ itemId, quantity, redirectTo })}
      {...buttonProps}>
      {isPending ? 'Adding…' : label}
    </Button>
  );
}
