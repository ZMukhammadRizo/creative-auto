'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const galleryImages = [
  { id: 1, title: 'Luxury Sedan Full Detail', category: 'Full Detail', description: 'Complete transformation of a luxury sedan with paint correction and ceramic coating.' },
  { id: 2, title: 'Sports Car Paint Correction', category: 'Paint Correction', description: 'Multi-stage paint correction removing swirl marks and restoring original gloss.' },
  { id: 3, title: 'SUV Interior Deep Clean', category: 'Interior', description: 'Comprehensive interior detailing including leather conditioning and carpet shampooing.' },
  { id: 4, title: 'Classic Car Restoration Detail', category: 'Restoration', description: 'Meticulous detailing of a classic vehicle preserving its heritage while enhancing appearance.' },
  { id: 5, title: 'Exotic Car Ceramic Coating', category: 'Protection', description: 'Premium ceramic coating application on high-end exotic vehicle.' },
  { id: 6, title: 'Truck Engine Bay Detail', category: 'Engine Bay', description: 'Professional engine bay cleaning and detailing with component protection.' },
  { id: 7, title: 'Convertible Soft Top Care', category: 'Specialty', description: 'Specialized cleaning and protection for convertible soft top material.' },
  { id: 8, title: 'Motorcycle Detailing', category: 'Motorcycle', description: 'Complete motorcycle detailing including chrome polishing and paint protection.' },
  { id: 9, title: 'Fleet Vehicle Maintenance', category: 'Commercial', description: 'Regular maintenance detailing for commercial fleet vehicles.' },
  { id: 10, title: 'Show Car Preparation', category: 'Show Prep', description: 'Competition-level detailing for show car presentation.' },
  { id: 11, title: 'Paint Protection Film', category: 'PPF', description: 'Professional paint protection film installation on high-impact areas.' },
  { id: 12, title: 'Headlight Restoration', category: 'Restoration', description: 'Complete headlight restoration removing oxidation and restoring clarity.' }
];

const categories = ['All', 'Full Detail', 'Paint Correction', 'Interior', 'Protection', 'Engine Bay', 'Specialty'];

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

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null;

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
                Our Work <span className="text-red-400">Gallery</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our portfolio of premium auto detailing transformations. 
                Each project showcases our commitment to excellence and attention to detail.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-md font-medium transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={selectedCategory}
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => openLightbox(image.id)}
                >
                  {/* Placeholder Image */}
                  <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-12 h-12 border-2 border-red-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-red-400 font-bold">{image.id}</span>
                        </div>
                        <p className="text-sm font-medium px-4">{image.title}</p>
                        <p className="text-xs text-gray-400 mt-1">{image.category}</p>
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                          View Full Size
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                    <p className="text-gray-300 text-xs">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && selectedImageData && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="relative max-w-4xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors duration-300"
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>
                
                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors duration-300"
                >
                  <ChevronLeftIcon className="w-8 h-8" />
                </button>
                
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors duration-300"
                >
                  <ChevronRightIcon className="w-8 h-8" />
                </button>
                
                {/* Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 border-4 border-red-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-red-400 font-bold text-xl">{selectedImageData.id}</span>
                    </div>
                    <p className="text-xl font-medium">{selectedImageData.title}</p>
                    <p className="text-sm text-gray-300 mt-2">High Resolution Image</p>
                  </div>
                </div>
                
                {/* Image Details */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedImageData.title}</h2>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedImageData.category}
                    </span>
                  </div>
                  <p className="text-gray-600">{selectedImageData.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
} 