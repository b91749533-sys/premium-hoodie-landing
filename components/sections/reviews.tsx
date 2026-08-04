'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { REVIEWS } from '@/lib/constants'

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" variants={staggerItem}>
            Loved by Customers
          </motion.h2>
          <motion.p className="text-lg text-foreground/60" variants={staggerItem}>
            Don&apos;t just take our word for it—see what our customers have to say
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="p-6 bg-secondary border border-border rounded-lg"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? 'text-accent text-lg' : 'text-border text-lg'}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed">{review.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.author}</p>
                  {review.verified && (
                    <p className="text-xs text-accent font-medium">✓ Verified Purchase</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
