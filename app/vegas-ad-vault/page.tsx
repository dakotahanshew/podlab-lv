import type { Metadata } from "next"
import Link from "next/link"
import { Play, Download, Zap, Target, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Vegas Ad Vault | PodLab",
  description:
    "Access our collection of high-converting ad templates and creative frameworks. Proven ads that generate leads and sales for service-based businesses.",
  openGraph: {
    title: "Vegas Ad Vault | PodLab",
    description: "Access our collection of high-converting ad templates and creative frameworks.",
    url: getUrl("/vegas-ad-vault"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "Vegas Ad Vault" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vegas Ad Vault | PodLab",
    description: "Access our collection of high-converting ad templates and creative frameworks.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

const vaultContents = [
  {
    icon: Play,
    title: "Video Ad Scripts",
    description: "Word-for-word scripts for VSLs, testimonials, and direct response video ads",
  },
  {
    icon: Target,
    title: "Targeting Frameworks",
    description: "Audience targeting strategies that find your ideal buyers on every platform",
  },
  {
    icon: TrendingUp,
    title: "Hook Library",
    description: "50+ proven hooks that stop the scroll and capture attention instantly",
  },
  {
    icon: Zap,
    title: "Creative Templates",
    description: "Plug-and-play templates for static ads, carousels, and story formats",
  },
]

const results = [
  { metric: "$2.4M+", label: "Revenue Generated" },
  { metric: "340%", label: "Average ROAS" },
  { metric: "50+", label: "Businesses Scaled" },
  { metric: "1000+", label: "Ads Created" },
]

export default function VegasAdVaultPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <span className="eyebrow mb-6 inline-block">Free Resource</span>
            <h1 className="h1 text-foreground mb-6">Vegas Ad Vault</h1>
            <p className="subheading text-muted-foreground max-w-2xl mx-auto mb-8">
              The exact ad templates, scripts, and creative frameworks we use to generate millions in revenue for our
              clients. No fluff. Just what works.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="btn-primary">
                <Download className="w-5 h-5" />
                Get Free Access
              </Link>
              <Link href="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>

            {/* Results Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-card rounded-xl border border-border">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="h3 text-primary mb-1">{result.metric}</div>
                  <div className="caption text-muted-foreground">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">What You Get</span>
            <h2 className="h2 text-foreground mb-4">Inside The Vault</h2>
            <p className="subheading text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create ads that convert, organized and ready to deploy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {vaultContents.map((item, index) => (
              <div key={index} className="p-8 bg-background rounded-xl border border-border card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="h3 text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 inline-block">Perfect For</span>
            <h2 className="h2 text-foreground mb-4">Is This For You?</h2>
          </div>

          <div className="space-y-4 mb-12">
            {[
              "Coaches and consultants who want to scale with paid ads",
              "Agency owners looking for proven creative frameworks",
              "Course creators who need high-converting video ads",
              "Service providers ready to stop guessing with their ads",
              "Anyone tired of burning money on ads that don't convert",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary">
              <Download className="w-5 h-5" />
              Get Free Access Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow mb-4 inline-block">Ready To Scale?</span>
          <h2 className="h2 text-foreground mb-6">Stop Guessing. Start Converting.</h2>
          <p className="subheading text-muted-foreground max-w-2xl mx-auto mb-8">
            Get instant access to the same ad frameworks that have generated millions in revenue. Free. No catch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get The Vault Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/ads" className="btn-secondary">
              Learn About Our Ad Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
