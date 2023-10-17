import React, { useEffect } from 'react'
import { useCart } from './CartContext'
import { Link } from 'react-router-dom'
import { MdPlayArrow } from 'react-icons/md'

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart()
useEffect(()=>{
window.scrollTo(0, 0)
}, [])
  const getTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price)
      if (!isNaN(price)) {
        return acc + price * item.quantity
      }
      return acc
    }, 0)

    return total
  }

  return (
    <div className=' bg-gray-100 p-4'>
      <h2 className='text-3xl font-semibold mb-2 ml-4 text-center lg:text-start'>
        Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <div className='mb-4 flex flex-col lg:flex-row items-center'>
          <p>Your Cart Is Empty</p>
          <div className='flex flex-row items-center'>
            <Link
              to={'/stores'}
              className='text-lg pl-2 font-sans text-green-700 hover:text-green-600'
            >
              Continue Shopping
            </Link>
            <MdPlayArrow className='text-green-800' />
          </div>
        </div>
      ) : (
        <div>
          {cartItems.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className='cart-item flex p-4 border-b border-gray-300'
            >
              <img
                src={item.img}
                alt={item.title}
                className='w-24 h-24 object-cover'
              />
              <div className='flex flex-col justify-start ml-4'>
                <p className='text-lg font-semibold text-green-800'>
                  {item.title} ({item.quantity})
                </p>
                <p className='text-gray-600 pt-1'>
                  Price: <span className='font-bold'>${item.price}</span>{' '}
                </p>
                <div className='flex gap-1'>
                  <button
                    onClick={() => {
                      removeFromCart(item.id) // Remove one instance of the product
                    }}
                    className='text-red-500 font-semibold text-4xl font-sans hover:text-red-700 text-start pt-2 tracking-wider'
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      addToCart(item) // Remove all instances of the product
                    }}
                    className='text-green-500 font-medium text-4xl font-sans hover:text-green-700 text-start pt-2 tracking-wider'
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className='mt-2 flex flex-row gap-3'>
            <p className='mt-2 text-xl font-bold'>Total: ${getTotalPrice()}</p>
            <button
              onClick={clearCart}
              className='text-red-700 hover:text-red-900 border-l border-slate-400 font-bold tracking-wide mt-2 pl-2'
            >
              Clear Cart
            </button>
          </div>

          <div className='border-t border-gray-300 pt-6 mt-4 mb-4 '>
            <Link
              to={'/login'}
              className=' bg-gray-600 font-sans text-white py-2 px-3 rounded-md hover:bg-gray-800 tracking-wide mt-8'
            >
              Check Out
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
