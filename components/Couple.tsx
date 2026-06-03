import React from 'react';
import { motion } from 'framer-motion';

const Couple = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          {/* Groom */}
          <div className="flex-1">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 border-2 border-[#C9A96E]">
              <img src="/assets/groom.jpg" alt="Groom" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif text-3xl mb-2">Budi Santoso</h3>
            <p className="text-sm text-zinc-600">Putra dari Bpk. X & Ibu Y</p>
          </div>

          <div className="font-serif text-4xl text-[#C9A96E]">&</div>

          {/* Bride */}
          <div className="flex-1">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 border-2 border-[#C9A96E]">
              <img src="/assets/bride.jpg" alt="Bride" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif text-3xl mb-2">Siti Rahayu</h3>
            <p className="text-sm text-zinc-600">Putri dari Bpk. A & Ibu B</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Couple;
