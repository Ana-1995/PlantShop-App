import React from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCart} from 'react-icons/bs'
import { logo } from '../../assets'
import { useState } from 'react'
import Dropdown from '../store/Dropdown'
import { useCart } from '../../global/cartContexts/CartContext'

 
const MainNav = () => {
    const { cartItems } = useCart()
  const activeLink = 'text-black bg-green-300 rounded-full '
    const activeLink2 =
      'text-black bg-green-300 rounded-full px-1'
  const normalLink = ''

  //dropdown states
  const [dropdown, setDropdown] = useState(false)

  //on mouse events for dropdown nav menu
  const onMouseEnter=()=>{
    if(window.innerWidth < 960){
      setDropdown(false)
    }else{
      setDropdown(true)
    }
  }

  const onMouseLeave=()=>{
    if(window.innerWidth < 960){
      setDropdown(false)
    } else{
      setDropdown(false)
    }
  }
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )
  return (
    <div className='flex justify-between items-center w-full py-3 px-5 bg-yellow-50 text-green-800 font-bold'>
      <div className='flex justify-start items-center' id='mainNav'>
        <Link to={'/'}>
          <img
            src={logo}
            style={{ height: '34px', objectFit: 'cover' }}
            alt='logo'
          />
        </Link>
      </div>

      <nav className='justify-center items-center text-1xl tracking-wider flex lg:flex flex-1 gap-2'>
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className='cursor-pointer mx-5 hover:text-[#0C0C0C]'>Home</li>
        </NavLink>

        <li
          className='flex flex-row justify-center'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <NavLink
            to='/stores'
            className={({ isActive }) => (isActive ? activeLink2 : normalLink)}
          >
            <span className='flex flex-row justify-center items-center lg:pl-2 lg:pr-2'>
              Plants <MdKeyboardArrowDown className='' />
            </span>
          </NavLink>
          {dropdown && <Dropdown />}
        </li>

        <NavLink
          to={'/plantscare'}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className='cursor-pointer mx-5 hover:text-[#000]'>Care</li>
        </NavLink>

        <NavLink
          to={'/gifts'}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className='cursor-pointer mx-5 hover:text-[#000] '>Gifts</li>
        </NavLink>

        <NavLink
          to={'/workshops'}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className='cursor-pointer mx-5 hover:text-[#000] '>Learn</li>
        </NavLink>

        <NavLink
          to={'/contact'}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className='cursor-pointer mx-5 hover:text-[#000]'>Contact</li>
        </NavLink>
      </nav>

      <div className='flex justify-end items-center text-1xl'>
        <Link
          className='my-0 mx-1 ease-in duration-300 hover:text-[#000]'
          to={'/login'}
        >
          <AiOutlineUser size={25} />
        </Link>
        <Link
          className='my-0 mx-[0.3rem] ease-in duration-300 hover:text-[#000] relative'
          to={'/cart'}
        >
          
          <BsCart size={22} />
          {totalQuantity > 0 && (
            <span className='absolute bottom-3 left-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-sans'>
              {totalQuantity}
            </span>
          )}
        </Link>
      </div>
    </div>
  )
}

export default MainNav
