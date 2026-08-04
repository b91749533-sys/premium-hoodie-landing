'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { PRODUCT_COLORS } from '@/lib/constants'

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-bold text-foreground mb-8">Choose Your Color</h2>
          <p className="text-lg text-foreground/60 mb-12">
            Select from our carefully curated color palette, each design complements the timeless aesthetic
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Color Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-muted rounded-lg overflow-hidden"
            >
              <Image
                src={PRODUCT_COLORS[selectedColor].image}
                alt={PRODUCT_COLORS[selectedColor].name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Color Options */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="space-y-4">
                {PRODUCT_COLORS.map((color, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    whileHover={{ x: 4 }}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left flex items-center gap-4 ${
                      selectedColor === index ? 'border-foreground bg-foreground/5' : 'border-border hover:border-foreground/50'
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-md border border-border"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="font-semibold text-foreground">{color.name}</p>
                      <p className="text-sm text-foreground/60">{color.hex}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
