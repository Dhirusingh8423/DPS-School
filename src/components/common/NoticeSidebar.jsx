import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Calendar, ChevronRight, FileText, Sparkles } from 'lucide-react';
import { notices } from '../../data/schoolData';

export default function NoticeSidebar({ onOpenAdmission }) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden sticky top-24 w-full max-w-full">
      {/* Sidebar Header replicating reference */}
      <div className="bg-brand-navy p-4 text-white flex items-center justify-between border-b-2 border-brand-gold">
        <div className="flex items-center gap-2">
          <Bell className="text-brand-gold animate-bounce" size={18} />
          <h3 className="text-base font-bold uppercase tracking-wider">NOTICE BOARD</h3>
        </div>
        <span className="text-[10px] bg-brand-gold text-brand-navy font-bold px-2 py-0.5 rounded uppercase">
          LIVE
        </span>
      </div>

      {/* Scrolling Notices Area */}
      <div
        className="p-4 h-[380px] overflow-y-auto custom-scrollbar relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="p-3 bg-brand-soft rounded border border-slate-100 hover:border-brand-royal/40 transition-all group"
            >
              <div className="flex items-center justify-between text-[11px] font-semibold text-brand-royal mb-1">
                <span className="flex items-center gap-1 text-slate-500">
                  <Calendar size={12} className="text-brand-gold" />
                  {notice.date}
                </span>
                {notice.isNew && (
                  <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider">
                    NEW
                  </span>
                )}
              </div>
              <h4 className="text-xs font-bold text-brand-navy group-hover:text-brand-royal transition-colors leading-snug">
                {notice.title}
              </h4>
              <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">
                {notice.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Footer with CTA */}
      <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-col gap-2">
        <button
          onClick={onOpenAdmission}
          className="w-full default-btn !py-2 !text-xs !bg-brand-royal hover:!bg-brand-navy justify-center"
        >
          <Sparkles size={13} className="text-brand-gold" />
          <span>Apply For Admission</span>
        </button>
        <Link
          to="/news-events"
          className="flex items-center justify-center gap-1 text-xs font-bold text-brand-royal hover:text-brand-navy text-center py-1"
        >
          <span>View All Notices & Circulars</span>
          <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}
