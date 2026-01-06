import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Scissors, Clock, Repeat, Palette, Zap, Check, Infinity } from "lucide-react"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Unlimited Editing",
  description:
    "A dedicated editing team that transforms your recordings into polished clips, reels, full episodes, and ad creatives. No per-video fees. No limits.",
  openGraph: {
    title: "Unlimited Editing | PodLab",
    description: "Raw footage in. Scroll-stopping content out. Unlimited video editing for founders.",
    url: getUrl("/editing"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "PodLab Editing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unlimited Editing | PodLab",
    description: "Raw footage in. Scroll-stopping content out. Unlimited video editing for founders.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

const benefits = [
  {
    icon: Infinity,
    title: "Truly Unlimited",
    description: "No caps, no hidden limits. Submit as much footage as you can create—we'll edit it all.",
  },
  {
    icon: Clock,
    title: "48-Hour Turnaround",
    description: "Standard turnaround for most projects. Rush options available when you need content fast.",
  },
  {
    icon: Repeat,
    title: "Unlimited Revisions",
    description: "Not happy with the first cut? No problem. We revise until it's perfect.",
  },
  {
    icon: Palette,
    title: "Brand Consistency",
    description: "We learn your style, colors, and preferences. Every piece feels unmistakably you.",
  },
  {
    icon: Zap,
    title: "Multi-Platform Formats",
    description: "One video becomes content for YouTube, Instagram, TikTok, LinkedIn, and more.",
  },
  {
    icon: Scissors,
    title: "Professional Polish",
    description: "Color grading, sound design, motion graphics—everything that makes content pop.",
  },
]

const deliverables = [
  "Long-form YouTube videos",
  "Podcast episode edits",
  "Short-form vertical clips",
  "Instagram Reels",
  "TikToks",
  "LinkedIn videos",
  "Video ads",
  "Testimonial compilations",
  "Highlight reels",
  "Course content",
  "Webinar recordings",
  "Social media teasers",
]

const process = [
  {
    step: "01",
    title: "Upload Your Footage",
    description: "Drop your raw files into our secure portal. Any format, any length.",
  },
  {
    step: "02",
    title: "Brief Your Vision",
    description: "Tell us what you need—style, length, platform. Or just say 'make it good.'",
  },
  {
    step: "03",
    title: "We Edit",
    description: "Our team transforms raw footage into polished, scroll-stopping content.",
  },
  {
    step: "04",
    title: "Review & Revise",
    description: "Watch, give feedback, we adjust. Repeat until you love it.",
  },
  {
    step: "05",
    title: "Download & Deploy",
    description: "Get your finished files in all the formats you need. Done.",
  },
]

const pricing = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/month",
    description: "For creators just getting started with video content.",
    includes: [
      "Up to 10 videos/month",
      "48-hour turnaround",
      "Unlimited revisions",
      "Multi-platform formats",
      "Basic color correction",
    ],
  },
  {
    name: "Growth",
    price: "$3,000",
    period: "/month",
    popular: true,
    description: "For founders scaling their content operation.",
    includes: [
      "Up to 25 videos/month",
      "24-hour turnaround",
      "Unlimited revisions",
      "Multi-platform formats",
      "Advanced color grading",
      "Motion graphics",
      "Dedicated editor",
    ],
  },
  {
    name: "Scale",
    price: "$5,000",
    period: "/month",
    description: "For teams that need serious content volume.",
    includes: [
      "Unlimited videos",
      "Same-day rush available",
      "Unlimited revisions",
      "Multi-platform formats",
      "Premium color grading",
      "Custom motion graphics",
      "Dedicated editing team",
      "Priority support",
    ],
  },
]

export default function EditingPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-background">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="eyebrow mb-6">Unlimited Editing</p>
            <h1 className="h1 text-foreground">
              Raw footage in. <span className="text-primary">Scroll-stopping content out.</span>
            </h1>
            <p className="mt-6 subheading text-muted-foreground max-w-2xl mx-auto">
              A dedicated editing team that transforms your recordings into polished clips, reels, full episodes, and ad
              creatives. No per-video fees. No limits. Just results.
            </p>
            <div className="mt-8">
              <a
                href="https://calendly.com/podlablv/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Start Editing Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Why Unlimited?</p>
            <h2 className="h2 text-foreground">Focus on creating. We handle the editing.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="p-6 bg-background rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="h3 text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">What We Deliver</p>
              <h2 className="h2 text-foreground">One recording. Dozens of assets.</h2>
              <p className="mt-6 subheading text-muted-foreground">
                We don't just edit—we multiply. A single recording session becomes a month's worth of content across
                every platform you care about.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="h2 text-foreground">Simple. Fast. Repeatable.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative p-6 bg-background rounded-xl border border-border">
                <span className="text-4xl font-bold text-primary">{step.step}</span>
                <h3 className="h3 text-foreground mt-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="h2 text-foreground">Predictable pricing, unlimited output</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((tier, index) => (
              <div
                key={index}
                className={`p-8 bg-card rounded-2xl border ${tier.popular ? "border-2 border-primary relative" : "border-border"
                  }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="h3 text-foreground">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold text-primary">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">{tier.description}</p>

                <ul className="mt-6 space-y-3">
                  {tier.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full mt-8 text-center block ${tier.popular ? "btn-primary" : "btn-secondary"}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 text-foreground text-balance">Stop letting footage sit on your hard drive</h2>
          <p className="mt-6 subheading text-muted-foreground max-w-2xl mx-auto">
            Start your unlimited editing subscription today. Cancel anytime.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Start Editing Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
