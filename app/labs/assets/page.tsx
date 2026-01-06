import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, MessageSquare, User, Target, Lightbulb, Check, FileText } from "lucide-react"
import type { Metadata } from "next"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "AssetsLab",
  description: "Messaging, avatar, and positioning foundations that guide your content and offers.",
  openGraph: {
    title: "AssetsLab | PodLab",
    description: "Messaging, avatar, and positioning foundations that guide your content and offers.",
    url: getUrl("/labs/assets"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "PodLab AssetsLab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AssetsLab | PodLab",
    description: "Messaging, avatar, and positioning foundations that guide your content and offers.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

const pillars = [
  {
    icon: MessageSquare,
    title: "Messaging Framework",
    description: "Clear and consistent messaging that resonates with your audience.",
    deliverables: [
      "2-hour strategy deep dive",
      "Complete messaging framework",
      "Ideal client avatar document",
      "Offer positioning strategy",
      "5 content pillars + calendar",
      "Training session included",
    ],
  },
  {
    icon: User,
    title: "Client Avatar",
    description: "A detailed profile of your ideal customer to guide your marketing efforts.",
    deliverables: [
      "2-hour strategy deep dive",
      "Complete messaging framework",
      "Ideal client avatar document",
      "Offer positioning strategy",
      "5 content pillars + calendar",
      "Training session included",
    ],
  },
  {
    icon: Target,
    title: "Offer Positioning",
    description: "Strategically position your offers to maximize conversions.",
    deliverables: [
      "2-hour strategy deep dive",
      "Complete messaging framework",
      "Ideal client avatar document",
      "Offer positioning strategy",
      "5 content pillars + calendar",
      "Training session included",
    ],
  },
  {
    icon: Lightbulb,
    title: "Content Pillars",
    description: "Strong content pillars to support your marketing initiatives.",
    deliverables: [
      "2-hour strategy deep dive",
      "Complete messaging framework",
      "Ideal client avatar document",
      "Offer positioning strategy",
      "5 content pillars + calendar",
      "Training session included",
    ],
  },
]

const process = [
  { step: "1", title: "Discovery", description: "Understand your business and goals." },
  { step: "2", title: "Strategy", description: "Develop a clear marketing strategy." },
  { step: "3", title: "Assets Creation", description: "Create all necessary marketing assets." },
  { step: "4", title: "Review", description: "Review and refine the assets with you." },
  { step: "5", title: "Launch", description: "Launch the assets and provide ongoing support." },
]

export default function AssetsLabPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left - Text Content */}
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">AssetsLab</p>
              <h1 className="h1 text-foreground">
                The foundation of <span className="text-primary">everything.</span>
              </h1>
              <p className="mt-6 subheading text-muted-foreground">
                Before you create a single piece of content, you need clarity. AssetsLab builds the strategic foundation
                that makes all your marketing work harder—messaging, avatar, offer positioning, and content pillars.
              </p>
              <div className="mt-8">
                <a
                  href="https://calendly.com/podlablv/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  Build Your Foundation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right - YouTube Video */}
            <div className="lg:col-span-5 relative lg:mt-16">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/02-u0T5QdMU"
                    title="AssetsLab Video"
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

      {/* Problem Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4">The Problem</p>
            <h2 className="h2 text-foreground">Most founders skip the foundation and wonder why nothing works</h2>
            <p className="mt-6 subheading text-muted-foreground">
              You jump straight into creating content, building funnels, running ads—but without strategic clarity,
              you're just making noise. Your messaging is scattered. Your positioning is unclear. Your audience doesn't
              understand why they should choose you.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">What You Get</p>
            <h2 className="h2 text-foreground">Four strategic pillars</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div key={index} className="p-8 bg-card rounded-2xl border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="h3 text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{pillar.description}</p>
                  <div className="space-y-2">
                    {pillar.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">The Process</p>
            <h2 className="h2 text-foreground">How we build your assets</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={index} className="p-6 bg-background rounded-xl border border-border">
                <span className="text-4xl font-bold text-primary">{step.step}</span>
                <h3 className="h3 text-foreground mt-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-card rounded-2xl border border-primary text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Complete Package
            </div>
            <h3 className="h3 text-foreground">AssetsLab</h3>
            <p className="text-4xl font-bold text-primary mt-4">$3,500</p>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Everything you need to build a rock-solid strategic foundation for your brand and content.
            </p>
            <ul className="mt-8 space-y-3 text-left max-w-sm mx-auto">
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-4 h-4 text-primary" />
                2-hour strategy deep dive
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-4 h-4 text-primary" />
                Complete messaging framework
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-4 h-4 text-primary" />
                Ideal client avatar document
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-4 h-4 text-primary" />
                Offer positioning strategy
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-4 h-4 text-primary" />5 content pillars + calendar
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-4 h-4 text-primary" />
                Training session included
              </li>
            </ul>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 text-foreground text-balance">Ready to stop winging it?</h2>
          <p className="mt-6 subheading text-muted-foreground max-w-2xl mx-auto">
            Build the strategic foundation that makes everything else work. Start with AssetsLab.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Build Your Foundation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
