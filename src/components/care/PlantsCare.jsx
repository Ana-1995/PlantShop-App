import React from 'react'
import { Link } from 'react-router-dom'
import { careToolsData } from '../../constants/data'
import { useState, useEffect } from 'react'
import {BsSearch } from 'react-icons/bs'
import { MdPlayArrow } from 'react-icons/md'
import Footer from '../footer/Footer'
import {CentralTitle, Delivery, Plant} from '../../global'

const PlantsCare = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState(null)
  const [sortingTools, setSortingTools] = useState('none')
  const [resetAnimation, setResetAnimation] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setResetAnimation(false)
    setTimeout(() => setResetAnimation(true), 100)
  }, [])

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleCategoryFilter = (category) => {
    setSelectedCategoryFilter(category)
  }

  const handleAllFilter = () => {
    setSelectedCategoryFilter(null)
  }

  const filterSorting = (order) => {
    setSortingTools(order)
  }

  const toolsSearch = careToolsData
    .filter((tool) => {
      if (searchQuery) {
        return tool.title.toLowerCase().includes(searchQuery.toLowerCase())
      }
      return true
    })
    .filter((tool) => {
      if (selectedCategoryFilter) {
        return tool.category === selectedCategoryFilter
      }
      return true
    })
    .sort((a, b) => {
      if (sortingTools === 'asc') {
        return a.price - b.price
      } else if (sortingTools === 'desc') {
        return b.price - a.price
      }
      return 0
    })

  return (
    <>
      <div className='flex flex-row justify-between w-[80%] m-auto items-center border-b-2 border-green-700 py-4 mb-5 mt-6'>
        <div className='flex flex-row items-center gap-1'>
          <h2 className='text-2xl hidden lg:block'>Plant Guides</h2>
          <MdPlayArrow size={25} />
        </div>

        <Link
          className={`${resetAnimation ? 'blink-2' : ''}
          text-green-800 font-extrabold tracking-wide`}
          to={'/plantguide'}
        >
          Looking for our plant care basics?
        </Link>
      </div>
      <CentralTitle title={'Main Care Tools'} />

      <div className='lg:hidden flex flex-row justify-between w-[75%] items-center px-2 py-1 border m-auto border-slate-400 mb-5 '>
        <input
          className='border-none outline-none text-slate-600 text-sm bg-transparent'
          type='text'
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder='Search'
        />
        <BsSearch className='text-slate-500' />
      </div>
      <div className='m-auto flex justify-center items-center lg:hidden'>
        <select
          id='sortOrder'
          value={sortingTools}
          onChange={(e) => filterSorting(e.target.value)}
          className='text-gray-600 text-md tracking-wide border border-gray-500 bg-transparent py-1 px-1 cursor-pointer mb-4'
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
      </div>
      <div className='flex flex-row w-[75%] m-auto items-center justify-center lg:justify-between mb-2 lg:mb-5'>
        <div className='flex flex-row gap-4 bg-amber-100 p-3 rounded-lg '>
          <button
            className={`${
              selectedCategoryFilter === 'pot' ? 'font-bold' : 'font-normal'
            }`}
            onClick={() => handleCategoryFilter('pot')}
          >
            Pots
          </button>
          <button
            className={`${
              selectedCategoryFilter === 'tool' ? 'font-bold' : 'font-normal'
            }`}
            onClick={() => handleCategoryFilter('tool')}
          >
            Tools
          </button>
          <button
            className={`${
              selectedCategoryFilter === 'supply' ? 'font-bold' : 'font-normal'
            }`}
            onClick={() => handleCategoryFilter('supply')}
          >
            Supplies |
          </button>
          <button
            className={`${
              selectedCategoryFilter === null ? 'font-bold' : 'font-normal'
            }`}
            onClick={handleAllFilter}
          >
            All
          </button>
        </div>
        <div className='hidden lg:flex items-center '>
          <select
            id='sortOrder'
            value={sortingTools}
            onChange={(e) => filterSorting(e.target.value)}
            className='text-slate-400 bg-amber-100 text-md tracking-wide outline-none rounded-lg py-[6px] px-2 cursor-pointer'
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
          <div className='hidden lg:flex py-2 px-2 bg-amber-100 rounded-lg ml-3'>
            <input
              className='border-none outline-none text-sm bg-amber-100 text-slate-500'
              type='text'
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder='Search'
            />
            <BsSearch className='text-slate-600' />
          </div>{' '}
        </div>
      </div>

      <section className='w-[95%] m-auto flex flex-row mb-6'>
        <div className='flex flex-row w-[95%] m-auto items-center flex-wrap justify-center gap-8'>
          {toolsSearch.map((item, i) => (
            <Plant
              key={`${item.id}-${i}`}
              img={item.img}
              id={item.id}
              title={<Link to={`/tools/${item.id}`}>{item.title}</Link>}
              price={item.price}
            />
          ))}
        </div>
      </section>
      <Delivery />
      <Footer />
    </>
  )
}

export default PlantsCare






























