import React, { useState, useEffect } from 'react'
import {InnerItems} from './InnerItems'
import { Link } from 'react-router-dom'
import { innerCover } from '../../assets'
import {RiPlantLine} from 'react-icons/ri'

const Dropdown = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  //animation
  const [resetAnimation, setResetAnimation] = useState(false)
  useEffect(() => {
    setResetAnimation(resetAnimation) 
    setTimeout(() => setResetAnimation(!resetAnimation), 0) 
  }, [])

  return (
    <div>
      <ul
        className={
          click
            ? 'hidden'
            : 'scale-in-ver-top flex flex-row justify-around w-[600px] h-[270px] top-[76%] left-[30%] absolute text-start bg-yellow-50 text-green-800 rounded-b-lg'
        }
        onClick={handleClick}
      >
        <div className='flex flex-col'>
          <h1 className='text-start text-2xl text-black tracking-wider pt-6 px-4 pb-5'>
            Categories:
          </h1>
          {InnerItems.map((item, i) => (
            <div
              className='flex flex-row items-center ml-4'
              key={`${item.id}-${i}`}
            >
              <li className='hover hover:pl-2 duration-300 hover:text-black'>
                <Link
                  className={item.className}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
              <RiPlantLine className='ml-[2px]' />
            </div>
          ))}
        </div>
        <div className='w-[300px] h-[200px] mt-6 rounded-md'>
          <img
            src={innerCover}
            className='w-full h-full object-cover rounded-md'
            alt=''
          />
        </div>
      </ul>
    </div>
  )
}

export default Dropdown
