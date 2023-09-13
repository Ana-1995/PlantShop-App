import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Stars = ({ stars }) => {
  return (
    <div className='flex flex-row justify-start items-start pt-1'>
      <AiFillStar color='green' className='text-sm lg:text-md' />
      <AiFillStar color='green' className='text-sm lg:text-md' />
      <AiFillStar color='green' className='text-sm lg:text-md' />
      <AiFillStar color='green' className='text-sm lg:text-md' />
      <AiFillStar color='green' className='text-sm lg:text-md' />
      <p className='text-xs lg:text-[16px]'>{stars}</p>
    </div>
  )
}

export default Stars
