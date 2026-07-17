'use client';

import { createContext, useMemo, type ReactNode, useContext } from 'react';
import { type CartLine } from '@/types';
import { CART_LOCAL_STORAGE_KEY, normalizeQuantity } from '@/lib/cart';
import { useLocalStorage } from '@/hooks/use-local-storage';

export interface CartContextValue {
  items: CartLine[];
  count: number;
  addItem: (itemId: string, quantity: number) => void;
  updateItem: (itemId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  clearItems: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useLocalStorage<CartLine[]>(
    CART_LOCAL_STORAGE_KEY,
    [],
  );

  const value = useMemo<CartContextValue>(() => {
    return {
      items,
      count: items.reduce((acc, item) => acc + item.quantity, 0),

      addItem: (itemId, quantity = 1) => {
        setItems(prevItems => {
          const existingItem = prevItems.find(item => item.slug === itemId);
          if (existingItem) {
            return prevItems.map(item =>
              item.slug === itemId
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            );
          }
          return [...prevItems, { slug: itemId, quantity }];
        });
      },

      updateItem: (itemId, quantity = 1) => {
        setItems(prevItems => {
          return prevItems.map(item =>
            item.slug === itemId
              ? { ...item, quantity: normalizeQuantity(quantity) }
              : item,
          );
        });
      },

      removeItem: itemId => {
        setItems(prevItems => {
          return prevItems.filter(item => item.slug !== itemId);
        });
      },

      clearItems: () => {
        setItems([]);
      },
    };
  }, [items, setItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function CartLogger({
  className,
}: { className?: string } = {}): ReactNode {
  const cart = useCart();
  console.log('CartLogger', cart);
  return (
    <div className={`bg-background/50 p-2 rounded-md ${className}`}>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
}
