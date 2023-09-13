
import React, { useRef, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { ReviewsData } from '../../constants/data'
import { Link } from 'react-router-dom'
import ReviewsSlider from './ReviewsSlider'

const Reviews = () => {
  const scrollRef = useRef(null)
  const [scrollDistance, setScrollDistance] = useState(0)

  useEffect(() => {
    const container = scrollRef.current
    const containerWidth = container.clientWidth
    const scrollStep = containerWidth / 2 

    setScrollDistance(scrollStep)
  }, [])

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= scrollDistance
    } else {
      current.scrollLeft += scrollDistance
    }
  }

  return (
    <section className='mt-4 mb-6 w-full h-auto relative'>
      <h4 className='text-center capitalize text-2xl font-bold pt-5 pb-5'>
        Welcome to our plant family
      </h4>

    
      <div className='flex flex-row gap-2 w-[80%] m-auto'>
        <div
          className='flex flex-row pb-5 gap-5 lg:gap-16 justify-between w-max overflow-x-scroll truncate whitespace-normal'
          ref={scrollRef}
        >
          {ReviewsData.map((item) => (
            <ReviewsSlider
              key={item.id}
              author={item.author}
              content={item.content}
              moreContent={item.moreContent}
              date={item.date}
            />
          ))}
        </div>
        <div className='w-full flex justify-end items-center py-0 px-[0.2rem] absolute bottom-5 right-4'>
          <FaChevronLeft
            className='text-green-600 text-[1rem] lg:text-[1.6rem] cursor-pointer rounded-md'
            onClick={() => scroll('left')}
          />
          <FaChevronRight
            className='text-green-600 text-[1rem] lg:text-[1.6rem] cursor-pointer rounded-md'
            onClick={() => scroll('right')}
          />
        </div>
      </div>
      <div className='flex justify-center items-center my-0 lg:my-6'>
        <Link
          to='/stores'
          className='cursor-pointer text-center py-2 px-3 bg-green-600 text-white'
        >
          Shop Plants
        </Link>
      </div>
    </section>
  )
}

export default Reviews
