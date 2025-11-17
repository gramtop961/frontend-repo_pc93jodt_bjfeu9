import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Flawless. Our villa has never looked or felt better. Their discretion is unmatched.',
    author: 'Private Client, La Zagaleta'
  },
  {
    quote: 'Pre-charter preparation that rivals a five-star hotel. Every detail handled.',
    author: 'Yacht Captain, Puerto Banús'
  },
  {
    quote: 'The only team I trust for gallery-friendly cleaning on art weeks.',
    author: 'Interior Designer, Golden Mile'
  }
]

export default function Testimonials() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-purple-50/60">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Trusted by the most discerning</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl bg-white/70 backdrop-blur border border-gray-200 p-8 text-left"
            >
              <p className="text-gray-800">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-gray-600">— {t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
