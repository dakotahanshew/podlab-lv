import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FinalCTAProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export default function FinalCTA({ title, description, buttonText, buttonHref }: FinalCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="h2 text-foreground leading-tight text-balance">{title}</h2>
        <p className="mt-6 body-text text-muted-foreground max-w-2xl mx-auto">{description}</p>
        <div className="mt-10">
          <Link href={buttonHref} className="btn-primary inline-flex items-center gap-2">
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
