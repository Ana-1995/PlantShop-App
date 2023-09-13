'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { plantsData } from '../../constants/data'
import HeaderSection from './HeaderSection'
import RelatedProductsSection from './RelatedProductsSection'
import { Footer } from '../../components'
import { useCart } from '../cartContexts/CartContext'
import Delivery from '../MostUsed/Delivery'

const ProductDetails = ({ products }) => {
  const { addToCart } = useCart()
  const { productId } = useParams()
  const [selectedPhoto, setSelectedPhoto] = useState('')
  const scrollRef = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const product = products.find((item) => item.id === parseInt(productId))
  if (!product) {
    return <div>Product not found.</div>
  }

  return (
    <>
      {/* Header Section */}
      <HeaderSection
        product={product}
        setSelectedPhoto={setSelectedPhoto}
        scrollRef={scrollRef}
        addToCart={addToCart}
      />

      {/* Related Products Section */}
      <RelatedProductsSection
        products={plantsData}
        selectedProductId={product.color}
      />

      {/* Delivery and Footer Sections */}
      <Delivery />
      <Footer />
    </>
  )
}

export default ProductDetails

