'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { STORE_INFO, getWhatsAppGeneralUrl } from '@/data/storeInfo';
import { AppointmentModal } from '@/components/appointment/AppointmentModal';

export const MobileContactBar: React.FC = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-deepCharcoal/95 backdrop-blur-lg border-t border-champagneGold/30 px-3 py-2.5 shadow-2xl safe-area-bottom">
        <div className="flex items-center justify-between gap-2">
          {/* Direct WhatsApp Action */}
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] text-white text-xs font-sans font-semibold shadow-sm active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>WhatsApp</span>
          </a>

          {/* Book Store Visit */}
          <button
            onClick={() => setIsAppointmentOpen(true)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-rosePink text-white text-xs font-sans font-semibold shadow-pinkGlow active:scale-95 transition-transform"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Plan Store Visit</span>
          </button>

          {/* Call Direct */}
          <a
            href={`tel:${STORE_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="p-2.5 rounded-xl bg-warmIvory/10 text-champagneGold border border-champagneGold/30 active:scale-95 transition-transform"
            aria-label="Call Jewellery Store"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

      <AppointmentModal isOpen={isAppointmentOpen} onClose={() => setIsAppointmentOpen(false)} />
    </>
  );
};
