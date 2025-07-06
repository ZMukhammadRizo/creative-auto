'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/" className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative flex-grow"
              >
                <Image
                  src="/logo.png"
                  alt="Creative Auto Boutique"
                  width={180}
                  height={50}
                  className="h-12 w-auto object-contain filter brightness-110 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                  style={{ transform: 'translateZ(-1px)' }}
                />
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-red-500/20 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Menu Wrapper */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Desktop Navigation */}
            <motion.nav 
              className="flex space-x-1"
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={item.href}
                    className="group relative px-4 py-2 text-gray-200 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800/50"
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"
                    />
                    
                    {/* Hover background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-700/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Contact Info & CTA */}
            <motion.div 
              className="hidden lg:flex items-center space-x-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Phone */}
              <motion.div
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-600/20 transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <PhoneIcon className="h-4 w-4" />
                </motion.div>
                <span className="text-sm font-medium">(555) 123-4567</span>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <EnvelopeIcon className="h-4 w-4 mr-2" />
                    Get Quote
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <motion.button
              className="p-2 rounded-lg text-gray-200 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden border-t border-gray-800/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="py-4 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center px-4 py-3 text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-medium">{item.name}</span>
                      <motion.div
                        className="ml-auto w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-6 transition-all duration-300"
                      />
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Contact & CTA */}
                <motion.div 
                  className="pt-4 border-t border-gray-800/50 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <div className="flex items-center px-4 py-2 text-gray-300">
                    <PhoneIcon className="h-4 w-4 mr-3 text-red-500" />
                    <span className="text-sm">(555) 123-4567</span>
                  </div>
                  
                  <motion.div
                    className="px-4"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <EnvelopeIcon className="h-4 w-4 mr-2" />
                      Get Your Quote
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
} 