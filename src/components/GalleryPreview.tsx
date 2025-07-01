'use client';

import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    title: 'Luxury Sedan Detail',
    category: 'Exterior Detail'
  },
  {
    id: 2,
    title: 'Paint Correction',
    category: 'Paint Care'
  },
  {
    id: 3,
    title: 'Interior Deep Clean',
    category: 'Interior Detail'
  },
  {
    id: 4,
    title: 'Ceramic Coating',
    category: 'Protection'
  },
  {
    id: 5,
    title: 'Engine Bay Detail',
    category: 'Engine Care'
  },
  {
    id: 6,
    title: 'Premium Finish',
    category: 'Full Detail'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Work <span className="text-red-400">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See the transformation. Every project showcases our commitment to perfection 
            and attention to detail.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Placeholder image with gradient */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-12 h-12 border-2 border-red-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-red-400 font-bold">{image.id}</span>
                    </div>
                    <p className="text-sm font-medium">{image.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{image.category}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* Hover content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                      View Details
                    </div>
                  </div>
                </div>
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
            href="/gallery"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Gallery
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 