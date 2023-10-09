import React, { useEffect } from 'react'
import GiftsSlider from './GiftsSlider'
import GiftsIntro from './GiftsIntro'
import { giftArticlesData } from '../../constants/data'
import Footer from '../footer/Footer'
import { CentralTitle, Delivery } from '../../global'

const Gifts = () => {
useEffect(()=>(
  window.scrollTo(0, 0)
), [])
  return (
    <>
    <section id="gifts">
      <GiftsSlider />
      <CentralTitle title={'Why plants make the perfect gift'} />
      <GiftsIntro/>
      {giftArticlesData.map((each, id) => (
        <section key={id} className='w-[85%] m-auto mb-10'>
          <div key={id} className='w-[85%] lg:w-[65%] m-auto'>
            <h1 className='text-start font-bold text-3xl sm:text-4xl first:pt-10 '>
              {' '}
              {each.title}{' '}
            </h1>
            <p className='pt-2  sm:text-xl lg:text-base'>{each.article}</p>
            <p className='pt-2 sm:text-xl lg:text-base '>{each.articleBr}</p>
            <img
              src={each.img}
              alt={each.title}
              className='pt-5 w-full h-full object-cover'
            />
          </div>
        </section>
      ))}
       <Delivery />
      <Footer />
      </section>
    </>
  )
}

export default Gifts
