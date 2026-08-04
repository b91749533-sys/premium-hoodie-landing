'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 w-full z-50 border-b border-border bg-background/95 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#" className="text-xl font-bold tracking-tight text-foreground">
            Premium
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#gallery" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Gallery
            </Link>
            <Link href="#reviews" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Reviews
            </Link>
            <Link href="#faq" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              FAQ
            </Link>
          </div>

          {/* CTA Button */}
          <button className="px-6 py-2 bg-foreground text-background font-semibold text-sm rounded-md hover:bg-foreground/90 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
