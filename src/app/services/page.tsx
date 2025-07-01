'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SparklesIcon, ShieldCheckIcon, PaintBrushIcon, WrenchScrewdriverIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: SparklesIcon,
    title: 'Premium Wash & Detail',
    description: 'Complete exterior and interior detailing with premium products and techniques for a showroom finish.',
    features: [
      'Hand wash with pH-balanced soap',
      'Clay bar treatment to remove contaminants',
      'Two-step paint correction process',
      'Interior deep clean and conditioning',
      'Tire and wheel detailing',
      'Glass cleaning inside and out'
    ],
    duration: '4-6 hours',
    price: 'Starting at $299'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Paint Protection Package',
    description: 'Advanced ceramic coating and paint protection film to preserve your vehicle\'s finish for years.',
    features: [
      '9H hardness ceramic coating',
      'Paint protection film on high-impact areas',
      '5-year warranty included',
      'UV protection and hydrophobic properties',
      'Enhanced gloss and depth',
      'Easy maintenance and cleaning'
    ],
    duration: '1-2 days',
    price: 'Starting at $1,299'
  },
  {
    icon: PaintBrushIcon,
    title: 'Paint Correction',
    description: 'Professional paint correction to remove swirl marks, scratches, and restore original shine.',
    features: [
      'Single or multi-stage correction',
      'Swirl mark and scratch removal',
      'Professional polishing compounds',
      'Paint depth measurement',
      'Before and after documentation',
      'Paint sealant application'
    ],
    duration: '6-10 hours',
    price: 'Starting at $599'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Engine Bay Detailing',
    description: 'Thorough engine bay cleaning and detailing to keep your engine compartment pristine.',
    features: [
      'Complete degreasing process',
      'Steam cleaning for deep sanitization',
      'Component protection and dressing',
      'Plastic and rubber restoration',
      'Metal polishing where applicable',
      'Professional appearance enhancement'
    ],
    duration: '2-3 hours',
    price: 'Starting at $199'
  }
];

const additionalServices = [
  { name: 'Headlight Restoration', price: '$129' },
  { name: 'Leather Conditioning', price: '$89' },
  { name: 'Carpet Shampooing', price: '$149' },
  { name: 'Scratch Repair', price: '$199+' },
  { name: 'Window Tinting', price: '$299+' },
  { name: 'Odor Elimination', price: '$179' }
];

export default function ServicesPage() {
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
                Our Premium <span className="text-red-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional auto detailing services designed to transform your vehicle. 
                Every service is performed with precision, using only the finest products and techniques.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-red-100 p-3 rounded-full mr-4">
                        <service.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircleIcon className="w-5 h-5 text-red-600 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-500 mb-1">Duration</div>
                        <div className="font-semibold text-gray-900">{service.duration}</div>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-500 mb-1">Price</div>
                        <div className="font-semibold text-red-600">{service.price}</div>
                      </div>
                    </div>
                    
                    <motion.a
                      href="/contact"
                      className="inline-block bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book This Service
                    </motion.a>
                  </div>
                  
                  {/* Image Placeholder */}
                  <div>
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 border-4 border-red-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-red-400" />
                        </div>
                        <p className="text-lg font-medium">{service.title}</p>
                        <p className="text-sm text-gray-300 mt-2">Premium Service Image</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Additional <span className="text-red-600">Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complement your main service with these specialized add-ons.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    <span className="text-red-600 font-bold">{service.price}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Book Your Service?
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Get started today and experience the difference professional detailing makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="bg-white text-red-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.a>
                <motion.a
                  href="tel:+1234567890"
                  className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call (555) 123-4567
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 