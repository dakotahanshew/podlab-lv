import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Michroma } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { getUrl, siteUrl } from "@/lib/metadata"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _michroma = Michroma({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "PodLab | Record Once. Sell Forever.",
    template: "%s | PodLab",
  },
  description:
    "Premium podcast and video production studio in Las Vegas. Transform your expertise into evergreen content that builds trust and drives sales 24/7.",
  keywords: [
    "podcast studio",
    "video production",
    "content marketing",
    "founder content",
    "Las Vegas podcast",
    "video sales letter",
    "VSL",
    "brand building",
    "content strategy",
  ],
  authors: [{ name: "PodLab" }],
  creator: "PodLab",
  publisher: "PodLab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getUrl("/"),
    siteName: "PodLab",
    title: "PodLab | Record Once. Sell Forever.",
    description:
      "Premium podcast and video production studio. Transform your expertise into evergreen content that sells.",
    images: [
      {
        url: getUrl("/opengraph-image.png"),
        width: 1200,
        height: 630,
        alt: "PodLab - Premium Podcast and Video Production Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PodLab | Record Once. Sell Forever.",
    description:
      "Premium podcast and video production studio. Transform your expertise into evergreen content that sells.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
