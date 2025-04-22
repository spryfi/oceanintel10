import Image from "next/image"

export default function AppScreenshot() {
  return (
    <Image
      src="/placeholder.svg?height=800&width=1200&query=fishing app interface showing AI analysis of ocean with temperature layers and fish prediction zones"
      alt="DeepWaterAI App Interface"
      width={1200}
      height={800}
      className="w-full h-auto"
    />
  )
}
