import ProductsListEditable from "../components/ProductsListEditable"
import { getProductsFromPoint } from "../api/actions"
import { Product } from "../components/ProductsList"

interface VitrinaPageQueryParams {
  point: string
}

const VitrinaPage = async ({
  searchParams,
}: {
  searchParams: Promise<VitrinaPageQueryParams>
}) => {
  const searchQuery: VitrinaPageQueryParams = await searchParams
  const products: Product[] = await getProductsFromPoint(searchQuery.point)
  getProductsFromPoint(searchQuery.point)
  return (
    <div className="m-2 text-lg mx-4">
      <div>Витрина: {searchQuery.point}</div>
      <ProductsListEditable products={products} />
    </div>
  )
}

export default VitrinaPage
