"use client";

import React, { useState, useEffect } from 'react';


const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Tanggal target: 12 Juni 2026
    const targetDate = new Date('2026-06-12T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 bg-[#F5F0E8]">
      <div className="max-w-4xl mx-auto flex justify-center gap-4 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="bg-white p-4 rounded-lg border border-[#C9A96E] min-w-[80px]">
            <div className="text-3xl font-serif text-[#C9A96E]">{value.toString().padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-widest text-zinc-600">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
