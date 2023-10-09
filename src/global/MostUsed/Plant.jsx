import React from 'react'
import Stars from './Stars'
import { useCart } from '../cartContexts/CartContext'

const Plant = ({id, img, title, price, ExPrice, stars }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: id, 
      img,
      title,
      price,
      stars,
      ExPrice,
    })
  }
  return (
    <article
      className='rounded-md border border-x-2 border-slate-200 relative min-w-[190px] bg-gradient-to-br from-yellow-50 to-orange-100 lg:min-w-[250px] lg:h-auto m-2 lg:m-4 flex flex-col justify-center'
      key={id}
    >
      <div className='overflow-hidden mx-3 m-auto rounded-t-md rounded-b-md group relative mt-3 h-auto md:h-44 lg:h-60'>
        <img
          src={img}
          alt='gallery_image'
          className='w-full relative h-full cursor-pointer object-cover transition ease-out duration-[.3s] hover:scale-[1.1]  '
        />

        <button
          onClick={handleAddToCart}
          className='font-serif absolute cursor-pointer opacity-0 group-hover:opacity-100 text-center ease-in duration-[.3s] transition bottom-0 text-white bg-green-800 w-full font-light text-md lg:text-lg py-1 tracking-wider'
        >
          Add To Cart
        </button>
      </div>
      <div className='flex flex-col justify-start text-start mx-3'>
        <h4 className='text-[1.3rem] pt-0 lg:pt-2 text-green-700'>
          {title}
        </h4>
        <Stars stars={stars} />
        <p className='flex flex-row'>
          <span className='text-center text-green-800 font-bold font-sans pb-1 pt-0 lg:pt-1 text-lg'>
            ${price} </span>
            <span className=' text-green-800 font-normal line-through pt-0 lg:pt-1 pb-1 text-lg pl-2 '>
              {ExPrice ? `$${ExPrice}` : ''}
            </span>
            <span className='text-xs font-normal absolute bottom-2 right-1 hidden lg:block'>
              Free Shipping
            </span>
         
        </p>
      </div>
    </article>
  )
}

export default Plant
