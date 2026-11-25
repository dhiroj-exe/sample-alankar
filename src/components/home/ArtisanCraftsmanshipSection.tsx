'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

const CRAFT_PILLARS = [
  {
    id: 'jadau',
    title: '24K Pure Gold Jadau Foiling',
    subtitle: 'Ancestral Setting of Uncut Natural Stones',
    description: 'The ancient art of Jadau involves encasing uncut natural Polki stones within pure 24K gold foil without any synthetic adhesives. Every stone is cradled by hand-pressed pure gold leaf, reflecting light with soft courtly luminescence.',
    origin: 'Jaipur & Bikaner, Rajasthan',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      '100% Pure 24K bullion gold foil inlay',
      'Natural untreated stones with organic inclusions',
      'Artisanal Meenakari enamel on the gold reverse',
    ],
  },
  {
    id: 'nakashi',
    title: 'Temple Nakashi & Repoussé Chiselling',
    subtitle: 'High-Relief Sacred Deities in 22K Pure Gold',
    description: 'Handcrafted by hereditary sthapatis, Nakashi involves sculpting high-relief mythological deities, Goddess Lakshmi, and peacocks into heavy sheets of 22K gold. The gold is worked from both front and reverse using tiny steel chisels.',
    origin: 'Madurai & Thrissur, South India',
    image: 'https://images.unsplash.com/photo-1611591475811-0672e8111667?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Deep three-dimensional repoussé relief',
      'Natural ruby cabochons & South Sea pearls',
      'Auspicious temple antique gold patina',
    ],
  },
  {
    id: 'silverware',
    title: 'Pure 92.5 Sterling Silver Heirlooms',
    subtitle: 'Auspicious Pooja Suites & Nakashi Diyas',
    description: 'Crafted for generations of sacred worship and festive hospitality. Using certified 92.5 sterling silver, our master silversmiths cast heavy, non-hollow pooja thalis, five-wick peacock lamps, and ceremonial kumkum bharanis.',
    origin: 'Cuttack & Thanjavur Silver Guilds',
    image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      '100% Solid 92.5 Certified Silver (Hallmarked 925)',
      'Hand-engraved Ashtalakshmi motifs',
      'Anti-tarnish protective micro-polish',
    ],
  },
  {
    id: 'potlis',
    title: 'Handcrafted Zardozi Bridal Potlis',
    subtitle: 'Metallic Gold Thread & Pearl Embroidery for Ladies',
    description: 'A bespoke celebration of Indian textiles. Our bridal potlis and batwas are hand-embroidered on pure silk velvet using 24K gold-plated Zari threads (Dabka & Salma), real seed pearls, and semi-precious ruby florets.',
    origin: 'Awadh & Lucknow Karkhanas',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Rich rose pink and emerald velvet base',
      'Raised 3D metallic gold wirework & pearls',
      'Handwoven silk drawstrings with weighted latkans',
    ],
  },
];

export const ArtisanCraftsmanshipSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CRAFT_PILLARS[0]);

  return (
    <section className="py-24 lg:py-32 bg-deepCharcoal text-warmIvory relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-champagneGold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-champagneGold text-xs font-sans uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-rosePink" />
            <span>Generational Indian Goldsmith Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-warmIvory tracking-tight">
            The Pillars of Our Atelier
          </h2>
          <div className="w-16 h-0.5 bg-champagneGold mx-auto my-2" />
          <p className="text-sm sm:text-base text-warmIvory/70 font-sans font-light leading-relaxed">
            Every creation at Alankar Luxury is born from centuries-old hereditary techniques that machines cannot replicate.
          </p>
        </div>

        {/* Pillar Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CRAFT_PILLARS.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(pillar)}
              className={`px-5 py-3 rounded-full text-xs font-sans uppercase tracking-wider font-medium transition-all ${
                activeTab.id === pillar.id
                  ? 'bg-rosePink text-white shadow-pinkGlow'
                  : 'bg-white/5 text-warmIvory/70 hover:bg-white/10 hover:text-white border border-champagneGold/20'
              }`}
            >
              {pillar.title.split(' ')[0]} {pillar.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Selected Pillar Detailed Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-deepCharcoal-900/90 rounded-3xl p-8 sm:p-12 border border-champagneGold/30 shadow-2xl"
          >
            {/* Visual Aspect */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-champagneGold/40 shadow-xl">
                <Image
                  src={activeTab.image}
                  alt={activeTab.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-deepCharcoal/90 text-champagneGold text-[11px] font-sans border border-champagneGold/30">
                    Artisan Origin: {activeTab.origin}
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative & Checklist */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs uppercase font-sans tracking-widest text-rosePink font-semibold">
                  {activeTab.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-warmIvory mt-1">
                  {activeTab.title}
                </h3>
              </div>

              <p className="text-sm text-warmIvory/80 font-sans font-light leading-relaxed">
                {activeTab.description}
              </p>

              <div className="pt-3 border-t border-champagneGold/20 space-y-2.5">
                {activeTab.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-warmIvory/90 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-rosePink shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4 text-xs text-champagneGold font-sans">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Certified Purity Guaranteed by Alankar Luxury</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
