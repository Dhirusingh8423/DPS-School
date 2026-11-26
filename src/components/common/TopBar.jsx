import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, HelpCircle, Mail, FileText, Sparkles } from 'lucide-react';
import { schoolInfo } from '../../data/schoolData';

export default function TopBar({ onOpenAdmission }) {
  return (
    <div className="bg-brand-navy text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-6 border-b border-brand-royal/30">
      <div className="w-full max-w-[1360px] mx-auto">
        
        {/* Desktop View (md and up) */}
        <div className="hidden md:flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="tel:+919450821450"
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors font-medium tracking-wide whitespace-nowrap"
            >
              <Phone size={12} className="text-brand-gold shrink-0" />
              <span>HAVE ANY QUESTION ? +91 94508 21450, 7068286407</span>
            </a>

            <span className="text-slate-500">|||</span>

            <div className="flex items-center gap-3">
              <Link
                to="/news-events#faq"
                className="flex items-center gap-1 hover:text-brand-gold transition-colors font-medium whitespace-nowrap"
              >
                <HelpCircle size={11} className="text-brand-gold shrink-0" />
                <span>FAQ</span>
              </Link>
              <span className="text-slate-500">|</span>
              <Link
                to="/contact"
                className="flex items-center gap-1 hover:text-brand-gold transition-colors font-medium whitespace-nowrap"
              >
                <Mail size={11} className="text-brand-gold shrink-0" />
                <span>Contact</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdmission}
              className="inline-flex items-center gap-1 bg-brand-gold text-brand-navy font-bold px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider hover:bg-white transition-all shadow-sm whitespace-nowrap"
            >
              <Sparkles size={11} className="shrink-0" />
              <span>Admission Enquiry</span>
            </button>
            <span className="text-slate-500">|</span>
            <Link
              to="/mandatory-disclosure"
              className="flex items-center gap-1 uppercase tracking-wider text-[11px] font-semibold text-slate-200 hover:text-brand-gold transition-colors whitespace-nowrap"
            >
              <FileText size={11} className="text-brand-gold shrink-0" />
              <span>MANDATORY PUBLIC DISCLOSURE</span>
            </Link>
          </div>
        </div>

        {/* Mobile View (< md: Clean single-row strip, no wrapping clutter) */}
        <div className="flex md:hidden items-center justify-between text-[10.5px]">
          <a
            href="tel:+919450821450"
            className="flex items-center gap-1 text-slate-200 hover:text-brand-gold font-bold tracking-tight truncate mr-2"
          >
            <Phone size={11} className="text-brand-gold shrink-0" />
            <span>Call: +91 94508 21450</span>
          </a>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/mandatory-disclosure"
              className="text-slate-300 hover:text-brand-gold font-medium text-[10px] uppercase"
            >
              CBSE Info
            </Link>
            <span className="text-slate-600">•</span>
            <button
              onClick={onOpenAdmission}
              className="text-brand-gold hover:text-white font-extrabold uppercase text-[10px]"
            >
              Apply 2026
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
