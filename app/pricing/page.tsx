import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PageLayout from "@/components/page-layout"

const pricingPlans = [
  {
    title: "Pro Angler",
    description: "Perfect for recreational anglers who fish 1-2 times per month",
    price: "$29",
    period: "monthly",
    features: [
      "Basic surface temperature maps",
      "Single region access",
      "3-day forecasts",
      "Mobile app access",
      "Basic Bite Index for surface species",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    title: "Captain's Circle",
    description: "Ideal for charter captains and serious offshore anglers",
    price: "$79",
    period: "monthly",
    features: [
      "All Pro Angler features",
      "Depth maps and thermocline data",
      "Species-specific AI scoring",
      "Catch logging and history",
      "7-day forecasts",
      "Basic offline mode",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    title: "Tournament Elite",
    description: "The ultimate edge for competitive tournament teams",
    price: "$199",
    period: "monthly",
    features: [
      "All Captain's Circle features",
      "Access to all regions",
      "3D ocean view",
      "Tournament mode with private overlays",
      "Advanced offline access",
      "14-day forecasts",
      "Priority support",
    ],
    cta: "Get Started",
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <PageLayout
      title="Choose the Plan That Fits You"
      subtitle="Select the perfect plan for your fishing needs. All plans include a 7-day free trial."
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-blue-500 shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge className="bg-blue-500 hover:bg-blue-600">Most Popular</Badge>
                </div>
              )}
              <CardHeader className={`text-center ${plan.popular ? "pt-8" : ""}`}>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/signup" className="w-full">
                  <Button
                    className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg border border-blue-100 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-blue-800">Can I change my plan later?</h3>
              <p className="text-gray-700">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next
                billing cycle.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-blue-800">Is there a contract or commitment?</h3>
              <p className="text-gray-700">
                No, all plans are subscription-based with no long-term commitment. You can cancel anytime.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-blue-800">How accurate are the predictions?</h3>
              <p className="text-gray-700">
                Our AI models have demonstrated a 78% accuracy rate in predicting prime fishing zones for target
                species.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-blue-800">What regions do you cover?</h3>
              <p className="text-gray-700">
                We currently cover the Gulf of Mexico, Atlantic, Pacific, Caribbean, and Sea of Cortez.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
