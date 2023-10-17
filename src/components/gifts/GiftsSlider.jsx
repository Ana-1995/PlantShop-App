import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { CentralTitle, Plant } from '../../global'
import { plantsData } from '../../constants/data'
import { Link } from 'react-router-dom'

const GiftsSlider = () => {
  //animation
  const [resetAnimation, setResetAnimation] = useState(false)
    const [touchStartX, setTouchStartX] = useState(0)
  useEffect(() => {
     // Reset animation
    setResetAnimation(true)
  }, [])

const filteredGifts=plantsData.filter((plant)=>plant.position === 'new')

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
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }
  return (
    <section className='w-[95%] m-auto mb-5 lg:mb-10 '>
      <CentralTitle title={'Give a gift that grows'} />
      <div className='flex flex-row flex-wrap max-w-full pt-2 lg:pt-10'>
        {/* content div */}
        <div className='flex flex-col gap-0 lg:gap-3 flex-1'>
          <h1 className='font-bold text-2xl sm:text-4xl lg:text-3xl text-start pl-5'>
            Most popular gifts
          </h1>
          <p className='pt-2 lg:pt-4 pl-5 text-sm sm:text-xl lg:text-base pb-5 w-4/5'>
            These are our most gifted presents - the perfect inspiration if
            you’re not sure what to get.
          </p>
        </div>

        <div
          className={`${
            resetAnimation ? 'slide-in-right' : 'hidden'
          } flex flex-row flex-1 max-w-full mb-4 lg:mb-7 m-auto lg:max-w-5xl relative`}
        >
          <div
            className='flex flex-row w-screen overflow-x-scroll overflow-hidden truncate'
            ref={scrollRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {filteredGifts.map((plant, i) => (
              <Plant
                key={`${plant.id}-${i}`}
                id={plant.id}
                img={plant.img}
                stars={`(${plant.stars})`}
                title={<Link to={`/products/${plant.id}`}>{plant.title}</Link>}
                price={plant.price}
              />
            ))}

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
        </div>
      </div>
    </section>
  )
}

export default GiftsSlider
