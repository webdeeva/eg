"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';

const images = [
  'https://www.aquariusmaximus.com/wp-content/uploads/2024/10/cryptodeeva_a_black_womans_hairstyle_wig_on_a_head_ombre_blac_d24c8530-d373-43e0-b89a-638edcb6f27e_3.png',
  'https://www.aquariusmaximus.com/wp-content/uploads/2024/10/cryptodeeva_a_black_womans_hairstyle_wig_on_a_head_ombre_blac_d9e630de-2711-40cb-ae1f-307f48a658b2_1.png',
  'https://www.aquariusmaximus.com/wp-content/uploads/2024/10/cryptodeeva_a_black_womans_hairstyle_wig_on_a_head_ombre_blac_64e2ab61-a37e-485c-ab58-45f3d966c879_3.png',
];

const ScrollingImages = ({ images, direction = 1, columnIndex }) => {
  const scrollY = useMotionValue(0);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  // Create an array with 5 sets of images to ensure seamless looping
  const extendedImages = [...images, ...images, ...images, ...images, ...images];

  useEffect(() => {
    imagesRef.current = imagesRef.current.slice(0, extendedImages.length);
  }, [extendedImages.length]);

  useAnimationFrame(() => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.offsetHeight;
      const contentHeight = containerHeight * (images.length / 3); // Divide by 3 as we have 3 columns
      const newY = (scrollY.get() + direction * 0.5) % contentHeight;
      scrollY.set(newY < 0 ? contentHeight + newY : newY);
    }
  });

  const y = useTransform(scrollY, (value) => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.offsetHeight;
      const contentHeight = containerHeight * (images.length / 3);
      return -(value % contentHeight);
    }
    return 0;
  });

  return (
    <div className="relative h-full overflow-hidden" ref={containerRef}>
      <motion.div style={{ y }} className="space-y-4">
        {extendedImages.map((src, index) => (
          <div
            key={index}
            className="w-full aspect-[3/4] rounded-lg overflow-hidden"
            style={{ marginTop: index === 0 ? `${columnIndex * 33.33}%` : undefined }}
            ref={(el) => (imagesRef.current[index] = el)}
          >
            <img src={src} alt={`Beauty image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-900 to-black opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 grid grid-cols-3 gap-4">
          <ScrollingImages images={images} direction={1} columnIndex={0} />
          <ScrollingImages images={images.slice().reverse()} direction={-1} columnIndex={1} />
          <ScrollingImages images={images} direction={1} columnIndex={2} />
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent opacity-80"></div>
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover Your Beauty
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Luxury beauty products and custom wigs
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-full">
                Shop Now
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;