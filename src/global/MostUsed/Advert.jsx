
import React from 'react'

import CentralTitle from './CentralTitle'
import { illustrationData } from '../../constants/data'

const Advert = () => (
  <section id='advert' className='mb-4 lg:mb-12'>
    <CentralTitle title='Why Our Plants?' />
    <div className='m-auto max-w-full lg:max-w-[80%] flex flex-col items-center flex-wrap lg:flex-row justify-center pt-5 gap-3'>
      {illustrationData.map((item) => (
        <div
          key={item.id}
          className='flex flex-col flex-1 items-center justify-center pl-4 gap-5 '
        >
          <img
            className='w-[30%] sm:w-[50%] lg:w-[30%] object-cover'
            src={item.img}
            alt={item.title}
          />
          <p className='text-center text-sm md:text-2xl lg:text-sm xl:text-base md:py-4 lg:py-1 w-[80%]'>
            <span className='font-extrabold'>{item.textBold}</span>{' '}
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </section>
)

export default Advert

