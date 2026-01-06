import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, MessageSquare, Palette, Globe, PlayCircle, TrendingUp, CheckCircle2 } from "lucide-react"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Business Growth System",
  description:
    "The complete brand-to-scale system for $1M–$8M founders. Five Labs that install clarity, authority, sales assets, and marketing momentum.",
  openGraph: {
    title: "Business Growth System | PodLab",
    description:
      "Five interconnected Labs that transform founders into industry authorities. Record once. Sell forever.",
    url: getUrl("/growth-system"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "PodLab Growth System" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Growth System | PodLab",
    description: "Five interconnected Labs that transform founders into industry authorities. Record once. Sell forever.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

const labs = [
  {
    number: "01",
    icon: MessageSquare,
    name: "AssetsLab",
    tagline: "Foundation",
    description:
      "Establish the strategic foundation before any content is created. Messaging architecture, avatar development, offer engineering, and positioning strategy.",
    deliverables: ["Messaging Playbook", "Avatar Profiles", "Offer Stack", "Positioning Statement"],
    href: "/labs/assets",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    number: "02",
    icon: Palette,
    name: "BrandLab",
    tagline: "Identity",
    description:
      "Translate your strategic foundation into a visual system that commands attention. Premium positioning requires premium presentation.",
    deliverables: ["Visual Identity", "Logo System", "Brand Guidelines", "Asset Library"],
    href: "/labs/brand",
    color: "from-emerald-500/15 to-emerald-500/5",
  },
  {
    number: "03",
    icon: Globe,
    name: "SiteLab",
    tagline: "Conversion",
    description:
      "Build a mobile-first digital home that converts visitors into leads and clients. Your website is your 24/7 salesperson.",
    deliverables: ["Conversion Architecture", "Mobile-First Design", "Content Strategy", "Technical Implementation"],
    href: "/labs/site",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    number: "04",
    icon: PlayCircle,
    name: "VideoSalesLab",
    tagline: "Leverage",
    description:
      "Create evergreen video assets that sell on your behalf indefinitely. Video builds trust faster than any other medium.",
    deliverables: ["Video Sales Letter", "Founder Story", "Authority Clips", "Testimonial Systems"],
    href: "/labs/video-sales",
    color: "from-emerald-500/15 to-emerald-500/5",
  },
  {
    number: "05",
    icon: TrendingUp,
    name: "ExpansionLab",
    tagline: "Scale",
    description:
      "Amplify reach through strategic campaigns and ongoing optimization. Fractional CMO support, campaign development, and performance tracking.",
    deliverables: ["Marketing Roadmap", "Campaign Execution", "Performance Reports", "Channel Expansion"],
    href: "/labs/expansion",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
]

const outcomes = [
  "A clear, differentiated market position",
  "A professional brand that commands premium pricing",
  "A website that converts visitors while you sleep",
  "Video assets that build trust at scale",
  "A growth engine with strategic leadership",
]

export default function GrowthSystemPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-background">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="eyebrow mb-6">The Complete Framework</p>

            <h1 className="h1 text-foreground">
              The Business <span className="text-primary">Growth System</span>
            </h1>

            <p className="mt-6 subheading text-muted-foreground max-w-2xl mx-auto">
              A modular, interconnected framework designed to transform founders into industry authorities through
              strategic content and brand building.
            </p>

            <div className="mt-8 p-6 bg-card rounded-xl border border-border inline-block">
              <p className="eyebrow mb-2">Core Principle</p>
              <p className="text-2xl font-bold text-foreground">
                Record Once. <span className="text-primary">Sell Forever.</span>
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://calendly.com/podlablv/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="#labs" className="btn-secondary">
                Explore the Labs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">How It Works</p>
              <h2 className="h2 text-foreground">Each lab builds upon the previous</h2>
              <p className="mt-6 body-text text-muted-foreground">
                The Growth System isn't a collection of disconnected services. It's an integrated framework where each
                phase compounds the value of the previous. Start where you need the most help, or commit to the full
                transformation.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">AssetsLab informs everything</p>
                    <p className="text-sm text-muted-foreground">
                      Your messaging drives BrandLab's visual direction and SiteLab's copy
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">BrandLab creates consistency</p>
                    <p className="text-sm text-muted-foreground">
                      Visual identity carries through SiteLab and VideoSalesLab
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Everything drives ExpansionLab</p>
                    <p className="text-sm text-muted-foreground">
                      Performance data refines all previous labs continuously
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interconnection Diagram */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl" />
              <div className="relative bg-background rounded-2xl border border-border p-8">
                <div className="space-y-4">
                  {/* AssetsLab */}
                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/30 text-center">
                    <p className="font-bold text-foreground">AssetsLab</p>
                    <p className="text-xs text-primary">Foundation</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-primary/50" />
                  </div>

                  {/* BrandLab + SiteLab */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-card rounded-xl border border-border text-center">
                      <p className="font-bold text-foreground">BrandLab</p>
                      <p className="text-xs text-muted-foreground">Identity</p>
                    </div>
                    <div className="p-4 bg-card rounded-xl border border-border text-center">
                      <p className="font-bold text-foreground">SiteLab</p>
                      <p className="text-xs text-muted-foreground">Conversion</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-border" />
                  </div>

                  {/* VideoSalesLab */}
                  <div className="p-4 bg-card rounded-xl border border-border text-center">
                    <p className="font-bold text-foreground">VideoSalesLab</p>
                    <p className="text-xs text-muted-foreground">Leverage</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-border" />
                  </div>

                  {/* ExpansionLab */}
                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/30 text-center">
                    <p className="font-bold text-foreground">ExpansionLab</p>
                    <p className="text-xs text-primary">Scale</p>
                  </div>

                  {/* Feedback Loop */}
                  <div className="mt-4 p-3 bg-secondary rounded-lg text-center">
                    <p className="caption text-muted-foreground">Continuous refinement based on performance data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Five Labs */}
      <section id="labs" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">The Framework</p>
            <h2 className="h2 text-foreground">The Five Labs</h2>
            <p className="mt-4 body-text text-muted-foreground max-w-2xl mx-auto">
              Each Lab solves a specific problem in your marketing stack. Together, they create a compounding growth
              engine.
            </p>
          </div>

          <div className="space-y-8">
            {labs.map((lab, index) => {
              const Icon = lab.icon
              return (
                <div key={lab.name} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${lab.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Left: Number + Icon */}
                      <div className="flex items-start gap-6 lg:w-64 flex-shrink-0">
                        <span className="text-5xl font-bold text-primary">{lab.number}</span>
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      {/* Middle: Content */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="h3 text-foreground">{lab.name}</h3>
                          <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">
                            {lab.tagline}
                          </span>
                        </div>
                        <p className="body-text text-muted-foreground max-w-2xl">{lab.description}</p>

                        <div className="flex flex-wrap gap-2 mt-6">
                          {lab.deliverables.map((item, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: CTA */}
                      <div className="lg:w-40 flex-shrink-0 flex items-center">
                        <Link
                          href={lab.href}
                          className="btn-secondary w-full text-center inline-flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Client Journey */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Timeline</p>
            <h2 className="h2 text-foreground">Typical Client Journey</h2>
            <p className="mt-4 body-text text-muted-foreground max-w-2xl mx-auto">
              Most clients complete the full system in 6 months, with ongoing support afterward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { month: "Month 1-2", lab: "AssetsLab", task: "Clarify messaging, define avatar, engineer offer" },
              { month: "Month 2-3", lab: "BrandLab", task: "Develop visual identity, create asset library" },
              { month: "Month 3-4", lab: "SiteLab", task: "Design and launch conversion-optimized website" },
              { month: "Month 4-5", lab: "VideoSalesLab", task: "Record and produce evergreen video assets" },
              { month: "Month 6+", lab: "ExpansionLab", task: "Launch campaigns, optimize, scale" },
              { month: "Ongoing", lab: "Production", task: "Studio time + unlimited editing support" },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-background rounded-xl border border-border text-center">
                <p className="caption text-muted-foreground mb-2">{item.month}</p>
                <p className="font-bold text-primary mb-2">{item.lab}</p>
                <p className="caption text-muted-foreground">{item.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">The Outcome</p>
            <h2 className="h2 text-foreground">What You Walk Away With</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{outcome}</span>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-card rounded-2xl border border-primary/30">
            <p className="text-2xl font-bold text-foreground mb-2">One system. Compounding returns.</p>
            <p className="text-xl text-primary font-semibold">Record once. Sell forever.</p>

            <div className="mt-8">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Transformation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
