'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { BENEFITS } from '@/lib/constants'

export default function WhyChoose() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" variants={staggerItem}>
            Why Choose Premium?
          </motion.h2>
          <motion.p className="text-lg text-foreground/60 max-w-2xl mx-auto" variants={staggerItem}>
            We believe in transparency and quality above all else
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="p-6 bg-background rounded-lg border border-border text-center"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">✓</div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-foreground/60">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
