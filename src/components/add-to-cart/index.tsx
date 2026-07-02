'use client';

import { ReactNode } from 'react';
import Button, { ButtonProps } from '../ui/button';
import { useCart } from '../cart';

type AddToCartProps = Omit<ButtonProps, 'children' | 'onClick'> & {
  itemId: string;
  label?: string;
  quantity?: number;
};

export default function AddToCart({
  itemId,
  label = 'Add to Cart',
  quantity = 1,
  ...buttonProps
}: AddToCartProps): ReactNode {
  const { addItem } = useCart();

  return (
    <Button variant="primary" size="md" onClick={() => addItem(itemId, quantity)} {...buttonProps}>
      {label}
    </Button>
  );
}
