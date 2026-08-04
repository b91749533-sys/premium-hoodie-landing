'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Ready to Upgrade?</h2>
            <p className="text-xl text-background/80 max-w-2xl mx-auto">
              Join thousands of satisfied customers who&apos;ve discovered the perfect hoodie. Limited time offer—secure yours today.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-background text-foreground font-semibold rounded-md hover:bg-background/90 transition-all shadow-lg hover:shadow-xl">
              Shop Now
            </button>
            <button className="px-8 py-4 border-2 border-background text-background font-semibold rounded-md hover:bg-background/10 transition-all">
              View Collection
            </button>
          </motion.div>

          <motion.p className="text-sm text-background/60 mt-8" variants={fadeInUp}>
            Free shipping on orders over $100 • 60-day returns • Lifetime support
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
