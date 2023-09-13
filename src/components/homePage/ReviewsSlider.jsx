import React from 'react'
import { AiFillStar } from 'react-icons/ai'


const ReviewsSlider = ({id, date, title, author, content}) => {
  return (
    <div className='flex flex-col justify-start items-start' key={id}>
      <div className='flex flex-row pt-2 lg:pt-5 justify-center items-center'>
        <div className='flex flex-row items-center justify-center'>
          <AiFillStar size={24} color='green' />
          <AiFillStar size={24} color='green' />
          <AiFillStar size={24} color='green' />
          <AiFillStar size={24} color='green' />
          <AiFillStar size={24} color='green' />
        </div>
        <p className='pl-2 text-xs'>{date}</p>
      </div>

      <h4 className='pt-1 text-md lg:text-xl text-green-800 font-bold pb-1'>
        {title}
      </h4>
      <div className='flex flex-col justify-start items-start'>
        <p className='text-xs lg:text-sm text-start '>{content} </p>
      </div>

      <span className='text-sm pt-1 font-bold'>{author}</span>
    </div>
  )
}

export default ReviewsSlider
