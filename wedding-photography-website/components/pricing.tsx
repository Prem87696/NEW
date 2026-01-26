import { Check } from 'lucide-react'

export default function Pricing() {
  const packages = [
    {
      name: 'Starter Package',
      price: '₹25,000',
      duration: '4 hours',
      features: [
        'Pre-wedding or portrait shoot',
        '300+ edited photos',
        'Digital copies in high resolution',
        'Album design assistance',
      ],
      popular: false,
    },
    {
      name: 'Premium Package',
      price: '₹50,000',
      duration: '8 hours',
      features: [
        'Full wedding day coverage',
        '800+ edited photos',
        'Two videographers',
        'Highlight reel video',
        'Album design assistance',
        'Digital copies in high resolution',
      ],
      popular: true,
    },
    {
      name: 'Platinum Package',
      price: '₹80,000',
      duration: 'Full day + next day',
      features: [
        'Full wedding and reception coverage',
        '1200+ edited photos',
        'Multiple videographers',
        'Complete wedding film',
        'Highlight reel video',
        'Professional album',
        'Drone shots (if available)',
        'Same-day video edit',
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Pricing Packages</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Flexible packages designed to fit your budget and needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-lg border transition-all ${
                pkg.popular
                  ? 'border-accent bg-accent/5 shadow-lg scale-105 md:scale-110'
                  : 'border-border bg-card hover:border-accent'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground mb-6">{pkg.duration}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-bold mb-8 transition-colors ${
                    pkg.popular
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                      : 'border border-accent text-accent hover:bg-accent/10'
                  }`}
                >
                  Choose Package
                </button>

                <div className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
