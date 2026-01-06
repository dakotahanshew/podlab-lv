import { Sparkles, Zap, Target, BarChart3 } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    title: "Clarity",
    description: "Your message stops sounding like everyone else.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "One studio day = five evergreen sales assets.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Everything is engineered — nothing is random.",
  },
  {
    icon: BarChart3,
    title: "Proof",
    description: "We don't guess. We test, refine, and scale.",
  },
]

export function DifferenceSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(42, 221, 27, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(42, 221, 27, 0.2) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="h2 text-foreground">
            Built for founders who demand <span className="text-primary">precision.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="p-6 bg-card rounded-xl border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="h3 text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
