import React from 'react'
import { happyGift } from '../../assets'

const GiftsIntro = () => {
  return (
    <div className='w-[85%] lg:w-[65%] flex flex-col m-auto'>
      <p className='text-center sm:text-xl lg:text-base'>
        From a housewarming gift, to a birthday present, or ‘just because’,
        there’s nothing better than receiving a hand-picked houseplant from
        someone who’s thinking of you. And if you need more convincing, we’ll be
        happy to oblige.
      </p>
      <img
        src={happyGift}
        alt='plant for gift'
        className='pt-5 w-full h-full object-cover'
      />

      <p className='pt-9 w-[85%] m-auto sm:text-xl lg:text-base'>
        Plant gifting is not only thoughtful – it’s personal and versatile too.
        With the right plant, a new house can feel like a home. A birthday can
        feel like a celebration of life. And an anniversary can feel extra
        special. Plants are an everyday reminder to someone that you care about
        them and create a relaxed environment in their home. What could be a
        better present?
      </p>
    </div>
  )
}

export default GiftsIntro
