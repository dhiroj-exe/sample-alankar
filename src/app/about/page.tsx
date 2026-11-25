import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Heart, Award, ArrowRight, MapPin, MessageCircle } from 'lucide-react';
import { getWhatsAppGeneralUrl } from '@/data/storeInfo';

export const metadata: Metadata = {
  title: 'Our Heritage & Goldsmith Legacy — ALANKAR LUXURY',
  description:
    'Discover the ancestral goldsmith artistry, royal patronage, and pure gold and silver philosophy behind Alankar Luxury.',
};

export default function AboutPage() {
  return (
    <div className="bg-warmIvory min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-rosePink text-xs font-sans uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Alankar Legacy</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-medium text-deepCharcoal tracking-tight leading-[1.12]">
            Where Ancestral Artistry Meets Complete Bridal Splendour.
          </h1>
          <div className="w-20 h-0.5 bg-champagneGold mx-auto my-3" />
          <p className="text-base sm:text-lg text-deepCharcoal/75 font-sans font-light leading-relaxed">
            For generations, ALANKAR LUXURY has dedicated itself to preserving the sublime goldsmithing traditions of royal Indian courts, translating sovereign grandeur into 22K hallmarked gold, pure silver pooja heirlooms, and bespoke bridal accessories.
          </p>
        </div>

        {/* Brand Emblem Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-champagneGold/30 shadow-luxury">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-champagneGold/40 bg-rosePink p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/logo/alankar-logo.png"
                  alt="Alankar Luxury Emblem"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-sans uppercase tracking-widest text-rosePink font-semibold">
              The Sovereign Emblem
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-deepCharcoal">
              The Symbol of Eternal Grace
            </h2>
            <div className="w-16 h-0.5 bg-champagneGold" />
            <div className="space-y-4 text-xs sm:text-sm text-deepCharcoal/80 font-sans font-light leading-relaxed">
              <p>
                The Alankar Luxury crest unites sacred motifs of classical Indian royal iconography:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rosePink mt-1.5 shrink-0" />
                  <span>
                    <strong>The Blooming Lotus Crown:</strong> Symbolising spiritual transcendence, purity of 22K gold, and auspicious new beginnings for every bride.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rosePink mt-1.5 shrink-0" />
                  <span>
                    <strong>The Royal Crest &lsquo;A&rsquo;:</strong> Sculpted with sweeping calligraphic grace, anchoring our promise of sovereign design and uncompromised authenticity.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rosePink mt-1.5 shrink-0" />
                  <span>
                    <strong>The Filigree Laurel Wreath:</strong> Celebrating master generational karigars whose ancestral wisdom breathes life into raw bullion, pure silverware, and unheated gemstones.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-rosePink font-semibold">
              Our Unwavering Ethos
            </span>
            <h3 className="text-3xl font-serif font-medium text-deepCharcoal">
              Craftsmanship Without Compromise
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-champagneGold/20 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rosePink/10 text-rosePink flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-deepCharcoal">
                BIS 916 &amp; 925 Pure Silver
              </h4>
              <p className="text-xs text-deepCharcoal/70 font-sans leading-relaxed">
                Every ounce of gold carries government laser BIS 916 hallmarking. Our pooja silverware is strictly cast in certified 92.5 pure sterling silver.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-champagneGold/20 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-champagneGold/10 text-champagneGold-700 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-deepCharcoal">
                Ancestral Jadau &amp; Nakashi
              </h4>
              <p className="text-xs text-deepCharcoal/70 font-sans leading-relaxed">
                We work exclusively with hereditary artisan families in Rajasthan, Karnataka, and Kerala whose ancestral lineage served royal courts, preserving irreplaceable artisanal heritage.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-champagneGold/20 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rosePink/10 text-rosePink flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-deepCharcoal">
                The Jewellery Boutique Experience
              </h4>
              <p className="text-xs text-deepCharcoal/70 font-sans leading-relaxed">
                We do not sell jewellery through impersonal digital checkouts. Masterpieces of this calibre demand personal viewing, authentic drapery, and dedicated store stylist consultations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-10 sm:p-14 rounded-3xl bg-deepCharcoal text-warmIvory text-center space-y-6 relative overflow-hidden border border-champagneGold/30 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-3xl sm:text-4xl font-serif font-semibold text-warmIvory">
              Experience the Craft in Person
            </h3>
            <p className="text-sm text-warmIvory/70 font-sans leading-relaxed">
              We warmly invite you to plan a visit to our Banjara Hills flagship or Kala Ghoda heritage showroom.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link
                href="/contact#appointment"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-rosePink hover:bg-rosePink-600 text-white font-sans text-xs font-semibold tracking-wider uppercase transition-all shadow-pinkGlow"
              >
                <span>Plan Store Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-[#25D366] text-white border border-champagneGold/40 text-xs font-sans font-medium tracking-wider uppercase transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Store Concierge</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
