import { useState } from "react"
import { Product } from "../components/ProductsList"

export const useOrderPageContext = () => {
  const [products, setProductsState] = useState<Product[]>()
}
