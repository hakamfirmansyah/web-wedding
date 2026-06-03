"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attendance: 'hadir',
    guestCount: 1,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulasi pengiriman data
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="py-16 bg-[#D6C4B0]">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-8 text-[#C9A96E]">Konfirmasi Kehadiran</h2>
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center p-8 bg-[#F5F0E8] rounded-xl"
          >
            <h3 className="text-2xl font-serif mb-2">Terima Kasih!</h3>
            <p>Konfirmasi kehadiran Anda telah kami terima.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Nama Lengkap</label>
              <input
                required
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1">No. WhatsApp</label>
              <input
                className="w-full p-2 border rounded"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1">Konfirmasi Kehadiran</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.attendance}
                onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
              >
                <option value="hadir">Hadir</option>
                <option value="tidak_hadir">Tidak Hadir</option>
                <option value="mungkin">Mungkin</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-[#C9A96E] text-white rounded hover:bg-[#b0965d] transition-colors"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Mengirim...' : 'Kirim Konfirmasi'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default RSVPForm;
