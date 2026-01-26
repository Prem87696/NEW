import { Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold">SK</span>
              </div>
              <span className="font-bold text-lg">SK Photography</span>
            </div>
            <p className="text-primary-foreground/70">
              Professional wedding, pre-wedding, portrait, and candid photography services.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#services" className="hover:text-accent transition-colors">Wedding Photography</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Pre-Wedding Shoots</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Videography</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Video Editing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:sunil@skphotography.com" className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+919800000006" className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; 2025 SK Photography. All rights reserved. | Captured with passion, delivered with excellence.</p>
        </div>
      </div>
    </footer>
  )
}
