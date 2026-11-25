'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Calendar,
  Share2,
  ShieldCheck,
  Award,
  Sparkles,
  ChevronRight,
  MapPin,
  Check,
  ZoomIn,
  Clock,
  Gem,
} from 'lucide-react';
import { Product } from '@/types';
import { getRelatedProducts } from '@/data/products';
import { getWhatsAppProductUrl, STORE_INFO } from '@/data/storeInfo';
import { AppointmentModal } from '@/components/appointment/AppointmentModal';
import { ProductCard } from '@/components/catalogue/ProductCard';

interface ProductDetailClientProps {
  product: Product;
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const relatedProducts = getRelatedProducts(product.id, product.category, 3);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const whatsappUrl = getWhatsAppProductUrl(product.name, product.sku);

  return (
    <div className="bg-warmIvory min-h-screen py-8 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs font-sans text-deepCharcoal/60 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-rosePink transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-champagneGold shrink-0" />
          <Link href="/collections" className="hover:text-rosePink transition-colors">
            Collections
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-champagneGold shrink-0" />
          <Link
            href={`/collections?category=${encodeURIComponent(product.category)}`}
            className="hover:text-rosePink transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-champagneGold shrink-0" />
          <span className="text-deepCharcoal font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* Product Showcase: Gallery + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Gallery: Main Photo + Interactive Thumbnails */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Interactive Zoom Photo */}
            <div
              className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-champagneGold/30 shadow-luxury cursor-crosshair group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <Image
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={`object-cover transition-transform duration-200 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                style={
                  isZoomed
                    ? {
                        transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                      }
                    : undefined
                }
              />

              {/* Floating Zoom Indicator Hint */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-deepCharcoal/70 text-warmIvory text-[11px] font-sans flex items-center gap-1.5 backdrop-blur-md opacity-80 group-hover:opacity-0 transition-opacity pointer-events-none">
                <ZoomIn className="w-3.5 h-3.5 text-champagneGold" />
                <span>Hover to Magnify Detail</span>
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                {product.bestseller && (
                  <span className="px-3 py-1 rounded-full bg-rosePink text-white text-[11px] font-sans font-semibold tracking-wider uppercase shadow-md">
                    Bestseller
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-white/90 text-deepCharcoal text-[11px] font-sans font-medium tracking-wider uppercase border border-champagneGold/30 backdrop-blur-sm">
                  {product.availability}
                </span>
              </div>
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-white shadow-sm ${
                      selectedImageIndex === idx
                        ? 'border-rosePink ring-2 ring-rosePink/20 scale-105'
                        : 'border-champagneGold/30 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`Angle ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Narrative & Enquiry Action */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-sans tracking-widest text-rosePink font-semibold">
                  {product.collection}
                </span>
                <span className="text-xs font-mono text-deepCharcoal/40 tracking-wider">
                  {product.sku}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-deepCharcoal mt-1 tracking-tight leading-snug">
                {product.name}
              </h1>

              <p className="text-sm text-champagneGold-700 font-sans mt-1.5 italic font-medium">
                &ldquo;{product.tagline}&rdquo;
              </p>
            </div>

            {/* Price on Request Notice Card */}
            <div className="p-5 rounded-2xl bg-white border border-champagneGold/30 shadow-sm space-y-1.5">
              <span className="text-[10px] font-sans uppercase tracking-widest text-deepCharcoal/50 block">
                Valuation &amp; Availability
              </span>
              <div className="font-serif text-2xl font-semibold text-deepCharcoal italic">
                Price on Request
              </div>
              <p className="text-[11px] text-deepCharcoal/60 font-sans leading-relaxed">
                Exact quote confirmed directly by our store concierge based on current gold bullion market rates and your personalized sizing.
              </p>
            </div>

            {/* Primary Action Buttons: WhatsApp Enquiry + Store Visit */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp Enquiry Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans text-sm font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:scale-[1.01]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enquire About This Piece</span>
              </a>

              <div className="flex items-center gap-3">
                {/* Plan Store Visit Button */}
                <button
                  onClick={() => setIsAppointmentOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-deepCharcoal hover:bg-rosePink text-warmIvory font-sans text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-champagneGold" />
                  <span>Visit Our Store</span>
                </button>

                {/* Share Link Button */}
                <button
                  onClick={handleShare}
                  className="p-3.5 rounded-full bg-white hover:bg-warmIvory-200 border border-champagneGold/30 text-deepCharcoal transition-colors"
                  title="Copy Link"
                >
                  {copiedLink ? (
                    <Check className="w-4 h-4 text-[#25D366]" />
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Store Line Notice */}
              <p className="text-[11px] text-center text-deepCharcoal/50 font-sans">
                Showroom concierge: {STORE_INFO.whatsappDisplay}
              </p>
            </div>

            {/* Narrative Description */}
            <div className="space-y-3 pt-4 border-t border-champagneGold/20">
              <h3 className="font-serif text-lg font-semibold text-deepCharcoal">
                About This Creation
              </h3>
              <p className="text-xs sm:text-sm text-deepCharcoal/80 font-sans font-light leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-1.5 pt-2">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-deepCharcoal/70 font-sans">
                    <Sparkles className="w-3.5 h-3.5 text-rosePink shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications Table */}
            <div className="space-y-3 pt-6 border-t border-champagneGold/20">
              <div className="flex items-center gap-2">
                <Gem className="w-4 h-4 text-champagneGold" />
                <h3 className="font-serif text-lg font-semibold text-deepCharcoal">
                  Specifications &amp; Craftsmanship
                </h3>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden border border-champagneGold/20 divide-y divide-champagneGold/10 text-xs font-sans">
                <div className="grid grid-cols-3 p-3">
                  <span className="text-deepCharcoal/60 font-medium">Material / Metal</span>
                  <span className="col-span-2 text-deepCharcoal font-semibold">
                    {product.specifications.metal}
                  </span>
                </div>
                <div className="grid grid-cols-3 p-3">
                  <span className="text-deepCharcoal/60 font-medium">Purity</span>
                  <span className="col-span-2 text-deepCharcoal">
                    {product.specifications.purity}
                  </span>
                </div>
                {product.specifications.gemstones && (
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-deepCharcoal/60 font-medium">Gemstones &amp; Stones</span>
                    <span className="col-span-2 text-deepCharcoal">
                      {product.specifications.gemstones}
                    </span>
                  </div>
                )}
                {product.specifications.grossWeight && (
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-deepCharcoal/60 font-medium">Gross Weight</span>
                    <span className="col-span-2 text-deepCharcoal">
                      {product.specifications.grossWeight}
                    </span>
                  </div>
                )}
                {product.specifications.netWeight && (
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-deepCharcoal/60 font-medium">Net Metal Weight</span>
                    <span className="col-span-2 text-deepCharcoal font-medium">
                      {product.specifications.netWeight}
                    </span>
                  </div>
                )}
                {product.specifications.dimensions && (
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-deepCharcoal/60 font-medium">Dimensions</span>
                    <span className="col-span-2 text-deepCharcoal">
                      {product.specifications.dimensions}
                    </span>
                  </div>
                )}
                {product.specifications.closure && (
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-deepCharcoal/60 font-medium">Mechanism / Clasp</span>
                    <span className="col-span-2 text-deepCharcoal">
                      {product.specifications.closure}
                    </span>
                  </div>
                )}
                <div className="grid grid-cols-3 p-3">
                  <span className="text-deepCharcoal/60 font-medium">Artisanal Craft</span>
                  <span className="col-span-2 text-deepCharcoal">
                    {product.specifications.craftsmanship}
                  </span>
                </div>
                <div className="grid grid-cols-3 p-3">
                  <span className="text-deepCharcoal/60 font-medium">Hallmark Guarantee</span>
                  <span className="col-span-2 text-deepCharcoal font-medium text-rosePink">
                    {product.specifications.certification}
                  </span>
                </div>
              </div>
            </div>

            {/* Store Visit CTA Box */}
            <div className="p-5 rounded-2xl bg-warmIvory-200 border border-champagneGold/30 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-rosePink shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold text-deepCharcoal">
                  Available for Showroom Viewing
                </h4>
                <p className="text-xs text-deepCharcoal/70 font-sans mt-0.5 leading-relaxed">
                  Visit our flagship showrooms at Banjara Hills, Hyderabad or Kala Ghoda, Mumbai to drape this piece.
                </p>
                <button
                  onClick={() => setIsAppointmentOpen(true)}
                  className="text-xs font-sans text-rosePink font-semibold underline mt-2 hover:text-rosePink-700"
                >
                  Plan store visit &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Creations Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-champagneGold/20">
            <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
              <span className="text-xs uppercase font-sans tracking-widest text-rosePink font-semibold">
                You May Also Admire
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-deepCharcoal">
                Complementary Pieces
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedProduct={product.name}
      />
    </div>
  );
};
