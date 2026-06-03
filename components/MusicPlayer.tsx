"use client";
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Musik disinkronkan dengan file lokal di /public/assets/music.mp3
    audioRef.current = new Audio('/assets/music.mp3');
    audioRef.current.loop = true;
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-4 right-4 z-50 p-3 bg-[#C9A96E] text-white rounded-full shadow-lg hover:bg-[#b0965d] transition-all"
    >
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
};

export default MusicPlayer;
