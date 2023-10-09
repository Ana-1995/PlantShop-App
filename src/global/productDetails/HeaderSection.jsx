import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillMoonStarsFill, BsEmojiSmile } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { useCart } from '../cartContexts/CartContext'

const HeaderSection = ({ product }) => {
  const { addToCart } = useCart() 
  const [selectedPhoto, setSelectedPhoto] = useState('') 

  return (
    <section className='m-auto w-[90%] mb-10' key={product.id}>
      <div className='flex flex-col lg:flex-row mt-4 lg:mt-12'>
        <div className='flex flex-row justify-center lg:justify-start lg:flex-col  gap-2 mt-1 overflow-x-auto '>
          {product.photos.map((photo, index) => (
            <img
              key={index}
              className={`w-16 h-16 md:w-20 md:h-20 lg:h-16 lg:w-16 object-cover border rounded-full cursor-pointer`}
              src={photo}
              alt={`Product ${index}`}
              onClick={() => setSelectedPhoto(photo)}
            />
          ))}
        </div>
        <div className='justify-center lg:justify-start ml-0 lg:ml-4 flex flex-1 mt-4 lg:mt-0 mb-4 lg:mb-0 '>
          <img
            className='w-[85%] md:w-[90%] lg:w-[85%] object-cover'
            src={selectedPhoto || product.img}
            alt={product.title}
          />
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex flex-row justify-center lg:justify-start items-center pb-1 lg:pb-5'>
            <AiFillStar color='green' className='text-sm lg:text-3xl' />
            <AiFillStar color='green' className='text-sm lg:text-3xl' />
            <AiFillStar color='green' className='text-sm lg:text-3xl' />
            <AiFillStar color='green' className='text-sm lg:text-3xl' />
            <AiFillStar color='green' className='text-sm lg:text-3xl' />
            <p className='text-xl pl-2'>({product.stars})</p>
          </div>
          <h3 className='text-2xl md:text-4xl lg:text-5xl text-center lg:text-start font-bold'>
            {product.title}
          </h3>
          <p className='pt-1 lg:pt-7 text-xl md:text-2xl lg:text-xl font-bold text-center lg:text-start'>
            <span className='text-green-800 text-xl md:text-2xl lg:text-xl '>
              ${product.price}
            </span>
            <span className='text-green-800 line-through font-normal pl-2 lg:pl-3 text-xl md:text-2xl lg:text-xl '>
              {product.ExPrice && `$${product.ExPrice}`}
            </span>
          </p>
          <p className='pt-2 text-sm md:text-lg lg:text-sm w-full lg:w-[80%] tracking-wider leading-6'>
            {product.description}
          </p>
          <div className='flex flex-row gap-10 pt-10'>
            <span className='flex flex-row justify-center items-center gap-3 text-sm md:text-lg lg:text-sm'>
              <BsFillMoonStarsFill size={40} color='green' />
              <p>
                Most light <br /> conditions
              </p>
            </span>
            <span className='flex flex-row justify-center items-center gap-3 text-sm'>
              <BsEmojiSmile size={40} color='green' />
              <p>{product.careLevel} care</p>
            </span>
          </div>
          <div className='flex flex-col gap-2 pt-5 lg:pt-10'>
            <p className='font-bold'>Pot Size</p>
            <span className='flex flex-row gap-5'>
              <p className='border border-slate-400 py-2 px-5'>
                {product.potSize}
              </p>
             
            </span>
            <button
              onClick={() => addToCart(product)}
              className='bg-green-700 font-mono hover:bg-green-600 duration-300 text-white tracking-wider py-3 px-5 font-bold mt-7 text-xl w-fit'
            >
              Add Plant To Bag
            </button>
          </div>
          <Link to={'/stores'}>
            {' '}
            <button className='mt-5 bg-green-100 hover:bg-green-200 duration-300 text-green-800 font-bold border border-slate-500 py-2 px-3'>
              Back To Store
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeaderSection