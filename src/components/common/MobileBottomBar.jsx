import React from 'react';
import { Phone, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { schoolInfo } from '../../data/schoolData';

export default function MobileBottomBar({ onOpenAdmission }) {
  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl py-2 px-3">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto text-center">
        
        {/* 1. Direct Call */}
        <a
          href="tel:+919450821450"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-lg hover:bg-slate-50 active:bg-slate-100 transition-colors text-brand-navy"
        >
          <div className="w-8 h-8 rounded-full bg-brand-soft text-brand-royal flex items-center justify-center mb-0.5">
            <Phone size={15} />
          </div>
          <span className="text-[10px] font-bold tracking-tight">Call Desk</span>
        </a>

        {/* 2. WhatsApp / Query */}
        <a
          href="https://wa.me/919450821450?text=Hello%20DPS%20International%20Academy%2C%20I%20have%20an%20admission%20query."
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-lg hover:bg-slate-50 active:bg-slate-100 transition-colors text-green-700"
        >
          <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-0.5">
            <MessageCircle size={15} />
          </div>
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* 3. Location / Campus Map */}
        <a
          href="/contact#map"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-lg hover:bg-slate-50 active:bg-slate-100 transition-colors text-brand-navy"
        >
          <div className="w-8 h-8 rounded-full bg-brand-soft text-brand-navy flex items-center justify-center mb-0.5">
            <MapPin size={15} />
          </div>
          <span className="text-[10px] font-bold tracking-tight">Campus</span>
        </a>

        {/* 4. Admission Action */}
        <button
          onClick={onOpenAdmission}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-lg bg-gradient-to-r from-brand-royal to-brand-navy text-white shadow-md active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 text-brand-gold flex items-center justify-center mb-0.5">
            <Sparkles size={15} />
          </div>
          <span className="text-[10px] font-extrabold tracking-tight">Apply 2026</span>
        </button>

      </div>
    </div>
  );
}
