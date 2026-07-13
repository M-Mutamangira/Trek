import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plane, Calendar, MapPin, ChevronLeft, ChevronRight, ChevronDown, ArrowRight, Users, Map, Wallet, Luggage, RefreshCw, Sparkles } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { shareApi } from '../api/client'

interface FeaturedTrip {
  id: string
  title: string
  duration: string
  image: string
  tags: string[]
  description: string
  publicToken: string
  inviteToken: string
}

const FEATURED_TRIPS: FeaturedTrip[] = [
  {
    id: 'kyoto',
    title: 'Kyoto Cherry Blossom Tour',
    duration: '10 Days',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop',
    tags: ['Cultural', 'Seasonal', 'Japan'],
    description: 'See Kyoto during cherry blossom season — temples, gardens, and the Philosopher\'s Path in full bloom.',
    publicToken: 'kyoto-demo',
    inviteToken: 'kyoto-join',
  },
  {
    id: 'amalfi',
    title: 'Amalfi Coast Explorer',
    duration: '7 Days',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop',
    tags: ['Coastal', 'Scenic', 'Italy'],
    description: 'Drive the Amalfi coast, visit Positano and Ravello, and eat your way through Italy\'s most scenic stretch of coastline.',
    publicToken: 'amalfi-demo',
    inviteToken: 'amalfi-join',
  },
  {
    id: 'swiss',
    title: 'Swiss Alps & Lakes',
    duration: '12 Days',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop',
    tags: ['Adventure', 'Nature', 'Switzerland'],
    description: 'Hike alpine trails, swim in mountain lakes, and sleep in villages that sit at the foot of glaciers.',
    publicToken: 'swiss-demo',
    inviteToken: 'swiss-join',
  },
]

