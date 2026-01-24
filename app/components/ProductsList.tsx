"use client"
import React, { useCallback, useEffect, useState } from "react"
import ProductRowEditable from "./ProductRowEditable"
import CommentModal from "./CommentModal"
import { useLockBodyScroll } from "../hooks/hooks"
import ProductRow from "./ProductRow"
import clsx from "clsx"

export type Product = {
  name: string
  quantity: number
  shopName?: string
}

interface ProductListProps {
  products: Product[]
  shopToProducts?: Map<String, Product[]>
  shopNames?: String[]
  all?: boolean
}

const ProductsList = ({ products, all, shopNames }: ProductListProps) => {
  const [initProducts, setInitProducts] = useState<Product[]>(products)

  const [productsState, setProductsState] = useState<Product[]>(products)
  const [commentModalState, setCommentModalState] = useState(false)

  const [currentPoint, setCurrentPoint] = useState<String>("all")
  const [allProduct, setAllProduct] = useState<Product[]>()
  // if (all) {
  //   setCurrentPoint("all")
  // }

  useLockBodyScroll(commentModalState)
  useEffect(() => {
    // console.log("cur point " + currentPoint)
    // if (shopNames && currentPoint != "all") {
    //   console.log("OPA")
    //   setCurrentPoint("all")
    // }
    if (currentPoint == "all") {
      console.log("effect")
      const newProducts: Map<String, Product> = new Map()
      const iinitProducts = [...initProducts]
      if (!allProduct) {
        for (const product of iinitProducts) {
          const lastPr = newProducts.get(product.name)
          if (lastPr) {
            lastPr.quantity += product.quantity
            newProducts.set(product.name, lastPr)
          } else {
            const newProd = { ...product }
            newProducts.set(product.name, newProd)
          }
        }
      }

      setProductsState([...newProducts.values()])
    } else {
      setProductsState(
        products.filter((product) => product.shopName == currentPoint)
      )
    }
  }, [currentPoint])
  return (
    <div className="flex flex-col gap-2 my-4">
      <div className="">
        <div className="py-2 flex flex-row justify-center gap-2 font-bold  flex-wrap bg-white z-50">
          {shopNames && (
            <div
              onClick={() => setCurrentPoint("all")}
              className={clsx("all" == currentPoint && "text-gray-400")}
            >
              Общее
            </div>
          )}
          {/* <div>Общее</div>
          <div className="text-gray-400">ЦЕХ</div> */}
          {shopNames &&
            shopNames.map((name) => (
              <div
                onClick={() => setCurrentPoint(name)}
                className={clsx(name == currentPoint && "text-gray-400")}
              >
                {name}
              </div>
            ))}
        </div>
      </div>
      {productsState.map((product) => (
        <ProductRow name={product.name} count={product.quantity} />
      ))}
    </div>
  )
}

export default ProductsList
