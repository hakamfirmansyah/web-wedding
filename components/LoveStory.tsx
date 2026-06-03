import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  { year: '2024', title: 'Pertemuan Pertama', desc: 'Kami bertemu dalam sebuah kegiatan komunitas.' },
  { year: '2025', title: 'Khitbah', desc: 'Kami memutuskan untuk serius membawa hubungan ke jenjang pernikahan.' },
  { year: '2026', title: 'Hari Bahagia', desc: 'Mempersatukan dua keluarga dalam ikatan suci.' },
];

const LoveStory = () => {
  return (
    <section className="py-16 bg-[#F5F0E8]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12 text-[#C9A96E]">Perjalanan Cinta</h2>
        <div className="relative border-l-2 border-[#C9A96E] ml-4 md:ml-0 md:text-center">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 ml-6 md:ml-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#C9A96E] rounded-full" />
              <h3 className="text-2xl font-serif text-[#C9A96E]">{story.year}</h3>
              <h4 className="text-xl font-bold mb-2">{story.title}</h4>
              <p className="text-zinc-600">{story.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
