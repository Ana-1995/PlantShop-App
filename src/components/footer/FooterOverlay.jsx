import React from 'react'

const FooterOverlay = () => {
  return (
    <div className='w-[85%] m-auto h-[240px] rounded-md'>
      <div className='bg-[url("https://cutewallpaper.org/28/desktop-wallpaper-green-plants/1137341.jpg")] h-full w-full bg-cover bg-center rounded-md'>
        <div className='flex flex-col justify-end items-end pt-10 pr-6 '>
          <h1 className='text-yellow-950 text-lg text-center lg:text-4xl font-bold capitalize font-mono'>
            JOIN NOW TO RECEIVE EXCLUSIVE DEALS!
          </h1>
          <p className='pt-5 font-bold  text-black lg:text-green-800 text-sm text-center'>
            "Sign up for our emails and get exclusive discounts on all your
            favorite plants and gardening products!"
          </p>
          <form className='pt-3 lg:pt-6 flex flex-row gap-1 lg:gap-4'>
            <input
              className='max-w-[100px] max-h-[35px] sm:h-auto lg:max-w-[280px] py-2 px-3 border border-solid border-slate-600  rounded-md bg-[#C0C0C0] text-black placeholder-black'
              type='text'
              placeholder='name'
            />
            <input
              className='max-w-[100px] max-h-[35px] sm:h-auto lg:max-w-[280px] py-2 px-3 border border-solid border-slate-600  rounded-md bg-[#C0C0C0] text-black placeholder-black'
              type='email'
              placeholder='email'
            />
            <button className='bg-green-600 max-h-[35px] sm:h-auto text-white font-bold py-2 px-2 lg:px-4 rounded-sm hover:bg-green-500 duration-300'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FooterOverlay
