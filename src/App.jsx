import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Headroom from 'react-headroom'
import { Banner, Cart, CookieBanner, Login, PlantDetails, SignUp} from './global'
import {
  Contact,
  Gifts,
  Home,
  Indoor,
  MainNav,
  MobileNav,
  Outdoor,
  PetFriendly,
  PlantsCare,
  Stores,
  Workshops,
} from './components'
import { careToolsData, plantsData } from './constants/data'
import ToolDetails from './components/care/ToolDetails'
import PlantGuide from './components/care/PlantGuide'
import { CartProvider } from './global/cartContexts/CartContext'

const FullData = plantsData
const ToolsData = careToolsData
const hasSeenCookieBanner = localStorage.getItem('cookieBannerShown')

const App = () => {
  return (
    <CartProvider>
      <div className='App'>
        <Router>
          <Banner />
          <Headroom
            className='headRoom'
            style={{
              WebkitTransition: 'all .5s ease-in-out',
              MozTransition: 'all .5s ease-in-out',
              OTransition: 'all .5s ease-in-out',
              transition: 'all .5s ease-in-out',
            }}
          >
            <MainNav />
            
          </Headroom>
          <MobileNav />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/stores' element={<Stores />} />
            <Route
              path='/products/:productId'
              element={<PlantDetails products={FullData} />}
            />

            <Route path='/plantscare' element={<PlantsCare />} />
            <Route
              path='/tools/:toolId'
              element={<ToolDetails tools={ToolsData} />}
            />
            <Route path='/gifts' element={<Gifts />} />
            <Route path='/workshops' element={<Workshops />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/indoor' element={<Indoor />} />
            <Route path='/outdoor' element={<Outdoor />} />
            <Route path='/petfriendly' element={<PetFriendly />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/plantguide' element={<PlantGuide />} />
            <Route path='/cart' element={<Cart />} />

            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Routes>

          {!hasSeenCookieBanner && <CookieBanner />}
        </Router>
      </div>
    </CartProvider>
  )
}
export default App
