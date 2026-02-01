import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Coffee, Heart, Award, Clock, ArrowRight, Star, Play } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import coffeeVideo from '../assets/coffee-video.mp4';
import logo from '../assets/logo.png';
import storefrontImg from '../assets/storefront_v2.png';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  const features = [
    {
      icon: Coffee,
      title: 'Premium Quality',
      description: 'Ethically sourced beans from the finest coffee regions around the world'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every cup is crafted with care by our expert baristas'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in coffee craftsmanship and service'
    },
    {
      icon: Clock,
      title: 'Always Fresh',
      description: 'Roasted daily to ensure the freshest, most flavorful coffee'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image: Storefront */}
        <div className="absolute inset-0 z-0">
          <img
            src={storefrontImg}
            alt="Good Grounds Coffee Storefront"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          {/* Subtle Dark Overlay for Text Readability - slightly lighter for this image */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-left text-white"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
                Welcome to
                <br />
                Good Grounds!
              </h1>
              
              <p className="text-lg md:text-xl mb-8 font-light tracking-wide max-w-lg drop-shadow-md">
                Start Your Day Right! Add a splash of joy, or cream, to your day with Good Grounds!
              </p>

              <Link to="/menu" className="btn bg-[#2C1810] text-white hover:bg-[#4A3022] border-none px-8 py-4 text-lg rounded-md transition-all shadow-lg">
                Order now
              </Link>
            </motion.div>

            {/* Right Column: Logo Overlay Removed */}
            <div className="hidden lg:block"></div>

          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-[var(--color-foam)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block text-[var(--color-accent)] font-bold text-sm uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[var(--color-espresso)] mb-6">
                Experience Our Story
              </h2>
              <div className="space-y-6 text-lg text-[var(--color-coffee)] leading-relaxed">
                <p>
                  At Good Grounds Coffee, we believe that great coffee is more than just a beverage—it's an experience that brings people together.
                </p>
                <p>
                  Since opening our doors in Goodland, Kansas, we've been committed to serving the finest specialty coffee in a warm, welcoming atmosphere.
                </p>
                <p>
                  Our passion for quality drives everything we do, from sourcing the best beans to crafting each drink with precision and care. We're not just a coffee shop; we're a community gathering place.
                </p>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 mt-8 text-[var(--color-accent)] font-bold hover:gap-4 transition-all group"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  poster="https://images.unsplash.com/photo-1559496417-e7f25cb247f6?auto=format&fit=crop&q=80&w=1000"
                >
                  <source src={coffeeVideo} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[var(--color-accent)] font-bold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[var(--color-espresso)] mb-6">
              What Makes Us Special
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:bg-[var(--color-foam)] border border-transparent hover:border-[var(--color-cream)]"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-accent)]">
                    <feature.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-[var(--color-espresso)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-coffee)]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-32 bg-[var(--color-foam)]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[var(--color-accent)] font-bold text-sm uppercase tracking-wider mb-4">
              Featured Menu
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[var(--color-espresso)] mb-6">
              Customer Favorites
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="btn btn-primary btn-large">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
