import { Skeleton } from "./skeleton"

export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <Skeleton className="h-6 w-48 mx-auto mb-8 rounded-full" />
        <Skeleton className="h-16 w-full max-w-3xl mx-auto mb-4" />
        <Skeleton className="h-16 w-3/4 mx-auto mb-8" />
        <Skeleton className="h-6 w-2/3 mx-auto mb-12" />
        <div className="flex justify-center gap-4">
          <Skeleton className="h-14 w-40 rounded-full" />
          <Skeleton className="h-14 w-48 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export function SectionSkeleton() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Skeleton className="h-4 w-24 mx-auto mb-4" />
          <Skeleton className="h-12 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-2/3 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-xl border border-border bg-card">
              <Skeleton className="h-12 w-12 rounded-lg mb-4" />
              <Skeleton className="h-6 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CardSkeleton() {
  return (
    <div className="p-6 rounded-xl border border-border bg-card">
      <Skeleton className="h-10 w-10 rounded-lg mb-4" />
      <Skeleton className="h-6 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-4" />
      <Skeleton className="h-10 w-32 rounded-full" />
    </div>
  )
}

export function VideoSkeleton() {
  return (
    <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden">
      <Skeleton className="w-full h-full" />
    </div>
  )
}
