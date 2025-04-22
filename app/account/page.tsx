"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import PageLayout from "@/components/page-layout"

export default function AccountPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Settings updated successfully!")
    }, 1500)
  }

  return (
    <PageLayout title="My OceanIntel Dashboard" subtitle="Manage your account, preferences, and subscription">
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="account">My Account</TabsTrigger>
            <TabsTrigger value="regions">Preferred Regions</TabsTrigger>
            <TabsTrigger value="password">Security</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your personal information and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Smith" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" defaultChecked />
                  <Label htmlFor="notifications">Receive email notifications about new features and updates</Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-700 hover:bg-blue-800">Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="regions" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Preferred Fishing Regions</CardTitle>
                <CardDescription>Select your primary fishing regions to customize your experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primaryRegion">Primary Region</Label>
                  <Select defaultValue="gulf-of-mexico">
                    <SelectTrigger id="primaryRegion">
                      <SelectValue placeholder="Select a region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gulf-of-mexico">Gulf of Mexico</SelectItem>
                      <SelectItem value="atlantic-northeast">Atlantic - Northeast</SelectItem>
                      <SelectItem value="atlantic-southeast">Atlantic - Southeast</SelectItem>
                      <SelectItem value="pacific-northwest">Pacific - Northwest</SelectItem>
                      <SelectItem value="pacific-southwest">Pacific - Southwest</SelectItem>
                      <SelectItem value="caribbean">Caribbean</SelectItem>
                      <SelectItem value="sea-of-cortez">Sea of Cortez</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="secondaryRegion">Secondary Regions (up to 3)</Label>
                  <Select>
                    <SelectTrigger id="secondaryRegion">
                      <SelectValue placeholder="Select regions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gulf-of-mexico">Gulf of Mexico</SelectItem>
                      <SelectItem value="atlantic-northeast">Atlantic - Northeast</SelectItem>
                      <SelectItem value="atlantic-southeast">Atlantic - Southeast</SelectItem>
                      <SelectItem value="pacific-northwest">Pacific - Northwest</SelectItem>
                      <SelectItem value="pacific-southwest">Pacific - Southwest</SelectItem>
                      <SelectItem value="caribbean">Caribbean</SelectItem>
                      <SelectItem value="sea-of-cortez">Sea of Cortez</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500">
                    Note: Additional regions may require a higher tier subscription
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetSpecies">Primary Target Species</Label>
                  <Select defaultValue="marlin-blue">
                    <SelectTrigger id="targetSpecies">
                      <SelectValue placeholder="Select species" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="marlin-blue">Marlin - Blue</SelectItem>
                      <SelectItem value="marlin-white">Marlin - White</SelectItem>
                      <SelectItem value="tuna-yellowfin">Tuna - Yellowfin</SelectItem>
                      <SelectItem value="tuna-bluefin">Tuna - Bluefin</SelectItem>
                      <SelectItem value="mahi-mahi">Mahi-Mahi</SelectItem>
                      <SelectItem value="sailfish">Sailfish</SelectItem>
                      <SelectItem value="wahoo">Wahoo</SelectItem>
                      <SelectItem value="swordfish">Swordfish</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-700 hover:bg-blue-800">Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="password" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password to keep your account secure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-700 hover:bg-blue-800">Update Password</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="subscription" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Management</CardTitle>
                <CardDescription>View and manage your current subscription</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-800">Current Plan: Captain's Circle</h3>
                  <p className="text-gray-700">$79/month - Renews on May 15, 2023</p>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>✓ Depth maps and thermocline data</p>
                    <p>✓ Species-specific AI scoring</p>
                    <p>✓ 7-day forecasts</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Payment Method</Label>
                  <div className="flex items-center space-x-2 p-2 border rounded-md">
                    <div className="bg-blue-100 p-1 rounded">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/25</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Billing History</Label>
                  <div className="border rounded-md divide-y">
                    <div className="p-3 flex justify-between">
                      <span>April 15, 2023</span>
                      <span className="font-medium">$79.00</span>
                    </div>
                    <div className="p-3 flex justify-between">
                      <span>March 15, 2023</span>
                      <span className="font-medium">$79.00</span>
                    </div>
                    <div className="p-3 flex justify-between">
                      <span>February 15, 2023</span>
                      <span className="font-medium">$79.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Update Payment Method</Button>
                <Button variant="outline" className="text-gray-500" disabled>
                  Cancel Plan
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  )
}
