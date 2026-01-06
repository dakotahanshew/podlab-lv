import type { Metadata } from "next"
import type { ReactNode } from "react"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Affiliate Program",
  description: "Earn 20% commission by referring founders to PodLab. Simple program with recurring revenue.",
  openGraph: {
    title: "Affiliate Program | PodLab",
    description: "Earn 20% commission by referring founders to PodLab. Simple program with recurring revenue.",
    url: getUrl("/affiliate"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "PodLab Affiliate Program" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate Program | PodLab",
    description: "Earn 20% commission by referring founders to PodLab. Simple program with recurring revenue.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

export default function AffiliateLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
