
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components'

const Login = () => {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 const handleEmailChange = (e) => {
   setEmail(e.target.value)
 }

 const handlePasswordChange = (e) => {
   setPassword(e.target.value)
 }

const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const requestBody = {
      email,
      password,
    }

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

  } catch (error) {
    console.error('An error occurred:', error)
  }
}
  return (
    <>
      <div className='flex flex-col mt-6 lg:mt-32 mb-6 lg:mb-14'>
        <div className='flex flex-row items-center justify-center border-b-2 border-slate-600 m-auto'>
          <button className='px-4 lg:px-24 text-center pb-3 font-bold'>
            Log in
          </button>

          <button className='px-4 lg:px-24 text-center pb-3 font-bold'>
            <Link to={'/signup'}>Sign up</Link>
          </button>
        </div>

        <div className='flex flex-col w-[18rem] md:w-[22rem] lg:w-[28rem] mx-auto my-auto '>
          <h4 className='pt-6 text-3xl font-bold tracking-wider'>Log In</h4>

          <form onSubmit={handleSubmit} className='flex flex-col pt-6'>
            <label htmlFor='email' className='uppercase text-xs pb-2'>
              Email address
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
              className='bg-[#ecf5ec] border border-slate-400 py-5 pl-2'
              required
            />
            <label htmlFor='password' className='uppercase text-xs pb-2 pt-4'>
              Your password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              className='bg-[#ecf5ec] border border-slate-400 py-5 pl-2'
              required
            />
          </form>
        </div>
        <div className='flex flex-row items-baseline justify-center pt-5  '>
          <button className='bg-green-600 py-2 lg:py-3 px-6 mr-2 lg:mr-48 duration-300 hover:bg-green-700 rounded-3xl text-white tracking-wide uppercase'>
            Log In
          </button>
          <a href='/' className='underline'>
            Lost Your Password?
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login

