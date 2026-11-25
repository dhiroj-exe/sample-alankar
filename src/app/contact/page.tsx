'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  Sparkles,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import { STORE_INFO, getWhatsAppGeneralUrl, getWhatsAppAppointmentUrl } from '@/data/storeInfo';

const FAQS = [
  {
    q: 'Can I purchase jewellery online directly from this website?',
    a: 'Alankar Luxury is a dedicated catalogue showcase rather than an online checkout store. Our creations are handcrafted in pure 22K gold, certified gemstones, and 92.5 sterling silver. To ensure proper sizing, authentic touch, and security, purchases and bespoke orders are concluded at our jewellery showrooms or through our direct verified WhatsApp store concierge.',
  },
  {
    q: 'How do I enquire about prices and quotes?',
    a: 'To maintain boutique exclusivity and reflect live gold and silver bullion markets, our catalogue features Price on Request. Simply click "Enquire on WhatsApp" on any piece or speak with our showroom concierge. We will instantly share current quotes, gold weight details, and availability.',
  },
  {
    q: 'What other articles besides gold jewellery do you offer?',
    a: 'Beyond gold jewellery, Alankar Luxury offers complete bridal shringar (Mathapattis, Kamarbandhs/waist belts, Hathphools, and Payals), pure 92.5 sterling silver pooja articles (thali suites, nakashi diyas, silver coins and gifts), and luxury handcrafted Zardozi bridal potli bags.',
  },
  {
    q: 'How do I plan a bridal trousseau visit to your store?',
    a: 'You can notify our showroom using the visit planning form on this page, or message our store concierge on WhatsApp. We ensure our senior stylists have curated suites ready for you and your family.',
  },
];

