import React, { useEffect, useState } from 'react'
import ContactIntro from './ContactIntro'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [optionValue, setOptionValue] = useState('')
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    return emailRegex.test(email)
  }

  const handleEmailChange = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    setIsValidEmail(validateEmail(newEmail))
  }

  return (
    <>
      <section id='contact'>
        <ContactIntro />
        <div className='h-[1.5px] bg-gray-500 w-10 m-auto mt-10' />
        <div className='text-center pt-6'>
          <h1 className='text-2xl lg:text-4xl'>
            If you have any questions <br /> send us a note through the
            <br /> submission box below.
          </h1>
        </div>

        <div className='flex flex-col justify-center items-center pt-6 w-[80%] sm:w-auto m-auto lg:w-auto'>
          <form className='flex flex-col min-w-[10rem] lg:min-w-[25rem] mb-14 '>
            <label
              htmlFor='fullName'
              className='capitalize text-xs pb-1 font-bold'
            >
              *Full name
            </label>
            <input
              type='text'
              id='fullName'
              className='border border-slate-500 px-2 py-1 bg-[#ecf5ec]'
            />
            <label
              htmlFor='email'
              className='capitalize text-xs pb-1 mt-5 font-bold'
            >
              *Email
            </label>
            <input
              type='email'
              id='email'
              className={`border border-slate-500 bg-[#ecf5ec] ${
                !isValidEmail ? 'border-red-500' : ''
              }`}
              value={email}
              onChange={handleEmailChange}
            />
            {!isValidEmail && (
              <p className='text-red-500 text-sm'>Invalid email format</p>
            )}

            <label
              htmlFor='questionType'
              className='capitalize text-xs pb-1 mt-5 font-bold'
            >
              *Is your question regarding the House Plant Subscription Box?
            </label>
            <select
              id='questionType'
              value={optionValue}
              onChange={(e) => setOptionValue(e.target.value)}
              className='border border-t-2 border-slate-500 px-2 py-1 max-w-[12rem] lg:min-w-[28rem] bg-[#ecf5ec]'
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            {optionValue === 'Yes' ? (
              <div className='mt-3'>
                <label
                  htmlFor='additionalDetails'
                  className='capitalize text-xs pb-1 font-bold '
                >
                  *Please provide more details.
                </label>
                <textarea
                  id='additionalDetails'
                  className='w-full border border-slate-500 px-2 py-1 bg-[#ecf5ec]'
                  cols='30'
                  rows='5'
                ></textarea>
              </div>
            ) : (
              ''
            )}

            <label
              htmlFor='orderNumber'
              className='capitalize text-xs pb-1 mt-5 font-bold'
            >
              *What is your order number?
            </label>
            <input
              type='number'
              id='orderNumber'
              className='border border-slate-500 px-2 py-1 bg-[#ecf5ec]'
            />
            <Link
              to={'/'}
              className={`text-white bg-slate-700 w-min m-auto mt-6 py-1 px-3 hover:bg-black duration-300 ${
                !isValidEmail ? 'pointer-events-none opacity-50' : ''
              }`}
            >
              Submit
            </Link>
          </form>
        </div>

        <Footer />
      </section>
    </>
  )
}

export default Contact
