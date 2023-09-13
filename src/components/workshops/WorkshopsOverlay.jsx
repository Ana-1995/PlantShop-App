import React from 'react'

const WorkshopsOverlay = () => {
  return (
    <div className='flex flex-col lg:flex-row flex-wrap justify-between mb-8 bg-gradient-to-tr from-lime-600 to-lime-900  '>
      <div className='flex flex-col flex-1 justify-center items-center lg:items-start gap-2 mb-5 lg:mb-2 text-zinc-100 '>
        <h1 className='text-2xl  md:text-5xl lg:text-6xl capitalize pb-1 pt-4 font-mono tracking-tight pl-0 lg:pl-24 text-zinc-200 '>
          Workshops & Events
        </h1>
        <p className='text-sm md:text-lg pt-3 tracking-wider leading-4 font-sans pl-2 lg:pl-24 w-4/5 '>
          We offers a variety of in person or online workshops for beginners,
          experts, & everyone in between!
        </p>

        <div className='flex flex-col items-center justify-center gap-5 pt-6 pl-0 lg:pl-24 '>
          <a href='#workshops'>
            {' '}
            <button className=' w-40 lg:w-56  border-2 border-zinc-300 bg-green-700 text-md lg:text-xl bg-transparent hover:bg-black  hover:text-white duration-300 font-serif tracking-widest py-2 text-zinc-300'>
              Workshops
            </button>
          </a>
          <a href='#events'>
            {' '}
            <button className='w-40 lg:w-56 border-2 border-zinc-300 bg-green-700 text-md lg:text-xl bg-transparent hover:bg-black  hover:text-white duration-300 font-serif tracking-widest py-2 text-zinc-300'>
              Events
            </button>
          </a>
        </div>
      </div>

      <div className='flex flex-1 mt-2 lg:mt-0'>
        <div className='m-auto w-[100%] h-auto'>
          <img
            className='w-full object-cover h-full'
            src={
              'https://images.pexels.com/photos/4503263/pexels-photo-4503263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default WorkshopsOverlay
