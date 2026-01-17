"use client"
import React, { useCallback, useState } from "react"
import ProductRowEditable from "./ProductRowEditable"
import CommentModal from "./CommentModal"
import { useLockBodyScroll } from "../hooks/hooks"
import ProductRow from "./ProductRow"

export type Product = {
  name: string
  quantity: number
}

interface ProductListProps {
  products: Product[]
}

const ProductsList = ({ products }: ProductListProps) => {
  const [productsState, setProductsState] = useState<Product[]>(products)
  const [commentModalState, setCommentModalState] = useState(false)
  useLockBodyScroll(commentModalState)

  return (
    <div className="flex flex-col gap-2 my-4">
      {productsState.map((product) => (
        <ProductRow name={product.name} count={product.quantity} />
      ))}
    </div>
  )
}

export default ProductsList
