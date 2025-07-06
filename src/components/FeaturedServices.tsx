'use client';

import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  ShieldCheckIcon, 
  WrenchScrewdriverIcon,
  BoltIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/solid';
import { getMotionProps } from '@/lib/useScrollAnimation';

export default function FeaturedServices() {
  const services = [
    {
      icon: SparklesIcon,
      title: "Premium Wash & Detail",
      description: "Complete interior and exterior detailing with premium products and meticulous attention to every surface.",
      features: ["Hand wash", "Interior deep clean", "Wax protection", "Tire shine"],
      price: "From $199",
      gradient: "from-blue-500 to-blue-700",
      glowColor: "blue-500/20"
    },
    {
      icon: ShieldCheckIcon,
      title: "Paint Protection",
      description: "Advanced ceramic coating and paint protection film to preserve your vehicle's finish for years.",
      features: ["Ceramic coating", "Paint correction", "UV protection", "Hydrophobic finish"],
      price: "From $599",
      gradient: "from-red-500 to-red-700",
      glowColor: "red-500/20"
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Paint Correction",
      description: "Professional multi-stage paint correction to remove swirl marks, scratches, and restore factory shine.",
      features: ["Swirl removal", "Scratch repair", "Polish & compound", "Factory finish"],
      price: "From $399",
      gradient: "from-green-500 to-green-700",
      glowColor: "green-500/20"
    },
    {
      icon: BoltIcon,
      title: "Engine Bay Detail",
      description: "Comprehensive engine bay cleaning and detailing to maintain performance and visual appeal.",
      features: ["Engine degreasing", "Component protection", "Dress & shine", "Steam cleaning"],
      price: "From $149",
      gradient: "from-purple-500 to-purple-700",
      glowColor: "purple-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0">
        {/* Single Gradient Orb */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-400/10 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          {...getMotionProps('fadeInUp', 0)}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-100 to-red-200 rounded-full px-6 py-3 mb-6"
            {...getMotionProps('scaleIn', 0.1)}
          >
            <StarIcon className="h-5 w-5 text-red-600" />
            <span className="text-red-700 font-medium">Premium Services</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            {...getMotionProps('fadeInUp', 0.2)}
          >
            <span className="text-gray-900">Transform Your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Vehicle
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            {...getMotionProps('fadeInUp', 0.3)}
          >
            Experience the pinnacle of automotive care with our comprehensive detailing services, 
            designed to protect and enhance your vehicle&apos;s beauty and value.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Service Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6`}>
                <service.icon className="h-8 w-8" />
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{service.price}</span>
                    <button className="group/btn inline-flex items-center space-x-1 text-red-600 hover:text-red-700 font-medium transition-colors duration-300">
                      <span className="text-sm">Learn More</span>
                      <ArrowRightIcon className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          {...getMotionProps('fadeInUp', 0.4)}
        >
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2">
            <span>View All Services</span>
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
} 