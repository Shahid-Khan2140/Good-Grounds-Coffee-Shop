import { motion } from 'motion/react';
import { Coffee, Truck, Users, Award } from 'lucide-react';
import { Card } from './ui/card';

const features = [
  {
    icon: Coffee,
    title: 'Premium Quality',
    description: 'Handpicked beans from the finest coffee farms around the world',
    color: 'from-[#6f4e37] to-[#a67c52]',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Fresh coffee delivered to your door within 30-45 minutes',
    color: 'from-[#a67c52] to-[#d4a574]',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join thousands of coffee lovers in our vibrant community',
    color: 'from-[#d4a574] to-[#f5e6d3]',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized for excellence in coffee roasting and service',
    color: 'from-[#6f4e37] to-[#d4a574]',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#6f4e37]/10 text-[#6f4e37] rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#3d2516] mb-4">
            What Makes Us Special
          </h2>
          <p className="text-lg text-[#6f4e37] max-w-2xl mx-auto">
            We're committed to delivering exceptional coffee experiences through quality, speed, and community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-none bg-gradient-to-b from-white to-[#faf6f0] rounded-2xl group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#3d2516] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#6f4e37]/80">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
