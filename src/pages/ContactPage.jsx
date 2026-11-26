import React, { useState } from 'react';
import BannerWrapper from '../components/common/BannerWrapper';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building,
  Sparkles
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function ContactPage({ onOpenAdmission }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact phone number';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errs.phone = 'Please provide a valid 10-digit mobile number';
    }
    if (!formData.message.trim()) errs.message = 'Please type your inquiry or message';
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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <BannerWrapper
        title="Contact Us"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <div className="py-12 sm:py-16 md:py-24">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top 3 Info Boxes replicating reference .contact-area style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            
            {/* Box 1: Address */}
            <div className="bg-brand-soft rounded-lg p-6 sm:p-7 border-t-4 border-brand-navy shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center mb-3 sm:mb-4">
                <MapPin size={22} className="sm:hidden" />
                <MapPin size={24} className="hidden sm:block" />
              </div>
              <h3 className="text-sm sm:text-base font-black text-brand-navy uppercase tracking-wider mb-2">
                ADDRESS
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>DPS International Academy</strong><br />
                Bhingari Bazar, Tehsil Bhatpar Rani,<br />
                District Deoria, Uttar Pradesh – 274702, India.
              </p>
            </div>

            {/* Box 2: Contact No. */}
            <div className="bg-brand-soft rounded-lg p-6 sm:p-7 border-t-4 border-brand-royal shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-royal text-white flex items-center justify-center mb-3 sm:mb-4">
                <Phone size={22} className="sm:hidden" />
                <Phone size={24} className="hidden sm:block" />
              </div>
              <h3 className="text-sm sm:text-base font-black text-brand-navy uppercase tracking-wider mb-2">
                CONTACT NO.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-1">
                <a href="tel:+919450821450" className="block font-bold text-brand-royal hover:underline">
                  +91 94508 21450
                </a>
                <a href="tel:+917068286407" className="block font-bold text-brand-royal hover:underline">
                  +91 70682 86407
                </a>
                <span className="text-[10px] sm:text-[11px] text-slate-500 block pt-1">
                  Office Hours: 8:00 AM – 3:30 PM
                </span>
              </p>
            </div>

            {/* Box 3: E-Mail & Web */}
            <div className="bg-brand-soft rounded-lg p-6 sm:p-7 border-t-4 border-brand-gold shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center mb-3 sm:mb-4">
                <Mail size={22} className="sm:hidden" />
                <Mail size={24} className="hidden sm:block" />
              </div>
              <h3 className="text-sm sm:text-base font-black text-brand-navy uppercase tracking-wider mb-2">
                E-MAIL & WEB
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-1">
                <a href={`mailto:${schoolInfo.email}`} className="block font-bold text-brand-royal hover:underline break-all">
                  {schoolInfo.email}
                </a>
                <span className="block text-slate-600 text-xs">
                  www.dpsinternationalacademy.edu.in
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 block pt-1">
                  Inquiries answered within 24 business hours
                </span>
              </p>
            </div>

          </div>

          {/* Contact Form & Location Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
            
            {/* Form: LEAVE A message */}
            <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-lg border border-slate-200 shadow-md">
              <div className="border-b-2 border-brand-gold pb-3 mb-5 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-brand-navy uppercase tracking-wide">
                  LEAVE A MESSAGE
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  DPS International Academy is a co-educational institution committed to academic excellence. Send us your queries regarding admission, campus visit, or general information.
                </p>
              </div>

              {submitted ? (
                <div className="py-6 sm:py-8 text-center space-y-3 sm:space-y-4">
                  <CheckCircle2 size={48} className="text-green-600 mx-auto animate-bounce" />
                  <h4 className="text-lg sm:text-xl font-bold text-brand-navy">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for writing to us. Our administrative desk at Bhingari Bazar will review your note and get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="default-btn !py-2 !px-6 !text-xs !bg-brand-navy"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full p-2.5 text-xs rounded border ${
                          errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } focus:outline-none focus:border-brand-royal`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                          <AlertCircle size={11} /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full p-2.5 text-xs rounded border ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } focus:outline-none focus:border-brand-royal`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                          <AlertCircle size={11} /> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 text-xs rounded border border-slate-300 focus:outline-none focus:border-brand-royal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                        Subject of Inquiry
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Admission for Class VI"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full p-2.5 text-xs rounded border border-slate-300 focus:outline-none focus:border-brand-royal"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Message / Requirement *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please write your query regarding bus routes, admission documents, fee schedules..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full p-2.5 text-xs rounded border ${
                        errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-none focus:border-brand-royal`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                        <AlertCircle size={11} /> {errors.message}
                      </span>
                    )}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="default-btn !bg-brand-royal hover:!bg-brand-navy !py-2.5 sm:!py-3 !px-6 sm:!px-8 text-xs font-bold"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>SEND MESSAGE</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={onOpenAdmission}
                      className="text-xs font-bold text-brand-royal hover:text-brand-navy flex items-center gap-1"
                    >
                      <Sparkles size={13} className="text-brand-gold" />
                      <span>Admission Enquiry Form</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Map & Hours Card */}
            <div className="lg:col-span-5 space-y-6 mt-4 lg:mt-0">
              
              {/* Visiting Hours & Campus Guidelines */}
              <div className="bg-brand-navy text-white p-5 sm:p-6 rounded-lg shadow-md border-t-4 border-brand-gold space-y-3">
                <div className="flex items-center gap-2 text-brand-gold">
                  <Clock size={18} />
                  <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">Campus Visiting Hours</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Parents and prospective guardians are welcome to visit our campus on working days. Meeting with the Principal is scheduled between <strong>9:00 AM and 11:30 AM</strong>.
                </p>
                <div className="p-3 bg-white/10 rounded text-xs space-y-1">
                  <div className="flex justify-between">
                    <span>Monday – Friday:</span>
                    <strong className="text-brand-gold">8:00 AM – 3:30 PM</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <strong className="text-brand-gold">8:00 AM – 2:00 PM</strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Sunday:</span>
                    <span>Closed (Holiday)</span>
                  </div>
                </div>
              </div>

              {/* Verified Location Map */}
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md">
                <div className="bg-slate-100 p-2.5 sm:p-3 border-b border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-bold text-brand-navy uppercase flex items-center gap-1.5">
                    <MapPin size={13} className="text-brand-royal shrink-0" />
                    <span className="truncate">Location: Bhingari Bazar, Deoria (U.P.)</span>
                  </span>
                  <span className="text-[9px] sm:text-[10px] bg-brand-royal text-white px-2 py-0.5 rounded font-bold uppercase shrink-0">
                    GPS 274702
                  </span>
                </div>
                <div className="w-full h-60 sm:h-72 bg-slate-200">
                  <iframe
                    title="DPS International Academy Location Map"
                    src="https://maps.google.com/maps?q=Bhingari+Bazar,+Deoria,+Uttar+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
