import React from 'react';
import BannerWrapper from '../components/common/BannerWrapper';
import NoticeSidebar from '../components/common/NoticeSidebar';
import { activitiesList } from '../data/schoolData';
import { Trophy, Calendar, Sparkles, ArrowRight } from 'lucide-react';

export default function ActivitiesPage({ onOpenAdmission }) {
  return (
    <div className="w-full bg-white">
      <BannerWrapper
        title="Student Activities & Co-Curriculars"
        breadcrumbs={[{ label: 'Activities' }]}
      />

      <div className="py-12 sm:py-16 md:py-24">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-bold text-brand-gold uppercase tracking-widest block mb-1.5">
              NURTURING WELL-ROUNDED PERSONALITIES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight">
              Life Beyond Textbooks at DPS Academy
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              We provide a multitude of platforms for our scholars to discover passions, build camaraderie, lead initiatives, and celebrate cultural richness throughout the academic calendar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left 8 Columns: Activities Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {activitiesList.map((activity) => (
                  <div
                    key={activity.id}
                    id={activity.id}
                    className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative h-44 sm:h-48 overflow-hidden bg-brand-navy">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 bg-brand-royal text-white text-[9.5px] sm:text-[10px] font-extrabold uppercase px-2 sm:px-2.5 py-0.5 rounded shadow">
                        {activity.category}
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm sm:text-base font-extrabold text-brand-navy group-hover:text-brand-royal transition-colors uppercase leading-snug mb-1.5 sm:mb-2">
                          {activity.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {activity.summary}
                        </p>
                      </div>

                      <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-[10.5px] sm:text-[11px] font-bold text-brand-royal">
                        <span>DPS International Academy</span>
                        <span className="text-brand-gold flex items-center gap-1">
                          <Trophy size={13} /> Active
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 4 Columns: Notice Sidebar */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <NoticeSidebar onOpenAdmission={onOpenAdmission} />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
