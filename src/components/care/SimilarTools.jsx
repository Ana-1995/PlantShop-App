import React from 'react'
import { useRef } from 'react'
import { CentralTitle, Plant } from '../../global'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const SimilarTools = ({ products, selectedProductId }) => {
   const relatedProducts = products.filter(
    (product) => product.category === selectedProductId
   )
const scrollRef = useRef()
 const scroll = (direction) => {
    const container = scrollRef.current
    container.scrollLeft += direction === 'left' ? -500 : 500
  }
  return (
    <section className='mb-6 lg:mb-14 w-[95%] m-auto mt-2 lg:mt-16'>
      <CentralTitle title={'You may also like'} />
      <div className='h-auto flex flex-row max-w-full relative mt-6 overflow-x-hidden'>
  
        <div
          className='flex flex-row w-max overflow-x-scroll truncate'
          ref={scrollRef}
        >
          {relatedProducts.map((tool) => (
            <Plant
              key={tool.id}
              id={tool.id}
              img={tool.img}
              title={<Link to={`/tools/${tool.id}`}>{tool.title}</Link>}
              price={tool.price}
            />
          ))}
        </div>

        <div className='w-full m-auto flex justify-between items-center absolute bottom-[46%]'>
          <FaChevronLeft
            className='text-white text-2xl lg:text-5xl cursor-pointer py-1 lg:py-2  bg-green-800'
            onClick={() => scroll('left')}
          />
          <FaChevronRight
            className='text-white text-2xl lg:text-5xl cursor-pointer py-1 lg:py-2  bg-green-800 '
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </section>
  )
}

export default SimilarTools