export default function LandingPage(): React.ReactElement {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()
  const [featuredTrips, setFeaturedTrips] = useState<FeaturedTrip[]>(FEATURED_TRIPS)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const ids = ['destinations', 'about']
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    shareApi.getFeaturedTrips()
      .then((data) => {
        if (data && data.length > 0) {
          setFeaturedTrips(data)
        }
      })
      .catch((e) => {
        console.error('Failed to fetch featured trips:', e)
      })
  }, [])

  const [typedText, setTypedText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const words = ['curated', 'shared', 'unforgettable']

  useEffect(() => {
    let timer: NodeJS.Timeout
    const currentFullWord = words[wordIndex]

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText((prev) => prev.slice(0, -1))
      }, 70)
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFullWord.slice(0, typedText.length + 1))
      }, 120)
    }

    if (!isDeleting && typedText === currentFullWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, wordIndex])

  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % featuredTrips.length)
    }, 5000)
  }, [featuredTrips.length])

  useEffect(() => {
    startAutoPlay()
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current) }
  }, [startAutoPlay])

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % featuredTrips.length)
    startAutoPlay()
  }

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + featuredTrips.length) % featuredTrips.length)
    startAutoPlay()
  }

  const tripA = featuredTrips[carouselIndex]
  const tripB = featuredTrips[(carouselIndex + 1) % featuredTrips.length]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 flex flex-col font-sans">
      <style>{`
        @keyframes carouselSlideIn {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .carousel-slide-in { animation: carouselSlideIn 0.5s ease-out both; }
      `}</style>
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
            <a 
              href="#destinations" 
              className={`text-sm font-medium transition-colors ${activeSection === 'destinations' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100'}`}
            >
              Destinations
            </a>
            <a 
              href="#about" 
              className={`text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100'}`}
            >
              About us
            </a>
            <Link
              to="/contact"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              Contact us
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

      {/* Hero Section */}
      <section className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 md:py-20 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-zinc-50 mb-6 leading-tight min-h-[3rem] md:min-h-[3.75rem]">
              Your next journey, <span className="font-normal border-b-2 border-slate-900 dark:border-zinc-100 min-w-[8rem] inline-block">{typedText}<span className="animate-pulse ml-0.5 font-light">|</span></span>.
            </h1>
            <p className="text-base md:text-lg text-slate-500 dark:text-zinc-400 leading-relaxed font-light">
              Custom trip plans built by our team and shared with your group as you go — no spreadsheets needed.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#destinations"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white dark:text-zinc-950 bg-slate-900 dark:bg-zinc-100 hover:bg-slate-800 dark:hover:bg-zinc-200 rounded-lg shadow-sm transition-all active:scale-[0.97] gap-2"
              >
                Find Trips
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium border border-slate-200 dark:border-zinc-800 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all active:scale-[0.97] gap-2"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <img
              src="/cosmos-hero.jpeg"
              alt="Savanna Escape travel hero"
              className="w-full max-w-md rounded-2xl shadow-xl object-cover select-none"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        </div>

        {/* Featured Destinations Carousel Section */}
        <div id="destinations" className="scroll-mt-24 mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-medium text-slate-900 dark:text-zinc-100">Featured Expeditions</h2>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">Pre-built itineraries from our team</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 flex items-center justify-center border border-slate-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 transition-all active:scale-[0.97]"
                aria-label="Previous trip"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 flex items-center justify-center border border-slate-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 transition-all active:scale-[0.97]"
                aria-label="Next trip"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Card Container — always 2 visible cards */}
          <div key={carouselIndex} className="grid grid-cols-1 md:grid-cols-2 gap-8 carousel-slide-in">
            {[tripA, tripB].map((trip) => (
              <div 
                key={trip.id} 
                className="flex flex-col border border-slate-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden shadow-sm h-full justify-between"
              >
                <div className="h-48 md:h-56 relative w-full">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover select-none"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 px-2.5 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {trip.duration}
                      </span>
                      {trip.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium text-slate-400 dark:text-zinc-500">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-zinc-50 mb-3">
                      {trip.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-light mb-6">
                      {trip.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-zinc-800/50">
                    <Link
                      to={`/shared/${trip.publicToken}`}
                      className="inline-flex items-center justify-center flex-1 px-4 py-2 text-sm font-medium border border-slate-200 dark:border-zinc-800 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-855 transition-all active:scale-[0.97]"
                    >
                      Explore
                    </Link>
                    {trip.inviteToken ? (
                      <Link
                        to={`/join/${trip.inviteToken}`}
                        className="inline-flex items-center justify-center flex-1 px-4 py-2 text-sm font-medium text-white dark:text-zinc-950 bg-slate-900 dark:bg-zinc-100 hover:bg-slate-800 dark:hover:bg-zinc-200 rounded-lg transition-all active:scale-[0.97] gap-1"
                      >
                        Join
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center justify-center flex-1 px-4 py-2 text-sm font-medium text-slate-400 dark:text-zinc-650 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-lg cursor-not-allowed opacity-50 gap-1"
                      >
                        Private Join
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white dark:text-zinc-950 bg-slate-900 dark:bg-zinc-100 hover:bg-slate-800 dark:hover:bg-zinc-200 rounded-lg shadow-sm transition-all active:scale-[0.97] gap-2"
            >
              See More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="scroll-mt-24 border-t border-slate-200 dark:border-zinc-850 pt-16 mb-16">
          <div className="max-w-2xl mb-14">
            <h2 className="text-xl font-medium text-slate-900 dark:text-zinc-100 mb-4">About Savanna Escape Agency</h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-zinc-400 leading-relaxed font-light mb-4">
              Travel works better when everyone plans together. We give our travelers a shared dashboard where friends, family, and agents can build itineraries side by side.
            </p>
            <p className="text-sm md:text-base text-slate-500 dark:text-zinc-400 leading-relaxed font-light">
              Hotels, flights, packing lists, budgets — everything updates instantly across every device.
            </p>
          </div>

          {/* What We Offer */}
          <div className="mb-14">
            <h3 className="text-lg font-medium text-slate-900 dark:text-zinc-100 mb-6">What We Offer</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users, title: 'Collaborative Planning', desc: 'Build itineraries with friends in real-time — no more email chains.' },
                { icon: Map, title: 'Interactive Maps', desc: 'Pin places on a map and explore them with Google or OpenStreetMap data.' },
                { icon: Wallet, title: 'Budget Management', desc: 'Split costs, track expenses, and settle debts in any currency.' },
                { icon: Luggage, title: 'Packing Lists', desc: 'Shared checklists with categories, templates, and assigned people.' },
                { icon: RefreshCw, title: 'Real-Time Sync', desc: 'Changes show up on everyone\'s screen the moment you make them.' },
                { icon: Sparkles, title: 'AI-Powered Assistance', desc: 'Plan trips and manage budgets by typing what you want — powered by built-in AI.' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="flex flex-col gap-3 p-5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-colors"
                  >
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-zinc-100 mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-14">
            <h3 className="text-lg font-medium text-slate-900 dark:text-zinc-100 mb-6">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Plan Together', desc: 'Create a trip, invite your companions, and start building your itinerary. Drag-and-drop places into day plans, add reservations, and set a budget.' },
                { step: '02', title: 'Explore & Adapt', desc: 'Browse interactive maps, check weather forecasts, import bookings from email, and refine plans in real-time as a group.' },
                { step: '03', title: 'Experience', desc: 'Access everything from your phone offline. Share photos, log journal entries, and settle expenses when the trip ends.' },
              ].map((item) => (
                <div key={item.step} className="flex flex-col gap-2">
                  <span className="text-xs font-semibold tracking-widest text-slate-400 dark:text-zinc-500">{item.step}</span>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-zinc-100">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-zinc-100 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-3 max-w-2xl">
              {[
                { q: 'Is Savanna Escape free to use?', a: 'Yes. No subscriptions, no hidden costs. Plan as many trips as you want with as many people as you want.' },
                { q: 'Do I need to install anything?', a: 'No. It runs in your browser. You can save it to your phone\'s home screen for a feel close to a native app.' },
                { q: 'Can I plan trips offline?', a: 'Yes. The app caches your trips, maps, and data so you can access them without internet.' },
                { q: 'How does real-time collaboration work?', a: 'Every change syncs instantly. Add a place, update a budget, tick off packing — everyone sees it right away.' },
                { q: 'Is my data private?', a: '              Yes. You own your data. It stays on your server, not in someone else\'s cloud. We never sell or share your information.' },
                { q: 'Can travel agencies use this?', a: 'Yes. It supports invite links, role-based access, SSO, and detailed itineraries for managing multiple clients.' },
              ].map((faq, i) => {
                const isOpen = openFaq === i
                return (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-slate-900 dark:text-zinc-100 transition-colors"
                    >
                      {faq.q}
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 dark:text-zinc-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-light">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

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
              <a href="#about" className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">About us</a>
              <a href="#destinations" className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">Destinations</a>
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
