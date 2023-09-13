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
  const [category, setCategory] = useState(null)
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
    setCategory(category)
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
            className={`${category === 'pot' ? 'font-bold' : 'font-normal'}`}
            onClick={() => handleCategoryFilter('pot')}
          >
            Pots 
          </button>
          <button
            className={`${category === 'tool' ? 'font-bold' : 'font-normal'}`}
            onClick={() => handleCategoryFilter('tool')}
          >
            Tools 
          </button>
          <button
            className={`${category === 'supply' ? 'font-bold' : 'font-normal'}`}
            onClick={() => handleCategoryFilter('supply')}
          >
            Supplies |
          </button>
          <button className='font-semibold' onClick={handleAllFilter}>
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































// import React, { useState } from 'react'
// // import { data } from '../../constants/data'
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
// import { RxDotFilled } from 'react-icons/rx'
// import { plantsData } from '../../constants/data'

// const PlantsCare = () => {
   
//   const [currentIndex, setCurrentIndex]=useState(0)


//    const prevSlide=()=>{
//     const firstSlide=currentIndex === 0
//     const newIndex=firstSlide ? plantsData.length-1 : currentIndex-1
//     setCurrentIndex(newIndex)
//    }

//       const nextSlide = () => {
//         const lastSlide=currentIndex===plantsData.length-1
//         const newIndex=lastSlide ? 0 : currentIndex+1
//        setCurrentIndex(newIndex)
//       }

//        const goToSlide=(slideI)=>{
//         setCurrentIndex(slideI)
//        } 

//   return (
//     <section
//       className='max-w-[400px] h-[500px] w-full m-auto py-16 px-4 relative group'
//       id='care'
//     >
//       <div
//         style={{ backgroundImage: `url(${plantsData[currentIndex].img})` }}
//         className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
//       ></div>

//       {/* left arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 left-5 text-2xl cursor-pointer text-green-800'>
//         <FaChevronLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* right arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 right-5 text-2xl cursor-pointer text-green-800'>
//         <FaChevronRight onClick={nextSlide} size={30} />
//       </div>
//       {/* dots */}
//       <div className='flex justify-center top-4 py-2'>
//         {data.map((data, i) => (
//           <div
//             key={i}
//             onClick={() => goToSlide(i)}
//             className='cursor-pointer text-3xl text-green-700 '
//           >
//         <RxDotFilled className='text-green-400' data={data} />    
//           </div>
//         ))}
       
//       </div>
//     </section>
//   )

//         }
        
// export default PlantsCare
