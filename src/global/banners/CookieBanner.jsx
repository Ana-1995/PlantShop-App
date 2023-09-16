import React, { useEffect, useState } from 'react'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false) 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true)
    }, 7000) 

    return () => {
      clearTimeout(timer)
    }
  }, []) 

  const hideBanner = () => {
    setShowBanner(false)
    localStorage.setItem('cookieBannerShown', 'true')
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className='flex flex-row justify-between fixed left-0 lg:left-40 bottom-0 lg:bottom-5 w-full lg:w-[80%] rounded-none lg:rounded-md bg-green-800 text-white p-2 lg:p-4 text-center'>
      <p className='text-sm sm:text-lg md:text-md lg:text-sm text-start lg:text-center'>
        This website uses cookies to ensure you get the best experience on our
        website.{' '}
        <a
          className=' font-sans text-amber-200 hover:text-amber-300 duration-200 text-sm'
          href=''
        >
          Learn More
        </a>{' '}
      </p>
      <div className='flex flex-col lg:flex-row gap-1 lg:gap-3'>
        <button
          className='bg-amber-200 hover:bg-amber-300 duration-200 text-green-800 border-collapse px-2 cursor-pointer'
          onClick={hideBanner}
        >
          Decline
        </button>
        <button
          className='bg-amber-200 hover:bg-amber-300 duration-200 text-green-800 border-collapse px-3 cursor-pointer'
          onClick={hideBanner}
        >
          Allow
        </button>
      </div>
    </div>
  )
}

export default CookieBanner
