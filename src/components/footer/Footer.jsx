import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPinterest} from 'react-icons/fa'
import {BiLogoMastercard} from 'react-icons/bi'
import {FaCcVisa} from 'react-icons/fa'
import {HiCash} from 'react-icons/hi'
import { logo } from '../../assets'
import FooterOverlay from './FooterOverlay'
import { Link } from 'react-router-dom'

const Footer = () => (
  <section>
   <FooterOverlay />
    <div className='h-[1px] bg-gray-300 mt-6 w-[85%] m-auto' />

    <div className='w-[85%] m-auto flex flex-row flex-wrap justify-between items-center'>
      <div className='flex flex-col flex-2'>
        <a href='#'>
          <img
            src={logo}
            className='h-[70px] w-[100px] object-cover pb-4'
            alt='logo'
          />
        </a>

        <div className='flex flex-row gap-4 hover:text-black'>
          <a href='https://www.facebook.com/' target='blank'>
            <FaFacebook
              size={20}
              className='hover:text-black text-green-700 duration-500'
            />
          </a>
          <a href='https://www.instagram.com/' target='blank'>
            <FaInstagram
              size={20}
              className='hover:text-black text-green-700 duration-500'
            />
          </a>
          <a href='https://twitter.com/' target='blank'>
            <FaTwitter
              size={20}
              className='hover:text-black text-green-700 duration-500'
            />
          </a>
          <a href='https://www.pinterest.com/' target='blank'>
            <FaPinterest
              size={20}
              className='hover:text-black text-green-700 duration-500'
            />
          </a>
          <a href='https://www.whatsapp.com/' target='blank'>
            <FaWhatsapp
              size={20}
              className='hover:text-black text-green-700 duration-500'
            />
          </a>
        </div>
      </div>

      <div className='flex flex-row justify-around items-start text-gray-600 pt-3 lg:pt-6'>
        <div className='flex flex-row gap-5 lg:gap-12'>
          <div className='flex flex-col'>
            <p className='font-extrabold capitalize text-sm lg:text-base'>
              Help
            </p>
            <Link to={'/contact'}
          
              className='text-xs font-serif pt-1 hover:text-green-500 duration-500 '
            >
              Contact Us
            </Link>
            <Link
              to={'/contact'}
              className='text-xs font-serif hover:text-green-500 duration-500 '
            >
              Returns & Refunds
            </Link>
            <Link
              to={'/contact'}
              className='text-xs font-serif hover:text-green-500 duration-500 '
            >
              Track your order
            </Link>
          </div>

          <div className='flex flex-col'>
            <p className='font-extrabold capitalize text-sm lg:text-base'>
              Information
            </p>
            <Link
              to={'/contact'}
              className='text-xs font-serif pt-1 hover:text-green-500 duration-500 '
            >
              About Us
            </Link>
            <Link
              to={'/contact'}
              className='text-xs font-serif hover:text-green-500 duration-500 '
            >
              Terms & Conditions
            </Link>
            <Link to={'/contact'}    
              className='text-xs font-serif hover:text-green-500 duration-500 '
            >
              Privacy & Cookies
            </Link>
          </div>

          <div className='flex flex-col'>
            <p className='font-extrabold capitalize text-sm lg:text-base'>
              #GreenSpace
            </p>
            <p className='text-xs font-serif pt-1'>
              We believe in the power of plants to lift <br /> the spirit, calm
              the mind and clean the <br /> air. Green Space brings you the{' '}
              <br /> wellbeing benefits of greenery in style.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='h-[1px] bg-gray-300 mt-6 w-[85%] m-auto' />
    <div className='flex flex-row justify-between items-center w-[85%] m-auto pt-2'>
      <p className='text-gray-600 text-xs font-serif'>
        © 2023 Lamento Trading LLC
      </p>
      <div className='flex flex-row text-green-800 gap-2'>
        <HiCash size={24} color='darkgreen' />
        <FaCcVisa size={24} color='darkgreen' />
        <BiLogoMastercard size={24} color='darkgreen' />
      </div>
    </div>
  </section>
)

export default Footer