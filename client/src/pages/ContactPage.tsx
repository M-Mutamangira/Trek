import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plane, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import { useAuthStore } from '../store/authStore'

export default function ContactPage(): React.ReactElement {
  const { isAuthenticated } = useAuthStore()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight select-none">
            <Plane className="w-5 h-5 text-slate-900 dark:text-zinc-100 rotate-[45deg]" />
            <span>Savanna Escape</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            <Link 
              to="/#about" 
              className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              About us
            </Link>
            <Link 
              to="/#destinations" 
              className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              Destinations
            </Link>
          </nav>

          {/* Login Button */}
          <div>
            <Link
              to={isAuthenticated ? '/dashboard' : '/login'}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white dark:text-zinc-950 bg-slate-900 dark:bg-zinc-100 hover:bg-slate-800 dark:hover:bg-zinc-200 rounded-lg shadow-sm transition-all active:scale-[0.97]"
            >
              Login
            </Link>
          </div>
        </div>
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
