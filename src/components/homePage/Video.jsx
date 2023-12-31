import React from 'react'
import { coverVideo } from '../../assets'
import { potsData } from '../../constants/data'
import { Link } from 'react-router-dom'

const Video = () => {
  return (
    <div className='flex w-[92%] m-auto h-auto flex-col lg:flex-row justify-center gap-2 lg:gap-10 py-8'>
      <div className='flex flex-1 relative rounded-lg'>
        <video
          className='w-full h-full object-cover rounded-lg'
          src={coverVideo}
          type='video/mp4'
          loop
          autoPlay
          muted
          playsInline
          preload='auto'
        />
      </div>

      <div className='flex flex-col items-center lg:items-start gap-y-2 lg:gap-y-7 flex-1'>
        <h1 className='text-start text-2xl md:text-3xl lg:text-4xl text-green-700 font-semibold tracking-wide pt-3 lg:pt-0'>
          Plants Make People Happy
        </h1>
        <div className='flex flex-row flex-wrap items-start justify-start gap-3 '>
          {potsData.map((pot, i) => (
            <article
              key={i}
              className='flex flex-col justify-center items-center '
            >
              <img className='h-[80px]' src={pot.img} alt={pot.name} />
              <p className='text-xs pt-2'>{pot.name}</p>
            </article>
          ))}
        </div>

        <div className='flex flex-row justify-start items-start mt-4 gap-5'>
          <button className=' bg-amber-200 rounded-full py-2 px-3 text-md tracking-wider hover:bg-amber-300 duration-300'>
            <Link to={'/stores'}>Shop</Link>
          </button>
          <button className='bg-amber-200 rounded-full py-2 px-3 text-md tracking-wider hover:bg-amber-300 duration-300'>
            <Link to={'/plantguide'}>Guides</Link>
          </button>
          <button className='bg-amber-200 rounded-full py-2 px-3 text-md tracking-wider hover:bg-amber-300 duration-300'>
            <Link to={'/gifts'}>Gifts</Link>
          </button>
          <button className='bg-amber-200 rounded-full py-2 px-3 text-md tracking-wider hover:bg-amber-300 duration-300'>
            <Link to={'/workshops'}>Learn</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Video
