import Image from "next/image"
import {
  BarChart3,
  Thermometer,
  Droplets,
  Layers,
  Waves,
  Fish,
  BarChart2,
  CloudRain,
  Mountain,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProprietaryModelingSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Ocean blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 opacity-5">
          <Image src="/sonar-lines.png" alt="Sonar lines texture" fill className="object-cover" />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Built by a charter captain. Refined by AI.
          </h2>
          <div className="inline-flex items-center gap-2 mb-4 bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            PROPRIETARY PELAGIX™ MODEL • 9 YEARS OF REFINEMENT
          </div>
          <p className="text-xl text-gray-700">
            Decades of real-world success manually blending ocean data into winning forecasts — now enhanced with
            automation and expert-reviewed for precision. Every analysis is rooted in proven results and built to give
            serious anglers the edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm transform hover:translate-y-[-2px] transition-transform">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-2 rounded-full flex-shrink-0">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Sea Surface Temperature (SST)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm transform hover:translate-y-[-2px] transition-transform">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-2 rounded-full flex-shrink-0">
                  <Thermometer className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Thermocline sharpness at strike depth</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm transform hover:translate-y-[-2px] transition-transform">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-2 rounded-full flex-shrink-0">
                  <Droplets className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Chlorophyll-A concentration</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm transform hover:translate-y-[-2px] transition-transform">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-2 rounded-full flex-shrink-0">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Subsurface temperature layers</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm transform hover:translate-y-[-2px] transition-transform">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-2 rounded-full flex-shrink-0">
                  <Waves className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Current breaks and eddy detection</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm transform hover:translate-y-[-2px] transition-transform">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-2 rounded-full flex-shrink-0">
                  <Fish className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Predicted bait concentrations</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm transform hover:translate-y-[-2px] transition-transform">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-2 rounded-full flex-shrink-0">
                  <BarChart2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Historical catch scoring overlays</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm transform hover:translate-y-[-2px] transition-transform">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-2 rounded-full flex-shrink-0">
                  <CloudRain className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Atmospheric pressure and fronts</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm transform hover:translate-y-[-2px] transition-transform">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-2 rounded-full flex-shrink-0">
                  <Mountain className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Bathymetry and drop-off proximity</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm transform hover:translate-y-[-2px] transition-transform">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-2 rounded-full flex-shrink-0">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Many other real-time data feeds</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
              <Image
                src="/ai-modeling-visualization.png"
                alt="AI Modeling Visualization"
                width={600}
                height={500}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-transparent flex items-center justify-center">
                <div className="text-white p-6 max-w-md">
                  <h3 className="text-2xl font-bold mb-2">AI-Powered Analysis</h3>
                  <p className="mb-4">
                    Our proprietary algorithms analyze multiple data layers simultaneously to identify prime fishing
                    zones.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">Real-time</span>
                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">High-resolution</span>
                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">Species-specific</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-blue-700 mb-6">
            Built for serious offshore anglers who demand clarity, accuracy, and results.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 shadow-lg transform hover:translate-y-[-2px] transition-transform"
          >
            Experience the Difference
          </Button>
        </div>
      </div>
    </section>
  )
}
