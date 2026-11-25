'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Phone, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ANNOUNCEMENTS = [
  {
    icon: Sparkles,
    text: 'Bridal Trousseau, Pure Silver Heirlooms & Ladies Accessories Showcase',
    linkText: 'Plan Store Visit',
    href: '/contact#appointment',
  },
  {
    icon: Phone,
    text: 'Direct WhatsApp Concierge for 22K Gold, Silverware & Custom Commissions',
    linkText: 'Chat With Store',
    href: '/contact',
  },
  {
    icon: MapPin,
    text: 'Visit Our Flagship Jewellery Stores in Hyderabad & Mumbai',
    linkText: 'Store Hours & Directions',
    href: '/contact',
  },
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = ANNOUNCEMENTS[currentIndex];
  const Icon = current.icon;

  return (
    <div className="relative bg-deepCharcoal text-warmIvory/90 text-xs py-2 px-4 border-b border-champagneGold/20 z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center gap-2 text-champagneGold">
          <span className="w-1.5 h-1.5 rounded-full bg-rosePink animate-ping" />
          <span className="font-sans text-[11px] tracking-widest uppercase">Jewellery Showroom Open</span>
        </div>

        <div className="flex-1 flex justify-center items-center overflow-hidden h-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-center"
            >
              <Icon className="w-3.5 h-3.5 text-champagneGold shrink-0" />
              <span className="font-sans font-light tracking-wide text-[11px] sm:text-xs">
                {current.text}
              </span>
              <Link
                href={current.href}
                className="hidden sm:inline-flex items-center gap-0.5 text-rosePink hover:text-rosePink-300 font-medium underline underline-offset-2 ml-1.5 transition-colors"
              >
                {current.linkText}
                <ChevronRight className="w-3 h-3" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-[11px] text-warmIvory/70 tracking-widest font-sans uppercase">
          <span>BIS 916 Hallmarked Gold</span>
          <span className="text-champagneGold">•</span>
          <span>Pure 92.5 Sterling Silver</span>
        </div>
      </div>
    </div>
  );
};
