import { CartLine, Product } from '@/types';
import { getProductBySlug } from './products';

export const CART_LOCAL_STORAGE_KEY = 'rowers-hub-cart';
export const MAX_CART_QUANTITY = 10;

export function normalizeQuantity(quantity: number): number {
  if (!Number.isFinite(quantity)) return 1;
  return Math.max(Math.min(Math.floor(quantity), MAX_CART_QUANTITY), 1);
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
