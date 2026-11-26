import React, { useState } from 'react';
import BannerWrapper from '../components/common/BannerWrapper';
import { galleryCategories, galleryItems } from '../data/schoolData';
import { X, ZoomIn, Play, Calendar } from 'lucide-react';
import VideoModal from '../components/common/VideoModal';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full bg-white">
      <BannerWrapper
        title="Photo & Video Gallery"
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <div className="py-12 sm:py-16 md:py-24">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
              Campus Moments & Celebrations
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Explore vibrant glimpses of student learning, lab experiments, cultural festivities, and athletic championships at DPS International Academy.
            </p>
          </div>

          {/* Category Filter Pills with mobile horizontal scroll */}
          <div className="flex overflow-x-auto custom-scrollbar flex-nowrap sm:flex-wrap items-center sm:justify-center gap-2 mb-8 sm:mb-12 pb-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-brand-royal text-white shadow-md'
                    : 'bg-brand-soft text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 cursor-pointer"
                onClick={() => setLightboxImage(item)}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden bg-brand-navy">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                    <div className="w-10 h-10 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center shadow-lg">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-brand-royal text-white text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    {item.category}
                  </div>
                </div>

                <div className="p-3 bg-white">
                  <h4 className="text-xs font-bold text-brand-navy leading-snug line-clamp-1 group-hover:text-brand-royal transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1">
                    <Calendar size={11} className="text-brand-gold" />
                    <span>Session {item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Tour Feature Section in Gallery */}
          <div id="videos" className="mt-14 sm:mt-20 pt-10 sm:pt-16 border-t border-slate-200">
            <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
              <span className="text-[11px] sm:text-xs font-bold text-brand-royal uppercase tracking-widest block mb-1">
                FEATURED DOCUMENTARY
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-brand-navy uppercase tracking-wide">
                Watch Our Campus Video Tour
              </h3>
            </div>

            <div className="max-w-3xl mx-auto relative rounded-xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                alt="Video Tour Preview"
                className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/50 flex flex-col items-center justify-center p-4 sm:p-6 text-white text-center">
                <button
                  onClick={() => setVideoOpen(true)}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
                  aria-label="Play Video"
                >
                  <Play size={24} className="ml-1 fill-current" />
                </button>
                <h4 className="mt-3 sm:mt-4 text-base sm:text-lg font-black uppercase text-white">
                  DPS International Academy Virtual Walkthrough
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-200 mt-0.5 sm:mt-1">
                  Bhingari Bazar, Deoria, Uttar Pradesh
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-brand-navy rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 z-10 p-1.5 sm:p-2 bg-black/50 text-white rounded-full hover:bg-brand-royal transition-colors"
            >
              <X size={18} />
            </button>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="w-full max-h-[70vh] sm:max-h-[75vh] object-contain bg-black"
            />
            <div className="p-3 sm:p-4 bg-brand-navy text-white">
              <span className="text-[10px] sm:text-[11px] font-bold text-brand-gold uppercase tracking-wider block">
                {lightboxImage.category} • DPS International Academy
              </span>
              <h3 className="text-xs sm:text-sm md:text-base font-bold mt-0.5">
                {lightboxImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
