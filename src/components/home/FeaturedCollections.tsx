'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Gem } from 'lucide-react';
import { COLLECTIONS } from '@/data/collections';

export const FeaturedCollections: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-deepCharcoal text-warmIvory relative overflow-hidden">
      {/* Subtle decorative background texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A46D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-champagneGold text-xs font-sans uppercase tracking-widest font-semibold">
              <Gem className="w-3.5 h-3.5 text-rosePink" />
              <span>Signature Jewellery &amp; Silver Suites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-warmIvory">
              Featured Collections
            </h2>
            <div className="w-16 h-0.5 bg-champagneGold my-2" />
            <p className="text-sm sm:text-base text-warmIvory/70 max-w-xl font-sans font-light leading-relaxed">
              Curated masterworks reflecting royal court dynasties, sacred temple architecture, pure silverware, and bespoke bridal shringar.
            </p>
          </div>

          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-champagneGold hover:text-white transition-colors group"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COLLECTIONS.map((col, index) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative rounded-3xl overflow-hidden bg-deepCharcoal-900 border border-champagneGold/25 shadow-2xl flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={col.coverImage}
                  alt={col.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal-900 via-deepCharcoal-900/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase font-sans tracking-widest bg-deepCharcoal/80 text-champagneGold border border-champagneGold/30 backdrop-blur-md">
                    Signature Suite
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 relative -mt-10 sm:-mt-12 bg-deepCharcoal-900/95 backdrop-blur-md border-t border-champagneGold/20 rounded-t-3xl flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest font-sans text-rosePink font-semibold">
                    {col.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-warmIvory mt-1 group-hover:text-champagneGold-300 transition-colors">
                    {col.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-warmIvory/70 mt-3 font-sans font-light leading-relaxed">
                    {col.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-champagneGold/15 flex items-center justify-between">
                  <span className="text-xs text-warmIvory/50 font-sans">
                    {col.productCount} Curated Pieces
                  </span>
                  <Link
                    href={`/collections?collection=${col.id}`}
                    className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-champagneGold hover:text-white font-medium group/btn"
                  >
                    <span>Discover Suite</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
