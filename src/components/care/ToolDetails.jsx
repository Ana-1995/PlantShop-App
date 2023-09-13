import React, { useEffect, useRef} from 'react'
import { careToolsData } from '../../constants/data'
import { useParams } from 'react-router-dom'
import Footer from '../footer/Footer'
import { useCart } from '../../global/cartContexts/CartContext'
import MainToolsSection from './MainToolsSection'
import SimilarTools from './SimilarTools'
import { Delivery } from '../../global'
 

const ToolDetails = ({tools}) => {
    const scrollRef = useRef()
const {addToCart} = useCart()
const { toolId } = useParams()

useEffect(() => {
  window.scrollTo(0, 0) 
}, [])

const product = tools.find((item) => item.id === parseInt(toolId))
  if (!product) {
    return <div>Product not found.</div>
   }

 return (
   <>
     <MainToolsSection 
     product={product} 
     
     scrollRef={scrollRef}
     addToCart={addToCart}
      />

     {/* also like */}
    <SimilarTools products={careToolsData} selectedProductId={product.category} />
     <Delivery />
     <Footer />
   </>
 )

}

export default ToolDetails
