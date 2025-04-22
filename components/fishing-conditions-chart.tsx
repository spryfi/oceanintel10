"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Fish, Thermometer, Waves, Calendar } from "lucide-react"

// Sample data for the fishing conditions over a week
const fishingConditionsData = [
  {
    date: "Mon 04/15",
    biteIndex: 87,
    sst: 72.4,
    thermoclineDepth: 85,
    chlorophyll: 0.28,
    currentSpeed: 1.2,
    marlin: 82,
    tuna: 76,
    mahi: 65,
    wahoo: 58,
  },
  {
    date: "Tue 04/16",
    biteIndex: 92,
    sst: 73.1,
    thermoclineDepth: 82,
    chlorophyll: 0.31,
    currentSpeed: 1.4,
    marlin: 88,
    tuna: 79,
    mahi: 72,
    wahoo: 62,
  },
  {
    date: "Wed 04/17",
    biteIndex: 95,
    sst: 73.8,
    thermoclineDepth: 78,
    chlorophyll: 0.35,
    currentSpeed: 1.7,
    marlin: 91,
    tuna: 85,
    mahi: 78,
    wahoo: 68,
  },
  {
    date: "Thu 04/18",
    biteIndex: 89,
    sst: 74.2,
    thermoclineDepth: 75,
    chlorophyll: 0.32,
    currentSpeed: 1.5,
    marlin: 86,
    tuna: 82,
    mahi: 74,
    wahoo: 65,
  },
  {
    date: "Fri 04/19",
    biteIndex: 78,
    sst: 73.9,
    thermoclineDepth: 80,
    chlorophyll: 0.27,
    currentSpeed: 1.3,
    marlin: 75,
    tuna: 71,
    mahi: 68,
    wahoo: 59,
  },
  {
    date: "Sat 04/20",
    biteIndex: 83,
    sst: 73.5,
    thermoclineDepth: 83,
    chlorophyll: 0.29,
    currentSpeed: 1.1,
    marlin: 80,
    tuna: 76,
    mahi: 71,
    wahoo: 63,
  },
  {
    date: "Sun 04/21",
    biteIndex: 91,
    sst: 74.0,
    thermoclineDepth: 79,
    chlorophyll: 0.33,
    currentSpeed: 1.6,
    marlin: 87,
    tuna: 83,
    mahi: 76,
    wahoo: 67,
  },
]

