import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { shareApi } from '../../api/client'

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

const FALLBACK_TRIPS: FeaturedTrip[] = [
  {
    id: 'kyoto', title: 'Kyoto Cherry Blossom Tour', duration: '10 Days',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop',
    tags: ['Cultural', 'Japan'], description: '', publicToken: 'kyoto-demo', inviteToken: 'kyoto-join',
  },
  {
    id: 'amalfi', title: 'Amalfi Coast Explorer', duration: '7 Days',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop',
    tags: ['Coastal', 'Italy'], description: '', publicToken: 'amalfi-demo', inviteToken: 'amalfi-join',
  },
  {
    id: 'swiss', title: 'Swiss Alps & Lakes', duration: '12 Days',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop',
    tags: ['Adventure', 'Switzerland'], description: '', publicToken: 'swiss-demo', inviteToken: 'swiss-join',
  },
]

const STORAGE_KEY = 'featured-strip-seen'

function loadSeenIds(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return new Set(JSON.parse(raw))
  } catch {}
  return new Set()
}

function saveSeenIds(ids: Set<string>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]))
  } catch {}
}

function scrollStripToChild(container: HTMLDivElement, index: number): void {
  const child = container.children[index] as HTMLElement | undefined
  if (!child) return
  const center = child.offsetLeft - (container.clientWidth / 2) + (child.offsetWidth / 2)
  container.scrollTo({ left: center, behavior: 'smooth' })
}

/**
 * Instagram/Facebook-stories–style horizontal strip of featured trips.
 * Auto-scrolls continuously, wraps infinitely, and each bubble links
 * to the public shared trip page.
 * Rings: coloured gradient for unseen trips, grey for seen.
 */
export default function FeaturedStoriesStrip(): React.ReactElement | null {
  const [trips, setTrips] = useState<FeaturedTrip[]>(FALLBACK_TRIPS)
  const [isFromApi, setIsFromApi] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [seenIds, setSeenIds] = useState<Set<string>>(loadSeenIds)
  const scrollRef = useRef<HTMLDivElement>(null)
  const autoRef = useRef<NodeJS.Timeout | null>(null)

  // Fetch featured trips on mount — overwrite fallbacks if real data exists
  useEffect(() => {
    shareApi.getFeaturedTrips()
      .then((data) => { if (data?.length) { setTrips(data); setIsFromApi(true) } })
      .catch(() => {})
  }, [])

  const markSeen = useCallback((tripId: string) => {
    setSeenIds((prev) => {
      if (prev.has(tripId)) return prev
      const next = new Set(prev)
      next.add(tripId)
      saveSeenIds(next)
      return next
    })
  }, [])

  // Auto-advance the active index every 4s, scrolling the strip horizontally
  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current)
    if (trips.length === 0) return
    autoRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % trips.length
        const container = scrollRef.current
        if (container) scrollStripToChild(container, next)
        return next
      })
    }, 4000)
  }, [trips.length])

  useEffect(() => {
    startAuto()
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [startAuto])

  // Don't render anything until we have data
  if (trips.length === 0) return null

  return (
    <div className="stories-strip">
      <style>{`
        .stories-strip {
          width: 100%;
          border-bottom: 1px solid var(--border, rgba(148,163,184,0.15));
          padding: 14px 0 12px;
          background: inherit;
        }
        .stories-scroll {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 0 20px;
        }
        .stories-scroll::-webkit-scrollbar { display: none; }

        .story-bubble {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
          scroll-snap-align: center;
          text-decoration: none;
          width: 72px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .story-bubble:hover { transform: scale(1.08); }
        .story-bubble:active { transform: scale(0.95); }

        .story-ring {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          padding: 3px;
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }
        .story-ring--unseen {
          background: linear-gradient(135deg, #f59e0b, #ef4444, #ec4899);
          box-shadow: 0 0 12px rgba(245,158,11,0.35);
        }
        .story-ring--seen {
          background: linear-gradient(135deg, #d4d4d8, #a1a1aa);
        }
        .story-img-wrap {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--bg, #fff);
        }
        :is(.dark, [data-theme="dark"]) .story-img-wrap {
          border-color: #09090b;
        }
        .story-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .story-label {
          font-size: 10px;
          font-weight: 500;
          color: var(--text-muted, #64748b);
          text-align: center;
          max-width: 72px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.2;
        }
        :is(.dark, [data-theme="dark"]) .story-label {
          color: #a1a1aa;
        }

        @keyframes storyPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.4); }
          50% { box-shadow: 0 0 14px 4px rgba(245,158,11,0.2); }
        }
        .story-ring--unseen {
          animation: storyPulse 2s ease-in-out infinite;
        }
      `}</style>

      <div className="stories-scroll" ref={scrollRef}>
        {trips.map((trip, i) => {
          const unseen = !seenIds.has(trip.id)
          return (
            <Link
              key={trip.id}
              to={`/shared/${trip.publicToken}`}
              className="story-bubble"
              onClick={() => {
                markSeen(trip.id)
                setActiveIndex(i)
                startAuto()
              }}
            >
              <div className={`story-ring ${unseen ? 'story-ring--unseen' : 'story-ring--seen'}`}>
                <div className="story-img-wrap">
                  <img src={trip.image} alt={trip.title} loading="lazy" />
                </div>
              </div>
              <span className="story-label">{trip.title}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
