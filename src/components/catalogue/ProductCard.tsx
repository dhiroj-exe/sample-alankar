'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { Product } from '@/types';
import { getWhatsAppProductUrl } from '@/data/storeInfo';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-champagneGold/25 hover:border-champagneGold/60 transition-all duration-500 hover:shadow-luxuryHover"
    >
      {/* Top Image Container */}
      <Link href={`/collections/${product.slug}`} className="relative aspect-[4/5] overflow-hidden bg-warmIvory-100">
        <Image
          src={displayImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
          {product.bestseller && (
            <span className="px-2.5 py-1 rounded-full bg-rosePink text-white text-[10px] font-sans font-semibold tracking-wider uppercase shadow-sm">
              Bestseller
            </span>
          )}
          {product.availability === 'Artisanal Limited' && (
            <span className="px-2.5 py-1 rounded-full bg-deepCharcoal/90 text-champagneGold text-[10px] font-sans font-medium tracking-wider uppercase border border-champagneGold/30">
              Artisanal Limited
            </span>
          )}
        </div>

        {/* Quick View Button on Hover */}
        {onQuickView && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView(product);
            }}
            className="absolute bottom-3.5 right-3.5 p-2 rounded-full bg-white/90 text-deepCharcoal hover:bg-rosePink hover:text-white shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
            title="Quick View Details"
          >
            <Eye className="w-4 h-4" />
          </button>
        )}
      </Link>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Collection */}
          <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-deepCharcoal/50 font-sans mb-1.5">
            <span className="truncate pr-2">{product.category}</span>
            <span className="text-champagneGold-700 font-medium truncate max-w-[140px] text-right shrink-0">
              {product.collection.split(' ')[0]}
            </span>
          </div>

          {/* Product Title */}
          <Link href={`/collections/${product.slug}`} className="block group-hover:text-rosePink transition-colors">
            <h3 className="font-serif text-lg font-semibold text-deepCharcoal leading-snug line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Tagline snippet */}
          <p className="text-xs text-deepCharcoal/60 line-clamp-2 mt-1.5 font-sans leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Price Tag Removed: Replaced with 'Price on Request' & Direct WhatsApp Action */}
        <div className="pt-4 mt-3 border-t border-champagneGold/15 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-sans text-deepCharcoal/40 tracking-wider">
              Valuation
            </span>
            <span className="font-serif text-sm font-medium text-champagneGold-800 italic">
              Price on Request
            </span>
          </div>

          <a
            href={getWhatsAppProductUrl(product.name, product.sku)}
            target="_blank"
            rel="noopener noreferrer"
            title="Enquire on WhatsApp"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 transition-all duration-300 text-xs font-sans font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
