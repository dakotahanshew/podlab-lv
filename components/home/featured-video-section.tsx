"use client"

import { CheckCircle } from "lucide-react"
import { YouTubeEmbed } from "@/components/ui/youtube-embed"
import { AnimatedSection } from "@/components/ui/animated-section"

const points = ["Duplicate your best sales moves", "Build trust at speed", "Scale without adding workload"]

export function FeaturedVideoSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="h2 text-foreground">How the PodLab System Works</h2>
          <p className="mt-4 subheading text-muted-foreground max-w-2xl mx-auto">
            A strategic framework designed to remove you from day-to-day selling and create leverage in every part of
            your business.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={200}>
          <YouTubeEmbed videoId="6PlJWXvzrBY" title="How the PodLab System Works" />
        </AnimatedSection>

        {/* Bullet points */}
        <AnimatedSection
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
          delay={400}
        >
          {points.map((point) => (
            <div key={point} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">{point}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
