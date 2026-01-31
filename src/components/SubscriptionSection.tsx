import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const plans = [
  {
    name: 'Starter',
    price: 29.99,
    period: 'month',
    description: 'Perfect for casual coffee drinkers',
    features: [
      '2 bags of premium coffee',
      'Free delivery',
      'Choose your roast level',
      'Cancel anytime',
    ],
    popular: false,
  },
  {
    name: 'Coffee Lover',
    price: 49.99,
    period: 'month',
    description: 'Most popular for daily enthusiasts',
    features: [
      '4 bags of premium coffee',
      'Free priority delivery',
      'Exclusive blend access',
      'Monthly surprise gift',
      'Cancel anytime',
    ],
    popular: true,
  },
  {
    name: 'Connoisseur',
    price: 79.99,
    period: 'month',
    description: 'Ultimate experience for true coffee lovers',
    features: [
      '6 bags of rare coffee',
      'Free express delivery',
      'Limited edition blends',
      'Personal coffee consultant',
      'Early access to new products',
      'Cancel anytime',
    ],
    popular: false,
  },
];

export function SubscriptionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#6f4e37]/10 text-[#6f4e37] rounded-full text-sm font-medium mb-4">
            Subscription Plans
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#3d2516] mb-4">
            Never Run Out of Coffee
          </h2>
          <p className="text-lg text-[#6f4e37] max-w-2xl mx-auto">
            Subscribe and save up to 20% on your favorite coffee. Flexible plans with free delivery and no commitments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-[#6f4e37] bg-gradient-to-b from-[#6f4e37] to-[#3d2516] text-white shadow-2xl scale-105'
                    : 'border-[#6f4e37]/20 bg-white hover:border-[#6f4e37]/40 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#d4a574] text-[#3d2516] rounded-full text-sm font-medium flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3
                    className={`font-['Playfair_Display'] text-2xl font-bold mb-2 ${
                      plan.popular ? 'text-white' : 'text-[#3d2516]'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      plan.popular ? 'text-white/80' : 'text-[#6f4e37]/70'
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span
                      className={`font-['Playfair_Display'] text-5xl font-bold ${
                        plan.popular ? 'text-white' : 'text-[#6f4e37]'
                      }`}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={`text-lg ${
                        plan.popular ? 'text-white/70' : 'text-[#6f4e37]/70'
                      }`}
                    >
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular
                            ? 'bg-[#d4a574]'
                            : 'bg-[#6f4e37]/10'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.popular ? 'text-white' : 'text-[#6f4e37]'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.popular ? 'text-white/90' : 'text-[#6f4e37]'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 text-lg rounded-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-[#6f4e37] hover:bg-[#f5e6d3]'
                      : 'bg-[#6f4e37] text-white hover:bg-[#3d2516]'
                  }`}
                >
                  Subscribe Now
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[#6f4e37]">
            All plans include free shipping • No commitments • Pause or cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
