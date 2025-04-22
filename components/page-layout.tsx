import type { ReactNode } from "react"
import Image from "next/image"
import SharedHeader from "./shared-header"
import SharedFooter from "./shared-footer"

interface PageLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
  backgroundImage?: boolean
}

export default function PageLayout({ children, title, subtitle, backgroundImage = true }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-blue-50/30">
      <SharedHeader />

      <main className="flex-1">
        {/* Page Header */}
        <section className="relative overflow-hidden py-16 md:py-20">
          {/* Ocean background with gradient overlay */}
          {backgroundImage && (
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
          )}

          {/* Light wave texture overlay */}
          <div className="absolute inset-0 z-0 opacity-15">
            <Image src="/wave-texture.png" alt="Wave texture" fill className="object-cover" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
              {subtitle && <p className="text-xl text-white/90 max-w-2xl mx-auto">{subtitle}</p>}
            </div>
          </div>
        </section>

        {/* Page Content */}
        <section className="py-12 relative">
          {/* Subtle ocean blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white">
            <div className="absolute inset-0 opacity-5">
              <Image src="/sonar-lines.png" alt="Sonar lines texture" fill className="object-cover" />
            </div>
          </div>

          <div className="container relative z-10">{children}</div>
        </section>
      </main>

      <SharedFooter />
    </div>
  )
}
