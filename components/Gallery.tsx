import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  // Placeholder images
  const photos = ['/assets/hero-bg.jpg', '/assets/groom.jpg', '/assets/bride.jpg'];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12 text-[#C9A96E]">Galeri Foto</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-lg shadow-sm"
            >
              <img src={photo} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
