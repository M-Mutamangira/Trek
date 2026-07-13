import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plane, Mail, Phone, MapPin, CheckCircle, Menu, X } from 'lucide-react'
import { useAuthStore } from '../store/authStore'

export default function ContactPage(): React.ReactElement {
  const { isAuthenticated } = useAuthStore()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return

    setIsLoading(true)
    // Simulate API submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setName('')
      setEmail('')
      setMessage('')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 flex flex-col font-sans">
      <style>{`
        .logo-exciting {
          font-family: 'Poppins', sans-serif;
          font-weight: 900;
          font-size: 1.4rem;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 2px 10px rgba(16,185,129,0.15);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .logo-exciting:hover {
          transform: scale(1.04);
        }
      `}</style>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 transition-colors">
        {/* Mobile / Tablet View (< lg) */}
        <div className="lg:hidden max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
          {/* Left: Hamburger menu toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 -ml-2 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors text-slate-700 dark:text-zinc-300"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Center: Exciting Logo (Centered) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link to="/" className="logo-exciting select-none no-underline">
              Savanna Escape
            </Link>
          </div>

          {/* Right: Login Button */}
          <div>
            <Link
              to={isAuthenticated ? '/dashboard' : '/login'}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white dark:text-zinc-950 bg-slate-900 dark:bg-zinc-100 hover:bg-slate-800 dark:hover:bg-zinc-200 rounded-lg shadow-sm transition-all active:scale-[0.97]"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Laptop / Desktop View (>= lg) */}
        <div className="hidden lg:flex max-w-6xl mx-auto px-6 h-16 items-center justify-between relative">
          {/* Left: Exciting Logo */}
          <div>
            <Link to="/" className="logo-exciting select-none no-underline">
              Savanna Escape
            </Link>
          </div>

          {/* Center: Nav links */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
            <Link 
              to="/#destinations" 
              className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              Destinations
            </Link>
            <Link 
              to="/#about" 
              className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              About us
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-emerald-600 dark:text-emerald-400 transition-colors"
            >
              Contact us
            </Link>
          </div>

          {/* Right: Login Button */}
          <div>
            <Link
              to={isAuthenticated ? '/dashboard' : '/login'}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white dark:text-zinc-950 bg-slate-900 dark:bg-zinc-100 hover:bg-slate-800 dark:hover:bg-zinc-200 rounded-lg shadow-sm transition-all active:scale-[0.97]"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Slide-out Hamburger Menu Panel */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[998] transition-opacity"
              onClick={() => setMenuOpen(false)}
            />
            <div className="fixed top-0 left-0 bottom-0 w-72 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 z-[999] p-6 flex flex-col gap-6 shadow-2xl transition-transform animate-in slide-in-from-left duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-zinc-800">
                <span className="logo-exciting">Savanna Escape</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors text-slate-500 hover:text-slate-900"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                <Link
                  to="/#destinations"
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-semibold text-slate-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors no-underline py-1.5"
                >
                  Destinations
                </Link>
                <Link
                  to="/#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-semibold text-slate-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors no-underline py-1.5"
                >
                  About us
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-semibold text-emerald-600 dark:text-emerald-400 transition-colors no-underline py-1.5"
                >
                  Contact us
                </Link>
              </nav>
            </div>
          </>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 md:py-20">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl font-light tracking-tight text-slate-900 dark:text-zinc-50 mb-4">
            Let's talk travel.
          </h1>
          <p className="text-base text-slate-500 dark:text-zinc-400 leading-relaxed font-light">
            Have questions about our custom itineraries, group bookings, or custom planning services? Send us a message and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 p-6 md:p-8 space-y-6">
              <h2 className="text-lg font-medium text-slate-900 dark:text-zinc-150">Agency Office</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-700 dark:text-zinc-350 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">Address</h3>
                    <p className="text-sm text-slate-600 dark:text-zinc-300 mt-1 font-light leading-relaxed">
                      100 Voyager Boulevard,<br />
                      Suite 400,<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-700 dark:text-zinc-350 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">Phone</h3>
                    <p className="text-sm text-slate-600 dark:text-zinc-300 mt-1 font-light">
                      +1 (555) 732-8735
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-700 dark:text-zinc-350 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">Email</h3>
                    <a href="mailto:hello@youragency.com" className="text-sm text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-colors mt-1 font-light block">
                      hello@youragency.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 p-6 md:p-8">
              {isSubmitted ? (
                <div className="py-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-emerald-600 dark:text-emerald-450">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-medium text-slate-900 dark:text-zinc-100">Message Received</h2>
                  <p className="text-sm text-slate-500 dark:text-zinc-400 font-light max-w-sm">
                    Thank you for reaching out. A travel specialist from our team will review your message and get in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 text-sm font-medium border border-slate-200 dark:border-zinc-800 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all active:scale-[0.97]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-650 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-zinc-600 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-650 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-zinc-600 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your upcoming travel plans..."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-650 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-zinc-600 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white dark:text-zinc-950 bg-slate-900 dark:bg-zinc-100 hover:bg-slate-800 dark:hover:bg-zinc-200 rounded-lg shadow-sm transition-all active:scale-[0.97] disabled:opacity-50"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-8 transition-colors mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left copyright */}
          <p className="text-xs text-slate-400 dark:text-zinc-500 font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} Savanna Escape Travel Agency. All rights reserved.
          </p>

          {/* Quick links & Socials */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <Link to="/#about" className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">About us</Link>
              <Link to="/#destinations" className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">Destinations</Link>
              <Link to="/contact" className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">Contact us</Link>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-zinc-500 font-normal border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-zinc-800 pt-4 sm:pt-0 sm:pl-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">Facebook</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
