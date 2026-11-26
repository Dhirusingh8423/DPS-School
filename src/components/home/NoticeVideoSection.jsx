import React, { useState } from 'react';
import { Play, Calendar, Bell, ChevronRight, Sparkles } from 'lucide-react';
import { notices } from '../../data/schoolData';
import VideoModal from '../common/VideoModal';

export default function NoticeVideoSection({ onOpenAdmission }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-soft border-b border-slate-200">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* Left Column: Take a Video Tour */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-brand-navy uppercase tracking-wider border-l-4 border-brand-gold pl-3">
                TAKE A VIDEO TOUR
              </h3>
              <span className="text-[11px] sm:text-xs font-bold text-brand-royal uppercase tracking-wider">
                Virtual Experience
              </span>
            </div>

            <div className="relative flex-1 min-h-[260px] sm:min-h-[320px] md:min-h-[360px] rounded-lg overflow-hidden shadow-lg group">
              {/* Video Thumbnail Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80')` 
                }}
              />
              <div className="absolute inset-0 bg-brand-navy/50 group-hover:bg-brand-navy/40 transition-colors" />

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center text-white">
                <button
                  onClick={() => setVideoOpen(true)}
                  className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-brand-royal text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 hover:bg-brand-gold hover:text-brand-navy"
                  aria-label="Play Video Tour"
                >
                  <span className="absolute inset-0 rounded-full bg-brand-royal animate-ping opacity-30" />
                  <Play size={26} className="ml-1 fill-current" />
                </button>
                <h4 className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-wide">
                  Explore DPS International Academy
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-200 max-w-sm mt-1">
                  Discover our modern laboratories, sports complex, smart classrooms, and peaceful campus atmosphere.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Notice Board */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-brand-navy uppercase tracking-wider border-l-4 border-brand-gold pl-3">
                  NOTICE BOARD
                </h3>
                <Bell size={18} className="text-brand-gold animate-bounce" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Active Updates
              </span>
            </div>

            {/* Notice Board Container */}
            <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-4 sm:p-5 flex flex-col flex-1 min-h-[300px] md:min-h-[360px]">
              <div 
                className="flex-1 overflow-y-auto custom-scrollbar space-y-3 sm:space-y-4 pr-1 max-h-[290px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className="p-3 sm:p-3.5 bg-brand-soft/70 rounded-md border-l-4 border-brand-royal hover:bg-brand-soft hover:shadow-sm transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] sm:text-xs font-bold text-brand-royal mb-1">
                      <span className="flex items-center gap-1.5 text-slate-500 font-semibold">
                        <Calendar size={13} className="text-brand-gold shrink-0" />
                        Published Date : {notice.date}
                      </span>
                      <span className="bg-brand-royal/10 text-brand-royal text-[9px] sm:text-[10px] px-2 py-0.5 rounded uppercase font-bold">
                        {notice.category}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-brand-navy leading-snug">
                      {notice.title}
                    </h4>

                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1 line-clamp-2">
                      {notice.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom notice action */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                <button
                  onClick={onOpenAdmission}
                  className="font-bold text-brand-royal hover:text-brand-navy flex items-center gap-1 text-[11px] sm:text-xs"
                >
                  <Sparkles size={13} className="text-brand-gold shrink-0" />
                  <span>Online Admission Enquiry 2026-27</span>
                </button>
                <a
                  href="/news-events"
                  className="font-bold text-slate-600 hover:text-brand-royal flex items-center gap-0.5 text-[11px] sm:text-xs"
                >
                  <span>All Notices</span>
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Popup Modal */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
