import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import BannerWrapper from '../components/common/BannerWrapper';
import NoticeSidebar from '../components/common/NoticeSidebar';
import { 
  BookOpen, 
  Clock, 
  GraduationCap, 
  FileText, 
  Calendar, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function AcademicsPage({ onOpenAdmission }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('curriculum');

  useEffect(() => {
    if (location.pathname.includes('curriculum')) {
      setActiveTab('curriculum');
    } else if (location.pathname.includes('methodology')) {
      setActiveTab('methodology');
    } else if (location.pathname.includes('school-timing')) {
      setActiveTab('school-timing');
    } else if (location.pathname.includes('school-uniform')) {
      setActiveTab('school-uniform');
    } else if (location.pathname.includes('exam-schedule')) {
      setActiveTab('exam-schedule');
    } else if (location.pathname.includes('admission-procedure')) {
      setActiveTab('admission-procedure');
    } else if (location.pathname.includes('fee-structure')) {
      setActiveTab('fee-structure');
    } else if (location.pathname.includes('general-rules')) {
      setActiveTab('general-rules');
    } else {
      setActiveTab('curriculum');
    }
  }, [location.pathname]);

  return (
    <div className="w-full bg-white">
      <BannerWrapper
        title="Academic Excellence"
        breadcrumbs={[{ label: 'Academics' }]}
      />

      <div className="py-12 sm:py-16 md:py-24">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navigation Tabs with mobile horizontal scroll */}
          <div className="flex overflow-x-auto custom-scrollbar flex-nowrap sm:flex-wrap gap-2 mb-8 sm:mb-10 pb-3 sm:pb-4 border-b border-slate-200">
            {[
              { id: 'curriculum', label: 'Curriculum' },
              { id: 'methodology', label: 'Teaching Methodology' },
              { id: 'admission-procedure', label: 'Admission Guidelines' },
              { id: 'school-timing', label: 'School Timings' },
              { id: 'school-uniform', label: 'Uniform Code' },
              { id: 'exam-schedule', label: 'Exam Schedule' },
              { id: 'fee-structure', label: 'Fee Policy' },
              { id: 'general-rules', label: 'Rules & Conduct' },
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
            
            {/* Left 8 Columns */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              
              {/* TAB 1: Curriculum */}
              {activeTab === 'curriculum' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      Academic Curriculum
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      CBSE Aligned Holistic Learning Framework
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                    DPS International Academy follows the standardized educational framework prescribed by the <strong>Central Board of Secondary Education (CBSE), New Delhi</strong>, supplemented with NCERT instructional resources and global best practices in foundational literacy, numeracy, and scientific inquiry.
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="p-4 sm:p-5 bg-brand-soft rounded-lg border-l-4 border-brand-navy">
                      <h3 className="font-extrabold text-sm sm:text-base text-brand-navy uppercase mb-1">
                        1. Pre-Primary Wing (Nursery, LKG, UKG)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2">
                        Child-centric Montessori methodology focusing on sensorial learning, phonetic speech, fine motor coordination, numbers, rhymes, storytelling, and social adaptability in a joyful, stress-free setting.
                      </p>
                      <span className="text-[10px] sm:text-[11px] font-bold text-brand-royal bg-white px-2 py-0.5 rounded border border-slate-200">
                        Playway • Audio-Visual Storytelling • Motor Skills
                      </span>
                    </div>

                    <div className="p-4 sm:p-5 bg-brand-soft rounded-lg border-l-4 border-brand-royal">
                      <h3 className="font-extrabold text-sm sm:text-base text-brand-royal uppercase mb-1">
                        2. Primary Wing (Classes I to V)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2">
                        Building strong conceptual foundations in English, Hindi, Mathematics, Environmental Science (EVS), General Knowledge, and Computer Basics. Emphasis on reading comprehension and mental arithmetic.
                      </p>
                      <span className="text-[10px] sm:text-[11px] font-bold text-brand-navy bg-white px-2 py-0.5 rounded border border-slate-200">
                        Activity-Based Science • Bilingual Fluency • Art & Craft
                      </span>
                    </div>

                    <div className="p-4 sm:p-5 bg-brand-soft rounded-lg border-l-4 border-brand-gold">
                      <h3 className="font-extrabold text-sm sm:text-base text-brand-gold uppercase mb-1">
                        3. Middle Wing (Classes VI to VIII)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2">
                        Transition to analytical learning with dedicated Physics, Chemistry, Biology, History, Civics, Geography, Sanskrit, Computer Science with Python basics, and hands-on laboratory demonstrations.
                      </p>
                      <span className="text-[10px] sm:text-[11px] font-bold text-brand-royal bg-white px-2 py-0.5 rounded border border-slate-200">
                        Laboratory Practicals • Robotics • House Competitions
                      </span>
                    </div>

                    <div className="p-4 sm:p-5 bg-brand-soft rounded-lg border-l-4 border-slate-700">
                      <h3 className="font-extrabold text-sm sm:text-base text-brand-navy uppercase mb-1">
                        4. Secondary Wing (Classes IX & X)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2">
                        Intensive preparation for CBSE All India Secondary School Examination (AISSE). Rigorous academic mentoring, regular chapter assessments, remedial coaching, and career guidance.
                      </p>
                      <span className="text-[10px] sm:text-[11px] font-bold text-brand-navy bg-white px-2 py-0.5 rounded border border-slate-200">
                        CBSE Board Focus • Mock Test Series • Olympiad Guidance
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Methodology */}
              {activeTab === 'methodology' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      Teaching Methodology
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      Modern, Interactive, Student-Centered Pedagogy
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    We believe passive lecturing fails to engage the vibrant imagination of modern students. Our classroom methodologies combine digital multimedia, group problem-solving, laboratory investigation, and continuous diagnostic evaluation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                      <GraduationCap className="text-brand-royal mb-2" size={22} />
                      <h4 className="font-bold text-xs sm:text-sm text-brand-navy uppercase">Smart Board Integration</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Every topic is reinforced through 2D/3D visual animations, interactive diagrams, and live digital quizzes.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                      <BookOpen className="text-brand-gold mb-2" size={22} />
                      <h4 className="font-bold text-xs sm:text-sm text-brand-navy uppercase">Experiential Learning</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Concepts are learned by doing: conducting science experiments, building circuits, and participating in field surveys.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                      <Calendar className="text-brand-royal mb-2" size={22} />
                      <h4 className="font-bold text-xs sm:text-sm text-brand-navy uppercase">Remedial Support</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Special zero-period coaching sessions tailored for scholars requiring additional subject clarity and practice.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                      <CheckCircle2 className="text-brand-gold mb-2" size={22} />
                      <h4 className="font-bold text-xs sm:text-sm text-brand-navy uppercase">Continuous Feedback</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Weekly evaluations and constructive teacher feedback keeping parents informed and students confident.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: Admission Guidelines */}
              {activeTab === 'admission-procedure' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      Admission Procedure & Guidelines
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      Academic Session 2026-27 • Nursery to Class XI
                    </p>
                  </div>

                  <div className="p-4 bg-brand-soft rounded-lg border-l-4 border-brand-royal">
                    <p className="text-xs md:text-sm font-semibold text-brand-navy leading-relaxed">
                      Admissions to DPS International Academy, Bhingari Bazar, Deoria are granted strictly on the basis of seat availability, merit assessment, and verification of required documents, without discrimination.
                    </p>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-brand-navy uppercase">Step-by-Step Admission Process</h3>
                  
                  <div className="space-y-3">
                    {[
                      { step: 'Step 1: Registration Form', text: 'Obtain the official Admission Prospectus & Form from the school administrative office or request it online.' },
                      { step: 'Step 2: Submission & Verification', text: 'Submit the filled form along with photocopy of birth certificate, previous report card, transfer certificate (TC), and passport photographs within 7 days.' },
                      { step: 'Step 3: Interaction / Assessment', text: 'Informal interactive session for Pre-Primary children; brief written aptitude evaluation in English and Mathematics for Classes I and above.' },
                      { step: 'Step 4: Admission Confirmation', text: 'Upon confirmation of admission, deposit the requisite admission fee and collect the uniform and booklist vouchers.' },
                    ].map((s, i) => (
                      <div key={i} className="p-3 bg-white border border-slate-200 rounded flex items-start gap-3">
                        <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-navy text-white text-[11px] sm:text-xs font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-brand-royal uppercase">{s.step}</h4>
                          <p className="text-xs text-slate-600 mt-0.5">{s.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onOpenAdmission}
                      className="default-btn default-btn-gold !py-2.5 !px-6 text-xs uppercase"
                    >
                      <Sparkles size={14} />
                      <span>Fill Online Admission Enquiry Form</span>
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 4: School Timing */}
              {activeTab === 'school-timing' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      School Timings
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      Daily Academic & Administrative Schedule
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="p-4 sm:p-5 bg-white border-t-4 border-brand-navy rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <Clock className="text-brand-navy" size={20} />
                        <h3 className="font-extrabold text-sm sm:text-base text-brand-navy uppercase">Summer Timings</h3>
                      </div>
                      <p className="text-[11px] text-slate-500 mb-2 sm:mb-3">(Applicable April to October)</p>
                      <ul className="space-y-2 text-xs text-slate-700">
                        <li className="flex justify-between border-b pb-1">
                          <span>Morning Assembly:</span>
                          <strong>7:30 AM – 7:50 AM</strong>
                        </li>
                        <li className="flex justify-between border-b pb-1">
                          <span>Classes I to XII:</span>
                          <strong>7:50 AM – 1:30 PM</strong>
                        </li>
                        <li className="flex justify-between border-b pb-1">
                          <span>Pre-Primary (Nur - UKG):</span>
                          <strong>8:00 AM – 12:30 PM</strong>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 sm:p-5 bg-white border-t-4 border-brand-royal rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <Clock className="text-brand-royal" size={20} />
                        <h3 className="font-extrabold text-sm sm:text-base text-brand-royal uppercase">Winter Timings</h3>
                      </div>
                      <p className="text-[11px] text-slate-500 mb-2 sm:mb-3">(Applicable November to March)</p>
                      <ul className="space-y-2 text-xs text-slate-700">
                        <li className="flex justify-between border-b pb-1">
                          <span>Morning Assembly:</span>
                          <strong>8:30 AM – 8:50 AM</strong>
                        </li>
                        <li className="flex justify-between border-b pb-1">
                          <span>Classes I to XII:</span>
                          <strong>8:50 AM – 2:30 PM</strong>
                        </li>
                        <li className="flex justify-between border-b pb-1">
                          <span>Pre-Primary (Nur - UKG):</span>
                          <strong>9:00 AM – 1:30 PM</strong>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-brand-soft rounded-lg border border-slate-200">
                    <h4 className="font-bold text-xs text-brand-navy uppercase mb-1">Administrative Office Hours</h4>
                    <p className="text-xs text-slate-600">
                      Monday to Saturday: <strong>8:00 AM – 3:30 PM</strong> (Except declared holidays). Parents wishing to meet the Principal are advised to visit between <strong>9:00 AM and 11:30 AM</strong> on working days.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 5: School Uniform */}
              {activeTab === 'school-uniform' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      School Uniform Guidelines
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      Promoting Equality, Discipline & School Pride
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Wearing the neat and prescribed school uniform is mandatory for all students on all working days, official functions, and excursions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-brand-soft rounded border border-slate-200">
                      <h4 className="font-bold text-xs text-brand-navy uppercase mb-2">Summer Uniform</h4>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                        <li>Navy Blue trousers / pleated skirts.</li>
                        <li>Crisp light blue collared shirts with embroidered school monogram.</li>
                        <li>Navy blue socks with dual gold stripe and polished black leather shoes.</li>
                        <li>School belt with emblem buckle and navy-gold tie.</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-brand-soft rounded border border-slate-200">
                      <h4 className="font-bold text-xs text-brand-navy uppercase mb-2">Winter Uniform</h4>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                        <li>Deep Navy Blue tailored blazer with embossed school crest.</li>
                        <li>Navy blue V-neck woolen sweater with gold neckband.</li>
                        <li>Full sleeve collared shirts and wool-blend navy trousers.</li>
                        <li>Navy blue woolen caps or scarves where appropriate.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded text-xs text-slate-600">
                    <strong className="text-brand-navy block mb-0.5">Wednesday & Saturday Sports Uniform:</strong>
                    House T-shirt (Ganga - Red, Yamuna - Blue, Kaveri - Green, Narmada - Yellow) with white track pants and white canvas running shoes.
                  </div>
                </div>
              )}

              {/* TAB 6: Exam Schedule */}
              {activeTab === 'exam-schedule' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      Examination & Assessment Policy
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      Continuous Assessment System as per CBSE Norms
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Evaluation at DPS International Academy is diagnostic, continuous, and formative. The academic calendar is divided into two comprehensive terms:
                  </p>

                  <div className="space-y-3">
                    <div className="p-4 bg-white border-l-4 border-brand-royal rounded shadow-sm">
                      <h4 className="font-bold text-xs text-brand-navy uppercase">Term I (April to September)</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Periodic Test 1 (July) + Mid-Term / Half-Yearly Examinations (September) + Portfolio & Subject Enrichment Activities.
                      </p>
                    </div>

                    <div className="p-4 bg-white border-l-4 border-brand-gold rounded shadow-sm">
                      <h4 className="font-bold text-xs text-brand-navy uppercase">Term II (October to March)</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Periodic Test 2 (December) + Pre-Board Examination for Classes X (January) + Annual Final Examinations (February - March).
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-brand-soft rounded text-xs text-slate-600 flex items-center gap-2">
                    <Calendar size={16} className="text-brand-royal shrink-0" />
                    <span>Exact datesheets and syllabus distribution are published 15 days prior to assessments on the notice board.</span>
                  </div>
                </div>
              )}

              {/* TAB 7: Fee Policy */}
              {activeTab === 'fee-structure' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      Fee Structure & Payment Policy
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      Transparent & Regulated Educational Investment
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    DPS International Academy upholds complete transparency in its fee structure. There are no concealed charges or mid-session escalations.
                  </p>

                  <div className="p-4 bg-brand-soft rounded border border-slate-200 space-y-2 text-xs text-slate-700">
                    <p>• Tuition fees are payable quarterly by the 10th day of the first month of every quarter (April, July, October, January).</p>
                    <p>• Payments can be remitted at the school accounts desk via Cheque, Demand Draft, UPI, or Direct Bank Transfer.</p>
                    <p>• Concessions are awarded to meritorious scholars and siblings enrolled in the academy upon application.</p>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-lg">
                    <h4 className="font-bold text-xs text-brand-navy uppercase mb-1">Official Bank Account Details for Fee Deposit</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Detailed account numbers, IFSC codes, and payment receipt collection guidelines are provided directly on the fee voucher issued by the administrative desk at Bhingari Bazar.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 8: General Rules */}
              {activeTab === 'general-rules' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-b-2 border-brand-gold pb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-wide">
                      General Rules & Recommendations
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-brand-royal uppercase tracking-widest mt-1">
                      Code of Discipline for Parents and Students
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-xs md:text-sm text-slate-700">
                    <div className="p-4 bg-white border border-slate-200 rounded shadow-sm">
                      <h4 className="font-bold text-xs sm:text-sm text-brand-navy uppercase mb-1">1. Punctuality & Attendance</h4>
                      <p className="text-xs text-slate-600">
                        A minimum of 75% attendance is compulsory for appearing in term-end and annual examinations. Absence must be supported by an application signed by guardians.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-slate-200 rounded shadow-sm">
                      <h4 className="font-bold text-xs sm:text-sm text-brand-navy uppercase mb-1">2. Campus Decorum</h4>
                      <p className="text-xs text-slate-600">
                        Students must take pride in preserving school property, library volumes, and lab instruments. Courteous language and mutual respect are non-negotiable values.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-slate-200 rounded shadow-sm">
                      <h4 className="font-bold text-xs sm:text-sm text-brand-navy uppercase mb-1">3. Mobile Phone Policy</h4>
                      <p className="text-xs text-slate-600">
                        Students are strictly prohibited from carrying mobile phones or electronic gadgets into the academic blocks to ensure an undisturbed learning atmosphere.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right 4 Columns: Notice Board Sidebar */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <NoticeSidebar onOpenAdmission={onOpenAdmission} />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
