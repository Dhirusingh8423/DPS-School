import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function BannerWrapper({ title, breadcrumbs = [] }) {
  return (
    <div className="relative w-full py-16 md:py-24 bg-brand-navy overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80')` }}
      />
      
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-royal/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-wide uppercase mb-4">
          {title}
        </h1>
        
        {/* Breadcrumb path */}
        <nav className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs md:text-sm text-slate-200">
          <Link to="/" className="flex items-center gap-1 hover:text-brand-gold transition-colors">
            <Home size={14} />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              <ChevronRight size={13} className="text-brand-gold" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-brand-gold transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-brand-gold font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
          {!breadcrumbs.length && (
            <>
              <ChevronRight size={13} className="text-brand-gold" />
              <span className="text-brand-gold font-semibold">{title}</span>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
