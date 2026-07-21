'use client';

import { createContext, useMemo, type ReactNode, useContext } from 'react';
import { type CartLine } from '@/types';
import { CART_LOCAL_STORAGE_KEY, normalizeQuantity } from '@/lib/cart';
import { useLocalStorage } from '@/hooks/use-local-storage';

export interface CartContextValue {
  items: CartLine[];
  count: number;
  addItem: (itemId: string, quantity?: number) => void;
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
      count: items.reduce(
        (acc, item) => acc + normalizeQuantity(item.quantity),
        0,
      ),

      addItem: (itemId, quantity = 1) => {
        const addQty = Math.floor(quantity);
        if (!itemId.trim() || !Number.isFinite(quantity) || addQty < 1) return;

        setItems(prevItems => {
          const existingItem = prevItems.find(item => item.slug === itemId);
          if (existingItem) {
            return prevItems.map(item =>
              item.slug === itemId
                ? {
                    ...item,
                    quantity: normalizeQuantity(item.quantity + addQty),
                  }
                : item,
            );
          }
          return [
            ...prevItems,
            { slug: itemId, quantity: normalizeQuantity(addQty) },
          ];
        });
      },

      updateItem: (itemId, quantity) => {
        setItems(prevItems =>
          prevItems.map(item =>
            item.slug === itemId
              ? { ...item, quantity: normalizeQuantity(quantity) }
              : item,
          ),
        );
      },

      removeItem: itemId => {
        setItems(prevItems => prevItems.filter(item => item.slug !== itemId));
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
