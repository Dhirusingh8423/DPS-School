import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import NoticeVideoSection from '../components/home/NoticeVideoSection';
import AboutSection from '../components/home/AboutSection';
import HighlightsSection from '../components/home/HighlightsSection';
import RecentGallerySection from '../components/home/RecentGallerySection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage({ onOpenAdmission }) {
  return (
    <div className="w-full">
      {/* 1. Hero Banner Slider */}
      <HeroSlider onOpenAdmission={onOpenAdmission} />

      {/* 2. Notice Board & Video Tour Section (matching reference site layout) */}
      <NoticeVideoSection onOpenAdmission={onOpenAdmission} />

      {/* 3. About School Section (matching reference site layout) */}
      <AboutSection />

      {/* 4. Academic Highlights / Why Choose Us */}
      <HighlightsSection />

      {/* 5. Our Recent Gallery Section (matching reference site layout) */}
      <RecentGallerySection />

      {/* 6. Subscribe Newsletter Section (matching reference site layout) */}
      <NewsletterSection />
    </div>
  );
}
