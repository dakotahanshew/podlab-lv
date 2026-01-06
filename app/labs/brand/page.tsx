import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Palette, Check, Type, Droplet, Layers, FileImage } from "lucide-react"
import type { Metadata } from "next"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "BrandLab",
  description: "Visual identity systems that include logo, color, typography, and brand guidelines.",
  openGraph: {
    title: "BrandLab | PodLab",
    description: "Visual identity systems that include logo, color, typography, and brand guidelines.",
    url: getUrl("/labs/brand"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "PodLab BrandLab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandLab | PodLab",
    description: "Visual identity systems that include logo, color, typography, and brand guidelines.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

const deliverables = [
  { icon: Layers, title: "Logo Design", description: "A professional logo that represents your brand." },
  { icon: FileImage, title: "Color Palette", description: "A set of colors that align with your brand's personality." },
  {
    icon: Type,
    title: "Typography",
    description: "Fonts and styles that ensure your brand's message is clear and consistent.",
  },
  {
    icon: Droplet,
    title: "Branding Guidelines",
    description: "Rules and standards to maintain your brand's identity across all platforms.",
  },
]

const includes = [
  "Logo Design",
  "Color Palette",
  "Typography",
  "Branding Guidelines",
  "Stationery Design",
  "Digital Assets",
  "Business Cards",
  "Letterheads",
  "Brochures",
  "Brand Identity Manual",
]

export default function BrandLabPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-background overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left - Text Content */}
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">BrandLab</p>
              <h1 className="h1 text-foreground">
                Look like the <span className="text-primary">authority you are.</span>
              </h1>
              <p className="mt-6 subheading text-muted-foreground">
                Your visual identity should command respect before you say a word. BrandLab creates a complete visual
                system—logo, colors, typography, and guidelines—that positions you as the premium choice.
              </p>
              <div className="mt-8">
                <a
                  href="https://calendly.com/podlablv/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  Build Your Brand
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right - YouTube Video */}
            <div className="lg:col-span-5 relative lg:mt-16">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/9zPmBNdTuNk"
                    title="BrandLab Video"
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

      {/* Deliverables Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">What You Get</p>
            <h2 className="h2 text-foreground">Complete visual identity system</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {deliverables.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="p-8 bg-background rounded-2xl border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="h3 text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
              <Palette className="w-4 h-4" />
              Complete Package
            </div>
            <h3 className="h3 text-foreground">BrandLab</h3>
            <p className="text-4xl font-bold text-primary mt-4">$5,000</p>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              A complete visual identity that positions you as the premium choice in your market.
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
          <h2 className="h2 text-foreground text-balance">Ready for a brand that commands respect?</h2>
          <p className="mt-6 subheading text-muted-foreground max-w-2xl mx-auto">
            Let's create a visual identity that makes you unforgettable.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Build Your Brand
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
