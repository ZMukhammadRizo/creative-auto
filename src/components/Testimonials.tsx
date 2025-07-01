'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    name: 'Michael Johnson',
    role: 'BMW Owner',
    content: 'Absolutely incredible service! My car looks better than the day I bought it. The attention to detail is unmatched, and the team truly cares about their craft.',
    rating: 5,
    location: 'Downtown'
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Mercedes Owner',
    content: 'I&apos;ve tried several detailing services, but Creative Auto Boutique is in a league of their own. Professional, reliable, and the results speak for themselves.',
    rating: 5,
    location: 'Westside'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Tesla Owner',
    content: 'The ceramic coating service was worth every penny. My Tesla still looks showroom fresh after 8 months. Highly recommend their paint protection services.',
    rating: 5,
    location: 'Northside'
  },
  {
    id: 4,
    name: 'Emma Rodriguez',
    role: 'Audi Owner',
    content: 'From booking to completion, everything was seamless. The team communicated every step and delivered exceptional results. My Audi has never looked better!',
    rating: 5,
    location: 'Eastside'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

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
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers 
            have to say about our services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-red-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  &quot;{testimonials[currentIndex].content}&quot;
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-red-600 font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentIndex].location}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-300"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-300"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 