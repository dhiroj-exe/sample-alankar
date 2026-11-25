'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { AlankarLogo } from '@/components/common/AlankarLogo';
import { STORE_INFO, getWhatsAppGeneralUrl } from '@/data/storeInfo';
import { CATEGORIES } from '@/data/categories';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-deepCharcoal text-warmIvory pt-16 pb-24 md:pb-12 border-t-2 border-champagneGold/30 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-champagneGold/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 mb-12 border-b border-champagneGold/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rosePink/10 border border-rosePink/30 flex items-center justify-center text-rosePink shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-warmIvory">
                100% BIS 916 Hallmarked &amp; Certified
              </h4>
              <p className="text-xs text-warmIvory/60 mt-1 leading-relaxed">
                Every creation carries government laser BIS 916 gold hallmarking and certified 925 sterling silver purity guarantees.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-champagneGold/10 border border-champagneGold/30 flex items-center justify-center text-champagneGold shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-warmIvory">
                Ancestral Jadau &amp; Karigari
              </h4>
              <p className="text-xs text-warmIvory/60 mt-1 leading-relaxed">
                Handcrafted by master generational goldsmiths using traditional 24K pure gold foil inlays, nakashi chiselling, and fine Meenakari.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rosePink/10 border border-rosePink/30 flex items-center justify-center text-rosePink shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-warmIvory">
                Complete Bridal &amp; Ladies Shringar
              </h4>
              <p className="text-xs text-warmIvory/60 mt-1 leading-relaxed">
                From regal gold chokers to sterling silver pooja heirlooms and handcrafted zardozi potlis, explore our comprehensive bridal collections.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-champagneGold/20">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <AlankarLogo size="lg" variant="horizontal" inverted={true} />
            <p className="text-xs sm:text-sm text-warmIvory/70 leading-relaxed max-w-sm font-sans font-light">
              Alankar Luxury is a prestigious Indian jewellery boutique and bridal destination dedicated to celebrating life&apos;s most cherished moments through 22K hallmarked gold jewellery, pure 92.5 silver heirlooms, and handcrafted ladies accessories.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-sans font-medium hover:bg-[#1EBE5D] transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Store Concierge</span>
              </a>
              <Link
                href="/contact#appointment"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-champagneGold/50 text-champagneGold text-xs font-sans font-medium hover:bg-champagneGold hover:text-deepCharcoal transition-all"
              >
                <span>Plan Store Visit</span>
              </Link>
            </div>
          </div>

          {/* Jewellery & Ladies Categories */}
          <div>
            <h5 className="font-serif text-sm uppercase tracking-widest text-champagneGold font-semibold mb-4">
              Catalogue Categories
            </h5>
            <ul className="space-y-2.5 text-xs text-warmIvory/70 font-sans">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/collections?category=${encodeURIComponent(cat.id)}`}
                    className="hover:text-rosePink hover:translate-x-1 inline-block transition-all"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Curated Collections */}
          <div>
            <h5 className="font-serif text-sm uppercase tracking-widest text-champagneGold font-semibold mb-4">
              Curated Suites
            </h5>
            <ul className="space-y-2.5 text-xs text-warmIvory/70 font-sans">
              <li>
                <Link
                  href="/collections?collection=royal-polki-heritage"
                  className="hover:text-rosePink transition-colors"
                >
                  The Royal Polki &amp; Jadau
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?collection=temple-gold-craft"
                  className="hover:text-rosePink transition-colors"
                >
                  Temple Gold &amp; Nakashi Craft
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?collection=nizam-emerald-ruby-symphony"
                  className="hover:text-rosePink transition-colors"
                >
                  Nizam Emerald &amp; Rubies
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?collection=silver-pooja-and-potlis"
                  className="hover:text-rosePink transition-colors"
                >
                  Silver Heirlooms &amp; Potlis
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rosePink transition-colors">
                  Our Artisan Legacy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rosePink transition-colors">
                  Bespoke Commissioning
                </Link>
              </li>
            </ul>
          </div>

          {/* Jewellery Stores & Hours */}
          <div>
            <h5 className="font-serif text-sm uppercase tracking-widest text-champagneGold font-semibold mb-4">
              Jewellery Showrooms
            </h5>
            <div className="space-y-4 text-xs text-warmIvory/70 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rosePink shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-warmIvory block">Hyderabad Flagship:</span>
                  <span>{STORE_INFO.flagshipStore.address}, {STORE_INFO.flagshipStore.city}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-champagneGold shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-warmIvory block">Mumbai Heritage Showroom:</span>
                  <span>{STORE_INFO.regionalStore.address}, {STORE_INFO.regionalStore.city}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-champagneGold shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-warmIvory block">Store Hours:</span>
                  <span>Mon – Sat: 10:30 AM – 8:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-rosePink shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-warmIvory block">Store Contact:</span>
                  <span>{STORE_INFO.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-warmIvory/50 font-sans gap-4">
          <p className="text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} ALANKAR LUXURY. All rights reserved. Fine Indian Jewellery, Silverware &amp; Ladies Accessories.
            <span className="block text-[11px] text-warmIvory/40 mt-1">
              Valuations provided on request based on prevailing gold &amp; silver bullion market rates and bespoke sizing.
            </span>
          </p>

          <div className="text-xs text-warmIvory/60 font-sans">
            <span>BIS 916 Hallmarked Gold &bull; 925 Pure Silver &bull; Authentic Karigari</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
