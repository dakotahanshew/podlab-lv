import { ArrowRight } from "lucide-react"

export function FounderStorySection() {
  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <p className="eyebrow mb-4">The Founder</p>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Content - takes 3 cols */}
            <div className="lg:col-span-3">
              <h2 className="h2 mb-8">
                The precision came from the Army.
                <span className="text-primary"> The results came from business.</span>
              </h2>

              <div className="space-y-6 body-text text-muted-foreground">
                <p>
                  I'm Hiram Andino — Combat Army veteran, host of <em className="text-foreground">How It Started</em>,
                  and founder of PodLab.
                </p>
                <p>Across deployments and a decade in sales leadership, I learned one core truth:</p>
                <blockquote className="quote text-foreground border-l-4 border-primary pl-6 py-2">
                  "Businesses don't break because of their offer. They break because the founder becomes the
                  bottleneck."
                </blockquote>
                <p>
                  PodLab was built to solve that. We clarify your message, elevate your brand, build your digital
                  infrastructure, and create sales assets that run without you.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="https://calendly.com/podlablv/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Meet With Hiram
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Image - takes 2 cols */}
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29-l8vpYV6pNzl52nHWiewTEH9rDALbdz.webp"
                  alt="Hiram Andino - Founder of PodLab"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 caption text-muted-foreground">Hiram Andino — Founder & Chief Revenue Strategist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
