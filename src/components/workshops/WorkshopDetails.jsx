import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const WorkshopDetails = ({id, img, title, date, content}) => {
  return (
    <div
      className='flex flex-col first:pt-0 mb-5 lg:mb-10 mt-0 md:mt-5 gap-2 items-start max-w-[24rem] md:max-w-[20rem] lg:max-w-[28rem] h-[30rem] relative '
      key={id}
    >
      <img src={img} className='w-full h-full object-cover' alt={title} />
      <div className="flex flex-row justify-center items-center px-3   ">
       <h3 className=' text-2xl font-bold text-green-800'>{title}</h3>
      <p className=" text-xs pb-1 pr-1 font-bold absolute bottom-0 right-0">{date}</p>
      </div>
      <div className="px-3">
      <p>{content}</p>

      <a
        href='contact'
        className='flex flex-row items-center text-sm font-mono font-bold text-green-700 hover:text-green-500'
      >
        <span className=''>Reserve a spot</span>{' '}
        <MdOutlineArrowRightAlt size={25} />{' '}
      </a>
      </div>
    </div>
  )
}

export default WorkshopDetails
