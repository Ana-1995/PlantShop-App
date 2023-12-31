import React from 'react'
import { plantsData } from '../../constants/data'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CentralTitle, Delivery, Plant, Loader } from '../../global'
import Footer from '../footer/Footer'
import { BsSearch } from 'react-icons/bs'
import { PiPottedPlantDuotone } from 'react-icons/pi'
import { GiPlantSeed } from 'react-icons/gi'


const Outdoor = () => {
const [isLoading, setIsLoading] = useState(true)
const [sortingPlants, setSortingPlants] = useState('none')
const [selectedFilters, setSelectedFilters] = useState({
  color: null,
  category: null,
  potSize: null,
  careLevel: null,
})
const [searchQuery, setSearchQuery] = useState('')
const [resetAnimation, setResetAnimation] = useState(false)

useEffect(() => {
  setTimeout(() => {
    setIsLoading(false)
    setResetAnimation(true)
  }, 1200)
}, [])

if (isLoading) {
  return <Loader />
}

const handleFilterChange = (filterName, value) => {
  setSelectedFilters({ ...selectedFilters, [filterName]: value })
}

const handleSortingChange = (order) => {
  setSortingPlants(order)
}

const filteredPlants = plantsData
  .filter((plant) => {
    const { color, potSize, careLevel } = selectedFilters
    return (
      (color ? plant.color === color : true) &&
      (potSize ? plant.potSize === potSize : true) &&
      (careLevel ? plant.careLevel === careLevel : true) &&
      (searchQuery
        ? plant.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true) &&
      plant.category === 'Outdoor'
    )
  })
  .sort((a, b) => {
    if (sortingPlants === 'asc') {
      return a.price - b.price
    } else if (sortingPlants === 'desc') {
      return b.price - a.price
    }
    return 0
  })

const resetFilters = () => {
  setSelectedFilters({
    color: null,
    category: null,
    potSize: null,
    careLevel: null,
  })
}


   return (
     <>
       <CentralTitle title={'Indoor Plants'} />
       <div className='flex flex-row w-[90%] m-auto justify-between items-center'>
         <div className='flex flex-row w-full lg:w-fit justify-center'>
           <button
             className='font-sans text-md text-slate-500 font-semibold bg-green-200 duration-300 hover:bg-green-300 py-1 px-3 rounded-lg tracking-wider'
             onClick={resetFilters}
           >
             All Outdoor Plants
           </button>
         </div>
         <div className='hidden lg:flex items-center'>
           <select
             id='sortOrder'
             value={sortingPlants}
             onChange={(e) => handleSortingChange(e.target.value)}
             className='text-slate-500 text-md tracking-wide outline-none bg-green-200 py-[5px] px-1 cursor-pointer rounded-lg'
           >
             <option className='text-xs md:text-md' value='none'>
               Sort By
             </option>
             <option className='text-xs md:text-md' value='asc'>
               Price Low to High
             </option>
             <option className='text-xs md:text-md' value='desc'>
               Price High to Low
             </option>
           </select>
           <div className='hidden lg:flex flex-row justify-center items-center px-2 py-2 rounded-lg mr-0 2xl:mr-12 bg-green-200 ml-3'>
             <input
               className='border-none outline-none text-sm bg-transparent text-slate-600'
               type='text'
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               placeholder='Search'
             />
             <BsSearch className='text-slate-500' />
           </div>
         </div>
       </div>

       <section className='w-[95%] lg:w-[98%] xl:w-[90%] m-auto flex flex-row mt-8 mb-10'>
         <div className='flex flex-row'>
           <div className='hidden lg:flex flex-col mr-6 justify-start items-start'>
             <h3 className='font-bold pb-1 text-xl'>Pot Color</h3>
             {['White', 'Black', 'Gray', 'Blue'].map((color) => (
               <div className='flex flex-row items-center ' key={color}>
                 <div
                   style={{
                     width: '12px',
                     height: '12px',
                     backgroundColor: color.toLowerCase(),
                   }}
                 />
                 <button
                   className={`${
                     selectedFilters.color === color
                       ? 'text-black font-semibold'
                       : 'text-gray-500'
                   } font-sans pl-2 text-[13px]`}
                   onClick={() => handleFilterChange('color', color)}
                 >
                   {color}
                 </button>
               </div>
             ))}

             <h3 className='font-bold pb-1 pt-5 text-xl'>Pot Size</h3>
             {['16cm', '12.5-15cm', '15-19cm', '20-22cm'].map((size) => (
               <div className='flex flex-row items-center' key={size}>
                 <PiPottedPlantDuotone />
                 <button
                   className={`${
                     selectedFilters.potSize === size
                       ? 'text-black font-semibold'
                       : 'text-gray-500'
                   } font-sans mb-1 pl-2 text-xs`}
                   onClick={() => handleFilterChange('potSize', size)}
                 >
                   {size}
                 </button>
               </div>
             ))}

             <h3 className='font-bold pb-1 pt-5 text-xl'>Care Level</h3>
             {['easy', 'moderate', 'hard'].map((level) => (
               <div className='flex flex-row items-center' key={level}>
                 <GiPlantSeed />
                 <button
                   className={`${
                     selectedFilters.careLevel === level
                       ? 'text-black font-semibold'
                       : 'text-gray-500'
                   } font-sans mb-1 pl-2 text-xs`}
                   onClick={() => handleFilterChange('careLevel', level)}
                 >
                   {level === 'easy' ? 'Care-Free / Easy' : level}
                 </button>
               </div>
             ))}
           </div>
           <div className='w-[1px] h-[350px] bg-neutral-500 hidden lg:flex mr-10' />
         </div>
         <div
           className={`${
             resetAnimation ? 'slide-in-right' : 'hidden'
           } flex flex-row flex-wrap justify-center lg:justify-start gap-x-3 gap-y-4 flex-1`}
         >
           {filteredPlants.map((plant, i) => (
             <Plant
               key={`${plant.id}-${i}`}
               img={plant.img}
               id={plant.id}
               title={<Link to={`/products/${plant.id}`}>{plant.title}</Link>}
               ExPrice={plant.ExPrice && plant.ExPrice}
               price={plant.price}
               stars={`(${plant.stars})`}
             />
           ))}
         </div>
       </section>
       <Delivery />
       <Footer />
     </>
   )
}

export default Outdoor
