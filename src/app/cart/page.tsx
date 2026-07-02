'use client';

import { CartLogger, useCart } from '@/components/cart';
import Button from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { products } from '@/lib/products';

export default function CartPage() {
  const { addItem, updateItem, removeItem, clearItems } = useCart();

  return (
    <div className="flex flex-col p-4">
      <Heading level={2} align="left">
        Cart
      </Heading>
      <div className="flex gap-2">
        <CartLogger className="flex-1" />
        <div className="flex flex-col gap-4 max-w-xs flex-1">
          {products.map(product => (
            <div key={product.slug} className="border rounded-md p-3 mb-2 flex flex-col gap-2 bg-background/80">
              <div className="font-semibold text-base mb-1">{product.name}</div>
              <div className="flex gap-2">
                <Button variant="primary" size="md" onClick={() => addItem(product.slug, 1)}>
                  Add
                </Button>
                <Button variant="secondary" size="md" onClick={() => updateItem(product.slug, 2)}>
                  Update (to 2)
                </Button>
                <Button variant="ghost" size="md" onClick={() => removeItem(product.slug)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <Button variant="destructive" size="md" onClick={() => clearItems()} fullWidth>
            Clear Items
          </Button>
        </div>
      </div>
    </div>
  );
}
