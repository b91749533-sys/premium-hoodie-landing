'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, staggerItem } from '@/lib/animations'

const gallery = [
  { src: '/images/gallery-1.png', alt: 'Product shot 1' },
  { src: '/images/gallery-2.png', alt: 'Product shot 2' },
  { src: '/images/gallery-3.png', alt: 'Lifestyle photo' },
  { src: '/images/gallery-4.png', alt: 'Detail shot' },
]

export default function ProductGallery() {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" variants={staggerItem}>
            Premium Quality Showcase
          </motion.h2>
          <motion.p className="text-lg text-foreground/60" variants={staggerItem}>
            See the meticulous craftsmanship and attention to detail
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative overflow-hidden rounded-lg bg-muted aspect-square group cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
