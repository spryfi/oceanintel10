"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

const faqs = [
  {
    question: "How do I get an invite code?",
    answer:
      "Invite codes are distributed based on your position on our waitlist and the availability in your fishing region. Join the waitlist on our homepage, and you'll receive an email with your invite code when your region becomes available. Priority is given to professional captains and tournament anglers.",
  },
  {
    question: "What regions are currently available?",
    answer:
      "We're currently active in the Gulf of Mexico, Florida Atlantic coast, and parts of the Caribbean. We're expanding to the Pacific coast and international waters in phases. Join the waitlist to be notified when your region becomes available.",
  },
  {
    question: "Can I use OceanIntel offshore?",
    answer:
      "Yes! OceanIntel is designed for offshore use. Our Captain's Circle and Tournament Elite plans include offline capabilities that allow you to download forecasts before heading out. The mobile app is optimized for use in low-connectivity environments.",
  },
  {
    question: "How accurate are the forecasts?",
    answer:
      "Our Pelagix™ model has demonstrated a 78% accuracy rate in predicting prime fishing zones for target species. The system continuously improves as more catch data is logged. Many tournament winners and charter captains rely on our forecasts daily.",
  },
  {
    question: "What makes OceanIntel different from other fishing apps?",
    answer:
      "Unlike basic SST charts or generic fishing apps, OceanIntel uses our proprietary Pelagix™ model that combines 30+ environmental variables with years of real fishing data. We provide species-specific forecasts, not just general conditions, giving you precise locations to start your day.",
  },
  {
    question: "Can I share my account with my crew?",
    answer:
      "The Tournament Elite plan includes team sharing capabilities, allowing you to share access with your fishing crew or tournament team. Other plans are limited to a single user for security and performance reasons.",
  },
  {
    question: "How often are forecasts updated?",
    answer:
      "Forecasts are updated daily with the latest oceanographic data and model runs. Premium plans receive priority processing and can access forecasts earlier in the day.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "No, all plans are subscription-based with no long-term commitment. You can cancel anytime, and your access will continue until the end of your current billing period.",
  },
]

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <PageLayout title="Frequently Asked Questions" subtitle="Find answers to common questions about OceanIntel">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex gap-4">
          <Input
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white shadow-md"
          />
          {searchTerm && (
            <Button variant="ghost" onClick={() => setSearchTerm("")}>
              Clear
            </Button>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 hover:bg-blue-50 text-left font-medium text-blue-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}

            {filteredFaqs.length === 0 && (
              <div className="p-6 text-center">
                <p className="text-gray-500">No questions found matching "{searchTerm}"</p>
                <Button variant="link" onClick={() => setSearchTerm("")} className="mt-2">
                  Clear search
                </Button>
              </div>
            )}
          </Accordion>
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-md">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Still have questions?</h2>
          <p className="text-gray-700 mb-4">
            Our team is ready to help you get the most out of OceanIntel. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-700 hover:bg-blue-800">Contact Support</Button>
            <Button variant="outline">Schedule a Demo</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
