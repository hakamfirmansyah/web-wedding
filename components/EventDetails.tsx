import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

const EventDetails = () => {
  return (
    <section className=\"py-16 bg-[#F5F0E8]\">
      <div className=\"max-w-4xl mx-auto px-4\">
        <h2 className=\"text-4xl font-serif text-center mb-12 text-[#C9A96E]\">Detail Acara</h2>
        <div className=\"grid md:grid-cols-2 gap-8\">
          {/* Akad Nikah */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=\"bg-white p-8 rounded-xl shadow-sm border border-[#C9A96E]/20 text-center\"
          >
            <Calendar className=\"w-12 h-12 mx-auto text-[#C9A96E] mb-4\" />
            <h3 className=\"text-2xl font-serif mb-4\">Akad Nikah</h3>
            <p className=\"mb-2 font-medium\">Sabtu, 12 Juni 2026</p>
            <p className=\"mb-4\">08.00 WIB - Selesai</p>
            <p className=\"text-sm text-zinc-600 mb-6\">Jl. Contoh Alamat No. 123, Kota Anda</p>
            <a
              href=\"#\"
              className=\"inline-flex items-center gap-2 px-6 py-2 bg-[#8A9E85] text-white rounded-full hover:bg-[#72856e] transition-colors\"
            >
              <MapPin className=\"w-4 h-4\" />
              Lihat di Maps
            </a>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=\"bg-white p-8 rounded-xl shadow-sm border border-[#C9A96E]/20 text-center\"
          >
            <Calendar className=\"w-12 h-12 mx-auto text-[#C9A96E] mb-4\" />
            <h3 className=\"text-2xl font-serif mb-4\">Resepsi</h3>
            <p className=\"mb-2 font-medium\">Sabtu, 12 Juni 2026</p>
            <p className=\"mb-4\">11.00 WIB - Selesai</p>
            <p className=\"text-sm text-zinc-600 mb-6\">Gedung Serbaguna, Jl. Contoh No. 456</p>
            <a
              href=\"#\"
              className=\"inline-flex items-center gap-2 px-6 py-2 bg-[#8A9E85] text-white rounded-full hover:bg-[#72856e] transition-colors\"
            >
              <MapPin className=\"w-4 h-4\" />
              Lihat di Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
