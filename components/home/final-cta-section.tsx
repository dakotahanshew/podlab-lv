import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Large green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="h2 text-primary text-glow-green">Ready to scale without burning out?</h2>

        <p className="mt-6 subheading text-muted-foreground">
          This is the team you call when you're ready to scale for real.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/contact" className="btn-primary text-lg px-10 py-5">
            Book My 15-Minute Strategy Call
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/growth-system"
            className="text-muted-foreground hover:text-primary transition-colors font-medium underline underline-offset-4"
          >
            Browse the PodLab Growth System →
          </Link>
        </div>
      </div>
    </section>
  )
}
