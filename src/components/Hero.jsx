import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden bg-[#EDE7F6]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-[600] tracking-tight text-gray-900"
          >
            Pristine Luxury Cleanings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl"
          >
            Marbella’s ultra-premium home and yacht care. Immaculate finishes, meticulous detail, discreet service.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#contact" className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm md:text-base hover:bg-black transition-colors">
              Book a private consultation
            </a>
            <a href="#services" className="rounded-full bg-white/70 backdrop-blur text-gray-900 px-6 py-3 text-sm md:text-base hover:bg-white border border-white/50 transition-colors">
              Explore services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
