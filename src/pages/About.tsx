import { motion } from 'motion/react';
import { Coffee, Heart, Users, Award, Clock, Leaf } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Coffee,
      title: 'Quality First',
      description: 'We source only the finest, ethically-sourced beans from around the world'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every drink is crafted with care and passion by our skilled baristas'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'We are a gathering place where friendships are made and memories created'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing exceptional service and products every single day'
    },
    {
      icon: Clock,
      title: 'Always Fresh',
      description: 'We roast daily to ensure the freshest, most flavorful coffee experience'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Dedicated to environmentally responsible practices in everything we do'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Head Barista',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Mike Chen',
      role: 'Coffee Roaster',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=2000"
            alt="Coffee shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-espresso)]/90 via-[var(--color-coffee)]/85 to-[var(--color-espresso)]/90" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[var(--color-cream)] text-sm font-medium mb-6">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[var(--color-cream)] mb-6">
              Crafting Community,
              <br />
              One Cup at a Time
            </h1>
            <p className="text-xl text-[var(--color-cream)]/90 max-w-2xl mx-auto">
              Welcome to Good Grounds Coffee & Bistro, where exceptional coffee meets warm hospitality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-4">
                About Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[var(--color-espresso)] mb-6">
                Our Journey
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-coffee)]">
                <p>
                  Good Grounds Coffee & Bistro opened its doors in the heart of Goodland, Kansas with a simple mission: to serve exceptional coffee and create a welcoming space where the community could gather.
                </p>
                <p>
                  What started as a dream has blossomed into a beloved local institution. We take pride in every cup we serve, every relationship we build, and every moment we share with our customers.
                </p>
                <p>
                  From our carefully sourced beans to our handcrafted beverages, everything we do is guided by our commitment to quality, community, and the simple joy of a perfectly brewed cup of coffee.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=1000"
                  alt="Coffee brewing"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] rounded-3xl -z-10 blur-3xl opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-[var(--color-foam)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[var(--color-espresso)] mb-6">
              What We Stand For
            </h2>
            <p className="text-lg text-[var(--color-coffee)]">
              These principles guide everything we do at Good Grounds Coffee
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="mb-5">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-gold)]/10">
                    <value.icon className="w-8 h-8 text-[var(--color-accent)]" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-[var(--color-espresso)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--color-coffee)]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-4">
              Meet the Team
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[var(--color-espresso)] mb-6">
              The People Behind Your Coffee
            </h2>
            <p className="text-lg text-[var(--color-coffee)]">
              Our passionate team is dedicated to crafting the perfect cup every time
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group"
              >
                <div className="mb-5">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-[var(--color-espresso)] mb-1">
                  {member.name}
                </h3>
                <p className="text-[var(--color-accent)] font-semibold">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
