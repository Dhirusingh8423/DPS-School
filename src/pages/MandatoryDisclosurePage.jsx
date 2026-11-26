import React from 'react';
import BannerWrapper from '../components/common/BannerWrapper';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  GraduationCap,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function MandatoryDisclosurePage({ onOpenAdmission }) {
  const disclosureDocuments = [
    { sNo: 1, docName: "Copies of Affiliation / Upgradation Letter & Recent Extension", status: "Verified & Complied" },
    { sNo: 2, docName: "Copies of Societies / Trust / Company Registration / Renewal Certificate", status: "Registered Nyas / Trust" },
    { sNo: 3, docName: "Copy of No Objection Certificate (NOC) Issued by State Government", status: "Issued by State Govt. (U.P.)" },
    { sNo: 4, docName: "Copies of Recognition Certificate under RTE Act, 2009", status: "Approved & Valid" },
    { sNo: 5, docName: "Copy of Valid Building Safety Certificate as per National Building Code", status: "Certified by PWD / Structural Eng." },
    { sNo: 6, docName: "Copy of Valid Fire Safety Certificate Issued by Competent Authority", status: "Fire Dept. Certified" },
    { sNo: 7, docName: "Copy of Safe Drinking Water and Sanitary Condition Certificate", status: "Health & CMO Verified" },
    { sNo: 8, docName: "Fee Structure of the School (Nursery to Senior Secondary)", status: "Published Annually" },
    { sNo: 9, docName: "Annual Academic Calendar & Holiday Schedule", status: "Published 2026-27" },
    { sNo: 10, docName: "List of School Management Committee (SMC) Members", status: "Constitutional SMC Active" }
  ];

  return (
    <div className="w-full bg-white">
      <BannerWrapper
        title="Mandatory Public Disclosure"
        breadcrumbs={[{ label: 'CBSE Disclosure' }]}
      />

      <div className="py-12 sm:py-16 md:py-24">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-[11px] sm:text-xs font-bold text-brand-gold uppercase tracking-widest block mb-1">
              CENTRAL BOARD OF SECONDARY EDUCATION COMPLIANCE
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-tight">
              Appendix - IX Mandatory Disclosure Details
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600">
              In accordance with CBSE guidelines, the administrative information, legal approvals, infrastructure specifications, and safety clearances of DPS International Academy are made transparently available to the public.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-10">
            
            {/* Section A: General Information */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-brand-navy text-white p-3.5 sm:p-4 flex items-center justify-between border-b-2 border-brand-gold">
                <h3 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide flex items-center gap-2">
                  <Building2 size={16} className="text-brand-gold shrink-0" />
                  <span>A. General Information</span>
                </h3>
                <span className="text-[10px] sm:text-[11px] bg-brand-royal text-white px-2 py-0.5 rounded font-bold">
                  Official Record
                </span>
              </div>

              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs">
                  <div className="p-3 bg-brand-soft rounded flex justify-between gap-2">
                    <span className="font-semibold text-slate-600">1. Name of School:</span>
                    <strong className="text-brand-navy text-right">DPS International Academy</strong>
                  </div>
                  <div className="p-3 bg-brand-soft rounded flex justify-between gap-2">
                    <span className="font-semibold text-slate-600">2. School Location:</span>
                    <strong className="text-brand-navy text-right">Bhingari Bazar, Deoria (U.P.)</strong>
                  </div>
                  <div className="p-3 bg-brand-soft rounded flex justify-between gap-2">
                    <span className="font-semibold text-slate-600">3. Affiliation Norms:</span>
                    <strong className="text-brand-navy text-right">CBSE New Delhi Pattern</strong>
                  </div>
                  <div className="p-3 bg-brand-soft rounded flex justify-between gap-2">
                    <span className="font-semibold text-slate-600">4. Address & Pin:</span>
                    <strong className="text-brand-navy text-right">Bhatpar Rani, Deoria – 274702</strong>
                  </div>
                  <div className="p-3 bg-brand-soft rounded flex justify-between gap-2">
                    <span className="font-semibold text-slate-600">5. School Email:</span>
                    <strong className="text-brand-royal break-all text-right">{schoolInfo.email}</strong>
                  </div>
                  <div className="p-3 bg-brand-soft rounded flex justify-between gap-2">
                    <span className="font-semibold text-slate-600">6. Official Helpline:</span>
                    <strong className="text-brand-navy text-right">{schoolInfo.phone}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Section B: Documents and Information */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-brand-navy text-white p-3.5 sm:p-4 flex items-center justify-between border-b-2 border-brand-gold">
                <h3 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide flex items-center gap-2">
                  <ShieldCheck size={16} className="text-brand-gold shrink-0" />
                  <span>B. Documents and Information</span>
                </h3>
                <span className="text-[10px] sm:text-[11px] bg-green-700 text-white px-2 py-0.5 rounded font-bold">
                  All Clearances
                </span>
              </div>

              {/* Responsive Scrollable Table */}
              <div className="overflow-x-auto custom-scrollbar">
                <div className="min-w-[600px]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-slate-700 uppercase font-bold border-b">
                      <tr>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4 w-12 text-center">S.No.</th>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4">Documents / Information</th>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4 w-44">Status / Verification</th>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4 w-28 text-center">Document</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {disclosureDocuments.map((doc) => (
                        <tr key={doc.sNo} className="hover:bg-brand-soft/50 transition-colors">
                          <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-center font-bold text-slate-500">{doc.sNo}</td>
                          <td className="py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-brand-navy">{doc.docName}</td>
                          <td className="py-2.5 sm:py-3 px-3 sm:px-4">
                            <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded whitespace-nowrap">
                              <CheckCircle2 size={12} className="shrink-0" />
                              {doc.status}
                            </span>
                          </td>
                          <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-center">
                            <button
                              onClick={() => alert(`Document "${doc.docName}" is on official record at the DPS International Academy administrative desk.`)}
                              className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-brand-royal hover:text-brand-navy bg-white border border-brand-royal/40 px-2.5 py-1 rounded whitespace-nowrap"
                            >
                              <FileText size={11} />
                              <span>View</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="p-2 bg-slate-50 border-t text-center text-[11px] text-slate-500 sm:hidden">
                ↔ Swipe horizontally to view full table
              </div>
            </div>

            {/* Section C: Campus & Infrastructure Details */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-brand-navy text-white p-3.5 sm:p-4 border-b-2 border-brand-gold">
                <h3 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide flex items-center gap-2">
                  <GraduationCap size={16} className="text-brand-gold shrink-0" />
                  <span>C. Campus & Infrastructure Specifications</span>
                </h3>
              </div>

              <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-xs">
                <div className="p-3.5 sm:p-4 bg-brand-soft rounded border border-slate-200">
                  <span className="text-slate-500 block mb-1 font-semibold">Total Campus Area</span>
                  <strong className="text-xs sm:text-sm text-brand-navy block">Spacious 2.5+ Acres Lush Campus</strong>
                </div>
                <div className="p-3.5 sm:p-4 bg-brand-soft rounded border border-slate-200">
                  <span className="text-slate-500 block mb-1 font-semibold">Playground Area</span>
                  <strong className="text-xs sm:text-sm text-brand-navy block">Over 4,500 Sq. Metres</strong>
                </div>
                <div className="p-3.5 sm:p-4 bg-brand-soft rounded border border-slate-200">
                  <span className="text-slate-500 block mb-1 font-semibold">Smart Classrooms</span>
                  <strong className="text-xs sm:text-sm text-brand-navy block">Fully Digital (All Sections)</strong>
                </div>
                <div className="p-3.5 sm:p-4 bg-brand-soft rounded border border-slate-200">
                  <span className="text-slate-500 block mb-1 font-semibold">Laboratories</span>
                  <strong className="text-xs sm:text-sm text-brand-navy block">Physics, Chem, Bio & Computer Labs</strong>
                </div>
                <div className="p-3.5 sm:p-4 bg-brand-soft rounded border border-slate-200">
                  <span className="text-slate-500 block mb-1 font-semibold">Internet & CCTV</span>
                  <strong className="text-xs sm:text-sm text-brand-navy block">High Speed Broadband & 60+ Cameras</strong>
                </div>
                <div className="p-3.5 sm:p-4 bg-brand-soft rounded border border-slate-200">
                  <span className="text-slate-500 block mb-1 font-semibold">Sanitary & Safe Water</span>
                  <strong className="text-xs sm:text-sm text-brand-navy block">RO Purified Water Stations & Clean Restrooms</strong>
                </div>
              </div>
            </div>

            {/* Bottom Help */}
            <div className="p-4 sm:p-5 bg-brand-soft rounded-lg border border-brand-royal/20 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-brand-navy uppercase">Need Certified Paper Copies of Any Record?</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  Visiting guardians may inspect physical affiliation files and safety certificates during office hours at Bhingari Bazar.
                </p>
              </div>
              <button
                onClick={onOpenAdmission}
                className="default-btn !py-2.5 !px-5 sm:!px-6 text-xs uppercase shrink-0 w-full sm:w-auto"
              >
                <Sparkles size={14} className="text-brand-gold shrink-0" />
                <span>Admission Enquiry</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
