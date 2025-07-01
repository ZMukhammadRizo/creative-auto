'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Creative Auto Boutique"
                  width={180}
                  height={55}
                  className="h-12 w-auto object-contain filter brightness-110"
                />
              </Link>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium auto detailing services with exceptional quality and attention to detail. 
              Transform your vehicle with our professional expertise.
            </p>
            
            <div className="space-y-2 text-gray-400">
              <div>📍 123 Detail Street, City, State 12345</div>
              <div>📞 (555) 123-4567</div>
              <div>✉️ info@creativeautoboutique.com</div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-red-400">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-red-400">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-red-400">Support</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-red-400">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  🐦
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Creative Auto Boutique. All rights reserved.
          </div>
          
          <div className="text-gray-400 text-sm">
            Made with ❤️ for car enthusiasts
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 