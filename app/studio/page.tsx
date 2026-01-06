import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FAQAccordion } from "@/components/faq-accordion"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Video, Mic, Monitor, Clock, Check, Camera, Lightbulb, Users } from "lucide-react"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Studio Time",
  description:
    "Premium podcast and video recording studio in Las Vegas. Professional equipment, full production crew, and everything you need to create content that commands attention.",
  openGraph: {
    title: "Studio Time | PodLab",
    description: "Walk in. Record. Walk out with content. Premium studio in Las Vegas.",
    url: getUrl("/studio"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "PodLab Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Time | PodLab",
    description: "Walk in. Record. Walk out with content. Premium studio in Las Vegas.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

const features = [
  {
    icon: Camera,
    title: "4K Multi-Camera Setup",
    description: "Professional cinema cameras capturing every angle for dynamic, engaging content.",
  },
  {
    icon: Mic,
    title: "Broadcast-Quality Audio",
    description: "Studio-grade microphones and soundproofing for crystal-clear audio every time.",
  },
  {
    icon: Lightbulb,
    title: "Professional Lighting",
    description: "Cinematic lighting setup that makes you look like the authority you are.",
  },
  {
    icon: Monitor,
    title: "Teleprompter Available",
    description: "Stay on message without memorizing scripts. Perfect for VSLs and presentations.",
  },
  {
    icon: Users,
    title: "Full Production Crew",
    description: "Director, camera operators, and audio engineer included with every session.",
  },
  {
    icon: Video,
    title: "Same-Day Delivery",
    description: "Need content fast? Get raw footage delivered the same day you record.",
  },
]

const pricingTiers = [
  {
    name: "Quick Session",
    duration: "1 Hour",
    price: "$500",
    ideal: "Ideal for: Single video, podcast episode intro, or quick testimonial capture",
    includes: [
      "1-hour studio access",
      "Multi-camera recording",
      "Professional audio",
      "Basic lighting setup",
      "Raw footage delivery",
    ],
  },
  {
    name: "Half Day",
    duration: "4 Hours",
    price: "$1,500",
    ideal: "Ideal for: Multiple videos, podcast batch recording, or content sprint",
    popular: true,
    includes: [
      "4-hour studio access",
      "Full production crew",
      "Advanced lighting setup",
      "Teleprompter included",
      "Raw footage delivery",
      "10 edited clips",
    ],
  },
  {
    name: "Full Day",
    duration: "8 Hours",
    price: "$2,500",
    ideal: "Ideal for: Course creation, VSL filming, or comprehensive content library",
    includes: [
      "8-hour studio access",
      "Full production crew",
      "Premium lighting setup",
      "Teleprompter + green screen",
      "Raw footage delivery",
      "25 edited clips",
      "Priority editing turnaround",
    ],
  },
]

const faqs = [
  {
    q: "What should I bring to my session?",
    a: "Just yourself and your expertise. We provide all equipment, lighting, and technical support. If you have specific wardrobe preferences or props, bring those along.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 1 week in advance for half and full-day sessions. Quick sessions can often be accommodated with 48 hours notice.",
  },
  {
    q: "Can I bring a guest or co-host?",
    a: "Absolutely. Our setup accommodates up to 3 people on camera. Just let us know when booking so we can prepare.",
  },
  {
    q: "Do you help with scripting and content planning?",
    a: "Basic direction and flow guidance is included. For comprehensive content strategy and scripting, we recommend adding AssetsLab to your package.",
  },
]

export default function StudioPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Studio Time</p>
              <h1 className="h1 text-foreground text-balance">
                Walk in. Record. <span className="text-primary">Walk out with content.</span>
              </h1>
              <p className="mt-6 body-text text-muted-foreground">
                Premium podcast and video recording studio in Las Vegas. Professional equipment, full production crew,
                and everything you need to create content that commands attention.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/podlablv/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Book Your Session
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden">
                <img
                  src="/professional-podcast-recording-studio-dark-cinemat.jpg"
                  alt="PodLab Recording Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Studio Features</p>
            <h2 className="h2 text-foreground">Everything you need, nothing you don't</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="p-6 bg-background rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="h2 text-foreground">Simple, transparent pricing</h2>
            <p className="mt-4 body-text text-muted-foreground">
              No hidden fees. No surprise charges. Just great content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
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
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{tier.duration}</span>
                </div>
                <h3 className="h3 text-foreground">{tier.name}</h3>
                <p className="text-3xl font-bold text-primary mt-2">{tier.price}</p>
                <p className="text-sm text-muted-foreground mt-4">{tier.ideal}</p>

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
                  className={`${tier.popular ? "btn-primary" : "btn-secondary"} w-full text-center mt-8 block`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="h2 text-foreground">Common Questions</h2>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 text-foreground text-balance">Ready to create content that converts?</h2>
          <p className="mt-6 body-text text-muted-foreground max-w-2xl mx-auto">
            Book your studio session today. Limited availability each month.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Book Your Session
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main >
  )
}
