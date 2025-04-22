"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

export default function InviteLayout({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
