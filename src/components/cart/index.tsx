'use client'

import { createContext, useMemo, useState, type ReactNode, useContext } from 'react'
import { type CartLine } from '@/types'
import { normalizeQuantity } from '@/lib/cart'

export interface CartContextValue {
  items: CartLine[]
  count: number
  addItem: (itemId: string, quantity: number) => void
  updateItem: (itemId: string, quantity: number) => void
  removeItem: (itemId: string) => void
  clearItems: () => void
}

export const CartContext = createContext<CartContextValue>({
  items: [],
  count: 0,
  addItem: () => {},
  updateItem: () => {},
  removeItem: () => {},
  clearItems: () => {},
})

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([])

  const value = useMemo<CartContextValue>(() => {
    return {
      items,
      count: items.reduce((acc, item) => acc + item.quantity, 0),

      addItem: (itemId, quantity = 1) => {
        setItems(prevItems => {
          const existingItem = prevItems.find(item => item.slug === itemId)
          if (existingItem) {
            return prevItems.map(item =>
              item.slug === itemId ? { ...item, quantity: item.quantity + quantity } : item,
            )
          }
          return [...prevItems, { slug: itemId, quantity }]
        })
      },

      updateItem: (itemId, quantity = 1) => {
        setItems(prevItems => {
          return prevItems.map(item =>
            item.slug === itemId ? { ...item, quantity: normalizeQuantity(quantity) } : item,
          )
        })
      },

      removeItem: itemId => {
        setItems(prevItems => {
          return prevItems.filter(item => item.slug !== itemId)
        })
      },

      clearItems: () => {
        setItems([])
      },
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function CartLogger(): ReactNode {
  const cart = useCart()
  console.log('CartLogger', cart)
  return <pre>{JSON.stringify({ cart }, null, 2)}</pre>
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
