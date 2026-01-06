import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, PlayCircle, Check, Film, MessageSquare, Users, RefreshCw, Target } from "lucide-react"
import type { Metadata } from "next"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "VideoSalesLab",
  description: "Five core sales videos that educate, persuade, and close while you sleep.",
  openGraph: {
    title: "VideoSalesLab | PodLab",
    description: "Five core sales videos that educate, persuade, and close while you sleep.",
    url: getUrl("/labs/video-sales"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "PodLab VideoSalesLab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VideoSalesLab | PodLab",
    description: "Five core sales videos that educate, persuade, and close while you sleep.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

const videos = [
  {
    title: "Video Sales Letter",
    description: "A compelling video that introduces your product and builds excitement.",
    icon: Film,
  },
  {
    title: "Testimonial Compilation",
    description: "Showcase customer testimonials to build trust.",
    icon: MessageSquare,
  },
  {
    title: "Explainer Video",
    description: "Explain your product or service in a clear and engaging way.",
    icon: Users,
  },
  {
    title: "Welcome Sequence",
    description: "A series of videos to welcome new customers and set expectations.",
    icon: RefreshCw,
  },
  { title: "Retargeting Ads", description: "Targeted videos to re-engage potential customers.", icon: Target },
]

const includes = ["5 professional video assets", "Work for you 24/7", "One day of filming", "Evergreen assets"]

export default function VideoSalesLabPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left - Text Content */}
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">VideoSalesLab</p>
              <h1 className="h1 text-foreground">
                5 videos that <span className="text-primary">sell while you sleep.</span>
              </h1>
              <p className="mt-6 subheading text-muted-foreground">
                The core video assets every founder needs: VSL, testimonial compilation, explainer, welcome sequence, and
                retargeting ads. One filming day. Five evergreen selling machines.
              </p>
              <div className="mt-8">
                <a
                  href="https://calendly.com/podlablv/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  Build Your Video Arsenal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right - YouTube Video */}
            <div className="lg:col-span-5 relative lg:mt-16">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/wFGpSjH15h8"
                    title="VideoSalesLab Video"
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

      {/* Videos Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">The 5 Essential Videos</p>
            <h2 className="h2 text-foreground">Every video you need to sell</h2>
          </div>

          <div className="space-y-6">
            {videos.map((video, index) => {
              const Icon = video.icon
              return (
                <div key={index} className="p-6 bg-background rounded-xl border border-border flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="h3 text-foreground mb-2">{video.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{video.description}</p>
                  </div>
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
              <PlayCircle className="w-4 h-4" />
              Complete Package
            </div>
            <h3 className="h3 text-foreground">VideoSalesLab</h3>
            <p className="text-4xl font-bold text-primary mt-4">$10,000</p>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              5 professional video assets that work for you 24/7.
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
          <h2 className="h2 text-foreground text-balance">Ready to create videos that sell?</h2>
          <p className="mt-6 subheading text-muted-foreground max-w-2xl mx-auto">
            One day of filming. Five evergreen assets. Let's build your video sales machine.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Build Your Video Arsenal
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
