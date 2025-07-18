'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { getMotionProps } from '@/lib/useScrollAnimation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
    
    alert('Thank you! Your message has been sent successfully.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['(555) 123-4567', 'Call or Text'],
      action: 'tel:+15551234567'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['info@creativeautoboutique.com', 'Get a Quote'],
      action: 'mailto:info@creativeautoboutique.com'
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      details: ['123 Detail Street', 'City, State 12345'],
      action: '#'
    },
    {
      icon: ClockIcon,
      title: 'Hours',
      details: ['Mon-Sat: 8AM-6PM', 'Sunday: 10AM-4PM'],
      action: '#'
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contact <span className="text-red-400">Us</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your vehicle? Get in touch with our team to schedule your service 
                or ask any questions about our premium auto detailing offerings.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
                  {...getMotionProps('fadeInUp', index * 0.1)}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className={`${detailIndex === 0 ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action !== '#' && (
                    <motion.a
                      href={info.action}
                      className="inline-block mt-4 text-red-600 hover:text-red-700 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      Contact Now
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                {...getMotionProps('fadeInLeft', 0)}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get A Quote</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours with a personalized quote.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition-colors duration-300 placeholder-gray-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition-colors duration-300 placeholder-gray-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition-colors duration-300 placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition-colors duration-300 text-gray-700"
                    >
                      <option value="" className="text-gray-500">Select a service</option>
                      <option value="premium-detail">Premium Wash & Detail</option>
                      <option value="paint-protection">Paint Protection</option>
                      <option value="paint-correction">Paint Correction</option>
                      <option value="engine-detail">Engine Bay Detail</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition-colors duration-300 placeholder-gray-500 resize-none"
                      placeholder="Tell us about your vehicle and what you're looking for..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 disabled:bg-red-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </motion.div>

              {/* Map & Additional Info */}
              <motion.div
                {...getMotionProps('fadeInRight', 0)}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Shop</h2>
                  
                  {/* Map Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center text-white">
                      <MapPinIcon className="w-16 h-16 mx-auto mb-4 text-red-400" />
                      <p className="text-lg font-medium">Interactive Map</p>
                      <p className="text-sm text-gray-300 mt-2">123 Detail Street, City, State</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Free estimates and consultations
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Fully insured and certified
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Satisfaction guarantee
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Flexible scheduling options
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Emergency Contact - Enhanced with darker red and better visibility */}
        <section className="py-16 bg-gradient-to-r from-red-800 via-red-900 to-red-800 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-10 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-10 right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              {...getMotionProps('fadeInUp', 0)}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 30px rgba(255,255,255,0.5)", 
                    "0 0 20px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Need Immediate Service?
              </motion.h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
                Call us now for urgent detailing needs or same-day appointments.
              </p>
              <motion.a
                href="tel:+15551234567"
                className="relative inline-flex items-center justify-center bg-white text-red-800 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PhoneIcon className="w-6 h-6 mr-3" />
                Call (555) 123-4567
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-white rounded-xl opacity-20 blur-md"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 