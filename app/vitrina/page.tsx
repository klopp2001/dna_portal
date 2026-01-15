import React from "react"
import ProductsList, { Product } from "../components/ProductsList"
import { getProductsFromPoint } from "../api/actions"

interface VitrinaPageQueryParams {
  point: string
}

const VitrinaPage = async ({ searchParams }) => {
  const searchQuery: VitrinaPageQueryParams = await searchParams
  const products: Product[] = getProductsFromPoint(searchQuery.point)
  getProductsFromPoint(searchQuery.point)
  return (
    <div className="m-2 text-lg">
      <div>Витрина: {searchQuery.point}</div>
      <ProductsList products={products} />
    </div>
  )
}

export default VitrinaPage
