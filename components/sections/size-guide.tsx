'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { SIZES } from '@/lib/constants'

export default function SizeGuide() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Size Guide</h2>
          <p className="text-lg text-foreground/60">Find your perfect fit with our comprehensive sizing chart</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Size</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Chest</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Shoulder</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Sleeve</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Length</th>
              </tr>
            </thead>
            <tbody>
              {SIZES.map((size, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border hover:bg-secondary transition-colors"
                >
                  <td className="py-4 px-4 font-semibold text-foreground">{size.size}</td>
                  <td className="py-4 px-4 text-foreground/70">{size.chest}</td>
                  <td className="py-4 px-4 text-foreground/70">{size.shoulder}</td>
                  <td className="py-4 px-4 text-foreground/70">{size.sleeve}</td>
                  <td className="py-4 px-4 text-foreground/70">{size.length}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mt-12 p-6 bg-secondary rounded-lg border border-border"
        >
          <h3 className="font-semibold text-foreground mb-2">💡 Measurement Tips</h3>
          <ul className="text-foreground/60 space-y-2 text-sm">
            <li>• Chest: Measure around the fullest part of your chest</li>
            <li>• Shoulder: Measure from shoulder bone to shoulder bone</li>
            <li>• Sleeve: Measure from center back neck down the shoulder to wrist</li>
            <li>• Length: Measure from the base of your neck to your desired length</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
