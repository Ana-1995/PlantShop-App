import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CentralTitle, Delivery, Loader, Plant } from '../../global'
import { BsSearch } from 'react-icons/bs'
import { PiPottedPlantDuotone } from 'react-icons/pi'
import { GiPlantSeed } from 'react-icons/gi'
import { plantsData } from '../../constants/data'
import Footer from '../footer/Footer'

const Indoor = () => {
  const [isLoading, setIsLoading] = useState(true)
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

  const filteredPlants = plantsData.filter((plant) => {
    const { color, potSize, careLevel } = selectedFilters

    return (
      (color ? plant.color === color : true) &&
      (potSize ? plant.potSize === potSize : true) &&
      (careLevel ? plant.careLevel === careLevel : true) &&
      (searchQuery
        ? plant.title.toLowerCase().includes(searchQuery.toLowerCase()) 
        : true) &&
      plant.category === 'Indoor' 
    )
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
        <div className='flex flex-row w-full m-auto lg:m-0 lg:w-fit pb-4 lg:pb-6 justify-center items-center'>
          <button
            className='font-sans text-md pl-0 lg:pl-1 text-slate-500 font-semibold bg-green-200 py-1 px-2 rounded-md tracking-wider'
            onClick={resetFilters}
          >
            All Indoor Plants
          </button>
        </div>
        <div className='hidden lg:flex flex-row justify-center items-center px-2 py-2 rounded-md mr-0 2xl:mr-12 bg-green-200'>
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

      <section className='w-[95%] lg:w-[98%] xl:w-[90%] m-auto flex flex-row mb-16'>
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

export default Indoor
