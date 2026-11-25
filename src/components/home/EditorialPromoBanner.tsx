'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppGeneralUrl } from '@/data/storeInfo';

export const EditorialPromoBanner: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-deepCharcoal overflow-hidden text-warmIvory">
      {/* Background Cinematic Image with Rich Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1920&auto=format&fit=crop"
          alt="Alankar Luxury Bridal Editorial"
          fill
          className="object-cover object-center opacity-30 filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deepCharcoal via-deepCharcoal/90 to-deepCharcoal/75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rosePink/20 text-rosePink-300 border border-rosePink/40 text-xs font-sans tracking-widest uppercase font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Bridal Destination &bull; Jewellery, Silver &amp; Potlis</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium leading-[1.12] text-warmIvory"
          >
            A Complete World of Bridal Splendour For Ladies.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-warmIvory/80 font-sans font-light leading-relaxed"
          >
            From royal 22K gold chokers and waist belts to pure 92.5 silver pooja articles for auspicious rites and hand-embroidered Zardozi bridal potlis, discover everything crafted to celebrate life&apos;s grandest milestones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link
              href="/contact#appointment"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-rosePink hover:bg-rosePink-600 text-white font-sans text-xs font-semibold tracking-widest uppercase transition-all shadow-pinkGlow hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan Store Visit</span>
            </Link>

            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-[#25D366] text-white border border-champagneGold/40 hover:border-[#25D366] font-sans text-xs font-medium tracking-wider uppercase transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-6 border-t border-champagneGold/20 flex flex-wrap items-center gap-6 text-xs text-warmIvory/60 font-sans"
          >
            <span>&bull; 22K Hallmarked Gold</span>
            <span>&bull; 92.5 Sterling Silver Heirlooms</span>
            <span>&bull; Handcrafted Zardozi Bridal Potlis</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
