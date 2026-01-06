import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "PodLab Terms of Service. Read the terms and conditions for using our services.",
}

export default function TermsOfServicePage() {
  return (
    <main>
      <Navigation />

      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="h1 text-foreground mb-6">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none space-y-12">
            {/* Agreement */}
            <div>
              <h2 className="h3 text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and PodLab ("we,"
                "our," or "us") governing your access to and use of our website, services, and any related media forms.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part
                of these Terms, you may not access our services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="h3 text-foreground mb-4">Our Services</h2>
              <p className="text-muted-foreground leading-relaxed">PodLab provides the following services:</p>
              <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                <li>Professional podcast and video recording studio services</li>
                <li>Video editing and post-production services</li>
                <li>Brand strategy and development (AssetsLab, BrandLab)</li>
                <li>Website design and development (SiteLab)</li>
                <li>Video sales asset creation (VideoSalesLab)</li>
                <li>Marketing and campaign management (ExpansionLab)</li>
                <li>Ad creative development and management</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Service availability, pricing, and specific deliverables are subject to change and will be confirmed in
                individual service agreements.
              </p>
            </div>

            {/* Booking and Payment */}
            <div>
              <h2 className="h3 text-foreground mb-4">Booking and Payment</h2>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Studio Bookings</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Studio sessions require advance booking and confirmation</li>
                <li>A deposit may be required to secure your booking</li>
                <li>Cancellations must be made at least 48 hours in advance for a full refund</li>
                <li>Late cancellations or no-shows may result in forfeiture of deposit or full payment</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Subscription Services</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Subscription services (e.g., Unlimited Editing) are billed monthly in advance</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>
                  You may cancel your subscription at any time; service continues until the end of the billing period
                </li>
                <li>No refunds are provided for partial months</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Project-Based Services</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Project scope, deliverables, and payment terms will be outlined in a separate agreement</li>
                <li>Payment schedules typically include deposits and milestone payments</li>
                <li>Final deliverables are released upon receipt of final payment</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="h3 text-foreground mb-4">Intellectual Property</h2>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Your Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                You retain ownership of all content you provide to us, including footage, images, logos, and other
                materials ("Your Content"). By providing Your Content, you grant us a limited license to use, modify,
                and create derivative works solely for the purpose of delivering our services to you.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Our Work Product</h3>
              <p className="text-muted-foreground leading-relaxed">
                Upon full payment, you receive ownership of the final deliverables created specifically for you.
                However, we retain the right to use samples of our work for portfolio, marketing, and promotional
                purposes unless otherwise agreed in writing.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">PodLab Property</h3>
              <p className="text-muted-foreground leading-relaxed">
                All proprietary methodologies, frameworks, templates, and processes developed by PodLab remain our
                exclusive property. This includes our lab frameworks (AssetsLab, BrandLab, SiteLab, VideoSalesLab,
                ExpansionLab) and associated materials.
              </p>
            </div>

            {/* Client Responsibilities */}
            <div>
              <h2 className="h3 text-foreground mb-4">Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">As a client, you agree to:</p>
              <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                <li>Provide accurate and complete information as requested</li>
                <li>Deliver required materials, feedback, and approvals in a timely manner</li>
                <li>Ensure you have the right to use all content you provide to us</li>
                <li>Not use our services for any unlawful or prohibited purpose</li>
                <li>Maintain the confidentiality of any proprietary information shared</li>
                <li>Treat our team with respect and professionalism</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="h3 text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, PodLab shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including without limitation, loss of profits, data, use,
                goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                <li>Your access to or use of (or inability to access or use) our services</li>
                <li>Any conduct or content of any third party</li>
                <li>Any content obtained from our services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                In no event shall our total liability exceed the amount you paid to us in the twelve (12) months
                preceding the claim.
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="h3 text-foreground mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or
                implied, regarding the operation of our services or the information, content, or materials included
                therein. We do not guarantee specific results from use of our services.
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="h3 text-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to defend, indemnify, and hold harmless PodLab and its officers, directors, employees,
                contractors, and agents from and against any claims, damages, obligations, losses, liabilities, costs,
                or debt arising from:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party right, including intellectual property rights</li>
                <li>Any claim that Your Content caused damage to a third party</li>
              </ul>
            </div>

            {/* Termination */}
            <div>
              <h2 className="h3 text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability,
                for any reason, including without limitation if you breach these Terms. Upon termination, your right to
                use our services will immediately cease.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For ongoing service agreements, termination terms will be specified in the individual contract. All
                provisions of these Terms which by their nature should survive termination shall survive, including
                ownership provisions, warranty disclaimers, and limitations of liability.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="h3 text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Nevada,
                without regard to its conflict of law provisions. Any disputes arising under these Terms shall be
                resolved in the courts located in Clark County, Nevada.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="h3 text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material
                change will be determined at our sole discretion.
              </p>
            </div>

            {/* Severability */}
            <div>
              <h2 className="h3 text-foreground mb-4">Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will
                remain in full force and effect. The invalid or unenforceable provision will be modified to the minimum
                extent necessary to make it valid and enforceable.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="h3 text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-background rounded-xl border border-border">
                <p className="text-foreground font-semibold">PodLab</p>
                <p className="text-muted-foreground">Las Vegas, NV</p>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a href="mailto:legal@podlab.studio" className="text-primary hover:underline">
                    legal@podlab.studio
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
