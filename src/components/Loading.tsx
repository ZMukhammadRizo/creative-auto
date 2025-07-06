'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center relative max-w-md mx-auto px-8">
        {/* Logo Container */}
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Creative Auto Boutique"
            width={280}
            height={90}
            className="w-70 h-auto object-contain mx-auto"
            priority
          />
        </div>

        {/* Loading Progress */}
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-gradient-to-r from-red-500 to-red-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 2, 
                ease: "easeInOut",
                repeat: Infinity
              }}
            />
          </div>

          {/* Loading Text */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Loading Your Premium Experience
            </h3>
            <p className="text-sm text-gray-500">Please wait while we prepare everything for you</p>
          </div>

          {/* Simple Loading Dots */}
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-red-500 rounded-full"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 