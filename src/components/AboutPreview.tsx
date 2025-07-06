'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { getMotionProps } from '@/lib/useScrollAnimation';

const achievements = [
  'Over 10 years of professional experience',
  '1000+ satisfied customers',
  'Certified detailing professionals',
  'Premium products and equipment',
  'Comprehensive insurance coverage'
];

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            {...getMotionProps('fadeInLeft', 0)}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Crafting Excellence in <span className="text-red-600">Auto Detailing</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Creative Auto Boutique, we believe every vehicle deserves to look its absolute best. 
              Our passion for automotive excellence drives us to deliver unparalleled detailing services 
              that transform your car into a masterpiece.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Using only the finest products and proven techniques, our certified professionals 
              treat each vehicle with the care and attention it deserves. From classic cars to 
              modern luxury vehicles, we have the expertise to exceed your expectations.
            </p>
            
            <motion.div 
              className="space-y-4 mb-8"
              {...getMotionProps('fadeInUp', 0.2)}
            >
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  {...getMotionProps('fadeInLeft', 0.3 + index * 0.1)}
                >
                  <CheckCircleIcon className="w-6 h-6 text-red-600 mr-3" />
                  <span className="text-gray-700">{achievement}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/about"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                Learn More About Us
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            className="relative"
            {...getMotionProps('fadeInRight', 0)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              {/* Placeholder for actual image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 border-4 border-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-red-600 font-bold text-xl">CAB</span>
                  </div>
                  <p className="text-sm opacity-80">Professional Auto Detailing</p>
                </div>
              </div>
              
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-4 md:p-6 rounded-lg shadow-lg border-l-4 border-red-600 w-36"
              {...getMotionProps('fadeInUp', 0.4)}
            >
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gray-900">10+</div>
                <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-6 -right-6 bg-red-600 text-white p-3 md:p-4 rounded-lg shadow-lg w-28"
              {...getMotionProps('fadeInUp', 0.6)}
            >
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold">1000+</div>
                <div className="text-xs">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 