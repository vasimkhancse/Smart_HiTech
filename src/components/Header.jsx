import { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  Phone,
  MapPin,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Products & Services', href: '#products' },
    { label: 'Dish Heads', href: '#dish-head' },
    { label: 'Filter Vessels', href: '#filter-vessels' },
    { label: 'Rolling & Bending', href: '#rolling-works' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-metallic-200">
        {/* Top Info Bar */}
        <div className="bg-navy-dark text-metallic-300 text-xs py-2 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-2.5">
            <div className="hidden md:flex items-center gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 bg-blue-600/20 text-blue-300 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-blue-400/30">
                <ShieldCheck size={13} /> Estd. 2012 by {COMPANY_INFO.founder}
              </span>
              <span className="inline-flex items-center gap-1.5 text-metallic-300">
                <MapPin size={13} className="text-blue-400 shrink-0" /> Chinnavedampatti, Coimbatore – 641 049
              </span>
            </div>

            <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.number}`}
                    className="inline-flex items-center gap-1.5 text-metallic-300 hover:text-white transition-colors"
                    title={`Call ${phone.name}`}
                  >
                    <Phone size={13} className="text-blue-400 shrink-0" />
                    <span className="font-mono">{phone.formatted}</span>
                    {phone.isPrimary && <span className="hidden sm:inline text-[11px] text-metallic-400">({phone.name})</span>}
                  </a>
                ))}
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Smart%20Hi-Tech%20Engineering,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <MessageCircle size={14} className="shrink-0" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="py-2.5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <a
              href="#"
              className="flex items-center gap-3 transition-opacity hover:opacity-95"
              onClick={(e) => handleNavClick(e, '#root')}
            >
              <img
                src="/images/smart_hitech_logo.png"
                alt="Smart Hitech Engineering Logo"
                className="h-10 sm:h-14 w-auto object-contain rounded"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-semibold text-metallic-700 hover:text-primary transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Quick Actions */}
            <div className="flex items-center gap-2.5">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Smart%20Hi-Tech%20Engineering,%20I%20am%20interested%20in%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#25d366] hover:bg-[#20ba5a] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>

              <a
                href={`tel:${COMPANY_INFO.phones[0].number}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#0b4db7] via-[#1e40af] to-[#0369a1] text-white shadow-sm shadow-blue-900/20 hover:shadow-md hover:from-[#073582] hover:to-[#0b4db7] transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone size={14} /> Call Now
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg bg-metallic-100 text-metallic-800 hover:bg-metallic-200 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Side Drawer */}
      <aside
        className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl z-50 p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-metallic-200 mb-6">
            <img
              src="/images/smart_hitech_logo.png"
              alt="Smart Hitech Engineering Logo"
              className="h-10 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-1.5 text-metallic-600 hover:text-metallic-900 rounded-lg hover:bg-metallic-100 transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between py-3 px-3 rounded-lg text-metallic-800 hover:text-primary hover:bg-metallic-50 font-semibold text-base transition-colors border-b border-metallic-100"
              >
                <span>{link.label}</span>
                <ChevronRight size={18} className="text-primary" />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-4 border-t border-metallic-200 flex flex-col gap-3">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Smart%20Hi-Tech%20Engineering,%20I%20am%20interested%20in%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold bg-[#25d366] hover:bg-[#20ba5a] text-white shadow-md transition-all duration-200"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>

          <a
            href={`tel:${COMPANY_INFO.phones[0].number}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#0b4db7] via-[#1e40af] to-[#0369a1] text-white shadow-md transition-all duration-200"
          >
            <Phone size={18} /> Call {COMPANY_INFO.phones[0].formatted}
          </a>
        </div>
      </aside>
    </>
  );
}
