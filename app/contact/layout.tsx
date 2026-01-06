import type { Metadata } from "next"
import type { ReactNode } from "react"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with PodLab about studio time, editing, ads, or the Growth System.",
  openGraph: {
    title: "Contact | PodLab",
    description: "Get in touch with PodLab about studio time, editing, ads, or the Growth System.",
    url: getUrl("/contact"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "PodLab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | PodLab",
    description: "Get in touch with PodLab about studio time, editing, ads, or the Growth System.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
