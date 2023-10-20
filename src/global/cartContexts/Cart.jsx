import React, { useEffect, useState } from 'react'
import { useCart } from './CartContext'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import sadFace from  '../../assets/sadFace.png'

const Cart = () => {
  const {isOpen, handleClose, cartItems, addToCart, removeFromCart, removeWholeProduct, clearCart } = useCart()
    const [resetAnimation, setResetAnimation] = useState(false)
useEffect(()=>{
window.scrollTo(0, 0)
setResetAnimation(true)
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
    <div className={` ${isOpen ? 'right-0' : '-right-full'} bg-amber-50 p-2 pl-1 w-full fixed top-0 h-full shadow-2xl lg:w-[380px] md:w-[35vw] xl:w-[28vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-scroll`}>
      <h2 className='text-3xl mt-3 font-semibold mb-2 text-center lg:text-start'>
        Your Cart
      </h2>
    <AiOutlineClose className='absolute top-7 right-3 cursor-pointer text-red-600' size={25} onClick={handleClose} />
      {cartItems.length === 0 ? (
        <div className='my-6 flex flex-col items-center'>
          <p className='text-bold tracking-wide'>Your Cart Is Empty</p>
          <img src={sadFace} alt="" />   
        </div>
      ) : (
        <div className={`${resetAnimation ? 'flip-in-hor-bottom' : 'hidden'}`}>
          {cartItems.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className='cart-item flex  p-4 border-b border-gray-300 relative'
            >
              <img
                src={item.img}
                alt={item.title}
                className='w-24 h-24 object-cover'
              />
              <div className='flex flex-col justify-start ml-4'>
                <p className='flex justify-between items-center'>
                  <span className='text-lg font-semibold text-green-800'>
                    {item.title}
                  </span>
                  <span className='font-bold absolute top-5 right-1'>
                    ${item.price}
                  </span>
                </p>

                <div className='flex gap-3 items-center mt-7 border border-slate-300 rounded-full w-fit px-1'>
                  <button
                    onClick={() => {
                      removeFromCart(item.id) 
                    }}
                    className='text-red-500 font-semibold text-xl font-sans hover:text-red-700 text-start tracking-wider'
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className='text-xl font-semibold'>{item.quantity}</span>
                  <button
                    onClick={() => {
                      addToCart(item) 
                    }}
                    className='text-green-500 font-medium text-xl font-sans hover:text-green-700 text-start tracking-wider'
                  >
                   <AiOutlinePlus />
                  </button>
                </div>
                <AiOutlineDelete size={23} className='text-red-700 hover:text-red-500 ml-3 cursor-pointer absolute bottom-7 right-2' onClick={()=>removeWholeProduct(item.id)} />
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
            <Link onClick={handleClose}
              to={'/login'}
              className=' bg-gray-600 font-sans text-white py-1 px-3 rounded-md hover:bg-gray-800 tracking-wide mt-8'
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
