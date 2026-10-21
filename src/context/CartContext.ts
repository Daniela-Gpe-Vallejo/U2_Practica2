import { createContext } from 'react'

export type Product = {
  id: string
  name: string
  price: number
}

export type CartItem = Product & {
  quantity: number
}

export type CartContextValue = {
  cartItems: CartItem[]
  totalItems: number
  addToCart: (product: Product) => void
  removeFromCart: (productId: Product['id']) => void
}

export const CartContext = createContext<CartContextValue | null>(null)
