import React from 'react'
import { useCart } from '../../global/cartContexts/CartContext'
import { Link } from 'react-router-dom'

const MainToolsSection = ({product}) => {
  const { addToCart } = useCart() 
  return (
    <section className='m-auto w-[80%] lg:w-[95%] mb-10' key={product.id}>
      <div className='flex flex-col lg:flex-row mt-4 lg:mt-12'>
        <div className='justify-center lg:justify-start ml-0 lg:ml-4 flex mt-4 lg:mt-0 mb-0 '>
          <img
            className='w-[95%] lg:w-[85%] object-cover'
            src={product.img}
            alt={product.title}
          />
        </div>
        <div className='text-3xl md:text-4xl lg:text-5xl text-center lg:text-start pt-3'>
          <h3 className=' font-bold'>{product.title}</h3>

          <p className='pt-1 lg:pt-7 text-xl font-bold text-green-800'>
            ${product.price}
          </p>

          <p className='pt-2 text-sm md:text-lg lg:text-sm tracking-wider leading-6'>
            {product.description}
          </p>

          <div
            className='flex flex-col items-center lg:items-start gap-0 lg:gap-2 pt-0 lg:pt-10'
           
          >
            <button
              onClick={() => addToCart(product)}
              className='bg-green-700 font-mono hover:bg-green-600 duration-300 text-white tracking-wider py-3 px-5 font-bold mt-7 text-xl w-fit'
            >
              Add Tool To Bag
            </button>
          </div>
          <Link to={'/plantscare'}>
            {' '}
            <button className='mt-5 text-xl bg-green-100 hover:bg-green-200 duration-300 text-green-800 font-bold border border-slate-500 py-2 px-3'>
              Back To Store
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MainToolsSection
