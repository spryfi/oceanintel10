import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import SharedHeader from "@/components/shared-header"
import SharedFooter from "@/components/shared-footer"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-blue-50/30">
      <SharedHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden py-16 md:py-24">
          {/* Ocean background with gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/offshore-fishing.png"
              alt="Ocean fishing with boat and wake"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-700/80"></div>
          </div>

          {/* Light wave texture overlay */}
          <div className="absolute inset-0 z-0 opacity-15">
            <Image src="/wave-texture.png" alt="Wave texture" fill className="object-cover" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">You're Off the Grid</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                The page you're looking for isn't charted. Let's get you back on course.
              </p>

              <div className="relative w-64 h-64 mx-auto mb-8">
                <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping-slow"></div>
                <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping-slow animation-delay-1000"></div>
                <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping-slow animation-delay-2000"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-full w-full h-full flex items-center justify-center border border-white/30">
                  <span className="text-8xl font-bold text-white">404</span>
                </div>
              </div>

              <Link href="/">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-blue-700/20 hover:scale-105 transition-all"
                >
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SharedFooter />
    </div>
  )
}
