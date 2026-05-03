"use client"

import { useState, useEffect } from "react"

export function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 right-0 left-0 z-50 md:hidden px-4 py-3 bg-background border-t border-border shadow-lg">
      <button
        onClick={handleClick}
        className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-2xl text-base whitespace-nowrap active:scale-95 transition-transform"
      >
        إشتري الآن - الدفع عند الإستلام
      </button>
    </div>
  )
}
