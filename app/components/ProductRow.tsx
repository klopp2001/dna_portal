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
    <div className="flex flex-row justify-between py-2 px-2 items-center odd:bg-gray-100 even:bg-white">
      <div className="max-w-2/3">{name}</div>
      <div className="flex flex-row gap-2">
        <button
          className="bg-red-500 text-white font-bold  px-4 rounded-2xl"
          onClick={onDecrease}
        >
          -
        </button>

        <div>{count}</div>
        <button
          className="bg-green-500 text-white font-bold  px-4 rounded-2xl"
          onClick={onIncrease}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ProductRow
