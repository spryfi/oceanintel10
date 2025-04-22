import Image from "next/image"
import Link from "next/link"
import { Anchor, BarChart3, Wifi, Trophy, Map, Database, Target, Thermometer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function FeaturesPage() {
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
            <Link href="/features" className="text-sm font-medium text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">
              How It Works
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="/testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
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
              <Badge className="bg-blue-500 hover:bg-blue-500 text-white mb-4">FEATURES</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Serious Anglers</h1>
              <p className="text-xl opacity-90 mb-8">
                Our AI-powered platform gives you the edge you need to find and catch more fish.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI Bite Potential Index</h3>
                <p className="text-gray-600">
                  Daily scoring maps powered by satellite, buoy, and environmental data to predict the best fishing
                  zones.
                </p>
                <div className="mt-6">
                  <Image
                    src="/fishing-heatmap-ai.png"
                    alt="AI Bite Potential Index"
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Species-Specific Intelligence</h3>
                <p className="text-gray-600">
                  Recommendations tuned to marlin, tuna, mahi, and more based on their unique behavior patterns.
                </p>
                <div className="mt-6">
                  <Image
                    src="/diverse-fish-data.png"
                    alt="Species-Specific Intelligence"
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Thermometer className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Thermocline & Depth Data</h3>
                <p className="text-gray-600">
                  Go beyond SST with subsurface insights at strike depth, showing where fish are actually feeding.
                </p>
                <div className="mt-6">
                  <Image
                    src="/ocean-thermocline-layers.png"
                    alt="Thermocline & Depth Data"
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Database className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real-Time Learning</h3>
                <p className="text-gray-600">
                  App gets smarter as you log catches, refining predictions based on actual results in your area.
                </p>
                <div className="mt-6">
                  <Image
                    src="/catch-log-interface.png"
                    alt="Real-Time Learning"
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Map className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Interactive Map</h3>
                <p className="text-gray-600">
                  High-resolution overlays, current breaks, eddies, and hotspots with intuitive controls.
                </p>
                <div className="mt-6">
                  <Image
                    src="/interactive-fishing-map.png"
                    alt="Interactive Map"
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Wifi className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Offline Mode</h3>
                <p className="text-gray-600">
                  Sync data and use offshore with no signal. All features available when you're miles from shore.
                </p>
                <div className="mt-6">
                  <Image
                    src="/placeholder.svg?height=200&width=400&query=mobile app with offline mode interface on boat"
                    alt="Offline Mode"
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Feature 7 */}
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow col-span-1 md:col-span-2 lg:col-span-3">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tournament Mode</h3>
                <p className="text-gray-600">
                  Private planning zones, optimal time windows, historical overlays, and team sharing for competitive
                  advantage.
                </p>
                <div className="mt-6">
                  <Image
                    src="/placeholder.svg?height=300&width=1000&query=fishing tournament dashboard with private planning zones and team sharing"
                    alt="Tournament Mode"
                    width={1000}
                    height={300}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Serious about fishing smarter?</h2>
              <p className="text-xl text-gray-600 mb-8">Start using data that actually matters.</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Free Trial
              </Button>
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
