import { useMemo, useState, type ReactNode } from 'react'
import {
  CartContext,
  type CartItem,
  type Product,
} from './CartContext'

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(product: Product) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (!existingItem) {
        return [...currentItems, { ...product, quantity: 1 }]
      }

      return currentItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
    })
  }

  function removeFromCart(productId: Product['id']) {
    setCartItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.id !== productId) {
          return [item]
        }

        return item.quantity > 1
          ? [{ ...item, quantity: item.quantity - 1 }]
          : []
      }),
    )
  }

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  const value = useMemo(
    () => ({ cartItems, totalItems, addToCart, removeFromCart }),
    [cartItems, totalItems],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
