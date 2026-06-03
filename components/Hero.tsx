import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <img
        src="/assets/hero-bg.jpg"
        alt="Couple"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-4"
      >
        <p className="font-sans uppercase tracking-[0.2em] mb-4">The Wedding Of</p>
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Budi & Siti</h1>
        <p className="font-sans text-lg md:text-xl">12 Juni 2026</p>
      </motion.div>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="z-10 mt-12 px-8 py-3 border border-white/50 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
      >
        Buka Undangan
      </motion.button>
    </section>
  );
};

export default Hero;
