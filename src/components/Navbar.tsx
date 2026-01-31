import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);


  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-[var(--color-cream)] border-opacity-30"
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img 
                src={logo} 
                alt="Good Grounds Coffee" 
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="hidden sm:block">
                <div className="font-serif text-xl lg:text-2xl font-bold text-[var(--color-espresso)]">
                  Good Grounds
                </div>
                <div className="text-xs tracking-wider text-[var(--color-latte)] font-medium">
                  COFFEE
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-[var(--color-accent)]'
                      : 'text-[var(--color-coffee)] hover:text-[var(--color-accent)]'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-accent)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Cart Icon */}
              <Link
                to="/cart"
                className="relative p-2 rounded-full text-[var(--color-coffee)] hover:bg-[var(--color-foam)] transition-all"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </Link>

              {/* Order Online Button */}
              <Link
                to="/menu"
                className="hidden lg:inline-flex btn btn-primary px-6 py-2.5 text-sm"
              >
                Order Online
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[var(--color-coffee)] hover:bg-[var(--color-foam)] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 lg:top-24 left-0 right-0 z-40 bg-white shadow-xl lg:hidden overflow-hidden"
          >
            <div className="container py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'bg-[var(--color-foam)] text-[var(--color-accent)]'
                          : 'text-[var(--color-coffee)] hover:bg-[var(--color-foam)]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link
                    to="/menu"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn btn-primary w-full justify-center mt-4"
                  >
                    Order Online
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
