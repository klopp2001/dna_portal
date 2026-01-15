"use client"

interface ProductRowProps {
  name: string
  count: number
  onDecrease: () => void
  onIncrease: () => void
}

const ProductRow = ({
  name,
  count,
  onDecrease,
  onIncrease,
}: ProductRowProps) => {
  return (
    <div className="flex flex-row justify-between items-center odd:bg-gray-100">
      <div className="max-w-2/3">{name}</div>
      <div className="flex flex-row gap-2">
        <button
          className="bg-green-500 text-white font-bold  px-2 rounded-full"
          onClick={onIncrease}
        >
          +
        </button>
        <div>{count}</div>
        <button
          className="bg-red-500 text-white font-bold  px-2 rounded-full"
          onClick={onDecrease}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default ProductRow
