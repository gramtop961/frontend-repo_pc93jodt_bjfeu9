import { useState } from 'react'

const initial = { full_name: '', email: '', phone: '', service: 'Residences', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ state: 'idle' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading' })
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus({ state: 'success' })
      setForm(initial)
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Private consultation</h2>
          <p className="mt-3 text-gray-600">Share a few details and our concierge will respond within the hour.</p>
          <div className="mt-8 rounded-3xl bg-gradient-to-br from-purple-100 to-white p-8 border border-gray-200">
            <form onSubmit={submit} className="grid grid-cols-1 gap-4">
              <input name="full_name" value={form.full_name} onChange={handleChange} placeholder="Full name" required className="rounded-2xl border-gray-200 focus:border-gray-900 focus:ring-gray-900/20" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required className="rounded-2xl border-gray-200 focus:border-gray-900 focus:ring-gray-900/20" />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="rounded-2xl border-gray-200 focus:border-gray-900 focus:ring-gray-900/20" />
              </div>
              <select name="service" value={form.service} onChange={handleChange} className="rounded-2xl border-gray-200 focus:border-gray-900 focus:ring-gray-900/20">
                <option>Residences</option>
                <option>Yachts</option>
                <option>Special Treatments</option>
                <option>Concierge</option>
              </select>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your property or request" rows={4} className="rounded-2xl border-gray-200 focus:border-gray-900 focus:ring-gray-900/20" />
              <button disabled={status.state==='loading'} className="mt-2 rounded-full bg-gray-900 text-white px-6 py-3 text-sm md:text-base hover:bg-black transition-colors">
                {status.state === 'loading' ? 'Sending…' : 'Request consultation'}
              </button>
              {status.state === 'success' && <p className="text-green-600">Thank you. Our concierge will be in touch shortly.</p>}
              {status.state === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
        <div className="lg:pl-8">
          <div className="rounded-3xl overflow-hidden border border-gray-200">
            <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2071&auto=format&fit=crop" alt="Luxury interior" className="w-full h-80 object-cover" />
          </div>
          <div className="mt-6 text-gray-600 text-sm">
            Discretion assured. By submitting this form you agree to be contacted by our team.
          </div>
        </div>
      </div>
    </section>
  )
}
