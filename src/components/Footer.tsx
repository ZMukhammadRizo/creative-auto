'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  HeartIcon,
  SparklesIcon,
  StarIcon
} from '@heroicons/react/24/solid';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Premium Wash & Detail', href: '/services' },
      { name: 'Paint Protection', href: '/services' },
      { name: 'Paint Correction', href: '/services' },
      { name: 'Engine Bay Detail', href: '/services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Booking Policy', href: '/booking-policy' },
    ]
  };

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.508 0-4.54-2.032-4.54-4.54s2.032-4.54 4.54-4.54 4.54 2.032 4.54 4.54-2.032 4.54-4.54 4.54zm7.424 0c-2.508 0-4.54-2.032-4.54-4.54s2.032-4.54 4.54-4.54 4.54 2.032 4.54 4.54-2.032 4.54-4.54 4.54z"/>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  // Fixed positions to avoid hydration mismatch
  const floatingElements = [
    { left: '10%', top: '20%', delay: 0 },
    { left: '85%', top: '15%', delay: 0.5 },
    { left: '20%', top: '70%', delay: 1 },
    { left: '70%', top: '60%', delay: 1.5 },
    { left: '45%', top: '25%', delay: 2 },
    { left: '15%', top: '85%', delay: 2.5 },
    { left: '90%', top: '80%', delay: 3 },
    { left: '60%', top: '35%', delay: 3.5 },
  ].map((pos, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-red-500/20 rounded-full"
      style={{ left: pos.left, top: pos.top }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -25, 15, 0],
        scale: [1, 1.3, 0.8, 1],
        opacity: [0.3, 0.8, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: pos.delay,
      }}
    />
  ));

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements}
        
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-red-600/5 to-gray-600/5 rounded-full blur-3xl"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div 
              className="mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.png"
                  alt="Creative Auto Boutique"
                  width={220}
                  height={65}
                  className="h-16 w-auto object-contain filter brightness-110 drop-shadow-2xl"
                />
              </Link>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-8 leading-relaxed text-lg max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Premium auto detailing services with exceptional quality and attention to detail. 
              Transform your vehicle with our professional expertise and passion for perfection.
            </motion.p>
            
            {/* Contact Info with 3D Cards */}
            <div className="space-y-4">
              {[
                { icon: MapPinIcon, text: "123 Detail Street, City, State 12345", color: "from-red-500 to-red-600" },
                { icon: PhoneIcon, text: "(555) 123-4567", color: "from-blue-500 to-blue-600" },
                { icon: EnvelopeIcon, text: "info@creativeautoboutique.com", color: "from-green-500 to-green-600" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 group cursor-pointer"
                  whileHover={{ x: 10, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-r ${contact.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ rotateY: 15, rotateX: 5 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <contact.icon className="h-5 w-5 text-white" />
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"
              whileHover={{ scale: 1.05 }}
            >
              <SparklesIcon className="inline h-6 w-6 mr-2 text-red-500" />
              Services
            </motion.h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 8, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-all duration-300 flex items-center group"
                  >
                    <motion.div
                      className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company & Support */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"
              whileHover={{ scale: 1.05 }}
            >
              <StarIcon className="inline h-6 w-6 mr-2 text-red-500" />
              Company
            </motion.h3>
            <ul className="space-y-4 mb-10">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 8, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-all duration-300 flex items-center group"
                  >
                    <motion.div
                      className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-red-400">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="relative group"
                    whileHover={{ 
                      scale: 1.2, 
                      rotateY: 15,
                      rotateX: 10
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.5 + index * 0.1, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 300
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-white group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 shadow-lg group-hover:shadow-red-500/25">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div 
          className="relative mt-16 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            <motion.div 
              className="text-gray-400 text-sm mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              © {currentYear} Creative Auto Boutique. All rights reserved.
            </motion.div>
            
            <motion.div 
              className="flex items-center text-gray-400 text-sm group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mx-2"
              >
                <HeartIcon className="h-4 w-4 text-red-500" />
              </motion.div>
              <span>for car enthusiasts</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 