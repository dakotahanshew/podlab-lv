import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="eyebrow mb-6">The Founder Bottleneck</p>

        <h2 className="h2 text-foreground">You're not stuck because of your offer.</h2>

        <p className="mt-6 subheading text-muted-foreground max-w-2xl">
          You're stuck because <span className="text-foreground font-medium">you're the one selling it.</span>
        </p>

        <div className="my-12 w-24 h-1 bg-primary" />

        <div className="space-y-3 body-text text-muted-foreground max-w-2xl">
          <p>You're in every pitch. Every call. Every follow-up.</p>
          <p>You create every piece of content yourself.</p>
        </div>

        <p className="mt-10 quote text-foreground max-w-2xl">
          The business grows… but it depends on <span className="text-primary">you</span>.
        </p>

        <p className="mt-4 body-text text-muted-foreground max-w-xl">
          PodLab removes you from that bottleneck — with systems that sell for you.
        </p>

        <div className="mt-10">
          <Link href="/growth-system" className="btn-secondary">
            Break the Bottleneck
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
