import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "PodLab Privacy Policy. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navigation />

      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="h1 text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="h3 text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                PodLab ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you visit our website podlab.com,
                including any other media form, media channel, mobile website, or mobile application related or
                connected thereto.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                please do not access the site.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="h3 text-foreground mb-4">Information We Collect</h2>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Personal Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may collect personally identifiable information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                <li>Fill out a contact form or inquiry form</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Book a consultation or studio session</li>
                <li>Purchase our services</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">This information may include:</p>
              <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                <li>Name (first and last)</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Website URL</li>
                <li>Billing and payment information</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Automatically Collected Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device,
                including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URLs</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Click patterns and interactions</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="h3 text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To respond to your inquiries and fulfill your requests</li>
                <li>To send you marketing and promotional communications (with your consent)</li>
                <li>To improve our website and user experience</li>
                <li>To analyze usage patterns and trends</li>
                <li>To protect against fraudulent or illegal activity</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* Sharing Your Information */}
            <div>
              <h2 className="h3 text-foreground mb-4">Sharing Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                in the following situations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                <li>
                  <strong className="text-foreground">Service Providers:</strong> We may share information with
                  third-party vendors who perform services on our behalf (payment processing, email delivery, analytics)
                </li>
                <li>
                  <strong className="text-foreground">Legal Requirements:</strong> We may disclose information if
                  required by law or in response to valid requests by public authorities
                </li>
                <li>
                  <strong className="text-foreground">Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, your information may be transferred
                </li>
                <li>
                  <strong className="text-foreground">With Your Consent:</strong> We may share information for any other
                  purpose with your explicit consent
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="h3 text-foreground mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to collect and track information about your browsing
                activity. Cookies are small data files stored on your device. You can instruct your browser to refuse
                all cookies or to indicate when a cookie is being sent.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">We use:</p>
              <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                <li>
                  <strong className="text-foreground">Essential Cookies:</strong> Required for basic site functionality
                </li>
                <li>
                  <strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors
                  interact with our website
                </li>
                <li>
                  <strong className="text-foreground">Marketing Cookies:</strong> Used to deliver relevant
                  advertisements (with your consent)
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="h3 text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="h3 text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to opt-out of marketing communications</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:privacy@podlab.studio" className="text-primary hover:underline">
                  privacy@podlab.studio
                </a>
                .
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="h3 text-foreground mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                or content of these external sites. We encourage you to review the privacy policies of any third-party
                sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="h3 text-foreground mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
                information from children. If you believe we have collected information from a child, please contact us
                immediately.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="h3 text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this
                Privacy Policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="h3 text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-background rounded-xl border border-border">
                <p className="text-foreground font-semibold">PodLab</p>
                <p className="text-muted-foreground">Las Vegas, NV</p>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a href="mailto:privacy@podlab.studio" className="text-primary hover:underline">
                    privacy@podlab.studio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
