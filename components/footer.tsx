import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  services: [
    { href: "/studio", label: "Studio Time" },
    { href: "/editing", label: "Unlimited Editing" },
  ],
  labs: [
    { href: "/labs/assets", label: "AssetsLab" },
    { href: "/labs/brand", label: "BrandLab" },
    { href: "/labs/site", label: "SiteLab" },
    { href: "/labs/video-sales", label: "VideoSalesLab" },
    { href: "/labs/expansion", label: "ExpansionLab" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/affiliate", label: "Affiliate Program" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/">
              <Image src="/images/podlab-logo.png" alt="PodLab" width={160} height={48} className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">Record Once. Sell Forever.</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Premium podcast and video production for founders who want to scale.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-display uppercase tracking-wider text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Labs */}
          <div>
            <h3 className="text-sm font-display uppercase tracking-wider text-foreground mb-4">Labs</h3>
            <ul className="space-y-3">
              {footerLinks.labs.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-display uppercase tracking-wider text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-display uppercase tracking-wider text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} PodLab. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Las Vegas, NV</p>
        </div>
      </div>
    </footer>
  )
}
