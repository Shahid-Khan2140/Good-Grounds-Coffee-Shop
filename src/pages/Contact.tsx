import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: ['2402 Commerce Rd', 'Goodland, KS 67735, USA'],
      link: 'https://www.google.com/maps/dir/?api=1&destination=2402+Commerce+Rd,Goodland,KS+67735'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['(620) 890-7696'],
      link: 'tel:6208907696'
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['goodgroundscafe@gmail.com'],
      link: 'mailto:goodgroundscafe@gmail.com'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-foam)] to-white pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[var(--color-espresso)] mb-6">
              Visit Us Today
            </h1>
            <p className="text-xl text-[var(--color-coffee)] max-w-2xl mx-auto">
              Stop by for a cup of coffee and experience our warm hospitality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-8 ring-[var(--color-cream)]">
              <div className="aspect-video w-full">
                <iframe
                  src="https://maps.google.com/maps?q=2402+Commerce+Rd,+Goodland,+KS+67735&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[var(--color-foam)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="card flex items-start gap-5 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-serif font-bold text-[var(--color-espresso)] mb-2">
                      {info.title}
                    </h3>
                    {info.content.map((line, idx) => (
                      <p key={idx} className="text-[var(--color-coffee)] text-lg">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.a>
              ))}

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] rounded-2xl flex items-center justify-center shadow-lg">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-serif font-bold text-[var(--color-espresso)]">
                      Business Hours
                    </h3>
                  </div>
                </div>
                <div className="space-y-3 ml-19">
                  {businessHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-[var(--color-cream)] last:border-0">
                      <span className="font-semibold text-[var(--color-espresso)]">
                        {schedule.day}
                      </span>
                      <span className={`${
                        schedule.hours === 'Closed'
                          ? 'text-[var(--color-latte)]'
                          : 'text-[var(--color-coffee)]'
                      }`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="card"
            >
              <h2 className="text-3xl font-serif font-bold text-[var(--color-espresso)] mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-espresso)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all text-[var(--color-espresso)]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-espresso)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all text-[var(--color-espresso)]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-espresso)] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all text-[var(--color-espresso)]"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-espresso)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all resize-none text-[var(--color-espresso)]"
                    placeholder="How can we help you?"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn btn-primary btn-large"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
