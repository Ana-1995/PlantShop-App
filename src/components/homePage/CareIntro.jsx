import React from 'react'
import { indoorHome, outdoorHome } from '../../assets'
import { Link } from 'react-router-dom'


const CareIntro = () => {
  return (
    <section className='pt-10 w-full h-auto mb-3 lg:mb-8 bg-[#d0ebd0] '>
      <div className='flex flex-row  gap-0 lg:gap-6  w-[90%] pt-0 lg:pt-5 pb-3 m-auto justify-around items-start flex-wrap'>
        <div className='h-[1px] w-full bg-neutral-400 mb-4 lg:mb-0' />
        <div className='flex flex-col lg:flex-[0.5] '>
          <h3 className='text-2xl text-center lg:text-start md:text-3xl lg:text-3xl 2xl:text-4xl font-bold text-green-900 tracking-wide '>
            How To Help Indoor Plants Survive The Winter
          </h3>
          <p className=' md:text-lg lg:text-[1.05rem] tracking-wide 2xl:tracking-wider leading-1 lg:leading-6 2xl:leading-8 font-mono font-light pt-3 text-justify lg:text-start '>
            During the winter, tropical indoor plants are at the mercy of drafty
            windows, drying furnaces, and colder temperatures. To help your
            indoor plants survive the cold winter months, follow these tips from
            Green Space own Team! Keep your plants healthy and thriving this
            summer!
          </p>
          <div className='flex items-center lg:justify-start justify-center'>
            <Link
              to={'/plantscare'}
              className='text-center main-btn mt-5 lg:mt-4 2xl:mt-7 py-3 px-5 shadow-gray-400 shadow-md text-md'
            >
              Care Tools
            </Link>
          </div>
        </div>
        <div className='flex flex-1 lg:flex-[0.8]'>
          <img
            src={indoorHome}
            className='rounded-md pt-10  lg:pt-0'
            alt='indoor plants care'
          />
        </div>
      </div>

      <div className='flex flex-row gap-0 lg:gap-6 w-[90%] mt-3 lg:mt-8 pt-0 lg:pt-6 pb-12 m-auto justify-around items-start flex-wrap'>
        <div className='h-[1px] w-full bg-neutral-400' />
        <div className='flex flex-1 lg:flex-[0.8]'>
          <img
            src={outdoorHome}
            className='rounded-md pt-5 lg:pt-0'
            alt='indoor plants care'
          />
        </div>
        <div className='flex flex-col lg:flex-[0.5] lg:pl-5 '>
          <h3 className='text-2xl text-center lg:text-start md:text-3xl lg:text-3xl 2xl:text-4xl font-bold text-green-900 tracking-wide '>
            How To Water Outdoor Potted Plants
          </h3>
          <p className=' md:text-lg lg:text-[1.05rem] tracking-wide 2xl:tracking-wider leading-1 lg:leading-6 2xl:leading-8 font-mono font-light pt-3 text-justify lg:text-start'>
            Most outdoor potted plants can grow quite happily without too much
            help. But if you’re growing fruits and vegetables or a beautiful
            display of flowers, giving them some food can help produce a bumper
            crop. During the spring and summer, feed your plants a diluted
            liquid fertiliser once a month or so.
          </p>

          <div className='flex items-center lg:justify-start justify-center'>
            <Link
              to={'/plantscare'}
              className='text-center main-btn mt-5 lg:mt-4 2xl:mt-7 py-3 px-5 shadow-gray-400 shadow-md text-md'
            >
              Care Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareIntro
