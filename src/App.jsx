import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AdmissionModal from './components/common/AdmissionModal';
import MobileBottomBar from './components/common/MobileBottomBar';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ActivitiesPage from './pages/ActivitiesPage';
import GalleryPage from './pages/GalleryPage';
import NewsEventsPage from './pages/NewsEventsPage';
import ContactPage from './pages/ContactPage';
import MandatoryDisclosurePage from './pages/MandatoryDisclosurePage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-brand-charcoal pb-16 xl:pb-0 overflow-x-hidden">
        {/* Header with TopBar & Sticky Navbar (Strictly NO login) */}
        <Header onOpenAdmission={() => setAdmissionModalOpen(true)} />

        {/* Main Content Router */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
            
            {/* About routes */}
            <Route path="/about" element={<AboutPage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
            <Route path="/about/*" element={<AboutPage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
            
            {/* Academics routes */}
            <Route path="/academics" element={<AcademicsPage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
            <Route path="/academics/*" element={<AcademicsPage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
            
            {/* Facilities routes */}
            <Route path="/facilities" element={<FacilitiesPage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
            <Route path="/facilities/*" element={<FacilitiesPage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
            
            {/* Activities routes */}
            <Route path="/activities" element={<ActivitiesPage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
            <Route path="/activities/*" element={<ActivitiesPage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
            
            {/* Gallery routes */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/*" element={<GalleryPage />} />
            <Route path="/video" element={<GalleryPage />} />
            
            {/* News & Events routes */}
            <Route path="/news-events" element={<NewsEventsPage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
            <Route path="/news-events/*" element={<NewsEventsPage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
            
            {/* Contact route */}
            <Route path="/contact" element={<ContactPage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
            
            {/* Mandatory Public Disclosure (matches reference /cbse) */}
            <Route path="/mandatory-disclosure" element={<MandatoryDisclosurePage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
            <Route path="/cbse" element={<MandatoryDisclosurePage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />

            {/* Fallback */}
            <Route path="*" element={<HomePage onOpenAdmission={() => setAdmissionModalOpen(true)} />} />
          </Routes>
        </main>

        {/* Recreated 4-Column Footer (Strictly NO login) */}
        <Footer />

        {/* Mobile Quick Action Sticky Bar (Visible only on mobile/tablets) */}
        <MobileBottomBar onOpenAdmission={() => setAdmissionModalOpen(true)} />

        {/* Recreated #autoPopup Admission Enquiry Modal */}
        <AdmissionModal
          isOpen={admissionModalOpen}
          onClose={() => setAdmissionModalOpen(false)}
        />
      </div>
    </HashRouter>
  );
}
