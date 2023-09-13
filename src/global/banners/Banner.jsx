import React from 'react'
import { useEffect, useState } from 'react'

const Banner = () => {
  //animation
  const [resetAnimation, setResetAnimation] = useState(false)
  useEffect(() => {
    setResetAnimation(false) 
    setTimeout(() => setResetAnimation(true), 100) 
  }, [])
  return (
    <div className='w-full py-2 bg-green-800'>
      <p
        className={`${
          resetAnimation ? 'tracking-in-expand' : ''
        }    text-center text-sm md:text-lg lg:text-sm tracking-tighter
      lg:tracking-wider font-mono capitalize text-white `}
      >
        Free Shipping + 30-Day Happiness Guarantee
      </p>
    </div>
  )
}

export default Banner
