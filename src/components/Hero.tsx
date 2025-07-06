'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRightIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0">
        {/* Single Gradient Orb - Simplified */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-red-600/20 to-transparent rounded-full blur-3xl opacity-60" />
        
        {/* Grid Pattern - Static */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '50px 50px'
               }}>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-7xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3 text-red-400"
          >
            <SparklesIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Premium Auto Detailing</span>
            <StarIcon className="h-5 w-5" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
              Transform
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
              Your Vehicle
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the ultimate in premium auto detailing with our meticulous attention to detail, 
            cutting-edge techniques, and passion for automotive perfection.
          </motion.p>

          {/* Stats - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 text-center"
          >
            {[
              { number: "500+", label: "Cars Detailed" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "5★", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/contact"
              className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Service
              <ChevronRightIcon className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/services"
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              View Services
              <ChevronRightIcon className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-400 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full relative"
            >
              <div className="w-1 h-3 bg-gradient-to-b from-red-500 to-transparent rounded-full absolute left-1/2 top-2 transform -translate-x-1/2" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 