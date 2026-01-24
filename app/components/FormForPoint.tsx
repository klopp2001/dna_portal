"use client"
import React from "react"

import { IoIosRefresh } from "react-icons/io"
import { Product } from "./ProductsList"

interface FormForPointProps {
  defaultPoint: string
  defaultDate: string
  allPoints?: String[]
  shopToProducts?: Map<String, Product[]>
}
const FormForPoint = ({
  defaultPoint,
  defaultDate,
  allPoints,
}: FormForPointProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const point = (form.elements.namedItem("point") as HTMLInputElement).value
    const date = (form.elements.namedItem("date") as HTMLInputElement).value
    window.location.href = `orders?point=${point}&date=${date}`
  }
  const maxDate = new Date()
  maxDate.setDate(maxDate.getDate() + 2)
  return (
    <div className="flex sticky top-0 w-full text-xs flex-col">
      <form
        className="flex flex-row  justify-between border-gray-600 border-b-[1px] p-1.5 w-full bg-white"
        onSubmit={handleSubmit}
      >
        <select
          className="border-[1px] rounded-md border-gray-600"
          defaultValue={defaultPoint}
          name="point"
        >
          {/* <option value="">Точка</option>
          <option value="ЦЕХ">Цех</option>
          <option value="Китчен">Китчен</option>
          <option value="Touche">Touche</option> */}

          <option value="all">Общее</option>
        </select>

        <label>
          <input
            className="border-[1px] rounded-md border-gray-600 w-[110px]"
            type="date"
            name="date"
            defaultValue={defaultDate}
            max={maxDate.toISOString().substring(0, 10)}
          />
        </label>
        <button
          className="border-[1px] rounded-md border-gray-600 px-2"
          type="submit"
        >
          <IoIosRefresh />
        </button>
      </form>
    </div>
  )
}

export default FormForPoint
