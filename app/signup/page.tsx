"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PageLayout from "@/components/page-layout"

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/account"
    }, 1500)
  }

  return (
    <PageLayout title="Create Your OceanIntel Account">
      <div className="max-w-md mx-auto">
        <Card className="border-0 shadow-xl bg-white">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
            <CardDescription className="text-center">Enter your information to create an account</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Smith" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm">Confirm Password</Label>
                  <Input id="confirm" type="password" required />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 shadow-md hover:shadow-blue-700/20 hover:scale-105 transition-all"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Sign Up and Fish Smarter"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-gray-500">
              By creating an account, you agree to our{" "}
              <Link href="/terms" className="text-blue-700 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-blue-700 hover:underline">
                Privacy Policy
              </Link>
            </div>
            <div className="text-sm text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-700 hover:underline">
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  )
}
