'use client'

import { useState } from 'react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const portfolioItems = [
    { id: 1, category: 'wedding', title: 'Romantic Wedding Ceremony', image: '/wedding-ceremony-bride-groom.jpg' },
    { id: 2, category: 'prewedding', title: 'Pre-Wedding Shoot', image: '/pre-wedding-couple-outdoors.jpg' },
    { id: 3, category: 'portrait', title: 'Portrait Session', image: '/professional-woman-portrait.png' },
    { id: 4, category: 'candid', title: 'Candid Moments', image: '/candid-family-laughing.jpg' },
    { id: 5, category: 'wedding', title: 'Wedding Reception', image: '/wedding-reception-dance.jpg' },
    { id: 6, category: 'prewedding', title: 'Couple Photoshoot', image: '/couple-photoshoot-romantic.jpg' },
  ]

  const filters = ['all', 'wedding', 'prewedding', 'portrait', 'candid']

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Our Portfolio</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore our collection of stunning wedding, pre-wedding, portrait, and candid photography
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-colors capitalize ${
                activeFilter === filter
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg h-64 md:h-80 cursor-pointer"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end justify-start p-6">
                <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