export default function FishingConditionsChart() {
  const [selectedSpecies, setSelectedSpecies] = useState("marlin")

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-2xl">Offshore Fishing Forecast</CardTitle>
            <CardDescription>7-day AI-powered fishing conditions for Gulf Stream Edge, Miami</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue-600" />
            <span className="text-sm text-gray-500">Updated: April 15, 2025 06:00 AM</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="biteIndex" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full md:w-auto">
              <TabsTrigger value="biteIndex" className="flex items-center gap-1">
                <Fish className="h-4 w-4" />
                <span>Bite Index</span>
              </TabsTrigger>
              <TabsTrigger value="species" className="flex items-center gap-1">
                <Fish className="h-4 w-4" />
                <span>By Species</span>
              </TabsTrigger>
              <TabsTrigger value="temperature" className="flex items-center gap-1">
                <Thermometer className="h-4 w-4" />
                <span>Temperature</span>
              </TabsTrigger>
              <TabsTrigger value="conditions" className="flex items-center gap-1">
                <Waves className="h-4 w-4" />
                <span>Conditions</span>
              </TabsTrigger>
            </TabsList>

            {/* Species selector only shown in species tab */}
            <div className="w-full md:w-auto">
              <TabsContent value="species" className="mt-0">
                <Select value={selectedSpecies} onValueChange={setSelectedSpecies}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Select species" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marlin">Blue Marlin</SelectItem>
                    <SelectItem value="tuna">Yellowfin Tuna</SelectItem>
                    <SelectItem value="mahi">Mahi-Mahi</SelectItem>
                    <SelectItem value="wahoo">Wahoo</SelectItem>
                  </SelectContent>
                </Select>
              </TabsContent>
            </div>
          </div>

          {/* Bite Index Chart */}
          <TabsContent value="biteIndex" className="mt-0">
            <div className="rounded-md border p-4 bg-gray-50">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <span className="font-medium">AI Bite Potential Index™</span>
                  <span className="text-sm text-gray-500 ml-auto">Scale: 0-100</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Composite score based on all environmental factors and historical catch data
                </p>
              </div>
              <ChartContainer
                config={{
                  biteIndex: {
                    label: "Bite Index",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={fishingConditionsData}>
                    <defs>
                      <linearGradient id="colorBiteIndex" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis domain={[40, 100]} tick={{ fontSize: 12 }} tickFormatter={(value) => `${value}`} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="biteIndex"
                      stroke="#3b82f6"
                      fillOpacity={1}
                      fill="url(#colorBiteIndex)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-md bg-green-50 p-2 text-center">
                  <div className="text-sm font-medium text-green-700">Best Day</div>
                  <div className="text-lg font-bold text-green-800">Wed 04/17</div>
                </div>
                <div className="rounded-md bg-blue-50 p-2 text-center">
                  <div className="text-sm font-medium text-blue-700">Best Time</div>
                  <div className="text-lg font-bold text-blue-800">6:00-10:00 AM</div>
                </div>
                <div className="rounded-md bg-purple-50 p-2 text-center">
                  <div className="text-sm font-medium text-purple-700">Top Species</div>
                  <div className="text-lg font-bold text-purple-800">Blue Marlin</div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Species Chart */}
          <TabsContent value="species" className="mt-0">
            <div className="rounded-md border p-4 bg-gray-50">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <span className="font-medium capitalize">{selectedSpecies} Bite Potential</span>
                  <span className="text-sm text-gray-500 ml-auto">Scale: 0-100</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Species-specific score based on preferred conditions and behavior patterns
                </p>
              </div>
              <ChartContainer
                config={{
                  [selectedSpecies]: {
                    label: `${selectedSpecies.charAt(0).toUpperCase() + selectedSpecies.slice(1)} Score`,
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={fishingConditionsData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis domain={[40, 100]} tick={{ fontSize: 12 }} tickFormatter={(value) => `${value}`} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey={selectedSpecies}
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Species Insights:</h4>
                {selectedSpecies === "marlin" && (
                  <p className="text-sm text-gray-700">
                    Blue Marlin are showing strong activity near temperature breaks with optimal conditions on
                    Wednesday. Look for them near the 100-fathom line where currents are creating upwellings.
                  </p>
                )}
                {selectedSpecies === "tuna" && (
                  <p className="text-sm text-gray-700">
                    Yellowfin Tuna are congregating near thermocline edges at 75-85ft depths. Best bite windows are
                    early morning with peak activity predicted Wednesday through Thursday.
                  </p>
                )}
                {selectedSpecies === "mahi" && (
                  <p className="text-sm text-gray-700">
                    Mahi-Mahi are following weedlines and floating structure. Chlorophyll concentrations indicate good
                    conditions throughout the week with best activity mid-week.
                  </p>
                )}
                {selectedSpecies === "wahoo" && (
                  <p className="text-sm text-gray-700">
                    Wahoo are tracking along deep ledges and current breaks. Look for them in areas with current speed
                    above 1.4 knots, particularly on Tuesday through Thursday.
                  </p>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Temperature Chart */}
          <TabsContent value="temperature" className="mt-0">
            <div className="rounded-md border p-4 bg-gray-50">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span className="font-medium">Sea Surface Temperature (°F)</span>
                  <div className="h-3 w-3 rounded-full bg-blue-500 ml-4"></div>
                  <span className="font-medium">Thermocline Depth (ft)</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Surface temperature and thermocline depth trends for the forecast period
                </p>
              </div>
              <ChartContainer
                config={{
                  sst: {
                    label: "Sea Surface Temp (°F)",
                    color: "hsl(0, 85%, 60%)",
                  },
                  thermoclineDepth: {
                    label: "Thermocline Depth (ft)",
                    color: "hsl(220, 85%, 60%)",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={fishingConditionsData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis
                      yAxisId="left"
                      domain={[70, 76]}
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => `${value}°F`}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      domain={[70, 90]}
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => `${value}ft`}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="sst"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="thermoclineDepth"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4 text-sm text-gray-700">
                <p>
                  The thermocline is rising closer to the surface mid-week, creating ideal conditions for pelagic
                  species. Surface temperatures are gradually warming, with a slight cooling trend expected Friday.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Conditions Chart */}
          <TabsContent value="conditions" className="mt-0">
            <div className="rounded-md border p-4 bg-gray-50">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="font-medium">Chlorophyll-A (mg/m³)</span>
                  <div className="h-3 w-3 rounded-full bg-purple-500 ml-4"></div>
                  <span className="font-medium">Current Speed (knots)</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Water quality and current conditions affecting bait concentration
                </p>
              </div>
              <ChartContainer
                config={{
                  chlorophyll: {
                    label: "Chlorophyll-A (mg/m³)",
                    color: "hsl(142, 76%, 36%)",
                  },
                  currentSpeed: {
                    label: "Current Speed (knots)",
                    color: "hsl(280, 67%, 44%)",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={fishingConditionsData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis
                      yAxisId="left"
                      domain={[0, 0.5]}
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => `${value.toFixed(2)}`}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      domain={[0, 2]}
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => `${value.toFixed(1)}`}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar yAxisId="left" dataKey="chlorophyll" fill="#22c55e" barSize={20} />
                    <Bar yAxisId="right" dataKey="currentSpeed" fill="#9333ea" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4 text-sm text-gray-700">
                <p>
                  Chlorophyll levels are peaking mid-week, indicating increased bait activity. Current speeds are also
                  strongest Wednesday, creating ideal feeding conditions along edges and convergence zones.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
