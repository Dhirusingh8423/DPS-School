import React, { useState } from 'react';
import BannerWrapper from '../components/common/BannerWrapper';
import NoticeSidebar from '../components/common/NoticeSidebar';
import { facilitiesList } from '../data/schoolData';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function FacilitiesPage({ onOpenAdmission }) {
  return (
    <div className="w-full bg-white">
      <BannerWrapper
        title="Facilities & Infrastructure"
        breadcrumbs={[{ label: 'Facilities' }]}
      />

      <div className="py-12 sm:py-16 md:py-24">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-bold text-brand-gold uppercase tracking-widest block mb-1.5">
              WORLD-CLASS CAMPUS ENVIRONMENT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight">
              Infrastructure Built for Innovation & Safety
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              At DPS International Academy, Bhingari Bazar, Deoria, our campus is designed to stimulate intellectual curiosity, physical agility, and emotional well-being through modern architectural planning and safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left 8 Columns: Facilities Cards */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              {facilitiesList.map((facility, index) => (
                <div
                  key={facility.id}
                  id={facility.id}
                  className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    
                    {/* Facility Image */}
                    <div className="md:col-span-5 relative min-h-[200px] sm:min-h-[220px] md:min-h-full">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-brand-navy/90 text-brand-gold text-[10px] sm:text-[11px] font-extrabold uppercase px-2.5 py-1 rounded shadow">
                        Facility 0{index + 1}
                      </div>
                    </div>

                    {/* Facility Content */}
                    <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-brand-navy uppercase tracking-wide mb-2">
                          {facility.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                          {facility.shortDesc}
                        </p>

                        <div className="space-y-2">
                          {facility.details.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 size={14} className="text-brand-royal shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] sm:text-[11px] font-bold text-brand-gold uppercase tracking-wider">
                          DPS Bhingari Bazar
                        </span>
                        <button
                          onClick={onOpenAdmission}
                          className="text-xs font-bold text-brand-royal hover:text-brand-navy uppercase tracking-wider inline-flex items-center gap-1"
                        >
                          <span>Campus Enquiry</span>
                          <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
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
