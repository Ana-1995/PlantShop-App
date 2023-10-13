import React, { useState } from 'react'
import { plantGuide } from '../../assets'
import Footer from '../footer/Footer'
import { useEffect } from 'react'
import {CentralTitle} from '../../global'


const PlantGuide = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [messageSent, setMessageSent] = useState(false)
  const [resetAnimation, setResetAnimation] = useState(false)
useEffect(() => {
  window.scrollTo(0, 0)
setResetAnimation(true)
}, [])
  const handleSendClick = () => {
    setName('')
    setMessage('')
    setMessageSent(true)

    setTimeout(() => {
      setMessageSent(false)
    }, 2000) 
  }

  return (
    <>
      <CentralTitle title={'Our Plant Doctors work for you!'} />
      <div className={`${resetAnimation ? 'fade-in-fwd' : 'hidden'} flex flex-row flex-wrap gap-6 lg:gap-20 justify-center items-start mt-4 lg:mt-12 mb-4 lg:mb-14`}>
        <div className='flex h-[20rem] md:h-[30rem] md:w-[24rem] lg:h-[33rem] w-[20rem] lg:w-[30rem] '>
          <img
            className='w-full h-full object-cover'
            src={plantGuide}
            alt='plant guide'
          />
        </div>
        <div className='flex flex-col text-start w-[20rem] lg:w-fit'>
          <label className='pb-1' htmlFor='name'>
            Your Name:
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='bg-[#ecf5ec] mb-5 py-4 pl-3 border border-slate-500'
          />
          <label className='pb-1 mt-5 capitalize' htmlFor='message'>
            Message to our plant doctors:
          </label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='bg-[#ecf5ec] pl-2 pt-2 border border-slate-500'
            cols='60'
            rows='10'
          ></textarea>
          <button
            onClick={handleSendClick}
            className={`w-full bg-green-400 mt-8 py-3 tracking-widest font-bold hover:bg-green-500 duration-300 ${
              messageSent ? 'message-sent' : ''
            }`}
          >
            {messageSent ? 'Sent!' : 'Send'}
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PlantGuide
