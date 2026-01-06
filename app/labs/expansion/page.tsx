import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, TrendingUp, Check, BarChart3, Target, Megaphone, Users } from "lucide-react"
import type { Metadata } from "next"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "ExpansionLab",
  description: "Fractional CMO support, campaign management, and growth strategy for scaling founders.",
  openGraph: {
    title: "ExpansionLab | PodLab",
    description: "Fractional CMO support, campaign management, and growth strategy for scaling founders.",
    url: getUrl("/labs/expansion"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "PodLab ExpansionLab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExpansionLab | PodLab",
    description: "Fractional CMO support, campaign management, and growth strategy for scaling founders.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

const services = [
  {
    title: "Fractional CMO Services",
    description: "Get executive-level marketing support tailored to your needs.",
    icon: BarChart3,
  },
  {
    title: "Campaign Management",
    description: "Efficiently manage and execute your marketing campaigns.",
    icon: Target,
  },
  {
    title: "Growth Strategy",
    description: "Develop a comprehensive growth strategy to expand your business.",
    icon: Megaphone,
  },
  {
    title: "User Acquisition",
    description: "Increase your user base with targeted marketing initiatives.",
    icon: Users,
  },
]

const includes = [
  "Unlimited campaign management",
  "Custom growth strategy development",
  "Executive-level marketing support",
  "24/7 access to our team",
]

export default function ExpansionLabPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-background">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left - Text Content */}
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">ExpansionLab</p>
              <h1 className="h1 text-foreground">
                <span className="text-primary">Scale</span> what's working.
              </h1>
              <p className="mt-6 subheading text-muted-foreground">
                You've built the foundation. Now it's time to pour fuel on the fire. ExpansionLab provides fractional CMO
                services, campaign management, and growth strategy for founders ready to scale aggressively.
              </p>
              <div className="mt-8">
                <a
                  href="https://calendly.com/podlablv/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Scale Your Growth
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right - YouTube Video */}
            <div className="lg:col-span-5 relative lg:mt-16">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/eY8SlCC6q9k"
                    title="ExpansionLab Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="h2 text-foreground">Executive-level marketing support</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="p-8 bg-background rounded-2xl border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="h3 text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-card rounded-2xl border border-primary text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Monthly Retainer
            </div>
            <h3 className="h3 text-foreground">ExpansionLab</h3>
            <p className="text-4xl font-bold text-primary mt-4">$5,000+</p>
            <p className="text-sm text-muted-foreground">/month</p>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Fractional CMO services and campaign management. Pricing scales with your ad spend and needs.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto">
              {includes.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Schedule a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 text-foreground text-balance">Ready to scale?</h2>
          <p className="mt-6 subheading text-muted-foreground max-w-2xl mx-auto">
            Let's talk about your growth goals and build a plan to get there.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Scale Your Growth
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
