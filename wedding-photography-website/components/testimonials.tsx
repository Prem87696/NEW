import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya & Arjun',
      role: 'Wedding Couple',
      image: '/happy-couple-smiling.png',
      text: 'Sunil captured our wedding day perfectly! The photos are absolutely beautiful and tell our love story so naturally. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Neha Sharma',
      role: 'Bride',
      image: '/beautiful-bride-portrait.jpg',
      text: 'The pre-wedding shoot was amazing. Sunil made us feel comfortable and the final photos exceeded all expectations. Worth every penny!',
      rating: 5,
    },
    {
      name: 'Rajesh & Family',
      role: 'Family Portrait Client',
      image: '/happy-family-together.jpg',
      text: 'Professional, punctual, and incredibly talented. Our family portraits are now our most treasured possessions. Thank you!',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Client Testimonials</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          What our happy clients say about their experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-8 border border-border">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
