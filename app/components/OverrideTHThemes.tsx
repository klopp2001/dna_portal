"use client"

import { useEffect } from "react"

export default function ForceLightTheme() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp

      // Обманываем тему
      tg.themeParams = {}
      tg.colorScheme = "light"

      // Цвета Telegram UI (шапка, фон)
      tg.setHeaderColor("#ffffff")
      tg.setBackgroundColor("#ffffff")
    }
  }, [])

  return null
}
