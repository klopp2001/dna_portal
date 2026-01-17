"use client"
import React, { useCallback, useState } from "react"
import ProductRowEditable from "./ProductRowEditable"
import CommentModal from "./CommentModal"
import { useLockBodyScroll } from "../hooks/hooks"

export type Product = {
  name: string
  quantity: number
}

interface ProductListProps {
  products: Product[]
}

const ProductsListEditable = ({ products }: ProductListProps) => {
  const [productsState, setProductsState] = useState<Product[]>(products)
  const [commentModalState, setCommentModalState] = useState(false)
  useLockBodyScroll(commentModalState)
  const increaseProduct = useCallback(
    (name: string) => {
      setProductsState(
        productsState.map((p) =>
          p.name == name ? { ...p, quantity: p.quantity + 1 } : p
        )
      )
    },
    [productsState]
  )

  const decreaseProduct = useCallback(
    (name: string) => {
      setProductsState(
        productsState.map((p) =>
          p.name == name ? { ...p, quantity: Math.max(p.quantity - 1, 0) } : p
        )
      )
    },
    [productsState]
  )

  const handleSubmit = async () => {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "applications/json" },
    })
    const data = await res.json()
    console.log("Response: ", data)
  }

  return (
    <div className="flex flex-col gap-4 my-8">
      {commentModalState && (
        <CommentModal
          setComent={(text) => {
            console.log(text)
            setCommentModalState(false)
          }}
        />
      )}
      {productsState.map((product) => (
        <ProductRowEditable
          name={product.name}
          count={product.quantity}
          onDecrease={() => decreaseProduct(product.name)}
          onIncrease={() => increaseProduct(product.name)}
        />
      ))}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full"
        onClick={() => {
          setCommentModalState(true)
        }}
      >
        Добавить комментарий
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full"
        onClick={handleSubmit}
      >
        Отправить
      </button>
    </div>
  )
}

export default ProductsListEditable
