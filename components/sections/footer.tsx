'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-background/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand */}
          <motion.div variants={staggerItem}>
            <h3 className="font-bold text-xl mb-4">Premium</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Crafting the ultimate hoodie experience with uncompromising quality and timeless design.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={staggerItem}>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={staggerItem}>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={staggerItem}>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerItem}
          className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/60"
        >
          <p>&copy; 2024 Premium Hoodie Co. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-background transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              LinkedIn
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
