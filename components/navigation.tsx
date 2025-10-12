"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Competitive", href: "#competitive" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center space-x-2 text-xl font-semibold text-foreground">
    <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
    <span>
      Hajar<span className="text-primary">Tech</span> Portfolio
    </span>
  </div>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className={`text-sm transition-all duration-300 hover:scale-105 ${
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
