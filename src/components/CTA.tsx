'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { getMotionProps } from '@/lib/useScrollAnimation';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            {...getMotionProps('fadeInLeft', 0)}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-red-400">Vehicle?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Book your premium auto detailing service today and experience the difference 
              that professional care can make. Your vehicle deserves the best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="/contact"
                className="bg-red-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.a>
              
              <motion.a
                href="tel:+1234567890"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            {...getMotionProps('fadeInRight', 0)}
            className="space-y-6"
          >
            <motion.div 
              className="flex items-center text-white"
              {...getMotionProps('fadeInUp', 0.1)}
            >
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-gray-300">(555) 123-4567</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center text-white"
              {...getMotionProps('fadeInUp', 0.2)}
            >
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <EnvelopeIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-gray-300">info@creativeautoboutique.com</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center text-white"
              {...getMotionProps('fadeInUp', 0.3)}
            >
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <ClockIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">Business Hours</div>
                <div className="text-gray-300">Mon-Sat: 8AM-6PM</div>
                <div className="text-gray-300">Sunday: 10AM-4PM</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 