'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, fadeIn } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-8">
          <div className="space-y-4">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
              variants={fadeInUp}
            >
              The Ultimate <span className="text-accent">Premium Hoodie</span>
            </motion.h1>
            <motion.p className="text-xl text-foreground/60 leading-relaxed max-w-lg" variants={fadeInUp}>
              Meticulously crafted from the finest organic materials. Experience uncompromising comfort and timeless design.
            </motion.p>
          </div>

          <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
            <button className="px-8 py-4 bg-foreground text-background font-semibold rounded-md hover:bg-foreground/90 transition-all hover:shadow-lg">
              Shop Now
            </button>
            <button className="px-8 py-4 border border-foreground/20 text-foreground font-semibold rounded-md hover:border-foreground hover:bg-foreground/5 transition-all">
              Learn More
            </button>
          </motion.div>

          <motion.div className="flex items-center gap-8 pt-4" variants={fadeInUp}>
            <div>
              <p className="text-3xl font-bold text-foreground">1000+</p>
              <p className="text-sm text-foreground/60">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">4.9★</p>
              <p className="text-sm text-foreground/60">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">2yr</p>
              <p className="text-sm text-foreground/60">Warranty</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-md">
            <Image
              src="/images/hero-product.png"
              alt="Premium Hoodie"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
