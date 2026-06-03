"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WishesWall = () => {
  const [wishes, setWishes] = useState([
    { id: 1, name: 'Budi', message: 'Selamat menempuh hidup baru!' },
    { id: 2, name: 'Siti', message: 'Semoga bahagia selalu.' },
  ]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      setWishes([...wishes, { id: Date.now(), name, message }]);
      setName('');
      setMessage('');
    }
  };

  return (
    <section className="py-16 bg-[#F5F0E8]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12 text-[#C9A96E]">Ucapan & Doa</h2>

        <form onSubmit={handleSubmit} className="mb-12 bg-white p-6 rounded-xl shadow-sm border border-[#C9A96E]/20">
          <input
            type="text"
            placeholder="Nama Anda"
            className="w-full p-3 border rounded mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Ucapan & Doa"
            className="w-full p-3 border rounded mb-4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 bg-[#C9A96E] text-white rounded hover:bg-[#b0965d] transition-colors"
          >
            Kirim Ucapan
          </button>
        </form>

        <div className="grid gap-4">
          {wishes.map((wish) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A96E]/20"
            >
              <h4 className="font-bold mb-2">{wish.name}</h4>
              <p className="text-zinc-600">{wish.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishesWall;
