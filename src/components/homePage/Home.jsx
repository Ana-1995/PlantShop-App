
import { Advert, Delivery } from '../../global'
import Footer from '../footer/Footer'
import AboutUs from './AboutUs'
import BestSellers from './BestSellers'
import CareIntro from './CareIntro'
import Discounted from './Discounted'
import MainHome from './MainHome'
import Reviews from './Reviews'
import Video from './Video'

const Home = () => {
  return ( 
    <>
      <section className=''>
       <MainHome />
        <Advert />
        <AboutUs />
        <Video />
        <Discounted />
        <BestSellers />
        <CareIntro />
        <Reviews />
        <Delivery />
        <Footer />
      </section>
    </>
  )
}

export default Home
