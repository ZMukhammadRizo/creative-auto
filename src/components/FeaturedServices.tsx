'use client';

import { motion } from 'framer-motion';
import { SparklesIcon, ShieldCheckIcon, PaintBrushIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: SparklesIcon,
    title: 'Premium Wash & Detail',
    description: 'Complete exterior and interior detailing with premium products and techniques for a showroom finish.',
    features: ['Hand wash', 'Clay bar treatment', 'Paint correction', 'Interior deep clean']
  },
  {
    icon: ShieldCheckIcon,
    title: 'Paint Protection',
    description: 'Advanced ceramic coating and paint protection film to preserve your vehicles finish for years.',
    features: ['Ceramic coating', 'Paint protection film', '5-year warranty', 'UV protection']
  },
  {
    icon: PaintBrushIcon,
    title: 'Paint Correction',
    description: 'Professional paint correction to remove swirl marks, scratches, and restore original shine.',
    features: ['Swirl removal', 'Scratch repair', 'Polishing', 'Paint restoration']
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Engine Bay Detail',
    description: 'Thorough engine bay cleaning and detailing to keep your engine compartment pristine.',
    features: ['Degreasing', 'Steam cleaning', 'Component protection', 'Professional finish']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our professional auto detailing services, 
            designed to exceed your expectations.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-6 group-hover:bg-red-100 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <service.icon className="w-8 h-8 text-red-600" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/services"
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 