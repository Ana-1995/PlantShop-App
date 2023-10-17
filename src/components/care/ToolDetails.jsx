import React, { useEffect, useRef, useState} from 'react'
import { careToolsData } from '../../constants/data'
import { useParams } from 'react-router-dom'
import Footer from '../footer/Footer'
import { useCart } from '../../global/cartContexts/CartContext'
import MainToolsSection from './MainToolsSection'
import SimilarTools from './SimilarTools'
import { Delivery } from '../../global'
 

const ToolDetails = ({tools}) => {
  const scrollRef = useRef()
  const { addToCart } = useCart()
  const { toolId } = useParams()
  const [selectedProduct, setSelectedProduct] = useState(null)

 useEffect(() => {
   window.scrollTo(0, 0)

   const product = tools.find((item) => item.id === parseInt(toolId))
   setSelectedProduct(product)
 }, [toolId, tools])

 if (!selectedProduct) {
   return <div>Product not found.</div>
 }

 return (
   <>
     <MainToolsSection
       product={selectedProduct}
       scrollRef={scrollRef}
       addToCart={addToCart}
     />

     {/* also like */}
     <SimilarTools
       products={careToolsData}
       selectedProduct={selectedProduct}
       selectedProductId={selectedProduct.category}
     />
     <Delivery />
     <Footer />
   </>
 )

}

export default ToolDetails
