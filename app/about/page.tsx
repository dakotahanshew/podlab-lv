import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import FinalCTA from "@/components/shared/final-cta"
import Image from "next/image"
import type { Metadata } from "next"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind PodLab. Built for founders who refuse to stay small. Learn about Hiram Andino and Dakota Hanshew.",
  openGraph: {
    title: "About PodLab",
    description: "Meet the team behind PodLab. Built for founders who refuse to stay small.",
    url: getUrl("/about"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "PodLab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About PodLab",
    description: "Meet the team behind PodLab. Built for founders who refuse to stay small.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      {/* SECTION 01 — HERO */}
      <section className="relative min-h-[45vh] flex flex-col items-center justify-center w-full pt-32 pb-8 px-6">
        <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">
          <div className="mb-4">
            <span className="eyebrow bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
              The Growth System
            </span>
          </div>
          <h1 className="h1 text-foreground mb-6">
            Built for Founders Who <br className="hidden md:block" />
            Refuse to Stay Small.
          </h1>
          <p className="subheading text-muted-foreground mb-0 max-w-2xl">
            We engineer the clarity, systems, and sales assets that help $1M–$8M service businesses scale with precision
            — not chaos.
          </p>
        </div>
      </section>

      {/* SECTION 02 — THE ORIGIN STORY */}
      <section id="origin" className="relative py-20 border-y border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <div className="eyebrow inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              The Origin
            </div>
            <h2 className="h2 text-foreground mb-4">
              Eliminating the <span className="text-primary">Founder Bottleneck</span>
            </h2>
            <p className="body-text text-muted-foreground max-w-2xl mx-auto">
              Most agencies create content. Most studios produce videos. We built something deeper.
            </p>
          </div>

          {/* Story Timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-primary/50 -translate-x-1/2" />
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />

            <div className="space-y-12 lg:space-y-16">
              {/* First Block - Left Side */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="lg:text-right space-y-4">
                  <div className="glass-panel p-6 rounded-xl border-l-2 lg:border-l-0 lg:border-r-2 border-primary/30">
                    <p className="body-text text-muted-foreground mb-3">
                      After working with hundreds of entrepreneurs, one truth became impossible to ignore:
                    </p>
                    <p className="text-foreground text-xl font-semibold leading-tight">
                      Growth slows the moment the founder becomes the system.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block" />
              </div>

              {/* Second Block - Right Side */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="hidden lg:block" />
                <div className="space-y-4">
                  <div className="glass-panel p-6 rounded-xl border-l-2 border-primary/30">
                    <div className="space-y-3">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        The founder is in every conversation. Every pitch. Every follow-up. Every piece of content.
                      </p>
                      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                      <p className="text-foreground text-lg font-medium">
                        So we built a framework that removes that dependency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Block - Left Side */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="lg:text-right space-y-4">
                  <div className="glass-panel p-6 rounded-xl border-l-2 lg:border-l-0 lg:border-r-2 border-primary/50 bg-gradient-to-br from-primary/5 to-transparent">
                    <p className="text-foreground/80 text-base leading-relaxed mb-3">
                      By transforming your expertise into engineered assets that build trust, authority, and leverage at
                      scale.
                    </p>
                    <p className="text-primary text-sm font-medium uppercase tracking-wide">
                      The output looks like content. <br />
                      But it functions like infrastructure.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — FOUNDERS */}
      <section id="founders" className="py-20 mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <div className="eyebrow inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Leadership
          </div>
          <h2 className="h2 text-foreground mb-4">Record Once. Sell Forever.</h2>
          <p className="body-text text-muted-foreground max-w-2xl mx-auto">
            PodLab exists at the intersection of sales mastery and digital precision. One side understands the human
            element of revenue; the other understands how to engineer it at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* HIRAM CARD */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col h-full border border-primary/20 hover:border-primary/40 transition-colors">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="h3 text-foreground mb-1">Hiram Andino</h3>
                <p className="eyebrow">Co-Founder & Chief Revenue Strategist</p>
              </div>
              <div className="h-16 w-16 rounded-full bg-primary/10 border-2 border-primary/30 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/Hiram Andino.webp"
                  alt="Hiram Andino"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mb-6">
              <p className="text-foreground font-medium text-base mb-3">The Operator Who Sees What Works</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Combat Army veteran. Host of <em>How It Started</em>. Hiram spent six years in the Army learning
                discipline, leadership, and execution under pressure. After the military, he built his expertise in the
                trenches of sales — leading teams, closing high-ticket deals, and understanding what separates
                businesses that scale from those that stall.
              </p>
            </div>

            <div className="space-y-4 mb-6 flex-grow">
              <div>
                <h4 className="text-foreground text-xs font-bold uppercase tracking-wider mb-2">
                  Sales & Revenue Architecture
                </h4>
                <p className="caption text-muted-foreground">
                  Hiram has seen what a $125 million operation looks like from the inside. He helps increase revenue by
                  bringing personalization and quality back into the customer journey.
                </p>
              </div>
              <div>
                <h4 className="text-foreground text-xs font-bold uppercase tracking-wider mb-2">
                  Team Building & Leadership
                </h4>
                <p className="caption text-muted-foreground">
                  From military deployments to leading sales at the world's most famous dealership, Hiram knows how to
                  hire, train, and scale high-performance teams.
                </p>
              </div>
              <div>
                <h4 className="text-foreground text-xs font-bold uppercase tracking-wider mb-2">Business Diagnosis</h4>
                <p className="caption text-muted-foreground">
                  A rare ability to see what's broken in a business model and fix it with systems that remove founder
                  dependency.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border mt-auto">
              <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-1">The Mission</p>
              <p className="text-sm text-foreground/80">Empower entrepreneurs by automating what slows them down.</p>
            </div>
          </div>

          {/* DAKOTA CARD */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col h-full border border-primary/20 hover:border-primary/40 transition-colors">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="h3 text-foreground mb-1">Dakota Hanshew</h3>
                <p className="eyebrow">Co-Founder & Chief Systems Architect</p>
              </div>
              <div className="h-16 w-16 rounded-full bg-primary/10 border-2 border-primary/30 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/Dakota Hanshew.webp"
                  alt="Dakota Hanshew"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mb-6">
              <p className="text-foreground font-medium text-base mb-3">The Engineer Who Makes It Scale</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Digital strategist. Systems builder. Dakota spent over a decade mastering the technical side of growth:
                data analytics, digital marketing, content strategy, and automation. While Hiram understands{" "}
                <em>what</em> needs to happen, Dakota knows <em>how</em> to engineer that at the system level.
              </p>
            </div>

            <div className="space-y-4 mb-6 flex-grow">
              <div>
                <h4 className="text-foreground text-xs font-bold uppercase tracking-wider mb-2">
                  Data-Driven Strategy
                </h4>
                <p className="caption text-muted-foreground">
                  Specializes in turning raw data into actionable insights. Through analytics and behavioral tracking,
                  he identifies exactly where businesses lose leads — and how to fix it.
                </p>
              </div>
              <div>
                <h4 className="text-foreground text-xs font-bold uppercase tracking-wider mb-2">Content Strategy</h4>
                <p className="caption text-muted-foreground">
                  Dakota sees content as a system. He builds workflows that turn one recording session into months of
                  strategic touchpoints.
                </p>
              </div>
              <div>
                <h4 className="text-foreground text-xs font-bold uppercase tracking-wider mb-2">
                  Systems & Infrastructure
                </h4>
                <p className="caption text-muted-foreground">
                  Obsessed with removing friction. From automating onboarding to video processing pipelines, he thinks
                  in systems first.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border mt-auto">
              <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-1">The Mission</p>
              <p className="text-sm text-foreground/80">
                Build systems that make marketing predictable, scalable, and profitable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Ready to Scale Without Being the Bottleneck?"
        description="This is the team you call when you're ready to scale for real."
        buttonText="Book My 15-Minute Strategy Call"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  )
}
