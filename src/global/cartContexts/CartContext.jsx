import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
 const [isOpen, setIsOpen]=useState(false)
 const handleClose=()=>{
  setIsOpen(false)
 }

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)
    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        }
        return cartItem
      })
      setCartItems(updatedCart)
    } else {
      const updatedCart = [...cartItems, { ...item, quantity: 1 }]
      setCartItems(updatedCart)
    }
  }

  const removeFromCart = (itemId) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === itemId)

    if (existingItem) {
      if (existingItem.quantity > 1) {
        const updatedCart = cartItems.map((cartItem) => {
          if (cartItem.id === itemId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 }
          }
          return cartItem
        })
        setCartItems(updatedCart)
      } else {
        const updatedCart = cartItems.filter(
          (cartItem) => cartItem.id !== itemId
        )
        setCartItems(updatedCart)
      }
    }
  }
const removeWholeProduct = (itemId) => {
  const updatedCart = cartItems.filter((cartItem) => cartItem.id !== itemId)
  setCartItems(updatedCart)
}
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, removeWholeProduct, isOpen, setIsOpen, handleClose }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
