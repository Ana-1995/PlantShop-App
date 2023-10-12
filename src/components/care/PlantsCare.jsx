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
  //animation
  const [resetAnimation, setResetAnimation] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
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

  const toolsSearch = careToolsData.filter((tool) => {
    if (searchQuery) {
      return tool.title.toLowerCase().includes(searchQuery.toLowerCase())
    }  
    if (selectedCategoryFilter) {
      return tool.category === selectedCategoryFilter
    } else {
      return true
    }
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
      <CentralTitle title={'Important Care Tools'} />
      <div className='flex flex-row w-[75%] m-auto items-center justify-center lg:justify-between mb-5'>
        <div className='flex flex-row gap-4 bg-amber-100 p-3 rounded-lg '>
          <button
            className={`${selectedCategoryFilter === 'pot' ? 'font-bold' : 'font-normal'}`}
            onClick={() => handleCategoryFilter('pot')}
          >
            Pots 
          </button>
          <button
            className={`${selectedCategoryFilter === 'tool' ? 'font-bold' : 'font-normal'}`}
            onClick={() => handleCategoryFilter('tool')}
          >
            Tools 
          </button>
          <button
            className={`${selectedCategoryFilter === 'supply' ? 'font-bold' : 'font-normal'}`}
            onClick={() => handleCategoryFilter('supply')}
          >
            Supplies |
          </button>
          <button className={`${selectedCategoryFilter === null ? 'font-bold' : 'font-normal'}`} onClick={handleAllFilter}>
            All 
          </button>
        </div>
        <div className='hidden lg:flex items-center py-3 px-2 bg-amber-100 rounded-lg'>
          <input
            className='border-none outline-none text-sm bg-amber-100 text-slate-500'
            type='text'
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder='Search'
          />
          <BsSearch className='text-slate-600' />
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






























