'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Award, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export const BrandStorySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-warmIvory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Brand Story & Logo Crest Feature */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Main Brand Portrait with Original Logo Embed */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-champagneGold/40 bg-rosePink p-2 group">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/logo/alankar-logo.png"
                    alt="Alankar Luxury Official Seal"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
              </div>

              {/* Overlapping Complementary Photo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-8 -right-6 sm:-right-8 w-44 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-deepCharcoal hidden sm:block"
              >
                <Image
                  src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop"
                  alt="Alankar Luxury Bridal Craft"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Heritage Plaque */}
              <div className="absolute -top-4 -left-4 px-4 py-2 rounded-xl bg-deepCharcoal text-champagneGold text-xs font-sans tracking-widest uppercase border border-champagneGold/30 shadow-lg">
                Generational Goldsmiths
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-rosePink text-xs font-sans uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Alankar Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-deepCharcoal tracking-tight leading-[1.15]">
              Where Royal Indian Goldsmith Tradition Meets Complete Bridal Splendour.
            </h2>

            <div className="w-20 h-0.5 bg-champagneGold" />

            <div className="space-y-4 text-deepCharcoal/80 text-sm sm:text-base font-sans font-light leading-relaxed">
              <p>
                At <strong>ALANKAR LUXURY</strong>, jewellery is a sacred heirloom of emotional devotion, royal genealogy, and ancestral artistry. Established with an unwavering reverence for the classical Indian goldsmithing traditions, our boutique stores showcase masterpieces crafted in pure 22K hallmarked gold and pure 92.5 sterling silver.
              </p>
              <p>
                Our collections celebrate the complete journey of Indian womanhood—from grand royal Polki Jadau chokers and sacred temple Nakashi harams, to forehead Mathapattis, sculpted gold Kamarbandh waist belts, pure silver pooja heirlooms, and bespoke handcrafted Zardozi bridal potlis.
              </p>
              <p>
                We maintain an uncompromising standard of purity: 100% government BIS 916 laser hallmarking, BIS 925 sterling silver certification, and handpicked untreated gemstones. In our welcoming stores, patrons experience jewellery consultation as it was meant to be—warm, unhurried, and deeply memorable.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-champagneGold/20">
              <div className="space-y-1.5">
                <div className="text-rosePink font-serif text-2xl font-bold">01.</div>
                <h4 className="font-serif text-base font-semibold text-deepCharcoal">22K Pure Gold</h4>
                <p className="text-xs text-deepCharcoal/60 leading-relaxed font-sans">
                  Certified BIS 916 hallmarked yellow gold with ancestral 24K Jadau foil settings.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-champagneGold-600 font-serif text-2xl font-bold">02.</div>
                <h4 className="font-serif text-base font-semibold text-deepCharcoal">Pure Silverware</h4>
                <p className="text-xs text-deepCharcoal/60 leading-relaxed font-sans">
                  Auspicous 92.5 sterling silver pooja thalis, carved peacock diyas, and silver gifts.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-rosePink font-serif text-2xl font-bold">03.</div>
                <h4 className="font-serif text-base font-semibold text-deepCharcoal">Bridal Accessories</h4>
                <p className="text-xs text-deepCharcoal/60 leading-relaxed font-sans">
                  Complete head-to-toe shringar, mathapattis, kamarbandhs, and handcrafted zardozi potlis.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-widest uppercase text-deepCharcoal hover:text-rosePink transition-colors group"
              >
                <span>Read Our Full Story &amp; Goldsmith Heritage</span>
                <ArrowRight className="w-4 h-4 text-champagneGold group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
