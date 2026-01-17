import React from "react"
import FormForPoint from "../components/FormForPoint"
import ProductsListEditable, {
  Product,
} from "../components/ProductsListEditable"
import { getProductsFromPointAndDate } from "../api/actions"
import ProductsList from "../components/ProductsList"

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
  if (search.point && search.date) {
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
      <ProductsList products={products} />
    </div>
  )
}

export default OrdersPage
