'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, MessageCircle, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_INFO, getWhatsAppGeneralUrl, getWhatsAppAppointmentUrl } from '@/data/storeInfo';

export const StoreVisitSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<'hyderabad' | 'mumbai'>('hyderabad');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('03:00 PM');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInstant = () => {
    const cityName = selectedCity === 'hyderabad' ? 'Hyderabad Flagship Store' : 'Mumbai Showroom';
    const url = getWhatsAppAppointmentUrl({
      name: guestName || 'Valued Patron',
      date: `${appointmentDate || 'Upcoming'} at ${appointmentTime}`,
      category: `Store Visit at ${cityName}`,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="store-visit" className="py-20 lg:py-32 bg-warmIvory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-rosePink text-xs font-sans uppercase tracking-widest font-semibold"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Physical Jewellery Showrooms</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-deepCharcoal tracking-tight"
          >
            Visit Our Jewellery Stores
          </motion.h2>
          <div className="w-16 h-0.5 bg-champagneGold mx-auto my-2" />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-deepCharcoal/70 font-sans font-light leading-relaxed"
          >
            Jewellery and silver heirlooms of this stature demand to be touched, draped, and admired in person. We invite you to experience our complete collections at our flagship showrooms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Store Switcher & Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Store City Tabs */}
            <div className="flex p-1.5 rounded-2xl bg-white border border-champagneGold/30 max-w-md shadow-sm">
              <button
                onClick={() => setSelectedCity('hyderabad')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-sans font-semibold tracking-wider uppercase transition-all ${
                  selectedCity === 'hyderabad'
                    ? 'bg-deepCharcoal text-warmIvory shadow-md'
                    : 'text-deepCharcoal/70 hover:text-deepCharcoal'
                }`}
              >
                Hyderabad Flagship Store
              </button>
              <button
                onClick={() => setSelectedCity('mumbai')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-sans font-semibold tracking-wider uppercase transition-all ${
                  selectedCity === 'mumbai'
                    ? 'bg-deepCharcoal text-warmIvory shadow-md'
                    : 'text-deepCharcoal/70 hover:text-deepCharcoal'
                }`}
              >
                Mumbai Showroom
              </button>
            </div>

            {/* Selected Store Card */}
            <motion.div
              key={selectedCity}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-3xl bg-white border border-champagneGold/30 shadow-luxury space-y-6"
            >
              <div>
                <span className="text-xs uppercase font-sans tracking-widest text-rosePink font-semibold">
                  {selectedCity === 'hyderabad' ? 'Telangana & Andhra Flagship' : 'Maharashtra Showroom'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-deepCharcoal mt-1">
                  {selectedCity === 'hyderabad'
                    ? STORE_INFO.flagshipStore.name
                    : STORE_INFO.regionalStore.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-champagneGold/15">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-rosePink shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-deepCharcoal/80 font-sans">
                      <strong className="block text-deepCharcoal font-medium">Store Address:</strong>
                      {selectedCity === 'hyderabad' ? (
                        <>
                          {STORE_INFO.flagshipStore.address}
                          <br />
                          {STORE_INFO.flagshipStore.landmark}
                          <br />
                          {STORE_INFO.flagshipStore.city}, {STORE_INFO.flagshipStore.state} – {STORE_INFO.flagshipStore.pincode}
                        </>
                      ) : (
                        <>
                          {STORE_INFO.regionalStore.address}
                          <br />
                          {STORE_INFO.regionalStore.landmark}
                          <br />
                          {STORE_INFO.regionalStore.city}, {STORE_INFO.regionalStore.state} – {STORE_INFO.regionalStore.pincode}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-champagneGold shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-deepCharcoal/80 font-sans">
                      <strong className="block text-deepCharcoal font-medium">Showroom Hours:</strong>
                      <span>Mon – Sat: 10:30 AM – 8:00 PM</span>
                      <br />
                      <span className="text-deepCharcoal/60">Sunday: Open (Store Consultation)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-rosePink shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-deepCharcoal/80 font-sans">
                      <strong className="block text-deepCharcoal font-medium">Direct Telephone:</strong>
                      <span>{STORE_INFO.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-deepCharcoal/80 font-sans">
                      <strong className="block text-deepCharcoal font-medium">WhatsApp Store Line:</strong>
                      <span>{STORE_INFO.whatsappDisplay}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-champagneGold shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-deepCharcoal/80 font-sans">
                      <strong className="block text-deepCharcoal font-medium">Store Enquiries:</strong>
                      <span>{STORE_INFO.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Showroom Services Checklist */}
              <div className="pt-4 border-t border-champagneGold/15">
                <span className="text-xs uppercase font-sans tracking-wider text-deepCharcoal/60 block mb-3 font-semibold">
                  Showroom Counters &amp; Collections:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-deepCharcoal/80 font-sans">
                  {STORE_INFO.services.map((svc) => (
                    <div key={svc} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rosePink shrink-0" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-sans font-semibold tracking-wider uppercase transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire Via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Store Visit Reservation Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-deepCharcoal text-warmIvory border border-champagneGold/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-rosePink/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-champagneGold text-xs font-sans tracking-widest uppercase border border-champagneGold/30">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Store Visit Request</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-warmIvory">
                  Plan Your Store Visit
                </h3>

                <p className="text-xs sm:text-sm text-warmIvory/70 font-sans leading-relaxed">
                  Let us know when you plan to visit. Our dedicated store stylists will have curated jewellery, silverware, and bridal collections ready for you.
                </p>

                {submitted ? (
                  <div className="py-8 text-center space-y-4 bg-white/5 rounded-2xl p-6 border border-champagneGold/20">
                    <CheckCircle2 className="w-12 h-12 text-rosePink mx-auto" />
                    <h4 className="text-xl font-serif font-semibold text-warmIvory">
                      Visit Scheduled
                    </h4>
                    <p className="text-xs text-warmIvory/70">
                      Thank you! Our showroom manager will connect shortly to welcome you.
                    </p>
                    <button
                      onClick={handleWhatsAppInstant}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-[#25D366] text-white text-xs font-sans font-semibold"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm via WhatsApp Now</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-wider text-warmIvory/60 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="e.g. Ananya Singhania"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-champagneGold/30 text-white placeholder-warmIvory/30 text-xs sm:text-sm focus:outline-none focus:border-rosePink"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-wider text-warmIvory/60 mb-1">
                        Mobile Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-champagneGold/30 text-white placeholder-warmIvory/30 text-xs sm:text-sm focus:outline-none focus:border-rosePink"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-sans uppercase tracking-wider text-warmIvory/60 mb-1">
                          Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={appointmentDate}
                          onChange={(e) => setAppointmentDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-3 py-2.5 rounded-xl bg-white/10 border border-champagneGold/30 text-white text-xs sm:text-sm focus:outline-none focus:border-rosePink"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-sans uppercase tracking-wider text-warmIvory/60 mb-1">
                          Preferred Slot *
                        </label>
                        <select
                          value={appointmentTime}
                          onChange={(e) => setAppointmentTime(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl bg-deepCharcoal border border-champagneGold/30 text-white text-xs sm:text-sm focus:outline-none focus:border-rosePink"
                        >
                          <option value="11:30 AM">11:30 AM (Morning)</option>
                          <option value="03:00 PM">03:00 PM (Afternoon)</option>
                          <option value="05:30 PM">05:30 PM (Evening)</option>
                          <option value="07:00 PM">07:00 PM (Night)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-rosePink hover:bg-rosePink-600 text-white font-sans text-xs font-semibold tracking-widest uppercase transition-all shadow-pinkGlow hover:scale-[1.02] mt-2"
                    >
                      Request Store Visit
                    </button>

                    <p className="text-[10px] text-center text-warmIvory/40 font-sans">
                      Non-transactional. Our store team connects directly to assist you.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
