import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const hours = [
    { day: 'Monday - Saturday', time: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[var(--color-espresso)] to-[var(--color-coffee)] text-white">
      <div className="container py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <img 
                src={logo} 
                alt="Good Grounds Coffee" 
                className="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <div className="font-serif text-2xl font-bold text-white">
                  Good Grounds
                </div>
                <div className="text-sm tracking-wider text-white/80">
                  COFFEE
                </div>
              </div>
            </Link>
            <p className="text-white/80 mb-6">
              Serving exceptional coffee and creating memorable experiences in Goodland, Kansas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/GoodGroundsGoodland"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/goodgroundsgoodland"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--color-gold)] group-hover:w-2 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Hours</h3>
            <ul className="space-y-3">
              {hours.map((schedule) => (
                <li key={schedule.day} className="text-white/80">
                  <div className="font-semibold text-white">{schedule.day}</div>
                  <div className="text-sm">{schedule.time}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=2402+Commerce+Rd,+Goodland,+KS+67735"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--color-gold)] group-hover:scale-110 transition-transform" />
                  <span>
                    2402 Commerce Rd<br />
                    Goodland, KS 67735, USA
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:6208907696"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 text-[var(--color-gold)] group-hover:scale-110 transition-transform" />
                  <span>(620) 890-7696</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:goodgroundscafe@gmail.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 text-[var(--color-gold)] group-hover:scale-110 transition-transform" />
                  <span>goodgroundscafe@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>
              © {currentYear} Good Grounds Coffee. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
