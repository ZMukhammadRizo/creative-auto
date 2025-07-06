import { useEffect, useRef, useState } from 'react';

// Common viewport configuration for consistent behavior
export const scrollViewport = {
  once: true,
  margin: "0px 0px -100px 0px", // Start animation before element is fully visible
  amount: 0.2 // Trigger when 20% of element is visible
};

// Common animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  viewport: scrollViewport
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  viewport: scrollViewport
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  viewport: scrollViewport
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  viewport: scrollViewport
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  viewport: scrollViewport
};

// Hook to handle scroll animations with fallback
export function useScrollAnimation(delay = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);
    
    // Fallback: if intersection observer doesn't work, show after delay
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 1000 + delay);

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [isVisible, delay]);

  return { 
    ref, 
    isVisible: hasMounted && isVisible,
    shouldAnimate: hasMounted 
  };
}

// Enhanced motion props with fallback
export function getMotionProps(
  animationType: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn',
  delay = 0
) {
  const variants = {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    fadeIn,
    scaleIn
  };

  const variant = variants[animationType];

  return {
    initial: variant.initial,
    whileInView: variant.animate,
    viewport: {
      ...variant.viewport,
      once: true
    },
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut" as const
    }
  };
} 