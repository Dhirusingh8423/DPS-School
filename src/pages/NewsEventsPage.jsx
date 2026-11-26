import React, { useState } from 'react';
import BannerWrapper from '../components/common/BannerWrapper';
import NoticeSidebar from '../components/common/NoticeSidebar';
import { notices, faqs } from '../data/schoolData';
import { Calendar, Bell, FileText, ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function NewsEventsPage({ onOpenAdmission }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const upcomingEvents = [
    {
      date: "15 June 2026",
      title: "School Reopens After Summer Recess",
      category: "Academic",
      time: "Summer Schedule: 7:30 AM",
      desc: "Regular classes resume for all wings from Nursery to Class XII. Students must report in full summer uniform."
    },
    {
      date: "04 July 2026",
      title: "Inter-House Debate & Elocution Championship",
      category: "Co-Curricular",
      time: "10:00 AM – 1:00 PM",
      desc: "Bilingual debate competition on 'Artificial Intelligence and Human Values' in the Audio-Visual auditorium."
    },
    {
      date: "25 July 2026",
      title: "Periodic Assessment 1 (Term I Test Series)",
      category: "Examinations",
      time: "8:00 AM – 10:30 AM",
      desc: "First cycle periodic tests evaluating foundational syllabus coverage across all subjects."
    },
    {
      date: "15 August 2026",
      title: "79th Independence Day Grand Celebration",
      category: "National Event",
      time: "8:00 AM – 11:30 AM",
      desc: "Ceremonial flag hoisting, NCC march past, patriotic choral recitals, and distribution of merit certificates."
    }
  ];

  return (
    <div className="w-full bg-white">
      <BannerWrapper
        title="News, Events & Announcements"
        breadcrumbs={[{ label: 'News & Events' }]}
      />

      <div className="py-12 sm:py-16 md:py-24">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left 8 Columns */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-12">
              
              {/* 1. Official Notice Board */}
              <div id="notices" className="space-y-4 sm:space-y-6">
                <div className="border-b-2 border-brand-gold pb-3 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      Official Notice Board
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      Published Circulars & Administrative Orders
                    </p>
                  </div>
                  <Bell className="text-brand-gold shrink-0" size={22} />
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {notices.map((notice) => (
                    <div
                      key={notice.id}
                      className="p-4 sm:p-5 bg-brand-soft rounded-lg border-l-4 border-brand-royal hover:shadow-md transition-all"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                          <Calendar size={13} className="text-brand-gold shrink-0" />
                          Published Date : {notice.date}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold bg-brand-royal text-white px-2 py-0.5 rounded uppercase">
                            {notice.category}
                          </span>
                          {notice.isNew && (
                            <span className="text-[10px] font-bold bg-red-600 text-white px-2 py-0.5 rounded uppercase">
                              Active
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-sm sm:text-base font-extrabold text-brand-navy mb-1.5 leading-snug">
                        {notice.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {notice.description}
                      </p>

                      <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-400 text-[11px]">DPS International Academy</span>
                        <button
                          onClick={onOpenAdmission}
                          className="text-brand-royal hover:text-brand-navy font-bold flex items-center gap-1 text-[11px] sm:text-xs"
                        >
                          <Sparkles size={12} className="text-brand-gold shrink-0" />
                          <span>Admission Query</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Upcoming Events Calendar */}
              <div id="events" className="space-y-4 sm:space-y-6 pt-4 sm:pt-6 border-t border-slate-200">
                <div className="border-b-2 border-brand-gold pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                    Upcoming Campus Events
                  </h2>
                  <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                    Academic Calendar & Co-Curricular Schedules
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {upcomingEvents.map((evt, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-brand-royal transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="font-black text-brand-royal">{evt.date}</span>
                          <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                            {evt.category}
                          </span>
                        </div>
                        <h4 className="font-extrabold text-xs sm:text-sm text-brand-navy leading-snug mb-1">
                          {evt.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 mb-2 font-medium">{evt.time}</p>
                        <p className="text-xs text-slate-600 leading-relaxed">{evt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Frequently Asked Questions */}
              <div id="faq" className="space-y-4 sm:space-y-6 pt-4 sm:pt-6 border-t border-slate-200">
                <div className="border-b-2 border-brand-gold pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                    Frequently Asked Questions (FAQ)
                  </h2>
                  <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                    Common Inquiries Regarding Admission & Campus Life
                  </p>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div
                        key={index}
                        className="border border-slate-200 rounded-lg overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full p-3.5 sm:p-4 text-left bg-brand-soft/60 hover:bg-brand-soft flex items-center justify-between font-bold text-xs sm:text-sm text-brand-navy transition-colors gap-2"
                        >
                          <span className="flex items-center gap-2">
                            <HelpCircle size={15} className="text-brand-royal shrink-0" />
                            <span>{faq.q}</span>
                          </span>
                          <ChevronDown
                            size={16}
                            className={`transform transition-transform text-slate-500 shrink-0 ${isOpen ? 'rotate-180 text-brand-royal' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="p-3.5 sm:p-4 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
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
