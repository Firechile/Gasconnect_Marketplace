import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-1 group cursor-pointer mb-4">
              <div>
                <img 
                  src="/logo.png" 
                  alt="GasConnect Logo"
                  className="w-8 h-8" 
                />
              </div>
              <span className="text-2xl font-medium">
                <span className="text-white">Gas</span>
                <span className="text-yellow-400">Connect</span>
              </span>
            </div>
            <p className="text-white/80 mb-6 text-sm sm:text-base">
              Empowering communities with sustainable biogas solutions. Transform waste into clean energy and build a greener future together.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-yellow-400 p-2 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-blue-900" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-yellow-400 p-2 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Twitter className="w-5 h-5 text-white group-hover:text-blue-900" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-yellow-400 p-2 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-blue-900" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-yellow-400 p-2 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-blue-900" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-yellow-400 p-2 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Youtube className="w-5 h-5 text-white group-hover:text-blue-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-white/80 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#biogaskits" className="text-white/80 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                  Biogas Kits
                </a>
              </li>
              <li>
                <a href="#articles" className="text-white/80 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                  Articles & Guides
                </a>
              </li>
              <li>
                <a href="#contactus" className="text-white/80 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-yellow-400">Products & Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home-kits" className="text-white/80 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                  Home Biogas Kits
                </a>
              </li>
              <li>
                <a href="#farm-kits" className="text-white/80 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                  Farm Biogas Systems
                </a>
              </li>
              <li>
                <a href="#commercial" className="text-white/80 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                  Commercial Solutions
                </a>
              </li>
              <li>
                <a href="#installation" className="text-white/80 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                  Installation Services
                </a>
              </li>
              <li>
                <a href="#maintenance" className="text-white/80 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                  Maintenance & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-yellow-400">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm sm:text-base">
                  Upper Hill, ABC Place<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+254712345678" className="text-white/80 hover:text-yellow-400 transition-colors block text-sm sm:text-base">
                    +254 712 345 678
                  </a>
                  <a href="tel:+254700123456" className="text-white/80 hover:text-yellow-400 transition-colors block text-sm sm:text-base">
                    +254 700 123 456
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@gasconnect.co.ke" className="text-white/80 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                  info@gasconnect.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-white/80 mb-6 text-sm sm:text-base">
              Get the latest updates on biogas technology, special offers, and sustainability tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input 
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-full text-blue-900 placeholder-blue-900/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-white/70 text-sm text-center sm:text-left">
              © 2026 GasConnect. All rights reserved. Made with 💚 for a sustainable future.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#privacy" className="text-white/70 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/70 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-white/70 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-300 text-blue-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  )
}