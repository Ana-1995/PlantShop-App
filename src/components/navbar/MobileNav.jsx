import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai'
import {  logo } from '../../assets'
import { BsCart } from 'react-icons/bs'
import { useCart } from '../../global/cartContexts/CartContext'


const MobileNav = () => {
  const [toggle, setToggle] = useState(false)
 const { cartItems } = useCart()
  return (
    <div className='mob__nav pb-2 pt-2 px-2 md:pt-4 md:pb-4 bg-gradient-to-r from-yellow-50 to-yellow-100 '>
      <div className='flex items-center justify-between '>
        <Link to={'/'}>
          <img
            src={logo}
            style={{ height: '24px', objectFit: 'cover' }}
            alt='logo'
          />
        </Link>

        <div className='flex items-center'>
          <Link
            className='my-0 mx-[0.3rem] ease-in duration-300 hover:text-[#000]'
            to={'/login'}
          >
            <AiOutlineUser size={25} />
          </Link>
          <div className='flex items-center relative'>
            <Link to={'/cart'}>
              <BsCart />
              <span className='absolute bottom-2 left-2 bg-green-600 text-white px-2 py-[2px] rounded-full text-xs font-sans'>
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>
        <AiOutlineMenu
          role='button'
          aria-label='Toggle Mobile Menu'
          fontSize={26}
          onClick={() => setToggle(!toggle)}
        />

        {toggle && (
          <div className='scale-in-ver-top flex flex-col z-10 justify-center items-center fixed top-0 left-0 w-full h-full bg-green-800 ease-in duration-400 text-white will-change-contents'>
            <AiOutlineClose
              fontSize={25}
              className='absolute top-[20px] right-[20px] cursor-pointer'
              onClick={() => setToggle(false)}
            />
            <nav className='flex flex-col'>
              <li className='m-2 md:m-5 cursor-pointer text-4xl md:text-5xl text-center hover:text-[#ffdead]'>
                <Link to={'/'} onClick={() => setToggle(false)}>
                  Home
                </Link>
              </li>

              <li className='m-2 md:m-5 cursor-pointer text-4xl md:text-5xl text-center hover:text-[#ffdead]'>
                <Link to={'/stores'} onClick={() => setToggle(false)}>
                  Plants
                </Link>
              </li>
              <li className='m-2 md:m-5 cursor-pointer text-4xl md:text-5xl text-center hover:text-[#ffdead]'>
                <Link to={'/plantscare'} onClick={() => setToggle(false)}>
                  Care
                </Link>
              </li>
              <li className='m-2 md:m-5 cursor-pointer text-4xl md:text-5xl text-center hover:text-[#ffdead]'>
                <Link to={'/gifts'} onClick={() => setToggle(false)}>
                  Gifts
                </Link>
              </li>
              <li className='m-2 md:m-5 cursor-pointer text-4xl md:text-5xl text-center hover:text-[#ffdead]'>
                <Link to={'/workshops'} onClick={() => setToggle(false)}>
                  Learn
                </Link>
              </li>
              <li className='m-2 md:m-5 cursor-pointer text-4xl md:text-5xl text-center hover:text-[#ffdead]'>
                <Link to={'/contact'} onClick={() => setToggle(false)}>
                  Contact
                </Link>
              </li>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

export default MobileNav
