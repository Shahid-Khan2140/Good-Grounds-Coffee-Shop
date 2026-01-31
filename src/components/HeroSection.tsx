import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Coffee } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#faf6f0] via-[#f5e6d3] to-[#e8d5c4] pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d2516' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      {/* Floating Coffee Beans */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 w-16 h-16 bg-[#6f4e37]/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-20 w-24 h-24 bg-[#a67c52]/10 rounded-full blur-xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-[#6f4e37]/10 text-[#6f4e37] rounded-full text-sm font-medium mb-6">
                ☕ Premium Coffee Experience
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold text-[#3d2516] mb-6 leading-tight"
            >
              Brewed with{' '}
              <span className="text-[#6f4e37]">Passion</span>,
              <br />
              Delivered with{' '}
              <span className="text-[#a67c52]">Love</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-[#6f4e37] mb-8 max-w-xl"
            >
              Experience the finest artisan coffee, ethically sourced and expertly roasted. 
              Join our community of coffee lovers and discover your perfect brew.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => onNavigate('menu')}
                size="lg"
                className="bg-[#6f4e37] hover:bg-[#3d2516] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Order Coffee
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => onNavigate('menu')}
                size="lg"
                variant="outline"
                className="border-2 border-[#6f4e37] text-[#6f4e37] hover:bg-[#6f4e37] hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                Explore Menu
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#6f4e37]/20"
            >
              <div>
                <div className="text-3xl font-bold text-[#6f4e37] font-['Playfair_Display']">
                  50+
                </div>
                <div className="text-sm text-[#6f4e37]/70">Coffee Varieties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#6f4e37] font-['Playfair_Display']">
                  10k+
                </div>
                <div className="text-sm text-[#6f4e37]/70">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#6f4e37] font-['Playfair_Display']">
                  4.9★
                </div>
                <div className="text-sm text-[#6f4e37]/70">Average Rating</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Animated Coffee Cup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Steam Animation */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex gap-4">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-60, -120],
                      opacity: [0.6, 0],
                      scaleX: [1, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeOut",
                    }}
                    className="w-8 h-16 bg-gradient-to-t from-[#6f4e37]/30 to-transparent rounded-full blur-sm"
                  />
                ))}
              </div>

              {/* Coffee Cup Image Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6f4e37]/20 to-[#d4a574]/20 rounded-full blur-3xl" />
                  
                  {/* Coffee Cup Illustration */}
                  <div className="relative bg-gradient-to-br from-white to-[#f5e6d3] rounded-3xl p-12 shadow-2xl">
                    <div className="relative">
                      {/* Cup */}
                      <div className="w-full aspect-[3/4] bg-gradient-to-b from-[#6f4e37] to-[#3d2516] rounded-t-3xl rounded-b-[100px] shadow-inner relative overflow-hidden">
                        {/* Coffee Liquid */}
                        <div className="absolute bottom-0 left-0 right-0 h-4/5 bg-gradient-to-b from-[#a67c52] to-[#6f4e37]">
                          {/* Foam/Cream on top */}
                          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#f5e6d3] to-transparent rounded-t-3xl" />
                        </div>
                        
                        {/* Latte Art */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24">
                          <svg viewBox="0 0 100 100" className="w-full h-full opacity-90">
                            <path
                              d="M50 20 Q30 40 50 60 Q70 40 50 20 M50 60 Q50 80 50 80"
                              fill="none"
                              stroke="#f5e6d3"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Handle */}
                      <div className="absolute right-0 top-1/4 w-16 h-20 border-4 border-[#6f4e37] rounded-r-full" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-20 h-20"
              >
                <Coffee className="w-full h-full text-[#d4a574] opacity-20" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#6f4e37] rounded-full flex justify-center">
          <div className="w-1.5 h-2 bg-[#6f4e37] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
