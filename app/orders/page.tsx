import React from "react"
import FormForPoint from "../components/FormForPoint"
import ProductsListEditable from "../components/ProductsListEditable"

import {
  getAllProductsForDate,
  getAllShopNamesForDate,
  getProductsFromPointAndDate,
} from "../api/actions"
import ProductsList, { Product } from "../components/ProductsList"

interface OrdersPageQueryParams {
  point: string
  date: string
}

const OrdersPage = async ({
  searchParams,
}: {
  searchParams: Promise<OrdersPageQueryParams>
}) => {
  const search = await searchParams
  console.log(search)
  let products: Product[] = []
  let shopPoints: String[] = []

  let shopToProducts: Map<String, Product[]> = new Map()

  if (search.point == "all" && search.date) {
    products = await getAllProductsForDate(search.date)
    const shopNamesSet = new Set<String>()

    for (const product of products) {
      if (product.shopName) {
        shopNamesSet.add(product.shopName)
      }
    }
    shopPoints = [...shopNamesSet.values()]
    for (let point of shopPoints) {
      shopToProducts.set(point, await getAllProductsForDate(search.date))
    }
  } else if (search.point && search.date) {
    products = await getProductsFromPointAndDate(search.point, search.date)
    console.log(products)
  }

  return (
    <div>
      {search.point && search.date ? (
        <FormForPoint defaultDate={search.date} defaultPoint={search.point} />
      ) : (
        <FormForPoint defaultDate="" defaultPoint="" />
      )}

      <h1>{search.point ? search.point : "Выберите точку"}</h1>

      {search.point == "all" ? (
        <ProductsList products={products} all={true} shopNames={shopPoints} />
      ) : (
        <ProductsList products={products} />
      )}
    </div>
  )
}

export default OrdersPage
