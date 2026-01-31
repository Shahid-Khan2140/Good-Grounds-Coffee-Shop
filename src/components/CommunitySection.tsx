import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CommunitySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#faf6f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1593536488177-1eb3c2d4e3d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwY2FmZSUyMGludGVyaW9yJTIwY296eXxlbnwxfHx8fDE3Njk4NDM1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Coffee shop interior"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1753351050724-511764d227e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwY29mZmVlJTIwc2hvcCUyMHRlYW0lMjBwZW9wbGUlMjBzbWlsaW5nfGVufDF8fHx8MTc2OTg0MzkxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Barista"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-['Playfair_Display'] text-3xl font-bold text-[#6f4e37]">
                      10,000+
                    </div>
                    <div className="text-sm text-[#6f4e37]/70">Happy Customers</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#f5e6d3] rounded-full blur-2xl opacity-50" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#6f4e37]/10 text-[#6f4e37] rounded-full text-sm font-medium mb-6">
              Our Story
            </span>
            
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#3d2516] mb-6">
              More Than Just Coffee – We're a Community
            </h2>
            
            <p className="text-lg text-[#6f4e37] mb-6">
              Founded in 2015, Bean Scene started with a simple mission: to bring people together 
              over exceptional coffee. What began as a small neighborhood café has grown into a 
              thriving community of coffee enthusiasts.
            </p>
            
            <p className="text-lg text-[#6f4e37] mb-8">
              Every bean is carefully selected from sustainable farms, roasted to perfection in-house, 
              and crafted with love by our expert baristas. We believe coffee is more than a beverage – 
              it's an experience, a moment of connection, and a daily ritual worth celebrating.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-[#f5e6d3]/50 rounded-xl">
                <div className="font-['Playfair_Display'] text-3xl font-bold text-[#6f4e37] mb-1">
                  50+
                </div>
                <div className="text-sm text-[#6f4e37]/70">Coffee Varieties</div>
              </div>
              <div className="text-center p-4 bg-[#f5e6d3]/50 rounded-xl">
                <div className="font-['Playfair_Display'] text-3xl font-bold text-[#6f4e37] mb-1">
                  8
                </div>
                <div className="text-sm text-[#6f4e37]/70">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-[#f5e6d3]/50 rounded-xl">
                <div className="font-['Playfair_Display'] text-3xl font-bold text-[#6f4e37] mb-1">
                  4.9★
                </div>
                <div className="text-sm text-[#6f4e37]/70">Customer Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
