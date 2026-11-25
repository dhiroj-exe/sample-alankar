'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Gem, Layers } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';

type CategoryFilter = 'all' | 'jewellery' | 'bridal' | 'lifestyle';

export const CategoryGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredCategories = CATEGORIES.filter((cat) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'jewellery') {
      return ['Necklaces', 'Earrings', 'Bangles & Kadas', 'Rings'].includes(cat.id);
    }
    if (activeFilter === 'bridal') {
      return ['Bridal Shringar', 'Payals & Anklets'].includes(cat.id);
    }
    if (activeFilter === 'lifestyle') {
      return ['Silver & Pooja Heirlooms', 'Luxury Bridal Potlis'].includes(cat.id);
    }
    return true;
  });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-white/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Aesthetic Royal Filigree Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-champagneGold to-transparent flex-1 max-w-xs" />
          <div className="w-2 h-2 rounded-full bg-rosePink rotate-45" />
          <span className="font-serif italic text-champagneGold-800 text-sm tracking-widest uppercase">
            Curated Showroom Departments
          </span>
          <div className="w-2 h-2 rounded-full bg-rosePink rotate-45" />
          <div className="h-px bg-gradient-to-r from-transparent via-champagneGold to-transparent flex-1 max-w-xs" />
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-rosePink text-xs font-sans uppercase tracking-widest font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Eight Royal Disciplines</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-deepCharcoal tracking-tight"
          >
            Shop by Category
          </motion.h2>

          <div className="w-20 h-0.5 bg-champagneGold mx-auto my-2" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base text-deepCharcoal/70 font-sans font-light leading-relaxed max-w-2xl mx-auto"
          >
            Explore our eight distinguished departments—ranging from certified 22K hallmarked gold and uncut Polki to 92.5 sterling pooja silver and hand-embroidered bridal potlis.
          </motion.p>

          {/* Interactive Department Filter Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All 8 Disciplines', count: 8 },
              { id: 'jewellery', label: 'Pure Gold & Jadau', count: 4 },
              { id: 'bridal', label: 'Bridal Shringar & Payals', count: 2 },
              { id: 'lifestyle', label: 'Silverware & Potlis', count: 2 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as CategoryFilter)}
                className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-deepCharcoal text-warmIvory shadow-md scale-105'
                    : 'bg-white/80 hover:bg-white text-deepCharcoal/70 border border-champagneGold/30 hover:border-champagneGold'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
                    activeFilter === tab.id ? 'bg-rosePink text-white' : 'bg-warmIvory text-deepCharcoal/60'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Perfectly Balanced & Symmetrical Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          <AnimatePresence>
            {filteredCategories.map((category, index) => {
              const categoryIndex = CATEGORIES.findIndex((c) => c.id === category.id) + 1;
              const formattedIndex = categoryIndex < 10 ? `0${categoryIndex}` : `${categoryIndex}`;

              return (
                <motion.div
                  layout
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="w-full"
                >
                  <Link
                    href={`/collections?category=${encodeURIComponent(category.id)}`}
                    className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-champagneGold/25 hover:border-champagneGold/70 shadow-luxury hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
                  >
                    {/* Arched Architectural Photo Window */}
                    <div className="relative p-2.5 pb-0">
                      <div className="relative aspect-[4/5] rounded-t-[90px] rounded-b-2xl overflow-hidden bg-deepCharcoal">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />

                        {/* Subtle Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                        {/* Top Left Roman / Index Medallion */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="w-8 h-8 rounded-full bg-deepCharcoal/80 text-champagneGold border border-champagneGold/40 text-[11px] font-serif font-semibold flex items-center justify-center backdrop-blur-md shadow-sm">
                            {formattedIndex}
                          </span>
                        </div>

                        {/* Top Right Highlight Tag */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-2.5 py-1 rounded-full text-[9px] uppercase font-sans tracking-widest font-semibold bg-white/90 text-deepCharcoal shadow-sm border border-champagneGold/30 backdrop-blur-md">
                            {category.highlightText}
                          </span>
                        </div>

                        {/* Hover Quick Action Indicator */}
                        <div className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 group-hover:bg-rosePink text-deepCharcoal group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md">
                          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Symmetrical Information Pedestal (Guaranteed Uniform Heights) */}
                    <div className="p-5 flex-1 flex flex-col justify-between text-center bg-white">
                      <div>
                        {/* Sub Discipline Tag */}
                        <span className="text-[10px] uppercase font-sans tracking-ultraLuxury text-champagneGold-800 font-semibold block mb-1">
                          {category.highlightText}
                        </span>

                        {/* Full Category Title (Fixed min-height for uniform alignment) */}
                        <h3 className="font-serif text-lg font-medium text-deepCharcoal group-hover:text-rosePink transition-colors h-12 flex items-center justify-center leading-snug">
                          {category.name}
                        </h3>

                        {/* Short Editorial Description (Uniform line clamp) */}
                        <p className="text-xs text-deepCharcoal/60 font-sans line-clamp-2 leading-relaxed mt-1 font-light">
                          {category.description}
                        </p>
                      </div>

                      {/* Bottom Footer Bar */}
                      <div className="pt-3.5 mt-3 border-t border-champagneGold/15 flex items-center justify-between text-xs font-sans">
                        <span className="text-[11px] text-deepCharcoal/50 font-medium tracking-wide">
                          {category.count} Pieces
                        </span>
                        <span className="text-[11px] font-semibold text-rosePink group-hover:text-rosePink-700 tracking-wider flex items-center gap-1">
                          Explore Suite &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Assurance Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-deepCharcoal/50 font-sans inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-champagneGold" />
            <span>All categories available for private viewing and custom orders at our Banjara Hills &amp; Mumbai showrooms.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
