import React from 'react'
import { bicycle} from '../../assets'
import { useEffect, useState } from 'react'

const Delivery = () => {
  //animation 
  const [resetAnimation, setResetAnimation] = useState(false)
  
  useEffect(() => {
    setResetAnimation(false) 
    setTimeout(() => setResetAnimation(true), 100) 
  }, [])

  return (
    <section className='w-full h-[150px] bg-amber-50 mb-6 lg:mb-10 '>
      <div className='flex flex-row justify-center pt-2 md:pt-10 lg:pt-0 md:pb-2 lg:pb-0 items-center flex-wrap gap-0 md:gap-1 lg:gap-5 '>
        <img
          className={`${
            resetAnimation ? 'pulsate-fwd' : ''
          }  h-[80px] lg:h-[180px] object-cover`}
          src={bicycle}
          alt='delivery service'
        />
        <p className=' text-center text-sm md:text-xl lg:text-2xl font-extrabold pt-0 pl-0 md:pl-4 lg:pl-6 pb-1 lg:pb-5 capitalize tracking-wide'>
          free, excellent delivery service and happy customers!
        </p>
      </div>
    </section>
  )
}

export default Delivery
