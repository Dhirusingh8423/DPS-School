import React, { useState } from 'react';
import { X, Send, CheckCircle2, User, Phone, Mail, BookOpen, MessageSquare, AlertCircle } from 'lucide-react';
import { schoolInfo } from '../../data/schoolData';

export default function AdmissionModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    contactNo: '',
    email: '',
    grade: 'Nursery',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.studentName.trim()) errs.studentName = 'Student name is required';
    if (!formData.parentName.trim()) errs.parentName = 'Parent / Guardian name is required';
    if (!formData.contactNo.trim()) {
      errs.contactNo = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.contactNo.replace(/\D/g, ''))) {
      errs.contactNo = 'Please enter a valid 10-digit mobile number';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean frontend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      parentName: '',
      contactNo: '',
      email: '',
      grade: 'Nursery',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col overflow-hidden border-t-4 border-brand-royal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-brand-navy p-3.5 sm:p-4 text-white flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide flex items-center gap-2">
              <span>Admission Enquiry</span>
              <span className="text-[10px] sm:text-[11px] bg-brand-gold text-brand-navy px-2 py-0.5 rounded font-black">
                2026-27
              </span>
            </h3>
            <p className="text-[11px] text-slate-300">DPS International Academy • Bhingari Bazar, Deoria</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body (Scrollable on small mobile screens) */}
        <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1">
          {submitted ? (
            <div className="text-center py-6 space-y-3 sm:space-y-4">
              <CheckCircle2 size={50} className="text-green-600 mx-auto animate-bounce" />
              <h4 className="text-lg sm:text-xl font-black text-brand-navy">Enquiry Submitted Successfully!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in <strong>DPS International Academy</strong>. Our admissions counselor will contact you shortly regarding assessment schedules and brochure details.
              </p>
              <div className="p-3 bg-brand-soft rounded text-xs text-brand-charcoal">
                For urgent admission queries, call directly: <br />
                <strong className="text-brand-royal font-bold text-sm">+91 94508 21450 / 70682 86407</strong>
              </div>
              <button
                onClick={handleReset}
                className="default-btn !bg-brand-navy !text-xs !py-2.5 !px-6"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Student Name */}
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                    Student Full Name *
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Aarav Sharma"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-xs rounded border ${
                        errors.studentName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-none focus:border-brand-royal`}
                    />
                  </div>
                  {errors.studentName && (
                    <span className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle size={11} /> {errors.studentName}
                    </span>
                  )}
                </div>

                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-xs rounded border ${
                        errors.parentName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-none focus:border-brand-royal`}
                    />
                  </div>
                  {errors.parentName && (
                    <span className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle size={11} /> {errors.parentName}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Contact No */}
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                    Contact Phone (10-digit) *
                  </label>
                  <div className="relative">
                    <Phone size={15} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="9876543210"
                      value={formData.contactNo}
                      onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-xs rounded border ${
                        errors.contactNo ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-none focus:border-brand-royal`}
                    />
                  </div>
                  {errors.contactNo && (
                    <span className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle size={11} /> {errors.contactNo}
                    </span>
                  )}
                </div>

                {/* Grade applying for */}
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                    Class Applying For *
                  </label>
                  <div className="relative">
                    <BookOpen size={15} className="absolute left-3 top-3 text-slate-400" />
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded border border-slate-300 focus:outline-none focus:border-brand-royal bg-white"
                    >
                      <option value="Nursery">Nursery / Play Group</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Class 1">Class I</option>
                      <option value="Class 2">Class II</option>
                      <option value="Class 3">Class III</option>
                      <option value="Class 4">Class IV</option>
                      <option value="Class 5">Class V</option>
                      <option value="Class 6">Class VI</option>
                      <option value="Class 7">Class VII</option>
                      <option value="Class 8">Class VIII</option>
                      <option value="Class 9">Class IX</option>
                      <option value="Class 10">Class X</option>
                      <option value="Class 11">Class XI (Science / Commerce)</option>
                      <option value="Class 12">Class XII</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Email Address (optional) */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="email"
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded border border-slate-300 focus:outline-none focus:border-brand-royal"
                  />
                </div>
              </div>

              {/* Any queries */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                  Questions / Specific Requirements
                </label>
                <div className="relative">
                  <MessageSquare size={15} className="absolute left-3 top-3 text-slate-400" />
                  <textarea
                    rows={2}
                    placeholder="Inquire about bus transport route, hostel facility, or fee guidelines..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded border border-slate-300 focus:outline-none focus:border-brand-royal"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full default-btn !bg-brand-royal hover:!bg-brand-navy justify-center py-2.5 text-xs"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>SUBMIT ADMISSION ENQUIRY</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                Strict privacy observed. No login or account creation required.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
