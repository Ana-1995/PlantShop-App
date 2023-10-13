  import React from 'react'
import { Link } from 'react-router-dom'
import { Advert, CentralTitle, Plant, Loader} from '../../global'
import { useState } from 'react'
import { plantsData } from '../../constants/data'
import { BsSearch } from 'react-icons/bs'
import {PiPottedPlantDuotone} from 'react-icons/pi'
import {GiPlantSeed} from 'react-icons/gi'
import Footer from '../footer/Footer'
import { useEffect } from 'react'

const Store = () => {
  //loader gif 
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
    window.scrollTo(0, 0)
    setTimeout(() => setIsLoading(false), 2000)
    setTimeout(() => setResetAnimation(true), 2000)
  }, [])

if (isLoading) {
  return <Loader />
}
  const handleSearchInputChange = (e) => setSearchQuery(e.target.value)

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters({ ...selectedFilters, [filterName]: value })
  }

  const handleAllPlantsFilter = () => {
    setSelectedFilters({
      color: null,
      category: null,
      potSize: null,
      careLevel: null,
    })
  }

  const filteredPlants = plantsData.filter((plant) => {
    const { color, category, potSize, careLevel } = selectedFilters

    const matchesSearch =
      !searchQuery ||
      plant.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesColor = !color || plant.color === color
    const matchesCategory = !category || plant.category === category
    const matchesPotSize = !potSize || plant.potSize === potSize
    const matchesCareLevel = !careLevel || plant.careLevel === careLevel

    return (
      matchesSearch &&
      matchesColor &&
      matchesCategory &&
      matchesPotSize &&
      matchesCareLevel
    )
  })

  return (
    <>
      <CentralTitle title={'Our Store'} />
      <div className='flex flex-row w-[90%] m-auto justify-between 2xl:justify-between items-center'>
        <div className='flex flex-row w-[95%] m-auto lg:m-0 lg:w-fit pb-4 lg:pb-6 justify-center items-center'>
          <h3 className='pr-0 lg:pr-2 text-2xl hidden lg:block font-semibold'>
            Categories
          </h3>
          <button
            className={`${selectedFilters.category === null ? 'font-semibold text-black' : 'text-base text-slate-500'} font-sans text-sm pl-0 lg:pl-1 `}
            onClick={handleAllPlantsFilter}
          >
            All Plants
          </button>
          {['Indoor', 'Outdoor', 'Pet Friendly'].map((category) => (
            <button
              key={category}
              className={`${
                selectedFilters.category === category
                  ? 'text-black font-semibold'
                  : 'text-gray-500'
              } font-sans pl-0 lg:pl-1`}
              onClick={() => handleFilterChange('category', category)}
            >
              / {category}
            </button>
          ))}
        </div>
        <div className='hidden lg:flex flex-row justify-center items-center px-2 py-1 border mr-5 border-slate-400'>
          <input
            className='border-none outline-none text-slate-600 text-sm bg-transparent'
            type='text'
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder='Search'
          />
          <BsSearch className='text-slate-500' />
        </div>
      </div>

      <section className='w-[95%] lg:w-[98%] xl:w-[95%] m-auto flex flex-row mb-16'>
        <div className='flex flex-row'>
          <div className='hidden lg:flex flex-col mr-6 justify-start items-start'>
            <h3 className='font-bold pb-1 text-xl'>Pot Color</h3>
            {['White', 'Black', 'Gray', 'Blue'].map((color) => (
              <div className='flex flex-row items-center' key={color}>
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

          <div className='w-[1px] h-[350px] bg-neutral-500 hidden lg:flex ' />
        </div>

        <div
          className={`${
            resetAnimation ? 'slide-in-right' : 'hidden'
          }  flex flex-row flex-wrap justify-center lg:justify-evenly gap-y-5 flex-1`}
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
      <Advert />
      <Footer />

    </>
  )
}

export default Store


