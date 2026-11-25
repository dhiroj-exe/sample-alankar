'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AlankarLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'badge' | 'minimal' | 'horizontal' | 'emblem-only';
  inverted?: boolean;
}

export const AlankarLogo: React.FC<AlankarLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  inverted = false,
}) => {
  const sizeMap = {
    sm: { img: 36, text: 'text-sm', sub: 'text-[9px]' },
    md: { img: 48, text: 'text-lg', sub: 'text-[10px]' },
    lg: { img: 64, text: 'text-2xl', sub: 'text-xs' },
    xl: { img: 96, text: 'text-3xl', sub: 'text-sm' },
  };

  const { img, text, sub } = sizeMap[size];

  if (variant === 'badge') {
    return (
      <Link
        href="/"
        className={`group inline-flex flex-col items-center justify-center transition-transform hover:scale-105 ${className}`}
      >
        <div className="relative rounded-2xl overflow-hidden p-1 shadow-luxury border border-champagneGold/40 bg-gradient-to-b from-champagneGold/30 via-rosePink to-rosePink-700">
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden shadow-inner">
            <Image
              src="/images/logo/alankar-logo.png"
              alt="Alankar Luxury Official Crest"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 112px, 144px"
            />
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'emblem-only') {
    return (
      <Link href="/" className={`inline-flex items-center justify-center ${className}`}>
        <div
          style={{ width: img, height: img }}
          className="relative rounded-full overflow-hidden border border-champagneGold/40 shadow-sm"
        >
          <Image
            src="/images/logo/alankar-logo.png"
            alt="Alankar Luxury Emblem"
            fill
            className="object-cover"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3.5 transition-opacity hover:opacity-95 ${className}`}
    >
      {/* Authentic Crest Circle */}
      <div
        style={{ width: img, height: img }}
        className="relative shrink-0 rounded-full overflow-hidden border border-champagneGold/60 shadow-md ring-2 ring-champagneGold/30 group-hover:ring-rosePink/50 group-hover:shadow-pinkGlow transition-all duration-300"
      >
        <Image
          src="/images/logo/alankar-logo.png"
          alt="Alankar Luxury Logo Crest"
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif tracking-widest uppercase font-semibold leading-tight ${text} ${
            inverted ? 'text-white' : 'text-deepCharcoal'
          }`}
          style={{ letterSpacing: '0.22em' }}
        >
          ALANKAR
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`font-sans tracking-ultraLuxury uppercase font-medium ${sub} ${
              inverted ? 'text-champagneGold-300' : 'text-rosePink'
            }`}
          >
            LUXURY
          </span>
          <span className="w-1 h-1 rounded-full bg-champagneGold" />
          <span
            className={`font-sans text-[8px] tracking-widest uppercase ${
              inverted ? 'text-warmIvory/60' : 'text-deepCharcoal/50'
            }`}
          >
            ESTD. 1984
          </span>
        </div>
      </div>
    </Link>
  );
};
