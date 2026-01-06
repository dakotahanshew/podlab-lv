import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { ArrowRight, Scissors, Clock, Video, Sparkles, Share2, Check, Zap } from "lucide-react"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Interview Clipping Service | PodLab",
  description:
    "Turn your long-form interviews and podcasts into viral short-form clips. We find the best moments and optimize them for every platform.",
  openGraph: {
    title: "Interview Clipping Service | PodLab",
    description: "Transform hours of content into dozens of scroll-stopping clips. Maximum reach, minimum effort.",
    url: getUrl("/how-it-started"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "PodLab Clipping Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interview Clipping Service | PodLab",
    description: "Transform hours of content into dozens of scroll-stopping clips. Maximum reach, minimum effort.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

const benefits = [
  {
    icon: Scissors,
    title: "Expert Clip Selection",
    description: "We watch every minute and identify the moments that will resonate most with your audience.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Get your clips within 48-72 hours. Rush delivery available for time-sensitive content.",
  },
  {
    icon: Video,
    title: "Platform Optimized",
    description:
      "Each clip is formatted specifically for TikTok, Reels, Shorts, and LinkedIn—aspect ratios, captions, everything.",
  },
  {
    icon: Sparkles,
    title: "Professional Polish",
    description: "Dynamic captions, b-roll integration, sound design, and motion graphics that stop the scroll.",
  },
  {
    icon: Share2,
    title: "Maximum Distribution",
    description: "One interview becomes 10-30+ clips. Flood every platform with your best content.",
  },
  {
    icon: Zap,
    title: "Algorithm-Ready",
    description: "We know what hooks viewers in the first 3 seconds. Your clips are built to perform.",
  },
]

const process = [
  {
    step: "01",
    title: "Upload Your Content",
    description: "Send us your podcast episodes, interviews, or long-form videos via our secure portal.",
  },
  {
    step: "02",
    title: "We Analyze & Select",
    description: "Our team watches everything and identifies the most clip-worthy moments.",
  },
  {
    step: "03",
    title: "Edit & Optimize",
    description: "We transform each moment into a platform-optimized clip with captions and effects.",
  },
  {
    step: "04",
    title: "Review & Deliver",
    description: "You approve the clips, we make any revisions, and deliver final files ready to post.",
  },
]

const pricing = [
  {
    name: "Starter",
    price: "$500",
    period: "/episode",
    description: "Perfect for getting started with clip content.",
    includes: [
      "5-10 clips per episode",
      "Multi-platform formats",
      "Dynamic captions",
      "72-hour turnaround",
      "1 revision round",
    ],
  },
  {
    name: "Growth",
    price: "$1,000",
    period: "/episode",
    popular: true,
    description: "Maximum clip volume for serious content creators.",
    includes: [
      "15-25 clips per episode",
      "Multi-platform formats",
      "Dynamic captions",
      "B-roll integration",
      "48-hour turnaround",
      "Unlimited revisions",
      "Hook optimization",
    ],
  },
  {
    name: "Retainer",
    price: "$3,000",
    period: "/month",
    description: "Ongoing support for consistent content output.",
    includes: [
      "Up to 4 episodes/month",
      "20+ clips per episode",
      "All premium features",
      "24-hour rush available",
      "Dedicated editor",
      "Content strategy calls",
      "Priority support",
    ],
  },
]

export default function ClippingServicePage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-background">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="eyebrow mb-6">Interview Clipping Service</p>
            <h1 className="h1 text-foreground">
              Turn interviews into <span className="text-primary">viral clips.</span>
            </h1>
            <p className="mt-6 subheading text-muted-foreground max-w-2xl mx-auto">
              Your long-form content is a goldmine. We extract the best moments and transform them into scroll-stopping
              clips optimized for every platform.
            </p>
            <div className="mt-8">
              <a
                href="https://calendly.com/podlablv/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get Your Clips Made
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">The Problem</p>
              <h2 className="h2 text-foreground">You're sitting on content gold</h2>
              <p className="mt-6 body-text text-muted-foreground">
                Every interview you record contains dozens of powerful moments—insights, stories, and soundbites that
                could reach millions. But they're buried in hour-long videos that most people will never watch.
              </p>
              <p className="mt-4 body-text text-muted-foreground">
                Meanwhile, creators who clip their content are dominating every platform. Short-form is where attention
                lives. If you're not there, you're invisible.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-4">The Solution</p>
              <h2 className="h2 text-foreground">Extract, optimize, dominate</h2>
              <p className="mt-6 body-text text-muted-foreground">
                We watch every minute of your content so you don't have to. Our team identifies the moments that will
                perform, then transforms them into platform-perfect clips with dynamic captions, hooks, and professional
                polish.
              </p>
              <p className="mt-4 body-text text-muted-foreground">
                One interview becomes 20+ pieces of content. Maximum reach. Minimum effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Why PodLab Clipping?</p>
            <h2 className="h2 text-foreground">More than just cutting clips</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="p-6 bg-card rounded-xl border border-border">
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

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="h2 text-foreground">From raw footage to viral clips</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="h2 text-foreground">Simple pricing, serious results</h2>
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

                <a
                  href="https://calendly.com/podlablv/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full mt-8 text-center block ${tier.popular ? "btn-primary" : "btn-secondary"}`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 text-foreground text-balance">Stop letting great content go unseen</h2>
          <p className="mt-6 subheading text-muted-foreground max-w-2xl mx-auto">
            Every interview you've recorded has viral moments waiting to be extracted. Let's find them.
          </p>
          <div className="mt-10">
            <a
              href="https://calendly.com/podlablv/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Book a Clipping Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
