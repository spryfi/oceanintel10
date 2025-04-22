"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PageLayout from "@/components/page-layout"

export default function OrderPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Your custom analysis request has been submitted!")
    }, 1500)
  }

  const regions = [
    "Gulf of Mexico",
    "Atlantic - Northeast",
    "Atlantic - Southeast",
    "Pacific - Northwest",
    "Pacific - Southwest",
    "Caribbean",
    "Sea of Cortez",
  ]

  const species = [
    "Marlin - Blue",
    "Marlin - White",
    "Tuna - Yellowfin",
    "Tuna - Bluefin",
    "Mahi-Mahi",
    "Sailfish",
    "Wahoo",
    "Swordfish",
    "Kingfish",
    "Snapper",
  ]

  return (
    <PageLayout
      title="Request a One-Time Custom Analysis"
      subtitle="Get a detailed forecast for your next big trip without a subscription"
    >
      <div className="max-w-2xl mx-auto">
        <Card className="border-0 shadow-xl bg-white">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Custom Fishing Analysis</CardTitle>
            <CardDescription>
              Our team will prepare a detailed forecast for your specific location and target species
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="region">Fishing Region</Label>
                  <Select required>
                    <SelectTrigger id="region">
                      <SelectValue placeholder="Select a region" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region} value={region.toLowerCase().replace(/\s+/g, "-")}>
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="species">Target Species</Label>
                  <Select required>
                    <SelectTrigger id="species">
                      <SelectValue placeholder="Select target species" />
                    </SelectTrigger>
                    <SelectContent>
                      {species.map((species) => (
                        <SelectItem key={species} value={species.toLowerCase().replace(/\s+/g, "-")}>
                          {species}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="date">Desired Date</Label>
                  <Input id="date" type="date" required />
                  <p className="text-sm text-gray-500 mt-1">We need at least 48 hours to prepare your analysis</p>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Tell us about your boat, experience level, and any specific information you'd like included in your analysis"
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email for Delivery</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="font-medium text-blue-800">Custom Analysis: $149</p>
                <p className="text-sm text-gray-600">
                  Includes detailed maps, species-specific recommendations, and a 30-minute consultation with one of our
                  fishing experts
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 shadow-md hover:shadow-blue-700/20 hover:scale-105 transition-all"
                disabled={isLoading}
              >
                {isLoading ? "Processing Request..." : "Request Analysis"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center text-sm text-gray-500">
            Questions? Contact us at support@oceanintel.com
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  )
}
