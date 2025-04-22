"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function WaitlistPage() {
  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the form data to the server
    alert("Thanks for joining the waitlist! We'll notify you when OceanIntel is available in your region.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Header */}
      <header className="border-b border-blue-800/50 bg-blue-900/90 backdrop-blur supports-[backdrop-filter]:bg-blue-900/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Image
                src="/oceanintel-logo.svg"
                alt="OceanIntel Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
            </div>
            <span className="text-xl font-bold">OceanIntel</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#problem" className="text-sm font-medium hover:text-blue-300 transition-colors">
              The Problem
            </Link>
            <Link href="/#solution" className="text-sm font-medium hover:text-blue-300 transition-colors">
              Our Solution
            </Link>
            <Link href="/#value" className="text-sm font-medium hover:text-blue-300 transition-colors">
              Value
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Background with ocean texture */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/wave-texture.png" alt="Wave texture" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-950/80"></div>

          {/* Animated sonar rings */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[800px] h-[800px] rounded-full border border-blue-400/10 animate-ping-slow"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-400/15 animate-ping-slow animation-delay-1000"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-blue-400/20 animate-ping-slow animation-delay-2000"></div>
          </div>
        </div>

        <div className="container relative z-10 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex mb-8 bg-blue-800/30 p-1 rounded-lg">
              <div className="flex-1 py-2 px-4 rounded-md text-center transition-all bg-blue-600 text-white shadow-lg">
                Join Waitlist
              </div>
              <Link
                href="/invite"
                className="flex-1 py-2 px-4 rounded-md text-center transition-all text-blue-200 hover:bg-blue-700/30"
              >
                Have an Invite Code?
              </Link>
            </div>

            {/* Waitlist Section */}
            <div className="space-y-8">
              <div className="text-center">
                <Badge className="mb-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-md">
                  EARLY ACCESS
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Unlock Early Access to OceanIntel</h1>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                  We're gradually rolling out region-based access to OceanIntel. Join the waitlist to secure your spot —
                  and tell us where you fish, so you're the first to know when it's available.
                </p>
              </div>

              <Card className="bg-gradient-to-b from-blue-800/80 to-blue-900/80 border-blue-700/50 shadow-xl backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleWaitlistSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-blue-100">
                          Full Name <span className="text-blue-300">*</span>
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="bg-blue-950/50 border-blue-700/50 text-white placeholder:text-blue-400/50 focus:border-blue-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-blue-100">
                          Email Address <span className="text-blue-300">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          className="bg-blue-950/50 border-blue-700/50 text-white placeholder:text-blue-400/50 focus:border-blue-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="region" className="text-sm font-medium text-blue-100">
                        Where do you normally fish? <span className="text-blue-300">*</span>
                      </label>
                      <Select required>
                        <SelectTrigger className="bg-blue-950/50 border-blue-700/50 text-white focus:border-blue-400">
                          <SelectValue placeholder="Select your fishing region" />
                        </SelectTrigger>
                        <SelectContent className="bg-blue-900 border-blue-700 text-white">
                          <div className="p-1">
                            <p className="px-2 text-xs text-blue-300 font-semibold mb-1">East Coast</p>
                            <SelectItem value="northeast">Northeast (Cape Cod to New Jersey)</SelectItem>
                            <SelectItem value="mid-atlantic">Mid-Atlantic (Delmarva to Carolinas)</SelectItem>
                            <SelectItem value="southeast">Southeast (Georgia to Florida Keys)</SelectItem>
                          </div>

                          <div className="p-1 border-t border-blue-800">
                            <p className="px-2 text-xs text-blue-300 font-semibold mb-1">West Coast</p>
                            <SelectItem value="northern-california">Northern California to Oregon</SelectItem>
                            <SelectItem value="southern-california">
                              Southern California (Channel Islands to San Diego)
                            </SelectItem>
                          </div>

                          <div className="p-1 border-t border-blue-800">
                            <p className="px-2 text-xs text-blue-300 font-semibold mb-1">Gulf of Mexico</p>
                            <SelectItem value="texas">Texas Coast</SelectItem>
                            <SelectItem value="louisiana">Louisiana / Mississippi Delta</SelectItem>
                            <SelectItem value="florida-panhandle">Florida Panhandle</SelectItem>
                          </div>

                          <div className="p-1 border-t border-blue-800">
                            <p className="px-2 text-xs text-blue-300 font-semibold mb-1">Baja + Pacific Mexico</p>
                            <SelectItem value="pacific-baja">Pacific Baja (Mag Bay to Cabo)</SelectItem>
                            <SelectItem value="sea-of-cortez">Sea of Cortez (La Paz to Loreto)</SelectItem>
                          </div>

                          <div className="p-1 border-t border-blue-800">
                            <p className="px-2 text-xs text-blue-300 font-semibold mb-1">Caribbean</p>
                            <SelectItem value="puerto-rico">Puerto Rico / USVI</SelectItem>
                            <SelectItem value="bahamas">Bahamas</SelectItem>
                            <SelectItem value="southern-caribbean">Southern Caribbean</SelectItem>
                          </div>

                          <div className="p-1 border-t border-blue-800">
                            <p className="px-2 text-xs text-blue-300 font-semibold mb-1">Offshore (any region)</p>
                            <SelectItem value="deep-blue">Deep Blue / Tournament Zones</SelectItem>
                            <SelectItem value="open-ocean">Open Ocean (no home port)</SelectItem>
                          </div>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="notes" className="text-sm font-medium text-blue-100">
                        Optional Notes
                      </label>
                      <Textarea
                        id="notes"
                        placeholder="Anything we should know? (Tournament team, vessel type, fishing experience, etc.)"
                        className="bg-blue-950/50 border-blue-700/50 text-white placeholder:text-blue-400/50 focus:border-blue-400 min-h-[80px]"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-lg transition-all hover:shadow-blue-500/20 hover:shadow-xl group hover:scale-105"
                      >
                        <span>Join the Waitlist</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <div className="text-center text-blue-300 text-sm">
                <p>
                  Already have an invitation code?{" "}
                  <Link href="/invite" className="text-blue-400 hover:text-blue-300 underline">
                    Enter it here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-300 py-8 border-t border-blue-900/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Image
                  src="/oceanintel-logo.svg"
                  alt="OceanIntel Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="text-sm font-bold text-white">OceanIntel</span>
            </div>
            <div className="text-sm">© {new Date().getFullYear()} OceanIntel. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
