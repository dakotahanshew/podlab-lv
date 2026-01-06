import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"
import { getUrl } from "@/lib/metadata"
import {
  ArrowRight,
  Video,
  Layers,
  Scissors,
  Palette,
  Globe,
  PlayCircle,
  TrendingUp,
  CheckCircle,
  Zap,
  Users,
  Target,
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description:
    "From studio time to full-stack marketing systems. PodLab gives founders the tools, structure, and execution needed to grow with clarity and authority.",
  openGraph: {
    title: "PodLab Services",
    description: "Studio time, unlimited editing, and the complete Business Growth System for $1M-$8M founders.",
    url: getUrl("/services"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "PodLab Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PodLab Services",
    description: "Studio time, unlimited editing, and the complete Business Growth System for $1M-$8M founders.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

const serviceCards = [
  {
    icon: Video,
    name: "Studio Time",
    description:
      "Cinematic content captured in a $150K founder-optimized studio. Multiple scenes. 4K cameras. Pro audio. Real-time direction.",
    tagline: "Record once. Repurpose forever.",
    href: "/studio",
    cta: "Explore Studio Time",
  },
  {
    icon: Layers,
    name: "Business Growth System",
    description:
      "The complete brand-to-scale system for $1M–$8M founders. Five Labs that install clarity, authority, sales assets, a conversion-engineered website, and monthly marketing momentum.",
    tagline: "",
    href: "/growth-system",
    cta: "See the Growth System",
  },
  {
    icon: Scissors,
    name: "Unlimited Editing",
    description:
      "Your always-on editing and content engine. Drop footage → Get polished, on-brand videos weekly. Zero back-and-forth. Zero chaos.",
    tagline: "",
    href: "/editing",
    cta: "View Editing Plans",
  },
]

const labs = [
  {
    icon: Target,
    name: "AssetsLab",
    tagline: "Brand Clarity & Avatar Precision",
    description: "Your avatar, messaging system, and content angles. This becomes the foundation for everything.",
  },
  {
    icon: Palette,
    name: "BrandLab",
    tagline: "Visual Identity That Commands Respect",
    description:
      "Your brand identity, typography, colors, visual rules, and full identity system. Premium, sharp, unforgettable.",
  },
  {
    icon: Globe,
    name: "SiteLab",
    tagline: "Your Conversion-Engineered Website",
    description:
      "A website that sells for you: Strategic wireframes, clear messaging, premium UI, and founder-free sales infrastructure.",
  },
  {
    icon: PlayCircle,
    name: "VideoSalesLab",
    tagline: "Your Digital Sales System",
    description:
      "Five strategic videos: Authority, Origin, Offer, Objections, Social Proof. Prospects now arrive pre-educated and pre-sold.",
  },
  {
    icon: TrendingUp,
    name: "ExpansionLab",
    tagline: "Consistency That Compounds",
    description:
      "Your fractional CMO + marketing team: Weekly posting, campaigns, reporting, optimization, and momentum that builds month after month.",
  },
]

const whyPodlab = [
  {
    icon: Zap,
    title: "High-Performance Environment",
    description: "Designed for clarity, execution, and authority.",
  },
  {
    icon: Target,
    title: "Founder-Optimized Systems",
    description: "Built to create leverage at every stage.",
  },
  {
    icon: Sparkles,
    title: "Strategic + Creative Expertise",
    description: "Not just content… content that converts.",
  },
  {
    icon: Users,
    title: "Consistency That Scales",
    description: "From one-day assets to long-term weekly execution.",
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Navigation />

      {/* SECTION 01 — HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/professional-podcast-recording-studio-dark-cinemat.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="h1 text-foreground text-balance">
            Services Engineered to Scale Your Brand <span className="text-primary">and Your Revenue</span>
          </h1>
          <p className="mt-6 body-text text-muted-foreground max-w-2xl mx-auto">
            From one-day asset creation to full-stack marketing systems — PodLab gives founders the tools, structure,
            and execution needed to grow with clarity and authority.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Book My 15-Minute Call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#services" className="btn-secondary">
              See Our Packages
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 02 — SERVICE MENU (3-CARD GRID) */}
      <section id="services" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCards.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.name}
                  className="group p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="h3 text-foreground mb-3">{service.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">{service.description}</p>
                  {service.tagline && <p className="text-primary text-sm font-medium mb-6">{service.tagline}</p>}
                  <Link
                    href={service.href}
                    className="btn-secondary w-full text-center inline-flex items-center justify-center gap-2"
                  >
                    {service.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03 — STUDIO TIME DEEP DIVE */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl" />
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
                <img
                  src="/professional-podcast-recording-studio-dark-cinemat.jpg"
                  alt="PodLab Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="h2 text-foreground">
                Studio Time: Capture Content That Makes You Look <span className="text-primary">Untouchable</span>
              </h2>
              <p className="mt-6 body-text text-muted-foreground">
                Most studios rent you space. PodLab gives you an advantage.
              </p>
              <p className="mt-4 body-text text-muted-foreground">
                Record inside a fully-controlled, cinematic environment designed for founders who take their brand
                seriously.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Three Sony FX30 4K cameras",
                  "Cinematic lighting optimized for authority",
                  "Broadcast-quality audio",
                  "Multiple scenes: Big Boss, Speakeasy, Lounge, Professor",
                  "Real-time creative direction",
                  "Founder-optimized framing",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {["VSLs", "Short-form sprints", "Testimonials", "Website videos", "Brand assets"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/studio" className="btn-primary inline-flex items-center gap-2">
                  Book Studio Time
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — BUSINESS GROWTH SYSTEM DEEP DIVE */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="h2 text-foreground">
              The Business <span className="text-primary">Growth System</span> by PodLab
            </h2>
            <p className="mt-6 body-text text-muted-foreground max-w-2xl mx-auto">
              Five Labs. One outcome: a brand that scales without you.
            </p>
          </div>

          <div className="space-y-4">
            {labs.map((lab, index) => {
              const Icon = lab.icon
              return (
                <div
                  key={lab.name}
                  className="group p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-sm font-mono text-muted-foreground">0{index + 1}</span>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="h3 text-foreground">{lab.name}</h3>
                        <span className="text-primary text-sm font-medium">— {lab.tagline}</span>
                      </div>
                      <p className="body-text text-muted-foreground">{lab.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/growth-system" className="btn-primary inline-flex items-center gap-2">
              See Full Growth System
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 05 — UNLIMITED EDITING DEEP DIVE */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Scissors className="w-10 h-10 text-primary" />
          </div>

          <h2 className="h2 text-foreground">
            Unlimited Editing <span className="text-primary">by PodLab</span>
          </h2>
          <p className="mt-6 body-text text-muted-foreground max-w-2xl mx-auto">
            Your content engine — built for founders who need consistent output without overwhelm.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">You Get</h4>
              {["Unlimited submissions", "Weekly polished edits", "Branded templates & captions"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Plus</h4>
              {["Multi-format exports", "Fast turnaround", "Organized portal → no chaos"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-lg font-medium text-foreground">Stop editing. Start scaling your visibility.</p>

          <div className="mt-8">
            <Link href="/editing" className="btn-primary inline-flex items-center gap-2">
              See Editing Plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 06 — WHY PODLAB */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="h2 text-foreground text-center mb-16">
            Why Founders Choose <span className="text-primary">PodLab</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPodlab.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 07 — FINAL CTA */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 text-foreground text-balance">
            Ready to Build a Brand That <span className="text-primary">Scales Without You?</span>
          </h2>
          <p className="mt-6 body-text text-muted-foreground max-w-2xl mx-auto">
            Choose a service or talk through the right pathway for your stage of growth.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Book My 15-Minute Call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/growth-system" className="btn-secondary">
              Explore the Growth System
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
