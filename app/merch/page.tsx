import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import PageLayout from "@/components/page-layout"

const merchItems = [
  {
    name: "OceanIntel Performance Fishing Shirt",
    price: "$49.99",
    image: "/relaxed-angler.png",
    comingSoon: true,
  },
  {
    name: "Offshore Captain's Hat",
    price: "$29.99",
    image: "/weathered-angler.png",
    comingSoon: true,
  },
  {
    name: "Tournament Team Jersey",
    price: "$59.99",
    image: "/angler-camo.png",
    comingSoon: true,
  },
  {
    name: "OceanIntel Tumbler",
    price: "$24.99",
    image: "/lakeside-angler-tumbler.png",
    comingSoon: true,
  },
  {
    name: "Waterproof Phone Case",
    price: "$34.99",
    image: "/submerged-phone-case.png",
    comingSoon: true,
  },
  {
    name: "Pelagic Species Guide Poster",
    price: "$19.99",
    image: "/placeholder.svg?height=300&width=300&query=fish species poster",
    comingSoon: true,
  },
]

export default function MerchPage() {
  return (
    <PageLayout
      title="Official OceanIntel Gear"
      subtitle="Show your passion for smarter fishing with our premium apparel and accessories"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="relative h-64 bg-blue-50">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.comingSoon && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-600">Coming Soon</Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-blue-700 font-medium">{item.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <p className="text-sm text-gray-500">Pre-order available soon</p>
                <Badge variant="outline" className="text-blue-700 border-blue-200">
                  Premium
                </Badge>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg border border-blue-100 shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Join the OceanIntel Community</h2>
          <p className="text-lg text-gray-700 mb-6">
            Be the first to know when our merchandise store launches. All subscribers get early access and exclusive
            discounts.
          </p>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold px-5 py-2 rounded-full transform -rotate-2 shadow-lg">
            Coming Soon
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
