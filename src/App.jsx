import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Pristine Luxury Cleanings. All rights reserved.</p>
        <form className="flex items-center gap-2">
          <input type="email" placeholder="Join the private list" className="rounded-full border-gray-200 px-4 py-2 text-sm" />
          <button type="button" className="rounded-full bg-gray-900 text-white px-4 py-2 text-sm">Subscribe</button>
        </form>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
