"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function InvitePage() {
  const router = useRouter()

  const handleInvitationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would validate the invitation code
    router.push("/welcome")
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
              <Link
                href="/waitlist"
                className="flex-1 py-2 px-4 rounded-md text-center transition-all text-blue-200 hover:bg-blue-700/30"
              >
                Join Waitlist
              </Link>
              <div className="flex-1 py-2 px-4 rounded-md text-center transition-all bg-blue-600 text-white shadow-lg">
                Have an Invite Code?
              </div>
            </div>

            {/* Invitation Code Section */}
            <div className="space-y-8">
              <div className="text-center">
                <Badge className="mb-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-md">
                  PRIVATE BETA ACCESS
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Already Got Your Invite?</h1>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                  If you received an invitation code from our team or a trusted captain, enter it below to activate your
                  early access.
                </p>
              </div>

              <Card className="bg-gradient-to-b from-gray-900/90 to-blue-950/90 border-gray-700/50 shadow-xl backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleInvitationSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="code" className="text-sm font-medium text-blue-100">
                        Invitation Code <span className="text-blue-300">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          id="code"
                          placeholder="Enter your invitation code"
                          required
                          className="bg-gray-950/50 border-gray-700/50 text-white placeholder:text-gray-400/50 focus:border-blue-400 pl-10"
                        />
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="invite-email" className="text-sm font-medium text-blue-100">
                        Email Address <span className="text-blue-300">*</span>
                      </label>
                      <Input
                        id="invite-email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-gray-950/50 border-gray-700/50 text-white placeholder:text-gray-400/50 focus:border-blue-400"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium py-2 px-4 rounded-md shadow-lg transition-all hover:shadow-gray-500/20 hover:shadow-xl group hover:scale-105"
                      >
                        <span>Unlock Access</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <div className="text-center text-blue-300 text-sm">
                <p>
                  Don't have a code?{" "}
                  <Link href="/waitlist" className="text-blue-400 hover:text-blue-300 underline">
                    Join the waitlist instead
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
