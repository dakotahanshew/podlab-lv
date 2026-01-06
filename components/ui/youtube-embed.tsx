"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface YouTubeEmbedProps {
  videoId: string
  title?: string
  thumbnail?: string
}

export function YouTubeEmbed({ videoId, title = "Video", thumbnail }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  if (isPlaying) {
    return (
      <div className="aspect-video rounded-2xl overflow-hidden border border-border">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    )
  }

  return (
    <div
      className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card group cursor-pointer"
      onClick={() => setIsPlaying(true)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
      <img
        src={thumbnailUrl || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center glow-green group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
        </div>
      </div>
    </div>
  )
}
