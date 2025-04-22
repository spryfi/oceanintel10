import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SharedHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/oceanintel-logo.svg"
                alt="OceanIntel Logo"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
            </div>
            <span className="text-xl font-bold">OceanIntel</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/pricing" className="text-sm font-medium hover:text-blue-700 transition-colors">
            Pricing
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-blue-700 transition-colors">
            FAQ
          </Link>
          <Link href="/merch" className="text-sm font-medium hover:text-blue-700 transition-colors">
            Merch
          </Link>
          <Link href="/order" className="text-sm font-medium hover:text-blue-700 transition-colors">
            Custom Analysis
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log In
            </Button>
          </Link>
          <Link href="/waitlist">
            <Button
              size="sm"
              className="bg-blue-700 hover:bg-blue-800 shadow-md hover:shadow-blue-700/20 hover:scale-105 transition-all"
            >
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
