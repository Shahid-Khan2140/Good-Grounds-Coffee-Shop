import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Coffee Enthusiast',
    image: 'https://images.unsplash.com/photo-1762754105061-8082763619e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwY2FmZSUyMGRyaW5raW5nJTIwY29mZmVlfGVufDF8fHx8MTc2OTg0MzkxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    text: "Bean Scene has completely transformed my morning routine. The quality of their coffee is unmatched, and the delivery is always on time. I can't imagine starting my day without their Ethiopian blend!",
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1753351050724-511764d227e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwY29mZmVlJTIwc2hvcCUyMHRlYW0lMjBwZW9wbGUlMjBzbWlsaW5nfGVufDF8fHx8MTc2OTg0MzkxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    text: "As a remote worker, having access to premium coffee delivered quickly is a game changer. The customization options are fantastic, and every cup is crafted to perfection.",
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Coffee Lover',
    image: 'https://images.unsplash.com/photo-1762754105061-8082763619e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwY2FmZSUyMGRyaW5raW5nJTIwY29mZmVlfGVufDF8fHx8MTc2OTg0MzkxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    text: "The subscription service is incredible! I love discovering new coffee blends every month. The quality is consistently excellent, and the customer service is top-notch.",
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1753351050724-511764d227e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwY29mZmVlJTIwc2hvcCUyMHRlYW0lMjBwZW9wbGUlMjBzbWlsaW5nfGVufDF8fHx8MTc2OTg0MzkxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    text: "We've been ordering Bean Scene for our office for over a year now. Our team absolutely loves it, and it's become an essential part of our workplace culture. Highly recommend!",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#faf6f0] to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236f4e37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#6f4e37]/10 text-[#6f4e37] rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#3d2516] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#6f4e37] max-w-2xl mx-auto">
            Join thousands of satisfied coffee lovers who trust Bean Scene
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <Card className="p-8 md:p-12 bg-white rounded-3xl border-none shadow-2xl relative">
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-[#6f4e37]/5 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-[#6f4e37]/20" />
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#f5e6d3]">
                        <ImageWithFallback
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Rating */}
                      <div className="flex justify-center md:justify-start gap-1 mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-[#d4a574] text-[#d4a574]"
                          />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-lg text-[#6f4e37] mb-6 italic leading-relaxed">
                        "{testimonials[currentIndex].text}"
                      </p>

                      {/* Name & Role */}
                      <div>
                        <div className="font-['Playfair_Display'] text-xl font-semibold text-[#3d2516]">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-[#6f4e37]/70">
                          {testimonials[currentIndex].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-white hover:bg-[#f5e6d3] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-[#6f4e37]" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-[#6f4e37]'
                      : 'w-2 bg-[#6f4e37]/30 hover:bg-[#6f4e37]/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white hover:bg-[#f5e6d3] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-[#6f4e37]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
