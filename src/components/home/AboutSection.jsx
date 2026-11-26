import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, BookOpen, Users, Compass } from 'lucide-react';
import { schoolInfo } from '../../data/schoolData';

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Content Column (col-md-6 style) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-brand-gold"></span>
              <span className="text-xs sm:text-sm font-bold text-brand-royal uppercase tracking-widest">
                WELCOME TO OUR INSTITUTION
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-brand-navy uppercase tracking-tight leading-tight">
              DPS <span className="text-brand-royal">International</span> <span className="text-brand-gold">Academy</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
              DPS International Academy approaches education in all its relevance. It constantly encourages students to question every answer so that they can think, express, and act independently for life. It thus makes learning a dynamic process that facilitates individual talent for wholesome growth and moral integrity.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              Situated in Bhingari Bazar, Deoria, our academy blends academic rigor with compassionate mentorship. Under the guidance of experienced educational visionaries, we foster scientific curiosity, linguistic fluency, leadership qualities, and cultural rootedness.
            </p>

            {/* Core Values Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" />
                <span>Inquiry-Based Modern Pedagogy</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" />
                <span>Value-Driven Character Formation</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" />
                <span>Certified Science & Robotics Labs</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" />
                <span>Safe Campus & GPS Bus Transport</span>
              </div>
            </div>

            {/* Reference default-btn Know More.... */}
            <div className="pt-2 sm:pt-4">
              <Link to="/about" className="default-btn !py-2.5 sm:!py-3 !px-6 sm:!px-8 text-xs sm:text-sm">
                Know More....
              </Link>
            </div>
          </div>

          {/* Image Column (col-md-6 style) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative border */}
              <div className="absolute -top-3 -left-3 w-full h-full border-4 border-brand-gold rounded-lg -z-0 hidden sm:block" />
              
              {/* Main Image */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl bg-brand-navy">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                  alt="DPS International Academy Academic Environment"
                  className="w-full h-[320px] sm:h-[400px] md:h-[460px] object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-navy via-brand-navy/85 to-transparent p-4 sm:p-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy font-black text-xl shrink-0">
                      <Award size={22} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base uppercase text-white leading-tight">
                        Excellence in Education
                      </h4>
                      <p className="text-[10px] sm:text-xs text-brand-gold font-semibold uppercase tracking-wider mt-0.5">
                        Bhingari Bazar, Deoria (U.P.)
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
