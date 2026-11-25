'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const MARQUEE_ITEMS = [
  '22K BIS 916 Laser Hallmarked Gold',
  '100% Pure Untreated Polki & Jadau',
  '92.5 Sterling Silver Pooja Heirlooms',
  'Bespoke Bridal Shringar & Payals',
  'Hand-Embroidered Zardozi Potlis',
  'Banjara Hills & Kala Ghoda Boutiques',
  'Private Viewing by Appointment',
  'Price on Request &bull; WhatsApp Enquiries',
];

export const LuxuryEditorialMarquee: React.FC = () => {
  return (
    <div className="relative py-4 bg-deepCharcoal text-warmIvory overflow-hidden border-y border-champagneGold/30 select-none">
      {/* Golden Edge Blurs */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-deepCharcoal to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-deepCharcoal to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Ribbon */}
      <div className="flex w-max">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center gap-10 whitespace-nowrap"
        >
          {/* Double list for continuous seamless loop */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <div key={index} className="flex items-center gap-10">
              <span className="font-sans text-xs sm:text-[13px] tracking-ultraLuxury uppercase font-medium text-warmIvory/90 hover:text-champagneGold transition-colors flex items-center gap-3">
                <span
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </span>
              <div className="w-1.5 h-1.5 rotate-45 bg-champagneGold shrink-0 shadow-sm" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
