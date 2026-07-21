import { CartLine, Product } from '@/types';
import { getProductBySlug } from './products';

export const CART_LOCAL_STORAGE_KEY = 'rowers-hub-cart';

export function normalizeQuantity(quantity: number): number {
  if (!Number.isFinite(quantity) || quantity < 0) return 1;
  return Math.max(Math.min(Math.floor(quantity), 10), 1);
}

export type CartLineWithProduct = {
  product: Product;
  quantity: number;
  lineTotal: number;
};

export function getCartLinesWithProducts(
  items: CartLine[],
): CartLineWithProduct[] {
  return items
    .map(item => {
      const product = getProductBySlug(item.slug);
      if (!product) return null;
      const quantity = normalizeQuantity(item.quantity);
      const lineTotal = product.price * quantity;
      return {
        product,
        quantity,
        lineTotal,
      };
    })
    .filter((item): item is CartLineWithProduct => item !== null);
}

export function getCartSubtotal(items: CartLine[]): number {
  return getCartLinesWithProducts(items).reduce(
    (acc, item) => acc + item.lineTotal,
    0,
  );
}
