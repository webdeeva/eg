"use client";

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg text-center max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At Beauty Shop, we believe in empowering individuals to express their unique beauty. Our curated collection of luxury beauty products and custom wigs are designed to enhance your natural features and boost your confidence.
        </motion.p>
      </div>
    </section>
  );
};

export default About;