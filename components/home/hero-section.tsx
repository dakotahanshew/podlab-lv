"use client"

import type React from "react"
import dynamic from "next/dynamic"
import { useCallback, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const DotShaderBackground = dynamic(
  () => import("@/components/ui/dot-shader-background").then((mod) => ({ default: mod.DotShaderBackground })),
  { ssr: false },
)

let setMousePositionFn: ((x: number, y: number) => void) | null = null

export function HeroSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    import("@/components/ui/dot-shader-background").then((mod) => {
      setMousePositionFn = mod.setMousePosition
    })
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!setMousePositionFn) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = 1 - (e.clientY - rect.top) / rect.height // Flip Y for WebGL coords
    setMousePositionFn(x, y)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 pointer-events-none">{isClient && <DotShaderBackground />}</div>

      {/* Green glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 pointer-events-auto">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="text-primary text-sm font-medium">Trusted by Founders Generating $1M–$8M+</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="h1 text-foreground">
            Record Once. <span className="text-primary text-glow-green">Sell Forever.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="mt-8 subheading text-muted-foreground max-w-2xl mx-auto">
            We build content systems that duplicate your best sales moves — so your business scales without you doing
            more.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://calendly.com/podlablv/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Book A Call
              <ArrowRight className="h-5 w-5" />
            </motion.a>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link href="#system" className="btn-secondary">
                How the System Works
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}

