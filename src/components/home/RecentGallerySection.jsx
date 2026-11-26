import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, Calendar, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { recentGalleryCards } from '../../data/schoolData';

export default function RecentGallerySection() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-white text-center border-b border-slate-200">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Recreating reference section title */}
        <SectionTitle
          title="Our Recent Gallery"
          subtitle="Glimpses into student innovations, modern laboratory installations, and academic honours."
        />

        {/* 3 Cards Grid Replicating reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {recentGalleryCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col group"
            >
              {/* Event Image Container replicating .event-img */}
              <div className="relative overflow-hidden h-[200px] sm:h-[240px] md:h-[250px] bg-brand-navy">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Course Hover Link Overlay replicating .course-hover */}
                <Link
                  to="/gallery"
                  className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white"
                  aria-label={`View ${card.title}`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <LinkIcon size={18} />
                  </div>
                </Link>

                {/* Event Date Badge replicating reference .event-date */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-brand-royal text-white text-[10px] sm:text-xs font-black uppercase px-2.5 sm:px-3 py-1 rounded shadow-md tracking-wider border-b-2 border-brand-gold">
                  <span>{card.tag}</span>
                </div>
              </div>

              {/* Event Content replicating .event-content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Calendar size={12} className="text-brand-gold shrink-0" />
                    <span>{card.date} • {card.category}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-extrabold text-brand-navy group-hover:text-brand-royal transition-colors leading-snug line-clamp-2">
                    <Link to="/gallery">
                      {card.title}
                    </Link>
                  </h4>

                  <p className="text-xs text-slate-600 mt-1.5 sm:mt-2 leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                </div>

                {/* Replicating reference .event-content-right .default-btn More... */}
                <div className="pt-2">
                  <Link
                    to="/gallery"
                    className="default-btn !py-1.5 sm:!py-2 !px-4 sm:!px-5 !text-xs !bg-brand-royal hover:!bg-brand-navy"
                  >
                    <span>More...</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/gallery"
            className="default-btn default-btn-gold !py-2.5 sm:!py-3 !px-6 sm:!px-8 text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <span>VIEW ALL GALLERY PHOTOS</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
