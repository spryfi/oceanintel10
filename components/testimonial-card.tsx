import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  title: string
  image: string
}

export default function TestimonialCard({ quote, author, title, image }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-b from-white to-blue-50 transform hover:translate-y-[-2px] transition-transform">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4 border-2 border-blue-100 shadow-md">
            <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
          <div className="mb-4 text-4xl text-blue-600">"</div>
          <p className="mb-4 text-gray-700">{quote}</p>
          <div>
            <p className="font-semibold text-blue-900">{author}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
