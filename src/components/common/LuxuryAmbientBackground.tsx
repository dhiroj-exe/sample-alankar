'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Deterministic particle positions to avoid SSR hydration mismatches
const PARTICLES = [
  { id: 1, x: 12, y: 15, size: 3, duration: 18, delay: 0 },
  { id: 2, x: 28, y: 35, size: 4, duration: 22, delay: 2 },
  { id: 3, x: 45, y: 18, size: 2.5, duration: 19, delay: 1 },
  { id: 4, x: 62, y: 40, size: 3.5, duration: 24, delay: 3 },
  { id: 5, x: 78, y: 22, size: 3, duration: 20, delay: 0.5 },
  { id: 6, x: 88, y: 55, size: 4.5, duration: 26, delay: 4 },
  { id: 7, x: 18, y: 70, size: 3, duration: 21, delay: 2.5 },
  { id: 8, x: 38, y: 82, size: 2.5, duration: 23, delay: 1.5 },
  { id: 9, x: 55, y: 68, size: 3.5, duration: 25, delay: 3.5 },
  { id: 10, x: 72, y: 88, size: 4, duration: 20, delay: 0.8 },
  { id: 11, x: 82, y: 80, size: 3, duration: 22, delay: 2.2 },
  { id: 12, x: 92, y: 28, size: 2.5, duration: 19, delay: 4.2 },
  { id: 13, x: 8, y: 45, size: 3.5, duration: 24, delay: 1.2 },
  { id: 14, x: 24, y: 92, size: 2.5, duration: 21, delay: 3.1 },
  { id: 15, x: 68, y: 10, size: 4, duration: 23, delay: 2.8 },
];

export const LuxuryAmbientBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* 1. Base Warm Ivory Foundation with subtle vignette */}
      <div className="absolute inset-0 bg-warmIvory" />

      {/* 2. Soft Breathing Radial Orbs (Champagne Gold & Rose Pink) */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.35, 0.55, 0.35],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-40 w-[38rem] h-[38rem] rounded-full bg-gradient-to-br from-rosePink/15 via-champagneGold/20 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.22, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/3 -right-48 w-[42rem] h-[42rem] rounded-full bg-gradient-to-bl from-champagneGold/25 via-rosePink/10 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute -bottom-40 left-1/4 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-champagneGold/20 via-warmIvory-200 to-transparent blur-3xl"
      />

      {/* 3. Authentic Royal Indian Jali Filigree Repeating Pattern (Low Opacity) */}
      <div
        className="absolute inset-0 opacity-[0.032]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 0 C22 14 14 22 0 28 C14 34 22 42 28 56 C34 42 42 34 56 28 C42 22 34 14 28 0 Z M28 14 C26 21 21 26 14 28 C21 30 26 35 28 42 C30 35 35 30 42 28 C35 26 30 21 28 14 Z' fill='%23C5A46D' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '56px 56px',
        }}
      />

      {/* 4. Floating Golden Stardust Particles (Twinkling & Drifting) */}
      {mounted && (
        <div className="absolute inset-0">
          {PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: 'radial-gradient(circle, #EADDC6 30%, #C5A46D 100%)',
                boxShadow: '0 0 6px 1px rgba(197, 164, 109, 0.45)',
              }}
              animate={{
                y: [0, -35, 0],
                x: [0, (p.id % 2 === 0 ? 12 : -12), 0],
                opacity: [0.2, 0.85, 0.2],
                scale: [0.8, 1.35, 0.8],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: p.delay,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
