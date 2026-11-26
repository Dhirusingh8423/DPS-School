import React from 'react';

export default function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center' : 'text-left'}`}>
      {/* Decorative emblem icon replicating the reference site's section.png */}
      <div className={`flex items-center gap-2 mb-2 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="w-10 h-[2px] bg-brand-gold"></span>
        <div className="w-3 h-3 rotate-45 border-2 border-brand-gold bg-brand-royal"></div>
        <span className="w-10 h-[2px] bg-brand-gold"></span>
      </div>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-navy uppercase tracking-wide">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
