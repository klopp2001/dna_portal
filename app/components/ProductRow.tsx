"use client"

interface ProductRowProps {
  name: string
  count: number
}

const ProductRow = ({ name, count }: ProductRowProps) => {
  return (
    <div className="flex flex-row justify-between py-2 px-2 items-center odd:bg-[#eeeeee] even:bg-[#ffffff]">
      <div className="max-w-2/3">{name}</div>
      <div className="flex flex-row gap-2">
        <div>{count}</div>
      </div>
    </div>
  )
}

export default ProductRow
