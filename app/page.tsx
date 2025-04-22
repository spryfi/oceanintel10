import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Check, Fuel, Target, Smartphone, Trophy, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import ProprietaryModelingSection from "@/components/proprietary-modeling-section"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-blue-50/30">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <Image
                src="/oceanintel-logo.svg"
                alt="OceanIntel Logo"
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
              />
            </div>
            <span className="text-xl font-bold">OceanIntel</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#problem" className="text-sm font-medium hover:text-blue-700 transition-colors">
              The Problem
            </Link>
            <Link href="#solution" className="text-sm font-medium hover:text-blue-700 transition-colors">
              Our Solution
            </Link>
            <Link href="#credibility" className="text-sm font-medium hover:text-blue-700 transition-colors">
              Credibility
            </Link>
            <Link href="#value" className="text-sm font-medium hover:text-blue-700 transition-colors">
              Value
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log In
            </Button>
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

      <main className="flex-1">
        {/* Hero Section */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-white space-y-4">
                <Badge className="bg-blue-600 hover:bg-blue-600 text-white mb-2 shadow-lg">
                  Elite Fishing Intelligence
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Where You Fish Tomorrow Starts With What You Know Today
                </h1>
                <p className="text-xl opacity-95 max-w-lg">
                  OceanIntel is elite fishing intelligence — the same high-resolution ocean modeling once used privately
                  by tournament captains and offshore guides, now available to a select few.
                </p>
                <p className="text-xl opacity-95 max-w-lg">
                  🎟️ Access is limited. We're rolling out invites region by region while we scale the platform. Join the
                  waitlist now to get your <strong>invitation code</strong> when your zone opens.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/waitlist">
                    <Button
                      size="lg"
                      className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg transition-all hover:shadow-xl hover:scale-105"
                    >
                      Request Early Access
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 shadow-md">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-xs text-white shadow-md"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm opacity-90">
                    <span className="font-bold">500+</span> tournament anglers trust OceanIntel
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/20 transform hover:scale-[1.01] transition-transform">
                  <Image
                    src="/fishing-ai-analysis.png"
                    alt="OceanIntel App Interface"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-700 to-blue-600 text-white p-4 rounded-lg shadow-xl">
                  <p className="text-sm font-medium">Average catch increase</p>
                  <p className="text-3xl font-bold">37%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the page content remains the same */}
        {/* Logos Section */}
        <section className="py-8 bg-gradient-to-r from-blue-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src="/sonar-lines.png" alt="Sonar lines texture" fill className="object-cover" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-blue-700 font-medium mb-4">
                TRUSTED BY TOP CHARTER CAPTAINS AND TOURNAMENT TEAMS
              </p>
              <div className="flex flex-wrap justify-center gap-6 md:gap-10 bg-white/70 py-4 px-6 rounded-full shadow-md">
                {["White Marlin Open", "Bisbee's", "Los Sueños", "The Billfish Foundation", "IGFA"].map((logo) => (
                  <div key={logo} className="text-gray-700 font-semibold">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="py-16 relative overflow-hidden">
          {/* Subtle ocean blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Great Captains Don't Rely on Luck</h2>
                <div className="space-y-3">
                  <p className="text-lg">
                    Every angler wakes up with the same question: <em>where do we go today?</em>
                  </p>
                  <p className="text-lg">
                    SST charts show surface temps. Most apps are generic. Even some premium tools still rely on
                    guesswork.
                  </p>
                  <p className="text-lg">
                    That's fine for amateurs. But for charter captains, tournament teams, and serious anglers — the
                    difference between a good guess and good intel can cost you{" "}
                    <strong>fuel, time, and reputation</strong>.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-6 rounded-lg shadow-lg transform hover:translate-y-[-2px] transition-transform">
                  <p className="text-xl font-medium">
                    If your crew is trusting yesterday's heat map, you're already behind.
                  </p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                <Image
                  src="/confused_sst_map.png"
                  alt="Split-view of vague SST chart next to a captain scanning options at sea"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-16 relative overflow-hidden">
          {/* Light water texture background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white">
            <div className="absolute inset-0 opacity-5">
              <Image src="/sonar-lines.png" alt="Sonar lines texture" fill className="object-cover" />
            </div>
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                🎯 Stop Chasing Hunches. Start Fishing With Precision.
              </h2>
              <div className="max-w-3xl mx-auto mb-6">
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-5 rounded-lg shadow-lg border-2 border-blue-600 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-600 text-xs font-bold px-4 py-1 transform rotate-0 translate-x-0 -translate-y-0 shadow-md">
                    PROPRIETARY MODEL
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-700 p-3 rounded-full flex-shrink-0 mt-1">
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
                        className="text-white"
                      >
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Pelagix™ Model: 9 Years in Development</h3>
                      <p className="text-base opacity-95 mb-2">
                        <strong>Not just another blend of public data.</strong> Our proprietary algorithms were designed
                        by a nerdy charter captain who combined publicly available oceanographic data with enriched
                        derived variables to create something entirely new.
                      </p>
                      <p className="text-base opacity-95">
                        Each prediction is the result of thousands of real-world fishing trips and continuous
                        refinement. This is the edge that tournament winners have relied on for years.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xl text-gray-700">
                  OceanIntel is powered by <strong className="text-blue-700">Pelagix™</strong>, a proprietary ocean
                  modeling system developed by our founder — a full-time captain — and refined over 8+ years on the
                  water.
                </p>
                <p className="text-xl text-gray-700">
                  It fuses <strong className="text-blue-700">30+ environmental signals</strong> into a single,
                  daily-updated strike zone forecast. We don't share the formula — but you'll know it works the moment
                  you use it.
                </p>
                <p className="text-xl text-gray-700">
                  From marlin and mahi to tuna and sails, you'll see{" "}
                  <strong className="text-blue-700">exactly where to start</strong> your day — without wasting hours or
                  burning miles.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
              <div className="order-2 md:order-1">
                <ul className="space-y-3">
                  {[
                    "Species-specific bite zone forecasts",
                    "Forecasts updated daily by region",
                    "Mobile-optimized for dockside or onboard use",
                    "Adaptive scoring with historical learning",
                    "Trusted privately by tournament winners and fleet captains",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 flex-shrink-0">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-600 p-4 rounded-r-lg shadow-md transform hover:translate-y-[-2px] transition-transform">
                  <p className="text-lg">
                    💡 <em>Powered by Pelagix™</em> — Our founder named the model years ago. The name stuck. So did the
                    results.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 relative rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                <Image
                  src="/pelagix_interface_map.png"
                  alt="Zoomed-in high contrast map with fish icons, bite zones, currents"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Proprietary Modeling Section */}
        <ProprietaryModelingSection />

        {/* Credibility Section */}
        <section id="credibility" className="py-16 relative overflow-hidden">
          {/* Subtle ocean blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  Developed Offshore. Proven in Silence. Released with Intention.
                </h2>
                <div className="space-y-3">
                  <p className="text-lg text-gray-700">
                    OceanIntel was never a product. It was a private weapon — used by a select few for years.
                  </p>
                  <p className="text-lg text-gray-700">
                    Built by a charter captain who refused to fish blind, the model was tested in tournament seasons and
                    tuned trip after trip.
                  </p>
                  <p className="text-lg text-gray-700">
                    Now we're releasing it slowly, one region at a time. If you're on the list, you'll be the first to
                    unlock access.
                  </p>
                </div>
                <Card className="bg-gradient-to-r from-blue-50 to-white border-blue-200 shadow-lg transform hover:translate-y-[-2px] transition-transform">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-start">
                      <div className="mb-4 text-4xl text-blue-600">"</div>
                      <p className="mb-4 text-gray-700 text-lg italic">
                        I used to cross my fingers. Now I cross-reference my OceanIntel chart. It's dead-on.
                      </p>
                      <div>
                        <p className="font-semibold">Captain T. Jenkins</p>
                        <p className="text-sm text-gray-500">6-time tournament finalist</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                <Image
                  src="/trusted_captain_with_chart.png"
                  alt="Trusted captain with chart"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Section */}
        <section id="value" className="py-16 relative overflow-hidden">
          {/* Light water texture background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white">
            <div className="absolute inset-0 opacity-5">
              <Image src="/wave-texture.png" alt="Wave texture" fill className="object-cover" />
            </div>
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                More Fish. Less Fuel. Smarter Calls.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
              <div>
                <ul className="space-y-3">
                  {[
                    "Stop wasting time on dead water",
                    "Save fuel by running direct to the bite",
                    "Give charter clients more productive days",
                    "Make informed calls based on real intelligence",
                    "Earn the edge that separates pros from the pack",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 flex-shrink-0">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                <Image
                  src="/optimized_routes_overlay.png"
                  alt="GPS track comparison — smart vs. inefficient routes"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
              <Card className="border-0 shadow-lg bg-gradient-to-b from-white to-blue-50 transform hover:translate-y-[-2px] transition-transform">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 shadow-md">
                    <Target className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Precision Targeting</h3>
                  <p className="text-gray-700">
                    Go straight to the action with species-specific strike zone forecasts.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-b from-white to-blue-50 transform hover:translate-y-[-2px] transition-transform">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 shadow-md">
                    <Fuel className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Fuel Savings</h3>
                  <p className="text-gray-700">
                    Stop burning diesel searching. Our precise forecasts direct you to productive zones.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-b from-white to-blue-50 transform hover:translate-y-[-2px] transition-transform">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 shadow-md">
                    <Smartphone className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Mobile Access</h3>
                  <p className="text-gray-700">
                    Check forecasts dockside or offshore with our mobile-optimized interface.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-b from-white to-blue-50 transform hover:translate-y-[-2px] transition-transform">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 shadow-md">
                    <Trophy className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Tournament Edge</h3>
                  <p className="text-gray-700">
                    Gain the competitive advantage with proprietary insights that put you on fish.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Limited Access Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Dark blue background with wave texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800">
            <div className="absolute inset-0 opacity-10">
              <Image src="/sonar-lines.png" alt="Sonar lines texture" fill className="object-cover" />
            </div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <div className="flex justify-center mb-6">
                <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold px-5 py-2 rounded-full transform -rotate-2 shadow-lg">
                  Invite-Only Beta Access
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">This Isn't For Everyone — Yet.</h2>

              <div className="space-y-3 mb-6">
                <p className="text-lg">
                  OceanIntel is in <strong>invite-only rollout</strong> while we scale the platform to ensure quality
                  and performance.
                </p>
                <p className="text-lg">
                  Our forecasts require significant computation, and accuracy is everything. That's why we're onboarding
                  slowly.
                </p>
                <p className="text-lg">
                  We're issuing <strong>invitation codes</strong> based on waitlist priority and regional readiness.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-800/80 to-blue-700/80 p-6 rounded-lg border border-blue-600/50 shadow-lg mb-6 transform hover:translate-y-[-2px] transition-transform">
                <p className="text-xl font-medium">
                  🎟️ Want in? Join the waitlist. First come, first served.
                  <br />
                  When your region unlocks, you'll be the first to know — and the first to fish smarter.
                </p>
              </div>

              <div className="flex justify-center">
                <Link href="/waitlist">
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg transform hover:translate-y-[-2px] hover:scale-105 transition-all hover:shadow-blue-500/20"
                  >
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-br from-blue-50/70 to-white relative overflow-hidden">
          {/* Light water texture background */}
          <div className="absolute inset-0 opacity-5">
            <Image src="/wave-texture.png" alt="Wave texture" fill className="object-cover" />
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-md">
                SUCCESS STORIES
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Trusted by Professional Captains</h2>
              <p className="text-xl text-gray-700">
                See how OceanIntel is transforming offshore fishing success rates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                quote="After using OceanIntel for just one season, we've increased our catch rate by over 40%. The thermocline analysis alone is worth the subscription."
                author="Capt. Mike Reynolds"
                title="Tournament Winner, White Marlin Open"
                image="/weathered-captain.png"
              />
              <TestimonialCard
                quote="The offline capability is a game-changer. We can download all the data before heading 100 miles offshore and still have all the AI recommendations available."
                author="Sarah Johnson"
                title="Charter Captain, Florida Keys"
                image="/determined-captain.png"
              />
              <TestimonialCard
                quote="As a tournament team, the private scoring overlays give us a competitive edge. We've placed in the money in our last three tournaments using OceanIntel."
                author="Team Reel Addiction"
                title="Bisbee's Black & Blue Winners"
                image="/victorious-anglers.png"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 relative overflow-hidden">
          {/* Elite dark blue gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700">
            <div className="absolute inset-0 opacity-15">
              <Image src="/wave-texture.png" alt="Wave texture" fill className="object-cover" />
            </div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Be First. Be Smarter. Be Ready.</h2>
              <p className="text-xl opacity-95 mb-6 max-w-2xl mx-auto">
                OceanIntel is opening slowly. Don't wait until your buddy's already out-fishing you.
                <br />
                Join the list. Claim your invite. Fish like you already know where they are.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <Link href="/waitlist">
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg transform hover:translate-y-[-2px] hover:scale-105 transition-all hover:shadow-blue-500/20"
                  >
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 shadow-md">
                  Try a Sample Forecast
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 shadow-md">
                  Learn More About Pelagix
                </Button>
              </div>

              <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="bg-gradient-to-r from-blue-800/70 to-blue-700/70 px-4 py-2 rounded-full border border-blue-600/50 shadow-md">
                  <span className="text-sm font-medium">8,129 anglers waiting... you're next.</span>
                </div>
                <div className="bg-gradient-to-r from-blue-800/70 to-blue-700/70 px-4 py-2 rounded-full border border-blue-600/50 shadow-md">
                  <span className="text-sm font-medium">Invite-Only Beta Access</span>
                </div>
                <div className="bg-gradient-to-r from-blue-800/70 to-blue-700/70 px-4 py-2 rounded-full border border-blue-600/50 shadow-md">
                  <span className="text-sm font-medium">Early access users shape the future</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
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
          <div className="border-t border-blue-800 mt-10 pt-8 text-sm text-gray-400 text-center">
            <p>© {new Date().getFullYear()} OceanIntel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
