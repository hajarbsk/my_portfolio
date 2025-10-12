"use client"

import { useEffect, useRef } from "react"

export function StarryBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create stars
    const createStars = () => {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div")
        star.className = "star"
        star.style.left = Math.random() * 100 + "%"
        star.style.top = Math.random() * 100 + "%"
        star.style.width = Math.random() * 3 + 1 + "px"
        star.style.height = star.style.width
        star.style.animationDelay = Math.random() * 3 + "s"
        star.style.animationDuration = Math.random() * 3 + 2 + "s"
        container.appendChild(star)
      }
    }

    // Create shooting stars
    const createShootingStars = () => {
      const shootingStar = document.createElement("div")
      shootingStar.className = "shooting-star"
      shootingStar.style.left = Math.random() * 100 + "%"
      shootingStar.style.top = Math.random() * 50 + "%"
      shootingStar.style.width = "100px"
      shootingStar.style.height = "2px"
      shootingStar.style.background = "linear-gradient(90deg, #fff, transparent)"
      shootingStar.style.animation = "shooting-star 3s linear forwards"

      container.appendChild(shootingStar)

      setTimeout(() => {
        if (container.contains(shootingStar)) {
          container.removeChild(shootingStar)
        }
      }, 3000)
    }

    createStars()

    // Create shooting stars periodically
    const shootingStarInterval = setInterval(createShootingStars, 4000)

    return () => {
      clearInterval(shootingStarInterval)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 1) 100%)",
      }}
    />
  )
}
