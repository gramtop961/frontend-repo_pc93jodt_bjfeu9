import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const items = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl tracking-widest font-semibold text-gray-900">PRISTINE</a>
        <nav className="hidden md:flex items-center gap-8">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              {it.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 rounded-full bg-gray-900 text-white px-5 py-2 text-sm hover:bg-black transition-colors">Book Consultation</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/70 shadow-sm">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="grid gap-3 bg-white/70 rounded-2xl p-4 shadow-lg">
            {items.map((it) => (
              <a key={it.href} href={it.href} onClick={() => setOpen(false)} className="text-sm text-gray-800 py-2">
                {it.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-gray-900 text-white px-5 py-2 text-sm text-center">Book Consultation</a>
          </div>
        </div>
      )}
    </header>
  )
}
