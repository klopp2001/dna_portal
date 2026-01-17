"use client"
import React from "react"
interface FormForPointProps {
  defaultPoint: string
  defaultDate: string
}
const FormForPoint = ({ defaultPoint, defaultDate }: FormForPointProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("HELLO WORLD")
    const form = event.target as HTMLFormElement
    const point = (form.elements.namedItem("point") as HTMLInputElement).value
    const date = (form.elements.namedItem("date") as HTMLInputElement).value
    window.location.href = `orders?point=${point}&date=${date}`
    // console.log(event.target.username.value)
    // console.log(this.inputNode.value)
  }
  const maxDate = new Date()
  maxDate.setDate(maxDate.getDate() + 2)
  return (
    <div className="flex justify-center w-full">
      <form onSubmit={handleSubmit}>
        <select defaultValue={defaultPoint} name="point">
          <option value="">Выберете точку</option>
          <option value="ЦЕХ">Цех</option>
          <option value="Китчен">Китчен</option>
          <option value="Touche">Touche</option>
        </select>

        <label>
          Выберете день:
          <input
            type="date"
            name="date"
            defaultValue={defaultDate}
            max={maxDate.toISOString().substring(0, 10)}
          />
        </label>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  )
}

export default FormForPoint
