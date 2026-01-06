import Link from "next/link"
import { ArrowRight, Shield, Layers, Award } from "lucide-react"

const pillars = [
  {
    icon: Shield,
    title: "Discipline",
    description: "Military-grade precision meets brand and marketing strategy.",
  },
  {
    icon: Layers,
    title: "Systems",
    description: "One recording. Five strategic assets. Zero guesswork.",
  },
  {
    icon: Award,
    title: "Authority",
    description: "We engineer trust at scale — with assets backed by data, not theory.",
  },
]

export function WhyPodlabSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="h2 text-foreground">
              The team you call when you're ready to scale <span className="text-primary">for real.</span>
            </h2>
            <p className="mt-6 subheading text-muted-foreground">
              PodLab wasn't built for beginners. It was built for founders who already have traction — but need the
              systems, clarity, and infrastructure to reach the next level without burning out.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Book the 15-Minute Call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div key={pillar.title} className="flex gap-5 p-6 bg-background rounded-xl border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="h3 text-foreground mb-1">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
