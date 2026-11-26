import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, AlertCircle } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 700);
  };

  return (
    <section className="py-16 md:py-20 bg-brand-navy text-white text-center relative overflow-hidden">
      {/* Subtle geometric lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border-8 border-brand-royal" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-8 border-brand-gold" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Replicating reference heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wider text-white">
          SUBSCRIBE OUR NEWSLETTER
        </h2>

        {/* Replicating reference subtitle */}
        <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mx-auto">
          Subscribe now for official updates regarding Admission Notifications, Academic Circulars, Examination Dates, and Special Events.
        </p>

        {/* Subscription Form */}
        <div className="mt-8 max-w-xl mx-auto">
          {status === 'success' ? (
            <div className="bg-brand-royal/40 border border-brand-gold/60 rounded-md p-4 flex items-center justify-center gap-3 text-brand-gold">
              <CheckCircle2 size={22} className="shrink-0 text-brand-gold" />
              <p className="text-sm font-semibold">
                Thank you for subscribing! You will receive official school circulars directly in your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address..."
                  className="w-full pl-11 pr-4 py-3 rounded text-sm text-brand-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-md"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="default-btn default-btn-gold !py-3 !px-7 text-xs sm:text-sm shrink-0 justify-center shadow-lg"
              >
                {status === 'loading' ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    <span>SUBSCRIBE</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-2 text-xs text-red-300 flex items-center justify-center gap-1">
              <AlertCircle size={13} />
              <span>Please enter a valid email address.</span>
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
