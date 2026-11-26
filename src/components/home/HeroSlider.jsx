import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { heroSlides } from '../../data/schoolData';

export default function HeroSlider({ onOpenAdmission }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative w-full h-[480px] sm:h-[540px] md:h-[620px] lg:h-[660px] overflow-hidden bg-brand-navy">
      {/* Slides */}
      {heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Zoom Animation */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />

            {/* Dark & Brand Overlay for Contrast and Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-transparent sm:to-brand-royal/40" />
            <div className="absolute inset-0 bg-black/25" />

            {/* Content Container */}
            <div className="relative w-full max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center">
              <div className="max-w-2xl text-white space-y-3 sm:space-y-4 md:space-y-6 pt-6 sm:pt-0">
                
                {/* Tag replicating reference h3 style */}
                <div className="inline-flex items-center gap-2">
                  <span className="h-[2px] w-6 sm:w-8 bg-brand-gold"></span>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-brand-gold uppercase">
                    {slide.tag}
                  </h3>
                </div>

                {/* Main Heading replicating reference h2 style */}
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight drop-shadow-md">
                  {slide.title}
                </h2>

                {/* Supporting description */}
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 leading-relaxed font-normal drop-shadow max-w-xl">
                  {slide.subtitle}
                </p>

                {/* Call to action buttons */}
                <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-2.5 sm:gap-4">
                  <Link
                    to={slide.ctaLink}
                    className="default-btn !py-2.5 sm:!py-3 !px-5 sm:!px-7 text-xs sm:text-sm shadow-md"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight size={15} />
                  </Link>

                  <button
                    onClick={onOpenAdmission}
                    className="default-btn default-btn-gold !py-2.5 sm:!py-3 !px-5 sm:!px-7 text-xs sm:text-sm shadow-md"
                  >
                    <Sparkles size={15} />
                    <span>ENROL NOW</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Prev / Next Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-brand-navy/70 hover:bg-brand-royal text-white flex items-center justify-center transition-all backdrop-blur-sm border border-white/20"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={20} className="sm:hidden" />
        <ChevronLeft size={24} className="hidden sm:block" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-brand-navy/70 hover:bg-brand-royal text-white flex items-center justify-center transition-all backdrop-blur-sm border border-white/20"
        aria-label="Next Slide"
      >
        <ChevronRight size={20} className="sm:hidden" />
        <ChevronRight size={24} className="hidden sm:block" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-brand-gold' : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
