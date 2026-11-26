import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { schoolInfo, usefulLinks } from '../../data/schoolData';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-brand-navy text-slate-300 pt-12 sm:pt-16 pb-8 border-t-4 border-brand-royal relative">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid replicating reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-10 sm:pb-12 border-b border-slate-700/60">
          
          {/* Column 1: School Branding & About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-3">
                <img
                  src="/logo-icon.svg"
                  alt="DPS International Academy"
                  className="w-11 h-11 sm:w-12 sm:h-12 object-contain shrink-0"
                />
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-black text-white tracking-tight">DPS</span>
                  <span className="text-xs sm:text-sm font-bold text-brand-gold tracking-widest uppercase -mt-1">
                    INTERNATIONAL ACADEMY
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed">
              DPS International Academy is a premier co-educational institution in Bhingari Bazar, Deoria, committed to fostering intellectual excellence, moral values, scientific inquiry, and global competence.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Connect With Us:</span>
            </div>
            
            {/* Social Icons matching reference */}
            <div className="flex items-center gap-2 pt-0.5">
              <a
                href={schoolInfo.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-brand-royal/60 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href={schoolInfo.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-brand-royal/60 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
              <a
                href={schoolInfo.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-brand-royal/60 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href={schoolInfo.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-brand-royal/60 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all"
                aria-label="YouTube"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Academic & Institutional Links */}
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider mb-3 sm:mb-4 border-l-4 border-brand-gold pl-3">
              Academic Wings
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-brand-gold shrink-0" />
                  <span>About Our School</span>
                </Link>
              </li>
              <li>
                <Link to="/about/mission-vision" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-brand-gold shrink-0" />
                  <span>Mission, Vision & Motto</span>
                </Link>
              </li>
              <li>
                <Link to="/academics/curriculum" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-brand-gold shrink-0" />
                  <span>CBSE Curriculum Framework</span>
                </Link>
              </li>
              <li>
                <Link to="/academics/admission-procedure" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-brand-gold shrink-0" />
                  <span>Admission Guidelines 2026-27</span>
                </Link>
              </li>
              <li>
                <Link to="/academics/school-timing" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-brand-gold shrink-0" />
                  <span>School Timings & Calendar</span>
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-brand-gold shrink-0" />
                  <span>Campus Infrastructure</span>
                </Link>
              </li>
              <li>
                <Link to="/mandatory-disclosure" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-brand-gold shrink-0" />
                  <span>Mandatory Public Disclosure</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider mb-3 sm:mb-4 border-l-4 border-brand-gold pl-3">
              Useful Links
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs">
              {usefulLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-gold transition-colors flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-1.5">
                      <ChevronRight size={13} className="text-brand-gold shrink-0" />
                      <span>{link.title}</span>
                    </span>
                    <ExternalLink size={11} className="text-slate-500 group-hover:text-brand-gold shrink-0" />
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/gallery"
                  className="hover:text-brand-gold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight size={13} className="text-brand-gold shrink-0" />
                  <span>Campus Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/news-events"
                  className="hover:text-brand-gold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight size={13} className="text-brand-gold shrink-0" />
                  <span>Notice Board & Circulars</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: School Address & Contact Info */}
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider mb-3 sm:mb-4 border-l-4 border-brand-gold pl-3">
              Campus Contact
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <p className="leading-relaxed text-slate-300">
                  <strong className="text-white block font-semibold">DPS International Academy</strong>
                  Bhingari Bazar, Tehsil Bhatpar Rani, District Deoria, Uttar Pradesh – 274702, India.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone size={15} className="text-brand-gold shrink-0 mt-0.5" />
                <div className="text-slate-300 space-y-0.5">
                  <a href="tel:+919450821450" className="block hover:text-brand-gold transition-colors">
                    +91 94508 21450
                  </a>
                  <a href="tel:+917068286407" className="block hover:text-brand-gold transition-colors">
                    +91 70682 86407
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={15} className="text-brand-gold shrink-0 mt-0.5" />
                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="hover:text-brand-gold transition-colors break-all"
                >
                  {schoolInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock size={15} className="text-brand-gold shrink-0 mt-0.5" />
                <p className="text-slate-300">
                  Office: Mon – Sat (8:00 AM – 3:30 PM)
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-slate-400 gap-3 text-center sm:text-left">
          <p>
            Copyright © <strong className="text-white">DPS International Academy</strong> {currentYear}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-[11px]">
            <Link to="/about" className="hover:text-brand-gold">About School</Link>
            <span>•</span>
            <Link to="/mandatory-disclosure" className="hover:text-brand-gold">Mandatory Disclosure</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-brand-gold">Contact Desk</Link>
            <span>•</span>
            <span className="text-brand-gold font-semibold">Bhingari Bazar, Deoria (U.P.)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
