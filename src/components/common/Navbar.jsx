import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  PhoneCall, 
  Sparkles, 
  Home, 
  Building2, 
  GraduationCap, 
  Layers, 
  Trophy, 
  Image, 
  Bell, 
  Phone,
  FileText
} from 'lucide-react';
import { navigationMenu, schoolInfo } from '../../data/schoolData';

const navIcons = {
  "Home": Home,
  "About Us": Building2,
  "Academics": GraduationCap,
  "Facilities": Layers,
  "Activities": Trophy,
  "Gallery": Image,
  "News & Events": Bell,
  "Contact": Phone,
};

export default function Navbar({ onOpenAdmission }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const isCurrentActive = (item) => {
    if (item.path === '/' && location.pathname === '/') return true;
    if (item.path !== '/' && location.pathname.startsWith(item.path)) return true;
    return false;
  };

  return (
    <>
      <nav
        className={`w-full bg-white transition-all duration-300 z-40 ${
          isSticky
            ? 'fixed top-0 left-0 shadow-md py-2 border-b border-slate-200'
            : 'relative shadow-sm py-2.5 sm:py-3 border-b border-slate-100'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo Area */}
            <Link 
              to="/" 
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group py-1"
            >
              <img
                src="/logo-icon.svg"
                alt="DPS Emblem"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
              />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1 sm:gap-1.5 leading-none">
                  <span className="text-lg sm:text-xl md:text-2xl font-black text-brand-navy tracking-tight">
                    DPS
                  </span>
                  <span className="text-base sm:text-lg md:text-xl font-extrabold text-brand-royal tracking-wide">
                    INTERNATIONAL
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-extrabold text-brand-gold tracking-widest uppercase mt-0.5 leading-none">
                  ACADEMY
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-slate-500 uppercase tracking-wider hidden sm:block mt-0.5 leading-tight">
                  Bhingari Bazar, Deoria (U.P.)
                </span>
              </div>
            </Link>

            {/* Desktop Navigation (visible on lg and up: fits comfortably on all laptops 1024px - 1920px with NO right overflow) */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-2">
              {navigationMenu.map((item, index) => {
                const active = isCurrentActive(item);
                const hasChildren = item.dropdown && item.dropdown.length > 0;

                return (
                  <div key={item.title} className="relative group">
                    <Link
                      to={item.path}
                      className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 text-[12.5px] xl:text-[13px] 2xl:text-[13.5px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-200 rounded ${
                        active
                          ? 'text-brand-royal border-b-2 border-brand-royal'
                          : 'text-brand-charcoal hover:text-brand-royal hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.title}</span>
                      {hasChildren && (
                        <ChevronDown
                          size={13}
                          className="text-slate-400 group-hover:text-brand-royal transition-transform duration-200 group-hover:rotate-180 shrink-0"
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {hasChildren && (
                      <div className="absolute top-full left-0 min-w-[240px] bg-white shadow-2xl rounded-b-md border-t-2 border-brand-royal py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path}
                            className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-brand-royal hover:bg-brand-soft transition-colors whitespace-nowrap"
                          >
                            <span>{subItem.title}</span>
                            <ChevronRight size={12} className="text-slate-300" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Extra Wide Display Quick Apply Action (Only shows on 2xl: 1536px+ so it never crowds 1280px laptops) */}
              <div className="hidden 2xl:block pl-2 shrink-0">
                <button
                  onClick={onOpenAdmission}
                  className="default-btn !py-1.5 !px-3.5 !text-xs !bg-brand-navy hover:!bg-brand-royal whitespace-nowrap shadow-sm"
                >
                  <Sparkles size={12} className="text-brand-gold shrink-0" />
                  <span>Apply 2026</span>
                </button>
              </div>
            </div>

            {/* Mobile / Tablet Actions (Visible on screens < lg: 1024px) */}
            <div className="flex items-center lg:hidden gap-2">
              <button
                onClick={onOpenAdmission}
                className="inline-flex items-center gap-1 bg-brand-gold text-brand-navy font-black text-[10.5px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded uppercase tracking-wider shadow-sm hover:bg-brand-gold-dark transition-colors shrink-0"
              >
                <Sparkles size={12} className="shrink-0" />
                <span>Apply</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 sm:p-2 rounded-md text-brand-navy hover:bg-slate-100 focus:outline-none transition-colors border border-slate-200"
                aria-label="Open mobile menu"
              >
                <Menu size={22} className="sm:hidden" />
                <Menu size={24} className="hidden sm:block" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Slide-Over Mobile & Tablet Menu Drawer (Smooth, Reliable & User-Friendly) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden animate-fadeIn">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-8 sm:pl-10">
            <div className="w-screen max-w-sm sm:max-w-md bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-out">
              
              {/* Drawer Header */}
              <div className="p-3.5 sm:p-4 bg-brand-navy text-white flex items-center justify-between border-b-2 border-brand-gold">
                <div className="flex items-center gap-2.5">
                  <img src="/logo-icon.svg" alt="DPS" className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0" />
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-black text-sm tracking-tight text-white">DPS</span>
                      <span className="font-extrabold text-xs tracking-wider text-blue-200">INTERNATIONAL</span>
                    </div>
                    <p className="text-[9.5px] sm:text-[10px] font-bold text-brand-gold uppercase tracking-wider">
                      Bhingari Bazar, Deoria (U.P.)
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links Area (Scrollable with icons & large touch targets) */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-3 sm:p-4 space-y-1">
                {navigationMenu.map((item, index) => {
                  const hasChildren = item.dropdown && item.dropdown.length > 0;
                  const isOpen = activeDropdown === index;
                  const active = isCurrentActive(item);
                  const Icon = navIcons[item.title] || Layers;

                  return (
                    <div key={item.title} className="border-b border-slate-100 last:border-b-0 pb-1">
                      <div className="flex items-center justify-between py-2.5 px-1 rounded-md hover:bg-slate-50 transition-colors">
                        <Link
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider flex-1 ${
                            active ? 'text-brand-royal' : 'text-brand-charcoal hover:text-brand-royal'
                          }`}
                        >
                          <div className={`w-7 h-7 rounded flex items-center justify-center shrink-0 ${active ? 'bg-brand-royal text-white' : 'bg-brand-soft text-brand-royal'}`}>
                            <Icon size={14} />
                          </div>
                          <span>{item.title}</span>
                        </Link>

                        {hasChildren && (
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="p-2 text-slate-400 hover:text-brand-royal transition-colors rounded-full"
                            aria-label={`Toggle ${item.title} submenu`}
                          >
                            <ChevronDown
                              size={18}
                              className={`transform transition-transform duration-200 ${
                                isOpen ? 'rotate-180 text-brand-royal' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Submenu Accordion */}
                      {hasChildren && isOpen && (
                        <div className="pl-4 pr-2 py-2 space-y-1 bg-brand-soft/80 rounded-md mb-2 border-l-2 border-brand-royal animate-fadeIn">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 px-2.5 text-xs font-semibold text-slate-700 hover:text-brand-royal hover:bg-white rounded transition-colors"
                            >
                              • {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Drawer Bottom Quick Action Bar */}
              <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmission();
                  }}
                  className="w-full default-btn !bg-brand-royal hover:!bg-brand-navy !py-3 text-xs font-bold text-center justify-center shadow-md uppercase tracking-wider"
                >
                  <Sparkles size={14} className="text-brand-gold shrink-0" />
                  <span>ONLINE ADMISSION ENQUIRY</span>
                </button>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="tel:+919450821450"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-white border border-slate-200 rounded font-semibold text-slate-700 hover:text-brand-royal hover:border-brand-royal transition-colors"
                  >
                    <PhoneCall size={14} className="text-brand-royal shrink-0" />
                    <span>Call Helpline</span>
                  </a>

                  <Link
                    to="/mandatory-disclosure"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-white border border-slate-200 rounded font-semibold text-slate-700 hover:text-brand-royal hover:border-brand-royal transition-colors text-center"
                  >
                    <FileText size={14} className="text-brand-gold shrink-0" />
                    <span>CBSE Info</span>
                  </Link>
                </div>

                <div className="text-[10px] text-slate-500 text-center pt-1">
                  DPS International Academy • Bhingari Bazar, Deoria (U.P.)
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
