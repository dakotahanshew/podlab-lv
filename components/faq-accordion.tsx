"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
    q: string
    a: string
}

interface FAQAccordionProps {
    faqs: FAQItem[]
    className?: string
}

export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
    return (
        <Accordion type="single" collapsible className={className}>
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-background rounded-2xl border border-border px-8 mb-6 last:mb-0"
                >
                    <AccordionTrigger className="text-foreground font-semibold text-lg md:text-xl text-left py-8 hover:no-underline">
                        {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pb-8">
                        {faq.a}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
