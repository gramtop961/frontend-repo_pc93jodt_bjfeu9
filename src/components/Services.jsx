import { motion } from 'framer-motion'
import { Sparkles, Ship, Home, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residences',
    desc: 'Daily housekeeping, seasonal deep cleans, marble care, linen programs, and turn-key arrivals.'
  },
  {
    icon: Ship,
    title: 'Yachts',
    desc: 'On-board detailing, brightwork care, teak protection, and pre-charter reset with fragrance curation.'
  },
  {
    icon: Sparkles,
    title: 'Special Treatments',
    desc: 'Art-safe dusting, crystal and silver service, steam sanitization, hypoallergenic protocols.'
  },
  {
    icon: ShieldCheck,
    title: 'Concierge',
    desc: 'Keyholding, white-glove handovers, contractor oversight, and discreet same-day requests.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Services without compromise</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">Every program is bespoke. We tailor visits, methods, and materials to your property’s unique needs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-3xl border border-gray-200 p-6 bg-white/70 backdrop-blur hover:shadow-xl transition-all"
            >
              <s.icon className="h-6 w-6 text-gray-900" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
              <div className="mt-4 text-sm text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">Explore →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
