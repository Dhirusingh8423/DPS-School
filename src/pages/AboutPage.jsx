import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BannerWrapper from '../components/common/BannerWrapper';
import NoticeSidebar from '../components/common/NoticeSidebar';
import { 
  Target, 
  Compass, 
  Award, 
  BookOpen, 
  Users, 
  HeartHandshake, 
  CheckCircle,
  Quote
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function AboutPage({ onOpenAdmission }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('about-school');

  useEffect(() => {
    if (location.pathname.includes('mission-vision')) {
      setActiveTab('mission-vision');
    } else if (location.pathname.includes('our-motto')) {
      setActiveTab('our-motto');
    } else if (location.pathname.includes('principals-desk')) {
      setActiveTab('principals-desk');
    } else if (location.pathname.includes('chairmans-message')) {
      setActiveTab('chairmans-message');
    } else if (location.pathname.includes('faculty-staff')) {
      setActiveTab('faculty-staff');
    } else {
      setActiveTab('about-school');
    }
  }, [location.pathname]);

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <BannerWrapper 
        title="About Our School" 
        breadcrumbs={[{ label: 'About Us' }]} 
      />

      {/* Main Content Area matching reference two-column structure (col-md-8 and col-md-4) */}
      <div className="py-12 sm:py-16 md:py-24">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Navigation Tabs with mobile horizontal scroll */}
          <div className="flex overflow-x-auto custom-scrollbar flex-nowrap sm:flex-wrap gap-2 mb-8 sm:mb-10 pb-3 sm:pb-4 border-b border-slate-200">
            {[
              { id: 'about-school', label: 'History & Overview' },
              { id: 'mission-vision', label: 'Mission & Vision' },
              { id: 'our-motto', label: 'Our Motto' },
              { id: 'principals-desk', label: "Principal's Desk" },
              { id: 'chairmans-message', label: "Chairman's Message" },
              { id: 'faculty-staff', label: 'Faculty & Staff' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-all whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-brand-royal text-white shadow-md'
                    : 'bg-brand-soft text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left 8 Columns (col-md-8 style) */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              
              {/* TAB 1: History & Overview */}
              {activeTab === 'about-school' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      History of the School
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      DPS International Academy • Bhingari Bazar, Deoria
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                    Welcome to <strong>DPS International Academy</strong>. Our core belief is that education is not merely the accumulation of facts and bookish formulas, but the active reflection of wisdom and moral values in our daily lives. We ensure to impart in each student mastery of communication, multicultural empathy, collaborative thinking, and the courage to think logically and independently.
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                    Established to cater to the educational aspirations of families in Bhingari Bazar, Bhatpar Rani, and the wider Deoria district of Uttar Pradesh, DPS International Academy was conceived as an institution that blends traditional Indian discipline with forward-looking 21st-century pedagogy.
                  </p>

                  <div className="my-4 sm:my-6 rounded-lg overflow-hidden shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80"
                      alt="DPS International Academy Campus Grounds"
                      className="w-full h-56 sm:h-72 object-cover"
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy uppercase">
                    Educational Philosophy & Core Objectives
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We are committed to training our scholars for an increasingly globalized and competitive world. We cultivate real-life experiential inquiry over rote memorization, encouraging students to experiment in modern laboratories, express thoughts in elocution contests, and embody sportsmanship on the athletic field.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                    <div className="p-4 bg-brand-soft rounded-lg border-l-4 border-brand-royal">
                      <h4 className="font-bold text-xs sm:text-sm text-brand-navy uppercase">Wholesome Growth</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Developing physical endurance, emotional balance, intellectual sharpness, and ethical clarity.
                      </p>
                    </div>
                    <div className="p-4 bg-brand-soft rounded-lg border-l-4 border-brand-gold">
                      <h4 className="font-bold text-xs sm:text-sm text-brand-navy uppercase">Global Competence</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Preparing students to excel in CBSE board assessments and premier national entrance competitions.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Mission & Vision */}
              {activeTab === 'mission-vision' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      Our Vision & Mission
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      Guiding Principles of DPS International Academy
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 bg-gradient-to-r from-brand-navy to-brand-royal text-white rounded-lg shadow-md space-y-3">
                    <div className="flex items-center gap-2 text-brand-gold">
                      <Compass size={22} className="shrink-0" />
                      <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider">Our Vision</h3>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-100">
                      "To be a premier center of foundational and secondary education where young minds are nurtured into enlightened, responsible, innovative, and compassionate global citizens who contribute positively to nation building."
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 bg-white border border-slate-200 rounded-lg shadow-sm space-y-4">
                    <div className="flex items-center gap-2 text-brand-royal">
                      <Target size={22} className="shrink-0" />
                      <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-brand-navy">Our Mission</h3>
                    </div>
                    
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                        <span>To provide inclusive, high-standard CBSE-aligned education accessible to every student with state-of-the-art infrastructure.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                        <span>To encourage scientific temperament, critical reasoning, and bilingual fluency through interactive classroom experiences.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                        <span>To uphold Indian cultural heritage and civic duties alongside progressive contemporary competencies in technology and sports.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                        <span>To ensure a secure, respectful, and nurturing campus environment free of fear, prejudice, or discrimination.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 3: Our Motto */}
              {activeTab === 'our-motto' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      Our Motto
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      ENVISAGE, ENLIGHTEN, EMPOWER
                    </p>
                  </div>

                  <div className="text-center p-6 sm:p-8 bg-brand-soft rounded-lg border border-slate-200">
                    <img
                      src="./logo-icon.svg"
                      alt="DPS Emblem"
                      className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4"
                    />
                    <h3 className="text-lg sm:text-2xl font-black text-brand-navy tracking-widest uppercase">
                      ENVISAGE • ENLIGHTEN • EMPOWER
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2 sm:mt-3 leading-relaxed">
                      {schoolInfo.mottoDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-2">
                    <div className="p-4 sm:p-5 bg-white border-t-4 border-brand-navy rounded-lg shadow-sm">
                      <h4 className="font-extrabold text-sm sm:text-base text-brand-navy uppercase mb-1.5 sm:mb-2">1. ENVISAGE</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        To dream boldly and envision a future filled with knowledge, ethical leadership, and groundbreaking accomplishments.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-white border-t-4 border-brand-royal rounded-lg shadow-sm">
                      <h4 className="font-extrabold text-sm sm:text-base text-brand-royal uppercase mb-1.5 sm:mb-2">2. ENLIGHTEN</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        To illuminate the mind through scientific truth, arts, literature, and deep understanding of human values.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-white border-t-4 border-brand-gold rounded-lg shadow-sm">
                      <h4 className="font-extrabold text-sm sm:text-base text-brand-gold uppercase mb-1.5 sm:mb-2">3. EMPOWER</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        To equip students with practical life skills, resilience, and digital capabilities to face all real-world challenges.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: Principal's Desk */}
              {activeTab === 'principals-desk' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      From The Principal's Desk
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      Message to Students, Parents & Educators
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-5 max-w-sm mx-auto md:max-w-none">
                      <div className="rounded-lg overflow-hidden shadow-lg border-2 border-brand-gold">
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                          alt="Principal, DPS International Academy"
                          className="w-full h-64 sm:h-80 object-cover"
                        />
                        <div className="p-3 bg-brand-navy text-white text-center">
                          <h4 className="font-bold text-xs sm:text-sm">Principal & Academic Director</h4>
                          <p className="text-[10px] sm:text-[11px] text-brand-gold">DPS International Academy, Deoria</p>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-7 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-2 text-brand-gold">
                        <Quote size={24} className="rotate-180 shrink-0" />
                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-royal">Nurturing Leaders of Tomorrow</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-medium">
                        "Dear Parents, Guardians, and Beloved Students, welcome to DPS International Academy. It is our firm conviction that every child carries an innate spark of genius awaiting the right environment to flourish."
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        In an era dominated by rapid technological evolution, our responsibility as educators extends far beyond syllabus completion. We instill resilience, empathy, independent reasoning, and digital literacy. Our teachers mentor each student individually, ensuring no child feels left behind.
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        We welcome parents to partner with us in this uplifting journey of holistic education at Bhingari Bazar, Deoria.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: Chairman's Message */}
              {activeTab === 'chairmans-message' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      Chairman's Message
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      Leadership Vision & Institutional Commitment
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 bg-brand-soft rounded-lg border border-slate-200 space-y-3 sm:space-y-4">
                    <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                      "Education is the single most transformative instrument for social upliftment. When we laid the cornerstone of DPS International Academy at Bhingari Bazar, our mission was crystal clear: to deliver world-class schooling to the youth of Deoria so they never need to relocate to distant metropolises for quality education."
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Today, with smart interactive classrooms, high-speed computer labs, certified science spaces, and a secure transport network, we are proud to see our scholars outperforming regional and state benchmarks. We reaffirm our commitment to continuous institutional enhancement.
                    </p>

                    <div className="pt-3 border-t border-slate-200">
                      <h4 className="font-bold text-xs sm:text-sm text-brand-navy">Managing Committee & Board of Trustees</h4>
                      <p className="text-xs text-brand-royal font-semibold">DPS International Academy, Bhingari Bazar, Deoria</p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 6: Faculty & Staff */}
              {activeTab === 'faculty-staff' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      Our Faculty & Academic Staff
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      Dedicated Mentors, Certified Subject Specialists
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    At DPS International Academy, our teachers are the heartbeat of the institution. Recruited through rigorous screening and subject assessments, our faculty members hold Post-Graduate and B.Ed qualifications in their respective disciplines, alongside regular CBSE capacity-building training.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-2">
                    {[
                      { role: 'Pre-Primary Wing', desc: 'Montessori-trained educators specializing in foundational literacy, numeracy, and fine-motor development.' },
                      { role: 'Primary Department', desc: 'Activity-based learning specialists fostering conceptual clarity in Language, Mathematics, and EVS.' },
                      { role: 'Middle Department', desc: 'Subject experts introducing analytical Science, Social Studies, and Computer Coding.' },
                      { role: 'Secondary Department', desc: 'Experienced teachers guiding students through CBSE board examination syllabi and mock test series.' },
                      { role: 'Sports & PE Dept.', desc: 'Certified trainers for athletics, football, cricket, yoga, and self-defense drills.' },
                      { role: 'Co-Curricular Faculty', desc: 'Mentors for Vocal Music, Instrumental, Classical Dance, Fine Arts, and Theatre.' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-3.5 sm:p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-brand-royal transition-all">
                        <Users size={18} className="text-brand-royal mb-1.5" />
                        <h4 className="font-bold text-xs text-brand-navy uppercase">{item.role}</h4>
                        <p className="text-[11px] text-slate-600 mt-1 leading-normal">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right 4 Columns: Notice Board Sidebar (col-md-4 style from reference) */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <NoticeSidebar onOpenAdmission={onOpenAdmission} />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
