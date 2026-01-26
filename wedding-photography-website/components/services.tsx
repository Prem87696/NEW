import { Camera, Video, Edit3, Heart } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: 'Wedding Photography',
      description: 'Full-day coverage of your wedding with candid and formal shots, capturing every precious moment.',
    },
    {
      icon: Heart,
      title: 'Pre-Wedding Shoots',
      description: 'Beautiful outdoor and indoor pre-wedding photoshoots to celebrate your love story before the big day.',
    },
    {
      icon: Camera,
      title: 'Candid Photography',
      description: 'Authentic, unposed moments that tell the real story of your events with artistic composition.',
    },
    {
      icon: Heart,
      title: 'Portrait Photography',
      description: 'Professional portraits for individuals and families with perfect lighting and composition.',
    },
    {
      icon: Video,
      title: 'Wedding Videography',
      description: 'Cinematic wedding videos that capture emotions, vows, and celebrations in stunning quality.',
    },
    {
      icon: Edit3,
      title: 'Video Editing',
      description: 'Professional post-production editing to create highlight reels and complete wedding films.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Our Services</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Comprehensive photography and videography services tailored to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-8 border border-border hover:border-accent transition-colors group"
              >
                <div className="mb-4 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <Icon size={24} className="text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
