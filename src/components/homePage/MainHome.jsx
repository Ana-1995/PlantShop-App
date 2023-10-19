import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import fallbackImage from '../../assets/mobilecover.jpeg'

const MainHome = () => {
  const [resetAnimation, setResetAnimation] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setResetAnimation(true)
  }, [])

  const isMobile = window.innerWidth < 768
  const initialAnimationProps = isMobile
    ? { opacity: 0, y: 20 }
    : { opacity: 0, y: 200 }

  return (
    <section id='mainHome' className='w-full h-full relative lg:static'>
      <div className={'w-full h-auto lg:h-[97vh] relative'}>
        <img
          src={fallbackImage}
          alt='Mobile Fallback'
          className={`w-full h-full object-cover ${
            resetAnimation ? 'fade-in-animation' : 'hidden'
          }`}
        />
      </div>

      <div className='absolute w-full h-full top-0 lg:top-10 flex flex-col justify-center items-center'>
        <motion.div
          initial={initialAnimationProps}
          animate={{ opacity: 1, y: 5 }}
          transition={{ duration: 2 }}
          className='text-center'
        >
          <h1
            className='text-3xl md:text-6xl lg:text-7xl tracking-wider font-bold text-slate-100'
          >
            Turn Your Space Green
          </h1>
          <p className='text-center text-slate-300 font-bold lg:font-semibold pt-3 lg:pt-4 text-sm md:text-lg lg:text-base tracking-normal lg:tracking-wide w-[60%] md:w-full m-auto md:m-0'>
            Discover the best plants for your space and we will deliver them to
            your door.
          </p>
          <button
            className='main-btn py-2 lg:py-3 px-3 lg:px-4 text-sm md:text-lg lg:text-xl mt-3 lg:mt-5'
            style={{ fontWeight: '800' }}
          >
            <Link to={'/stores'}>Shop plants</Link>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default MainHome
