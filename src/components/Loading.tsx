'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
    >
      <div className="text-center relative">
        {/* Background Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-800/30 to-red-900/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Logo Container */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.5, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Actual Logo */}
          <motion.div
            className="relative"
            animate={{ 
              y: [-5, 5, -5],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="filter drop-shadow-lg"
            >
              <Image
                src="/logo.png"
                alt="Creative Auto Boutique"
                width={300}
                height={100}
                className="w-72 lg:w-80 h-auto object-contain filter drop-shadow-lg"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Premium Loading Elements */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
                      {/* Elegant Loading Bar */}
            <div className="relative">
              <motion.div
                className="w-80 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto shadow-inner"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 via-red-600 to-red-500 shadow-sm"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    duration: 2, 
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            
            {/* Loading Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-red-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </div>

          {/* Loading Text */}
          <motion.p
            className="text-gray-300 text-sm font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: 1.5
            }}
          >
            Preparing Your Premium Experience
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500/60 rounded-full opacity-60"
            style={{
              left: `${10 + i * 10}%`,
              top: `${30 + (i % 3) * 15}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Circular Pulse Effect */}
        <motion.div
          className="absolute inset-0 border border-red-500/40 rounded-full"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.6, 0, 0.6]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
} 