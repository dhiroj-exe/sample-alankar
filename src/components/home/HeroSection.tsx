'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin, Calendar, MessageCircle, Gem } from 'lucide-react';
import { getWhatsAppGeneralUrl } from '@/data/storeInfo';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-12 lg:py-20">
      {/* Ambient Radial Golden Gradients & Micro-Shimmers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-rosePink/15 via-champagneGold/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-32 -right-32 w-[44rem] h-[44rem] rounded-full bg-gradient-to-tl from-champagneGold/30 via-rosePink/15 to-transparent blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Aesthetic Emblem Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/90 border border-champagneGold/40 shadow-sm backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-rosePink animate-ping" />
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-ultraLuxury uppercase text-deepCharcoal/80">
              ALANKAR LUXURY &bull; ESTD. 1984
            </span>
            <div className="w-1 h-1 rounded-full bg-champagneGold" />
            <span className="font-sans text-[10px] text-champagneGold-800 tracking-wider uppercase font-medium">
              22K Pure Gold &amp; Silver
            </span>
          </motion.div>
        </div>

        {/* Central Cinematic Editorial Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-14 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-deepCharcoal tracking-tight leading-[1.05]"
          >
            Elegance That <br />
            <span className="italic font-normal bg-gradient-to-r from-rosePink via-rosePink-600 to-champagneGold-600 bg-clip-text text-transparent">
              Lasts Forever.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-base sm:text-lg lg:text-xl text-deepCharcoal/75 max-w-2xl mx-auto font-light leading-relaxed pt-2"
          >
            Discover exquisite jewellery crafted to celebrate your most beautiful moments.
          </motion.p>
        </div>

        {/* Asymmetrical Royal Arched Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Mini Vignette: Craftsmanship Detail & Ladies Special */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="hidden lg:block lg:col-span-3 space-y-6"
          >
            {/* Arched Card 1: Silver & Pooja Heirloom */}
            <div className="group relative rounded-t-[100px] rounded-b-3xl overflow-hidden bg-white border border-champagneGold/30 shadow-luxury p-3 text-center">
              <div className="relative aspect-[3/4] rounded-t-[90px] rounded-b-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=800&auto=format&fit=crop"
                  alt="Pure Silver Pooja Articles"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] uppercase tracking-widest text-champagneGold block">
                    Pure Silver Heirlooms
                  </span>
                  <span className="text-xs font-serif font-semibold">92.5 Nakashi Diyas</span>
                </div>
              </div>
            </div>

            {/* Micro Feature Tag */}
            <div className="p-4 rounded-2xl bg-white/80 border border-champagneGold/30 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-1.5 text-rosePink text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Laser Hallmark</span>
              </div>
              <p className="text-[11px] text-deepCharcoal/65 font-sans leading-relaxed">
                BIS 916 Pure Gold &bull; BIS 925 Sterling Silver guaranteed with HUID stamps.
              </p>
            </div>
          </motion.div>

          {/* Center Main Stage: Majestic Regal Arch with Alankar Medallion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Grand Royal Mughal Arched Frame */}
              <div className="relative rounded-t-[160px] sm:rounded-t-[200px] rounded-b-[40px] overflow-hidden p-3.5 sm:p-4 bg-gradient-to-b from-champagneGold/40 via-rosePink/20 to-champagneGold/50 shadow-2xl border border-champagneGold/50">
                <div className="relative aspect-[4/5] rounded-t-[145px] sm:rounded-t-[185px] rounded-b-[32px] overflow-hidden bg-deepCharcoal group">
                  <Image
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop"
                    alt="Alankar Luxury 22K Royal Polki Choker"
                    fill
                    priority
                    className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 650px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/85 via-transparent to-black/10" />

                  {/* Overlaid Floating Gold Plate */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark-luxury text-warmIvory border border-champagneGold/40 shadow-xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] tracking-ultraLuxury uppercase font-sans text-champagneGold block">
                        Masterpiece Suite
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-white">
                        Padmavati 22K Polki Choker
                      </h3>
                      <span className="text-[11px] text-warmIvory/60 font-sans">
                        Untreated Polki &bull; Zambian Emeralds &bull; Basra Pearls
                      </span>
                    </div>
                    <Link
                      href="/collections/padmavati-uncut-polki-choker"
                      className="px-4 py-2 rounded-full bg-rosePink text-white text-xs font-sans font-semibold tracking-wider uppercase hover:bg-rosePink-600 transition-colors shadow-sm"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Original Alankar Royal Crest Medallion with Gentle Live Bobbing */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.1, rotate: 3 }}
                initial={{ opacity: 0, x: -30 }}
                className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden shadow-2xl border-2 border-champagneGold p-1 bg-rosePink ring-4 ring-white/70 backdrop-blur-md cursor-pointer z-20"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/logo/alankar-logo.png"
                    alt="Alankar Luxury Authentic Crest"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating Concierge Chat Pill with Live Pulse */}
              <motion.a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-6 flex items-center gap-3 px-5 py-3 rounded-full bg-white text-deepCharcoal shadow-xl border border-champagneGold/40 hover:border-[#25D366] transition-all group z-20"
              >
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-deepCharcoal/50 block leading-tight">
                    Instant Showroom Assistance
                  </span>
                  <span className="text-xs font-sans font-semibold text-deepCharcoal group-hover:text-rosePink transition-colors">
                    Chat on WhatsApp
                  </span>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Mini Vignette: Bridal Shringar & Zardozi Potlis */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:block lg:col-span-3 space-y-6"
          >
            {/* Arched Card 2: Luxury Bridal Potlis */}
            <div className="group relative rounded-t-[100px] rounded-b-3xl overflow-hidden bg-white border border-champagneGold/30 shadow-luxury p-3 text-center">
              <div className="relative aspect-[3/4] rounded-t-[90px] rounded-b-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
                  alt="Luxury Handcrafted Bridal Potlis"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] uppercase tracking-widest text-champagneGold block">
                    Ladies Special
                  </span>
                  <span className="text-xs font-serif font-semibold">Zardozi Bridal Potlis</span>
                </div>
              </div>
            </div>

            {/* Micro Feature Tag 2 */}
            <div className="p-4 rounded-2xl bg-white/80 border border-champagneGold/30 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-1.5 text-champagneGold-700 text-xs font-semibold uppercase tracking-wider">
                <Gem className="w-3.5 h-3.5" />
                <span>Bespoke Bridal Trousseau</span>
              </div>
              <p className="text-[11px] text-deepCharcoal/65 font-sans leading-relaxed">
                Mathapattis, Vaddanams, Hathphool &amp; resonant royal payals.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Central Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <Link
            href="/collections"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-deepCharcoal hover:bg-rosePink text-warmIvory font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-luxury hover:shadow-pinkGlow hover:scale-105 group"
          >
            <span>Explore Complete Catalogue</span>
            <ArrowRight className="w-4 h-4 text-champagneGold group-hover:translate-x-1.5 transition-transform" />
          </Link>

          <Link
            href="/contact#appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/95 hover:bg-white text-deepCharcoal border border-champagneGold/50 font-sans text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:shadow-md hover:border-rosePink"
          >
            <Calendar className="w-4 h-4 text-champagneGold" />
            <span>Plan Showroom Visit</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
