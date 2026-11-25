'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { STORE_INFO, getWhatsAppAppointmentUrl } from '@/data/storeInfo';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:30 AM');
  const [location, setLocation] = useState('Banjara Hills, Hyderabad');
  const [category, setCategory] = useState(preselectedProduct ? `Specific: ${preselectedProduct}` : 'Bridal Shringar & Gold Jewellery');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const waUrl = getWhatsAppAppointmentUrl({
      name: fullName || 'Valued Patron',
      date: `${preferredDate} at ${preferredTime}`,
      category: `${category} (${location})`,
    });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deepCharcoal/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl bg-warmIvory rounded-3xl shadow-2xl border border-champagneGold/30 overflow-hidden z-10"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-deepCharcoal to-deepCharcoal-900 text-warmIvory p-6 sm:p-8 border-b border-champagneGold/30">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full text-warmIvory/60 hover:text-warmIvory hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rosePink/20 text-rosePink-300 text-xs font-sans uppercase tracking-widest mb-3 border border-rosePink/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Jewellery Store Visit</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold tracking-wide text-warmIvory">
                Plan Your Store Visit
              </h3>
              <p className="text-xs sm:text-sm text-warmIvory/70 mt-1.5 font-sans leading-relaxed">
                Experience our 22K gold jewellery, pure silverware, and bridal accessories in person with our dedicated store stylists.
              </p>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-rosePink/10 text-rosePink flex items-center justify-center mx-auto border border-rosePink/20">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-serif font-semibold text-deepCharcoal">
                    Visit Request Received
                  </h4>
                  <p className="text-sm text-deepCharcoal/70 max-w-md mx-auto">
                    Thank you, <strong className="text-deepCharcoal">{fullName}</strong>. Our store concierge has received your request for <strong className="text-deepCharcoal">{preferredDate}</strong> at our {location} showroom.
                  </p>
                  <p className="text-xs text-champagneGold-800 bg-champagneGold-50 p-3 rounded-xl border border-champagneGold/30">
                    Connect directly on WhatsApp to confirm immediate availability or share design references.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <button
                      onClick={handleOpenWhatsApp}
                      className="flex-1 inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-full bg-[#25D366] text-white font-sans text-sm font-medium hover:bg-[#1EBE5D] transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Continue to WhatsApp</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="py-3 px-6 rounded-full border border-deepCharcoal/20 text-deepCharcoal text-sm hover:bg-white transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-deepCharcoal/70 mb-1 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Radhika Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-champagneGold/30 bg-white text-sm text-deepCharcoal focus:outline-none focus:ring-2 focus:ring-rosePink/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-deepCharcoal/70 mb-1 font-medium">
                        Mobile Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-champagneGold/30 bg-white text-sm text-deepCharcoal focus:outline-none focus:ring-2 focus:ring-rosePink/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-deepCharcoal/70 mb-1 font-medium">
                        Select Store Location *
                      </label>
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-champagneGold/30 bg-white text-sm text-deepCharcoal focus:outline-none focus:ring-2 focus:ring-rosePink/20"
                      >
                        <option value="Banjara Hills, Hyderabad">Banjara Hills, Hyderabad (Flagship Store)</option>
                        <option value="Kala Ghoda, Mumbai">Kala Ghoda, Mumbai (Heritage Showroom)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-deepCharcoal/70 mb-1 font-medium">
                        Items of Interest *
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-champagneGold/30 bg-white text-sm text-deepCharcoal focus:outline-none focus:ring-2 focus:ring-rosePink/20"
                      >
                        <option value="Bridal Shringar & Gold Jewellery">Bridal Shringar & 22K Gold Sets</option>
                        <option value="The Royal Polki & Jadau Heritage">Royal Polki & Jadau Neckpieces</option>
                        <option value="Temple Gold & Nakashi Craft">Temple Gold & Nakashi Jewellery</option>
                        <option value="Pure Silver Pooja Articles">Pure 92.5 Sterling Silver Pooja Articles</option>
                        <option value="Luxury Bridal Potlis & Batwas">Luxury Bridal Potlis & Batwas</option>
                        <option value="Bespoke Gold Commission">Bespoke 22K Custom Commission</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-deepCharcoal/70 mb-1 font-medium">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2.5 rounded-xl border border-champagneGold/30 bg-white text-sm text-deepCharcoal focus:outline-none focus:ring-2 focus:ring-rosePink/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-deepCharcoal/70 mb-1 font-medium">
                        Preferred Time *
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-champagneGold/30 bg-white text-sm text-deepCharcoal focus:outline-none focus:ring-2 focus:ring-rosePink/20"
                      >
                        <option value="11:30 AM">11:30 AM – Morning</option>
                        <option value="02:30 PM">02:30 PM – Afternoon</option>
                        <option value="04:30 PM">04:30 PM – Evening</option>
                        <option value="06:30 PM">06:30 PM – Night</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-deepCharcoal/70 mb-1 font-medium">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Looking for a reception gold choker, silver pooja items, wedding date in December..."
                      className="w-full px-4 py-2 rounded-xl border border-champagneGold/30 bg-white text-sm text-deepCharcoal focus:outline-none focus:ring-2 focus:ring-rosePink/20"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-full bg-rosePink text-white font-sans text-sm font-semibold tracking-wide hover:bg-rosePink-600 transition-colors shadow-pinkGlow"
                    >
                      Confirm Store Visit
                    </button>
                    <button
                      type="button"
                      onClick={handleOpenWhatsApp}
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full border border-champagneGold text-deepCharcoal font-sans text-sm font-medium hover:bg-white transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Book on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
