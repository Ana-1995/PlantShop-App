import React, { useEffect } from 'react'
import WorkshopsOverlay from './WorkshopsOverlay'
import WorkshopsAdvert from './WorkshopsAdvert'
import { eventsData, workshopsData } from '../../constants/data'
import WorkshopDetails from './WorkshopDetails'
import Footer from '../footer/Footer'

const Workshops = () => {
  useEffect(()=>(
    window.scrollTo(0, 0)
  ), [])
  return (
    <>
      <section className='h-full w-full mb-6 lg:mb-20' >
        <WorkshopsOverlay />
        <WorkshopsAdvert />

        <div
          className='flex flex-row flex-wrap justify-around items-center w-[95%] m-auto'
          
        >
          <div className='pt-2 lg:pt-10  lg:pb-8 w-[95%] m-auto' id='workshops'>
            <h1 className='text-3xl sm:text-4xl pb-6 lg:pb-0 lg:text-6xl mt-7 lg:mt-0 '>
              Upcoming Workshops
            </h1>
          </div>

          {workshopsData.map((item) => (
            <WorkshopDetails
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              date={item.date}
              content={item.content}
            />
          ))}
        </div>

        <div
          className='flex flex-row gap-y-0 lg:gap-y-10 flex-wrap justify-around items-center w-[95%] m-auto'
          id='events'
        >
          <div className='pt-2 lg:pt-10 w-[95%] m-auto'>
            <h1 className='text-3xl sm:text-4xl pb-3 lg:pb-0 lg:text-6xl pt-5 lg:pt-10 '>
              Upcoming Events
            </h1>
          </div>
          {eventsData.map((item) => (
            <WorkshopDetails
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              date={item.date}
              content={item.content}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Workshops
