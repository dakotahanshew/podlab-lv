"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fade-up", delay = 0 }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const animationClasses = {
    "fade-up": "animate-on-scroll",
    "slide-left": "slide-in-left",
    "slide-right": "slide-in-right",
    scale: "scale-in",
  }

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}
