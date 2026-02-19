"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { ShimmerButton } from "@/components/ui/shimmer-button"

const growthSystemLinks = [
  { href: "/growth-system", label: "The Business Growth System", description: "Our complete 5-Lab framework" },
  { href: "/labs/assets", label: "AssetsLab", description: "Messaging & positioning" },
  { href: "/labs/brand", label: "BrandLab", description: "Visual identity" },
  { href: "/labs/site", label: "SiteLab", description: "Conversion website" },
  { href: "/labs/video-sales", label: "VideoSalesLab", description: "Evergreen video assets" },
  { href: "/labs/expansion", label: "ExpansionLab", description: "Scale & amplify" },
]

const otherServicesLinks = [
  { href: "/studio", label: "Studio Time", description: "Record in our Las Vegas studio" },
  { href: "/editing", label: "Unlimited Editing", description: "Post-production on demand" },
  { href: "/vegas-ad-vault", label: "Vegas Ad Vault", description: "Done-for-you ad creative" },
  { href: "/how-it-started", label: "How It Started", description: "Our story" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleLinkClick = () => {
    setServicesOpen(false)
    setIsOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleLinkClick} scroll={false}>
            <Image
              src="/images/podlab-logo.png"
              alt="PodLab"
              width={180}
              height={48}
              priority
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={handleLinkClick}
              scroll={false}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={handleLinkClick}
                  scroll={false}
                >
                  Services
                </Link>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </div>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[540px]">
                  <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden">
                    {/* Growth System Section */}
                    <div className="p-4 border-b border-border">
                      <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">Growth System</p>
                      <Link
                        href="/growth-system"
                        className="block p-3 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-colors mb-3"
                        onClick={handleLinkClick}
                        scroll={false}
                      >
                        <span className="font-semibold text-foreground">The Business Growth System</span>
                        <p className="text-xs text-muted-foreground mt-1">Our complete 5-Lab framework for founders</p>
                      </Link>
                      <div className="grid grid-cols-2 gap-2">
                        {growthSystemLinks.slice(1).map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block p-2 rounded-lg hover:bg-secondary transition-colors"
                            onClick={handleLinkClick}
                            scroll={false}
                          >
                            <span className="text-sm font-medium text-foreground">{link.label}</span>
                            <p className="text-xs text-muted-foreground">{link.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Other Services Section */}
                    <div className="p-4 bg-secondary/30">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                        Other Services
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {otherServicesLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block p-2 rounded-lg hover:bg-secondary transition-colors"
                            onClick={handleLinkClick}
                            scroll={false}
                          >
                            <span className="text-sm font-medium text-foreground">{link.label}</span>
                            <p className="text-xs text-muted-foreground">{link.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={handleLinkClick}
              scroll={false}
            >
              Contact
            </Link>
            <a href="https://calendly.com/podlablv/new-meeting" target="_blank" rel="noopener noreferrer">
              <ShimmerButton shimmerColor="#ffffff" background="rgba(42, 221, 27, 1)" shimmerDuration="2.5s">
                Book a Call
              </ShimmerButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link
                href="/about"
                className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={handleLinkClick}
                scroll={false}
              >
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <div className="flex items-center justify-between px-3 py-2">
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={handleLinkClick}
                    scroll={false}
                  >
                    Services
                  </Link>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Expand services menu"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="pl-4 mt-2 space-y-4">
                    <div>
                      <p className="text-xs font-medium text-primary uppercase tracking-wider px-3 mb-2">
                        Growth System
                      </p>
                      {growthSystemLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={handleLinkClick}
                          scroll={false}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 mb-2">
                        Other Services
                      </p>
                      {otherServicesLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={handleLinkClick}
                          scroll={false}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={handleLinkClick}
                scroll={false}
              >
                Contact
              </Link>
              <div className="px-3 pt-2">
                <a
                  href="https://calendly.com/podlablv/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <ShimmerButton
                    shimmerColor="#ffffff"
                    background="rgba(42, 221, 27, 1)"
                    shimmerDuration="2.5s"
                    className="w-full"
                  >
                    Book a Call
                  </ShimmerButton>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
