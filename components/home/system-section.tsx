import Link from "next/link"
import { ArrowRight, MessageSquare, Palette, Globe, Video, TrendingUp, Play } from "lucide-react"

const labs = [
  {
    icon: MessageSquare,
    name: "AssetsLab",
    description: "The clarity that positions you as the category leader.",
    href: "/labs/assets",
  },
  {
    icon: Palette,
    name: "BrandLab",
    description: "A premium identity engineered for authority and trust.",
    href: "/labs/brand",
  },
  {
    icon: Globe,
    name: "SiteLab",
    description: "A conversion-first website that removes you from the sales cycle.",
    href: "/labs/site",
  },
  {
    icon: Video,
    name: "VideoSalesLab",
    description: "Your digital sales team — built in one day.",
    href: "/labs/video-sales",
  },
  {
    icon: TrendingUp,
    name: "ExpansionLab",
    description: "Ongoing campaigns that turn your message into momentum.",
    href: "/labs/expansion",
  },
]

export function SystemSection() {
  return (
    <section id="system" className="py-24 bg-background relative overflow-hidden">
      {/* Animated horizontal line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="h2 text-foreground">
            This isn't content. <span className="text-primary">It's a system.</span>
          </h2>
          <p className="mt-6 subheading text-muted-foreground max-w-2xl mx-auto">
            One integrated framework designed to clarify your message, elevate your brand, and install the sales assets
            you need for predictable scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab) => {
            const Icon = lab.icon
            return (
              <Link
                key={lab.name}
                href={lab.href}
                className="group relative p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="h3 text-foreground mb-2">{lab.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{lab.description}</p>
                  <span className="inline-flex items-center text-sm text-primary font-medium gap-1 group-hover:gap-2 transition-all">
                    <Play className="w-4 h-4" />
                    Watch Explainer
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/growth-system" className="btn-secondary">
            Explore the Full System
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
