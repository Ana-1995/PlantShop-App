import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { plantsData } from '../../constants/data'
import { CentralTitle, Plant } from '../../global'


const BestSellers = () => {
  const scrollRef = useRef(null)
  const [scrollDistance, setScrollDistance] = useState(0)
 const [touchStartX, setTouchStartX] = useState(0)
  useEffect(() => {
    const container = scrollRef.current
    const containerWidth = container.clientWidth
    const scrollStep = containerWidth / 2 
 

    setScrollDistance(scrollStep)
  }, [])
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
  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= scrollDistance
    } else {
      current.scrollLeft += scrollDistance
    }
  }

  const filterData = plantsData.filter((plant) => {
    return plant.position === 'bestSellers'
  })

  return (
    <>
      <section className='mb-14 w-[95%] m-auto '>
        <CentralTitle title={'Best Sellers'} />
        <div className='h-auto flex flex-row max-w-full relative mt-0 lg:mt-8 '>
          <div
            className='flex flex-row w-max overflow-x-scroll truncate'
            ref={scrollRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {filterData.map((plant) => (
              <Plant
                key={plant.id}
                id={plant.id}
                img={plant.img}
                title={<Link to={`/products/${plant.id}`}>{plant.title}</Link>}
                price={plant.price}
                stars={`(${plant.stars})`}
              />
            ))}
          </div>
          <div className='w-full m-auto flex justify-between items-center absolute bottom-[46%]'>
            <FaChevronLeft
              className='text-white text-2xl lg:text-5xl cursor-pointer py-1 lg:py-2 bg-green-800'
              onClick={() => scroll('left')}
            />
            <FaChevronRight
              className='text-white text-2xl lg:text-5xl cursor-pointer py-1 lg:py-2 bg-green-800 '
              onClick={() => scroll('right')}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default BestSellers
