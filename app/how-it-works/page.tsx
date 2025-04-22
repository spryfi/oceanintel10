import Image from "next/image"
import Link from "next/link"
import { Anchor, MapPin, BarChart3, Map, Bell, Fish } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HowItWorksPage() {
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
            <Link href="/how-it-works" className="text-sm font-medium text-blue-600 transition-colors">
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
              <Badge className="bg-blue-500 hover:bg-blue-500 text-white mb-4">HOW IT WORKS</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">From Data to Catches in Five Simple Steps</h1>
              <p className="text-xl opacity-90 mb-8">
                Our AI-powered platform transforms complex oceanographic data into actionable fishing intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
                <div className="md:w-1/2 order-2 md:order-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-6">
                    1
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Pick Your Region</h2>
                  <p className="text-gray-600 mb-6">
                    Choose Gulf of Mexico, Atlantic, Pacific, Caribbean, or Sea of Cortez. Our region-specific data
                    ensures you get the most accurate forecasts for your exact fishing grounds.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>High-resolution regional data</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Local species targeting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Customized to your fishing grounds</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <MapPin className="absolute top-4 right-4 h-8 w-8 text-blue-600 z-10" />
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=map showing different fishing regions with selection interface"
                      alt="Pick Your Region"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
                <div className="md:w-1/2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <BarChart3 className="absolute top-4 right-4 h-8 w-8 text-blue-600 z-10" />
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=AI analyzing ocean data with visualization of satellite and buoy data"
                      alt="AI Runs the Forecast"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-6">
                    2
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">AI Runs the Forecast</h2>
                  <p className="text-gray-600 mb-6">
                    Our advanced AI analyzes real-time satellite, buoy, and weather data to create a comprehensive
                    picture of ocean conditions at multiple depths.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Multi-layer data analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Species-specific behavior models</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Hourly data updates</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
                <div className="md:w-1/2 order-2 md:order-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-6">
                    3
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">View Your Bite Map</h2>
                  <p className="text-gray-600 mb-6">
                    High-resolution scoring maps for each target species show you exactly where to fish, with
                    color-coded zones indicating the highest probability areas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Color-coded bite potential zones</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Depth-specific recommendations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Time-of-day optimization</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <Map className="absolute top-4 right-4 h-8 w-8 text-blue-600 z-10" />
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=fishing heatmap with high resolution scoring for different species"
                      alt="View Your Bite Map"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
                <div className="md:w-1/2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <Fish className="absolute top-4 right-4 h-8 w-8 text-blue-600 z-10" />
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=mobile app interface for logging fish catches with GPS coordinates"
                      alt="Fish + Report"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-6">
                    4
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Fish + Report</h2>
                  <p className="text-gray-600 mb-6">
                    Log catches to refine forecasts and track your own patterns. Each report improves the AI's accuracy
                    for your specific fishing grounds.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Simple catch logging interface</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>GPS coordinates automatically recorded</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Personal fishing history analytics</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 order-2 md:order-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-6">
                    5
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Smart Alerts</h2>
                  <p className="text-gray-600 mb-6">
                    Stay ahead of key bite windows, weather shifts, and bait movement with intelligent notifications
                    tailored to your fishing preferences.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Customizable alert thresholds</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Weather condition changes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Prime bite window notifications</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <Bell className="absolute top-4 right-4 h-8 w-8 text-blue-600 z-10" />
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=mobile notification screen showing fishing alerts and bite windows"
                      alt="Get Smart Alerts"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From Dock to Drop — We've Got You Covered</h2>
              <p className="text-xl opacity-90 mb-8">
                Stop guessing where the fish are. Start using advanced AI to find and catch more fish.
              </p>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Start Forecasting Smarter Today
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
