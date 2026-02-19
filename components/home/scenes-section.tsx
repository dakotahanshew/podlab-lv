"use client"

import Image from "next/image"
import { useState } from "react"

const scenes = [
  {
    name: "The Rome",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Rome.JPG-rBmBHcJvDtzHDPDW2zynRjEOj9Tel5.jpeg",
    description: "Elegant & refined with soft ambient lighting",
  },
  {
    name: "The Speakeasy",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Speakeasy.JPG-MchSTP0Ray7En5N5nTDGMotQdxH7v1.jpeg",
    description: "Vintage luxury with dark leather and gold accents",
  },
  {
    name: "The Big Boss",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Big%20Boss.JPG-y5yVPapnvDBYiEnLa7WeFgt3IPQT6A.jpeg",
    description: "Bold executive desk setup with custom woodwork",
  },
  {
    name: "The Lounge",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Lounge.JPG-ICEiw2ijJsBwXo3Ca9jtvhzZikrXJ5.jpeg",
    description: "Relaxed conversation space with modern design",
  },
  {
    name: "The Mirrah",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Mirrah.JPG-msNA5M83MW7dhoAgRdn9ERbvNnLbSC.jpeg",
    description: "Intimate setting with natural elements and soft tones",
  },
  {
    name: "The Professor",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Professor.JPG-DUOJ9QcYP1iQwb8VuX8kNP1ykBcOIF.jpeg",
    description: "Clean and minimal with a whiteboard-ready workspace",
  },
  {
    name: "The Lobby",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/54AF0CD2-5F67-48D5-BEB6-5080526A0124-nwC6zaaxnzIOfXpX5LRDtuGhpy9lsx.png",
    description: "Stylish entryway with acoustic panels and LED accents",
  },
  {
    name: "The Green Room",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4876.JPG-wQvkMe0mQhE6UIyaFqMq5m8cnnApz5.jpeg",
    description: "Prep space with wardrobe area and comfortable seating",
  },
]

export function ScenesSection() {
  const [activeScene, setActiveScene] = useState(0)

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Our Scenes</p>
          <h2 className="h2 text-foreground text-balance">
            Eight unique sets. <span className="text-primary">One studio.</span>
          </h2>
          <p className="mt-4 subheading text-muted-foreground max-w-2xl mx-auto">
            Every scene is designed to match the energy your brand demands. Walk in,
            pick your set, and start recording.
          </p>
        </div>

        {/* Featured scene preview */}
        <div className="mb-12">
          <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border group">
            <Image
              src={scenes[activeScene].image}
              alt={`${scenes[activeScene].name} - PodLab studio scene`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 896px"
              priority={activeScene === 0}
            />
            {/* Overlay with scene name */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h3 className="h3 text-foreground">{scenes[activeScene].name}</h3>
              <p className="text-muted-foreground mt-1">{scenes[activeScene].description}</p>
            </div>
          </div>
        </div>

        {/* Scene thumbnail grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {scenes.map((scene, index) => (
            <button
              key={scene.name}
              onClick={() => setActiveScene(index)}
              className={`group relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                activeScene === index
                  ? "border-primary glow-green"
                  : "border-border hover:border-primary/50"
              }`}
              aria-label={`View ${scene.name}`}
            >
              <Image
                src={scene.image}
                alt={scene.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
              />
              <div
                className={`absolute inset-0 transition-colors duration-300 ${
                  activeScene === index
                    ? "bg-primary/10"
                    : "bg-background/40 group-hover:bg-background/20"
                }`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <p
                  className={`text-xs font-medium text-center transition-colors duration-300 ${
                    activeScene === index ? "text-primary" : "text-foreground"
                  }`}
                >
                  {scene.name}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
