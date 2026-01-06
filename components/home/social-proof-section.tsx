import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "PodLab transformed how we approach content. Our sales calls cut in half because prospects already trust us before we even speak.",
    name: "Marcus Chen",
    title: "CEO, TechScale Partners",
    metric: "50% fewer sales calls",
    image: "/professional-asian-male-ceo-headshot-dark-backgrou.jpg",
  },
  {
    quote:
      "The system just works. One day of recording turned into six months of content that's still generating leads.",
    name: "Sarah Mitchell",
    title: "Founder, Growth Advisory",
    metric: "6 months of content",
    image: "/professional-female-founder-headshot-dark-backgrou.jpg",
  },
  {
    quote: "Finally, a team that understands what founders actually need. Not more content—better systems.",
    name: "David Park",
    title: "Managing Partner, Elevate Capital",
    metric: "3x conversion rate",
    image: "/professional-male-managing-partner-headshot-dark-b.jpg",
  },
]

export function SocialProofSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="h2 text-foreground">
            Systems that turn overwhelmed operators into <span className="text-primary">confident CEOs.</span>
          </h2>
          <p className="mt-6 subheading text-muted-foreground">
            You don't need more content. You need assets that work while you don't.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-background rounded-xl border border-border relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                  {testimonial.metric}
                </span>
              </div>
              <p className="body-text text-foreground mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="caption text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about#testimonials"
            className="inline-flex items-center text-primary font-medium text-lg hover:gap-3 transition-all gap-2"
          >
            See What Founders Are Saying
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
