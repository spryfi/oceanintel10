"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function WelcomePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // In a real app, this would create the account and redirect to the dashboard
      alert("Account created! Redirecting to your dashboard...")
    }
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
            {/* Welcome Section */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome Aboard</h1>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                  You've unlocked access to OceanIntel. Let's get your account set up and choose your access level.
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <div className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? "bg-blue-600" : "bg-blue-800/50"} text-white font-bold`}
                  >
                    1
                  </div>
                  <div className={`w-16 h-1 ${step >= 2 ? "bg-blue-600" : "bg-blue-800/50"}`}></div>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? "bg-blue-600" : "bg-blue-800/50"} text-white font-bold`}
                  >
                    2
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-b from-blue-800/80 to-blue-900/80 border-blue-700/50 shadow-xl backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  {step === 1 ? (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h2 className="text-xl font-bold mb-4">Step 1: Create Your Account</h2>

                      <div className="space-y-2">
                        <label htmlFor="account-name" className="text-sm font-medium text-blue-100">
                          Full Name <span className="text-blue-300">*</span>
                        </label>
                        <Input
                          id="account-name"
                          placeholder="Your name"
                          required
                          className="bg-blue-950/50 border-blue-700/50 text-white placeholder:text-blue-400/50 focus:border-blue-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="account-email" className="text-sm font-medium text-blue-100">
                          Email Address <span className="text-blue-300">*</span>
                        </label>
                        <Input
                          id="account-email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          className="bg-blue-950/50 border-blue-700/50 text-white placeholder:text-blue-400/50 focus:border-blue-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="account-password" className="text-sm font-medium text-blue-100">
                          Password <span className="text-blue-300">*</span>
                        </label>
                        <Input
                          id="account-password"
                          type="password"
                          placeholder="Create a secure password"
                          required
                          className="bg-blue-950/50 border-blue-700/50 text-white placeholder:text-blue-400/50 focus:border-blue-400"
                        />
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-lg transition-all hover:shadow-blue-500/20 hover:shadow-xl hover:scale-105"
                        >
                          Continue to Choose Your Plan
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <h2 className="text-xl font-bold mb-4">Step 2: Choose Your Plan</h2>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Pro Angler Plan */}
                        <div
                          className={`bg-gradient-to-b from-blue-900/80 to-blue-950/80 border ${selectedPlan === "pro" ? "border-blue-400" : "border-blue-800/50"} rounded-lg p-4 cursor-pointer transition-all hover:shadow-lg hover:border-blue-400 ${selectedPlan === "pro" ? "shadow-lg shadow-blue-500/20 transform scale-[1.02]" : ""}`}
                          onClick={() => setSelectedPlan("pro")}
                        >
                          <div className="text-center mb-4">
                            <h3 className="text-lg font-bold">Pro Angler</h3>
                            <p className="text-blue-300 text-sm">Limited region access</p>
                            <div className="mt-2">
                              <span className="text-2xl font-bold">$29</span>
                              <span className="text-blue-300 text-sm">/month</span>
                            </div>
                          </div>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Single region access</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Daily forecast updates</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Basic species targeting</span>
                            </li>
                          </ul>
                        </div>

                        {/* Captain's Circle Plan */}
                        <div
                          className={`bg-gradient-to-b from-blue-900/80 to-blue-950/80 border ${selectedPlan === "captain" ? "border-blue-400" : "border-blue-800/50"} rounded-lg p-4 cursor-pointer transition-all hover:shadow-lg hover:border-blue-400 ${selectedPlan === "captain" ? "shadow-lg shadow-blue-500/20 transform scale-[1.02]" : ""}`}
                          onClick={() => setSelectedPlan("captain")}
                        >
                          <div className="text-center mb-4">
                            <h3 className="text-lg font-bold">Captain's Circle</h3>
                            <p className="text-blue-300 text-sm">All regions, advanced tools</p>
                            <div className="mt-2">
                              <span className="text-2xl font-bold">$79</span>
                              <span className="text-blue-300 text-sm">/month</span>
                            </div>
                          </div>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span>All regions access</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Advanced species targeting</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Historical model data</span>
                            </li>
                          </ul>
                        </div>

                        {/* Tournament Elite Plan */}
                        <div
                          className={`bg-gradient-to-b from-blue-900/80 to-blue-950/80 border ${selectedPlan === "tournament" ? "border-blue-400" : "border-blue-800/50"} rounded-lg p-4 cursor-pointer transition-all hover:shadow-lg hover:border-blue-400 ${selectedPlan === "tournament" ? "shadow-lg shadow-blue-500/20 transform scale-[1.02]" : ""}`}
                          onClick={() => setSelectedPlan("tournament")}
                        >
                          <div className="text-center mb-4">
                            <h3 className="text-lg font-bold">Tournament Elite</h3>
                            <p className="text-blue-300 text-sm">Premium AI tools</p>
                            <div className="mt-2">
                              <span className="text-2xl font-bold">$199</span>
                              <span className="text-blue-300 text-sm">/month</span>
                            </div>
                          </div>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span>All Captain's Circle features</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Custom maps & early drops</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Premium AI forecasting tools</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          onClick={handleSubmit}
                          disabled={!selectedPlan}
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-lg transition-all hover:shadow-blue-500/20 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                        >
                          Start My Forecasts
                        </Button>
                      </div>

                      <div className="text-center text-blue-300 text-xs">
                        <p>Coming Soon: Fleet Enterprise for multi-vessel operations</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
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
