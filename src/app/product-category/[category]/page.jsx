"use client"
import Banner2 from '@/components/Banner2'
import ProductsSection from '@/components/ProductGrid'
import { useParams } from 'next/navigation';
import React from 'react'

const ProductCategory = () => {
    const { category } = useParams();
  return (
    <div>
      <Banner2 title={category} />
      <ProductsSection/>
    </div>
  )
}

export default ProductCategory
