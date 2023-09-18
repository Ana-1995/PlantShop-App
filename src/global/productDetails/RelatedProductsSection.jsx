
'use client'
import React, { useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import CentralTitle from '../MostUsed/CentralTitle'
import Plant from '../MostUsed/Plant'

const RelatedProductsSection = ({ products, selectedProductId }) => {
    const [touchStartX, setTouchStartX] = useState(0)
  const relatedProducts = products.filter(
    (product) => product.color === selectedProductId
  )
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX
    const deltaX = touchEndX - touchStartX

    if (deltaX > 50) {
      scroll('left')
    } else if (deltaX < -50) {
      scroll('right')
    }
  }
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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {relatedProducts.map((plant) => (
            <Plant
              key={plant.id}
              id={plant.id}
              img={plant.img}
              title={<Link to={`/products/${plant.id}`}>{plant.title}</Link>}
              ExPrice={plant.ExPrice && plant.ExPrice}
              price={plant.price}
              stars={`(${plant.stars})`}
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

export default RelatedProductsSection