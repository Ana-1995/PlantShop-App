import React from 'react'
import { potsData } from '../../constants/data'
import { CentralTitle } from '../../global'

const Pots = () => {
  return (
    <>
    <CentralTitle title={'Find Your Perfect Plant'} />
    <div className='flex flex-row flex-wrap items-center justify-center gap-4 lg:gap-8 mb-10 pt-6'>
    {potsData.map((pot, i)=>(
     <article key={i} className='flex flex-col justify-center items-center '>
      <img className='h-[80px]' src={pot.img} alt={pot.name} />
      <p className="text-xs pt-2">{pot.name}</p>
     </article>
    ))}
    </div>
    </>
  )
}

export default Pots
