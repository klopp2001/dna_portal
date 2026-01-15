"use client"
import React, { useRef } from "react"

interface CommentModalProps {
  setComent: (text: string | null) => void
}

const CommentModal = ({ setComent: setComment }: CommentModalProps) => {
  const textareaRef = useRef(null)
  return (
    <div className="fixed inset-0 w-full h-full z-50 ">
      <div className="w-full h-full bg-gray-400 opacity-45"></div>
      <div className="absolute top-1/12 px-4 left-14 bg-white ">
        <p>Введите свой комментарий:</p>
        <textarea className="h-80 w-full my-2" ref={textareaRef}></textarea>
        <button onClick={() => setComment(textareaRef.current.value)}>
          Отправить
        </button>
      </div>
    </div>
  )
}

export default CommentModal
