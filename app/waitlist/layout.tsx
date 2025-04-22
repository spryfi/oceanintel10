"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

export default function WaitlistLayout({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}
