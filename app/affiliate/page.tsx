"use client"

import type React from "react"
import { benefits, commissions, idealPartners } from "@/data/affiliate" // Assuming data is imported from a separate file

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { ArrowRight, Users, Check, CheckCircle } from "lucide-react"

export default function AffiliatePage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Partner Program
            </div>
            <h1 className="h1 text-foreground">
              Earn by referring <span className="text-primary text-glow-green">founders to PodLab.</span>
            </h1>
            <p className="mt-6 subheading text-muted-foreground">
              Know founders who need premium content? Join our affiliate program and earn 20% commission on every
              referral. No caps. Recurring revenue on subscriptions.
            </p>
            <div className="mt-8">
              <a href="#apply" className="btn-primary">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Why Partner</p>
            <h2 className="h2 text-foreground">Generous commissions. Simple program.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="p-6 bg-background rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="h3 text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Commission Table */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Commission Structure</p>
            <h2 className="h2 text-foreground">What you can earn</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-secondary text-sm font-semibold text-foreground">
                <div>Service</div>
                <div>Commission</div>
                <div>Potential Earnings</div>
              </div>
              {commissions.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-4 border-t border-border">
                  <div className="text-foreground">{item.service}</div>
                  <div className="text-primary font-medium">{item.rate}</div>
                  <div className="text-muted-foreground">{item.example}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Partners */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Who This Is For</p>
              <h2 className="h2 text-foreground">Ideal affiliate partners</h2>
              <p className="mt-6 subheading text-muted-foreground">
                Our best affiliates are people who work with founders and business owners. If your network includes
                people who need content, this program is for you.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {idealPartners.map((partner, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Apply Now</p>
            <h2 className="h2 text-foreground">Join the Partner Program</h2>
          </div>

          {isSubmitted ? (
            <div className="p-12 bg-card rounded-2xl border border-primary text-center">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="h3 text-foreground mb-4">Application Received</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Thanks for applying. We review applications within 48 hours and will reach out with next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 bg-card rounded-2xl border border-border space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Smith" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website or Social Profile *</Label>
                <Input id="website" placeholder="https://yoursite.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="audience">Tell us about your audience *</Label>
                <Textarea
                  id="audience"
                  placeholder="Who do you work with? How large is your audience? What platforms are you active on?"
                  className="min-h-24"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="promotion">How do you plan to promote PodLab?</Label>
                <Textarea
                  id="promotion"
                  placeholder="Email list, social media, podcast, community, etc."
                  className="min-h-24"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