export default function ContactPage() {
  const [selectedLocation, setSelectedLocation] = useState<'hyderabad' | 'mumbai'>('hyderabad');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('02:00 PM');
  const [interest, setInterest] = useState('Bridal Shringar & Gold Jewellery');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const locName = selectedLocation === 'hyderabad' ? 'Banjara Hills, Hyderabad' : 'Kala Ghoda, Mumbai';
    const url = getWhatsAppAppointmentUrl({
      name: name || 'Valued Patron',
      date: `${date || 'Upcoming'} at ${time}`,
      category: `${interest} (${locName})`,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-warmIvory min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-rosePink text-xs font-sans uppercase tracking-widest font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Jewellery Showrooms &bull; Store Concierge</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-medium text-deepCharcoal tracking-tight leading-[1.12]">
            Connect With Alankar Luxury
          </h1>
          <div className="w-20 h-0.5 bg-champagneGold mx-auto my-3" />
          <p className="text-base sm:text-lg text-deepCharcoal/75 font-sans font-light leading-relaxed">
            Whether you wish to plan a store visit, enquire about our 22K gold jewellery and silver heirlooms, or commission a bespoke bridal piece, our store concierge awaits you.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-champagneGold/20 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-deepCharcoal">
                WhatsApp Store Concierge
              </h3>
              <p className="text-xs text-deepCharcoal/70 font-sans mt-2 leading-relaxed">
                Connect directly with our showroom team for instant product availability, store video previews, and real-time gold and silver rates.
              </p>
            </div>
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25D366] text-white text-xs font-sans font-semibold tracking-wider uppercase hover:bg-[#1EBE5D] transition-colors mt-4"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-champagneGold/20 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rosePink/10 text-rosePink flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-deepCharcoal">
                Store Phone
              </h3>
              <p className="text-xs text-deepCharcoal/70 font-sans mt-2 leading-relaxed">
                Speak directly with our showroom manager during store hours for immediate assistance, directions, and product inquiries.
              </p>
            </div>
            <a
              href={`tel:${STORE_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-deepCharcoal text-warmIvory text-xs font-sans font-semibold tracking-wider uppercase hover:bg-rosePink transition-colors mt-4"
            >
              <span>Call: {STORE_INFO.phone}</span>
            </a>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-champagneGold/20 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-champagneGold/15 text-champagneGold-700 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-deepCharcoal">
                Email Enquiries
              </h3>
              <p className="text-xs text-deepCharcoal/70 font-sans mt-2 leading-relaxed">
                For custom commissions, corporate silver gifting portfolios, and bridal trousseau consultations.
              </p>
            </div>
            <a
              href={`mailto:${STORE_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-champagneGold/50 text-deepCharcoal text-xs font-sans font-semibold tracking-wider uppercase hover:bg-champagneGold hover:text-white transition-colors mt-4"
            >
              <span>{STORE_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Physical Showrooms & Detailed Form */}
        <div id="appointment" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Physical Store Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-sans tracking-widest text-rosePink font-semibold">
                Showroom Locations
              </span>
              <h2 className="text-3xl font-serif font-medium text-deepCharcoal">
                Our Jewellery Showrooms
              </h2>
            </div>

            {/* City Tabs */}
            <div className="flex p-1.5 rounded-2xl bg-white border border-champagneGold/30 max-w-sm shadow-sm">
              <button
                onClick={() => setSelectedLocation('hyderabad')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-sans font-semibold tracking-wider uppercase transition-all ${
                  selectedLocation === 'hyderabad'
                    ? 'bg-deepCharcoal text-warmIvory shadow-md'
                    : 'text-deepCharcoal/70'
                }`}
              >
                Hyderabad Flagship
              </button>
              <button
                onClick={() => setSelectedLocation('mumbai')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-sans font-semibold tracking-wider uppercase transition-all ${
                  selectedLocation === 'mumbai'
                    ? 'bg-deepCharcoal text-warmIvory shadow-md'
                    : 'text-deepCharcoal/70'
                }`}
              >
                Mumbai Showroom
              </button>
            </div>

            {/* Store Details Box */}
            <div className="p-8 rounded-3xl bg-white border border-champagneGold/30 shadow-sm space-y-6">
              {selectedLocation === 'hyderabad' ? (
                <>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-deepCharcoal">
                      {STORE_INFO.flagshipStore.name}
                    </h3>
                    <p className="text-xs text-rosePink uppercase tracking-wider font-sans mt-0.5 font-medium">
                      Flagship Jewellery Store &bull; Banjara Hills
                    </p>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm text-deepCharcoal/80 font-sans">
                    <p>
                      <strong>Address:</strong> {STORE_INFO.flagshipStore.address},{' '}
                      {STORE_INFO.flagshipStore.landmark}, {STORE_INFO.flagshipStore.city},{' '}
                      {STORE_INFO.flagshipStore.state} – {STORE_INFO.flagshipStore.pincode}
                    </p>
                    <p>
                      <strong>Store Hours:</strong> Mon to Sat: 10:30 AM – 8:00 PM IST (Sunday Open)
                    </p>
                    <p>
                      <strong>Counters:</strong> 22K Gold Jewellery, Temple Gold, Pure 92.5 Silverware, Bridal Shringar &amp; Zardozi Potlis.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-deepCharcoal">
                      {STORE_INFO.regionalStore.name}
                    </h3>
                    <p className="text-xs text-rosePink uppercase tracking-wider font-sans mt-0.5 font-medium">
                      Heritage Jewellery Showroom &bull; Kala Ghoda, Fort
                    </p>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm text-deepCharcoal/80 font-sans">
                    <p>
                      <strong>Address:</strong> {STORE_INFO.regionalStore.address},{' '}
                      {STORE_INFO.regionalStore.landmark}, {STORE_INFO.regionalStore.city},{' '}
                      {STORE_INFO.regionalStore.state} – {STORE_INFO.regionalStore.pincode}
                    </p>
                    <p>
                      <strong>Store Hours:</strong> Mon to Sat: 11:00 AM – 7:30 PM IST (Sunday Open)
                    </p>
                    <p>
                      <strong>Atmosphere:</strong> Heritage boutique showcasing antique gold and handcrafted bridal articles.
                    </p>
                  </div>
                </>
              )}

              {/* Map Placeholder Graphic */}
              <div className="relative aspect-[16/8] rounded-2xl overflow-hidden bg-warmIvory-200 border border-champagneGold/30 flex items-center justify-center text-center p-4">
                <div className="space-y-1">
                  <MapPin className="w-7 h-7 text-rosePink mx-auto animate-bounce" />
                  <span className="text-xs font-serif font-semibold text-deepCharcoal block">
                    {selectedLocation === 'hyderabad'
                      ? 'Banjara Hills Road No. 10'
                      : 'Kala Ghoda Art Precinct'}
                  </span>
                  <span className="text-[10px] text-deepCharcoal/60 font-sans block">
                    Directions &amp; Navigation Available via WhatsApp Store Concierge
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visit Planning Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-deepCharcoal text-warmIvory border border-champagneGold/30 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-champagneGold text-xs font-sans tracking-widest uppercase mb-3 border border-champagneGold/30">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Store Visit Request</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-warmIvory">
                    Plan Your Visit
                  </h3>
                  <p className="text-xs sm:text-sm text-warmIvory/70 mt-1 font-sans">
                    Let us know when you plan to visit our store so our jewellery and bridal stylists can prepare curated pieces for you.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-10 text-center space-y-4 bg-white/5 rounded-2xl p-6 border border-champagneGold/20">
                    <CheckCircle2 className="w-14 h-14 text-rosePink mx-auto" />
                    <h4 className="text-2xl font-serif font-semibold text-warmIvory">
                      Visit Scheduled
                    </h4>
                    <p className="text-xs sm:text-sm text-warmIvory/70 max-w-sm mx-auto">
                      Thank you, {name || 'Valued Patron'}. Our store team will contact you via WhatsApp to assist your visit.
                    </p>
                    <button
                      onClick={handleWhatsAppBooking}
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-full bg-[#25D366] text-white text-xs font-sans font-semibold tracking-wider uppercase mt-4"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm Now On WhatsApp</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-warmIvory/60 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Radhika Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-champagneGold/30 text-white placeholder-warmIvory/30 text-xs sm:text-sm focus:outline-none focus:border-rosePink"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-warmIvory/60 mb-1">
                        WhatsApp Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-champagneGold/30 text-white placeholder-warmIvory/30 text-xs sm:text-sm focus:outline-none focus:border-rosePink"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-sans uppercase tracking-wider text-warmIvory/60 mb-1">
                          Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-champagneGold/30 text-white text-xs sm:text-sm focus:outline-none focus:border-rosePink"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-sans uppercase tracking-wider text-warmIvory/60 mb-1">
                          Preferred Time *
                        </label>
                        <select
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-deepCharcoal border border-champagneGold/30 text-white text-xs sm:text-sm focus:outline-none focus:border-rosePink"
                        >
                          <option value="11:30 AM">11:30 AM (Morning)</option>
                          <option value="02:30 PM">02:30 PM (Afternoon)</option>
                          <option value="05:00 PM">05:00 PM (Evening)</option>
                          <option value="06:30 PM">06:30 PM (Twilight)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-warmIvory/60 mb-1">
                        Collection Focus *
                      </label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-deepCharcoal border border-champagneGold/30 text-white text-xs sm:text-sm focus:outline-none focus:border-rosePink"
                      >
                        <option value="Bridal Shringar & Gold Jewellery">Bridal Shringar &amp; 22K Gold Sets</option>
                        <option value="Royal Polki Chokers">Royal Polki Chokers &amp; Jadau</option>
                        <option value="Temple Nakashi Gold">Temple 22K Nakashi Gold Ornaments</option>
                        <option value="Pure Silver Pooja Articles">Pure 92.5 Sterling Silver Pooja Articles</option>
                        <option value="Luxury Bridal Potlis">Luxury Bridal Potlis &amp; Batwas</option>
                        <option value="Bespoke Gold Commission">Bespoke 22K Custom Commission</option>
                      </select>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="flex-1 py-3.5 px-6 rounded-full bg-rosePink hover:bg-rosePink-600 text-white font-sans text-xs font-semibold tracking-widest uppercase transition-all shadow-pinkGlow"
                      >
                        Submit Request
                      </button>
                      <button
                        type="button"
                        onClick={handleWhatsAppBooking}
                        className="py-3.5 px-5 rounded-full border border-champagneGold text-champagneGold hover:bg-white hover:text-deepCharcoal text-xs font-sans font-semibold tracking-wider uppercase transition-colors"
                      >
                        Book on WhatsApp
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto space-y-6 pt-12 border-t border-champagneGold/20">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-rosePink font-semibold">
              Patron Guidance
            </span>
            <h2 className="text-3xl font-serif font-medium text-deepCharcoal">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-champagneGold/20 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className="font-serif text-base font-semibold text-deepCharcoal group-hover:text-rosePink transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-champagneGold shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-rosePink' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-deepCharcoal/70 font-sans font-light leading-relaxed border-t border-champagneGold/10 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
