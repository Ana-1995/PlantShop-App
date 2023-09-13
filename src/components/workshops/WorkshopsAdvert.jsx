import React from 'react'
import { workshopsAdvertData } from '../../constants/data'

const WorkshopsAdvert = () => {
  return (
    <section id='advert' className='mb-4 lg:mb-12'>
      <div className='m-auto max-w-full lg:max-w-[80%] flex flex-col items-center flex-wrap lg:flex-row justify-center pt-5 gap-3'>
        {workshopsAdvertData.map((data) => (
          <div
            key={data.id}
            className='flex flex-col flex-1 items-center justify-center pl-4 gap-5 '
          >
            <img
              className='w-[30%] sm:w-[50%] md:w-[30%] object-cover'
              src={data.img}
              alt={data.title}
            />
            <p className='text-center text-sm md:text-2xl lg:text-sm xl:text-base md:py-4 lg:py-1 w-[80%]'>
              <span className='font-extrabold'>{data.textBold}</span>{' '}
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkshopsAdvert
