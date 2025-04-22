import Image from "next/image"
import Link from "next/link"
import { Anchor, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Anchor className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">DeepWaterAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">
              How It Works
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="/testimonials" className="text-sm font-medium text-blue-600 transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log In
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-blue-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="bg-blue-500 hover:bg-blue-500 text-white mb-4">TESTIMONIALS</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Captains, Loved by Crews</h1>
              <p className="text-xl opacity-90 mb-8">
                See what professional anglers and tournament teams are saying about DeepWaterAI.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative">
                  <Image
                    src="/placeholder.svg?height=600&width=400&query=professional fishing captain with trophy fish"
                    alt="Captain Mike Reynolds"
                    width={400}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <Quote className="h-12 w-12 text-blue-100 mb-6" />
                  <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                    "We zeroed in on fish 3 hours faster. This app is lethal. In 20 years of tournament fishing, I've
                    never seen anything that gives us this kind of edge."
                  </p>
                  <div>
                    <p className="font-bold text-lg">Captain Mike Reynolds</p>
                    <p className="text-gray-500">White Marlin Open Champion, Tampa, FL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=200&query=female fishing captain portrait"
                        alt="Sarah Johnson"
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Charter Captain, Key West, FL</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "The thermocline feature helped us lock in on tuna during dead zones. My clients are amazed at how
                  consistently we find fish now."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=200&query=fishing boat captain with sunglasses"
                        alt="Team Reel Addiction"
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Team Reel Addiction</p>
                    <p className="text-sm text-gray-500">Tournament Team, Cabo San Lucas</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "This gave us the edge we needed for our tournament season. The offline mode is crucial when we're 100
                  miles offshore with no signal."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=200&query=older experienced fishing captain"
                        alt="Captain James Wilson"
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Captain James Wilson</p>
                    <p className="text-sm text-gray-500">Charter Service, San Diego, CA</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "I was skeptical about AI for fishing, but the results speak for themselves. We've increased our catch
                  rate by at least 30% this season."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=200&query=young fishing guide with marlin"
                        alt="Alex Martinez"
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Alex Martinez</p>
                    <p className="text-sm text-gray-500">Fishing Guide, Panama City</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "The species-specific targeting is incredible. We can switch between targeting marlin and mahi in the
                  same day with pinpoint accuracy."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=200&query=fishing tournament team with trophy"
                        alt="Blue Water Bandits"
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Blue Water Bandits</p>
                    <p className="text-sm text-gray-500">Tournament Team, Gulf Shores, AL</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "The tournament mode with private overlays gives us a serious competitive advantage. Worth every penny
                  of the subscription."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=200&query=father and son fishing team"
                        alt="The Andersons"
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">The Andersons</p>
                    <p className="text-sm text-gray-500">Family Fishing Team, Outer Banks, NC</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "As a family team, we don't have the resources of the big boats. This app levels the playing field and
                  has helped us place in our last three tournaments."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonial */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">See DeepWaterAI in Action</h2>
              <p className="text-xl text-gray-600">
                Watch how tournament teams are using our platform to find and catch more fish.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 h-16 w-16 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </Button>
              </div>
              <Image
                src="/placeholder.svg?height=600&width=1000&query=fishing boat using app to catch tuna offshore"
                alt="DeepWaterAI in Action"
                width={1000}
                height={600}
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join 5,000+ Serious Anglers</h2>
              <p className="text-xl opacity-90 mb-8">
                Start using AI to fish smarter and see why captains and crews trust DeepWaterAI.
              </p>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Start Your Free 7-Day Trial
              </Button>
              <p className="mt-4 text-sm opacity-80">No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Anchor className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">DeepWaterAI</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Advanced AI-powered offshore fishing intelligence for serious anglers and tournament teams.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-white">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Fishing Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Species Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400 text-center">
            <p>© {new Date().getFullYear()} DeepWaterAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
