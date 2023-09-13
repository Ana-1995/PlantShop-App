import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item]
    setCartItems(updatedCart)

  }

const removeFromCart = (itemId) => {
  const existingItemIndex = cartItems.findIndex((item) => item.id === itemId)

  if (existingItemIndex !== -1) {
    const updatedCart = [...cartItems]
    const itemToRemove = updatedCart[existingItemIndex]

    if (itemToRemove.quantity > 1) {
      itemToRemove.quantity -= 1
    } else {
      updatedCart.splice(existingItemIndex, 1)
    }

    setCartItems(updatedCart)
  }
}
  const clearCart = () => {
    setCartItems([])

  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
