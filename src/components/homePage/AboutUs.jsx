import React from 'react'
import { coverAbout } from '../../assets'
import { Link } from 'react-router-dom'

const AboutUs = () => (
  <section className='bg-[#d0ebd0] sm:py-[4rem] sm:px-[2rem] flex justify-center items-center mb-4 lg:mb-10'>
    <div className='w-full flex justify-center items-center flex-col p-6 md:p-3 lg:p-0 lg:flex-row gap-4'>
      <div className='flex flex-1 justify-center items-center flex-col text-right'>
        <h1 className='text-2xl md:text-4xl lg:text-3xl 2xl:text-6xl leading-10 tracking-wider capitalize '>
          About Us
        </h1>

        <p className='text-sm md:text-2xl md:py-5 lg:text-base leading-7 font-mono text-start tracking-wide capitalize lg:pb-5 lg:pt-5 lg:w-[90%]'>
          We've been around for a while.. Our roots go all the way back to 1860,
          so yes, our grower family really has been around for a long time. Our
          great grandfather was a grower and this is where our story begins. By
          now, we have reached the fourth generation, but our hearts still beat
          just as hard for the greenhouse and everything that comes with it. Our
          plants, our passion!
        </p>
        <button
          type='button'
          className='main-btn p-2 md:p-4 my-3 md:my-0 md:text-2xl lg:text-sm 2xl:text-xl'
        >
          <Link to={'/workshops'}>Know More</Link>
        </button>
      </div>

      <div className='flex flex-1 rounded-lg h-[300px] lg:h-[500px] md:pt-8 lg:pt-0'>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={coverAbout}
          alt='about plant shop'
        />
      </div>

      <div className='flex flex-1 justify-center items-center flex-col text-right '>
        <h1 className='text-2xl md:text-4xl lg:text-3xl 2xl:text-6xl leading-10 tracking-wider capitalize md:pt-4 lg:pt-0 '>
          Our History
        </h1>

        <p className='text-sm md:text-2xl md:py-5 lg:text-base font-mono leading-7 text-start tracking-wider capitalize lg:pb-5 lg:pt-5  lg:w-[90%]'>
          From a study project to a strong growing PLNTScommunity.. Seeing
          plants grow has something magical and it inspired four brothers to
          share this with more people. In their grandfather's greenhouse, behind
          their parents' home , they started growing small cutting plants under
          the name BabyPLNTS. they started an online website which launched in
          2018.
        </p>
        <button
          type='button'
          className='main-btn p-2 md:p-4 my-3 md:my-0 md:text-2xl lg:text-sm 2xl:text-xl'
        >
          <Link to={'/workshops'}>Know More</Link>
        </button>
      </div>
    </div>
  </section>
)
 


export default AboutUs
