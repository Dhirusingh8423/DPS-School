import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MonitorPlay, 
  FlaskConical, 
  Trophy, 
  Bus, 
  BookOpen, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { academicHighlights } from '../../data/schoolData';

const iconMap = {
  MonitorPlay: MonitorPlay,
  FlaskConical: FlaskConical,
  Trophy: Trophy,
  Bus: Bus,
  BookOpen: BookOpen,
  ShieldCheck: ShieldCheck
};

export default function HighlightsSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-brand-soft border-b border-slate-200">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose Our School"
          subtitle="Discover the premier academic and infrastructural advantages that set DPS International Academy apart."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {academicHighlights.map((highlight) => {
            const Icon = iconMap[highlight.icon] || BookOpen;

            return (
              <div
                key={highlight.id}
                className="bg-white rounded-lg p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-brand-soft text-brand-royal flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-brand-royal group-hover:text-white transition-colors duration-300">
                    <Icon size={24} className="sm:hidden" />
                    <Icon size={28} className="hidden sm:block" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">
                    {highlight.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-slate-100">
                  <Link
                    to="/facilities"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-royal group-hover:text-brand-navy tracking-wide uppercase"
                  >
                    <span>Explore Facility</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
