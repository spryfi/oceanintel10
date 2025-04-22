import Image from "next/image"
import Link from "next/link"

export default function SharedFooter() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="/oceanintel-logo.svg"
                  alt="OceanIntel Logo"
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">OceanIntel</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Advanced AI-powered offshore fishing intelligence for serious anglers and tournament teams.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-white">
                  Custom Analysis
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/login" className="hover:text-white">
                  Log In
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-white">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-white">
                  My Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms & Privacy
                </Link>
              </li>
              <li>
                <Link href="/merch" className="hover:text-white">
                  Merchandise
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="hover:text-white">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-10 pt-8 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} OceanIntel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
