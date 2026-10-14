import { COMPANY_INFO } from '../data/companyData';
import { Phone, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-slate-400 pt-16 pb-8 border-t-4 border-primary text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/smart_hitech_logo.png" 
                alt="Smart Hitech Engineering" 
                className="h-12 w-auto rounded bg-white p-1"
              />
              <span className="text-white text-base sm:text-lg font-black tracking-tight">
                SMART HI-TECH ENGG.
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Specialized in precision manufacturing of Dish Heads (140 mm – 3,000 mm dia | 3 mm – 32 mm thk), 
              Sand & Carbon Filter pressure vessels, sheet rolling, pipe bending, and structural profile rolling in Coimbatore.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-blue-300 font-medium">
              <ShieldCheck size={15} /> Estd. {COMPANY_INFO.established} by {COMPANY_INFO.founder}
            </div>
            <div className="text-xs text-slate-300 mt-1">
              Proprietor: <strong className="text-white font-semibold">{COMPANY_INFO.proprietor}</strong>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-7 after:h-0.5 after:bg-primary-light">
              Our Products
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#dish-head" className="text-slate-300 hover:text-blue-400 text-xs sm:text-sm transition-all duration-150 inline-block hover:translate-x-1">Dish Head / Dished Head</a></li>
              <li><a href="#filter-vessels" className="text-slate-300 hover:text-blue-400 text-xs sm:text-sm transition-all duration-150 inline-block hover:translate-x-1">Sand & Carbon Filter Vessels</a></li>
              <li><a href="#rolling-works" className="text-slate-300 hover:text-blue-400 text-xs sm:text-sm transition-all duration-150 inline-block hover:translate-x-1">Sheet Rolling (3mm – 8mm)</a></li>
              <li><a href="#rolling-works" className="text-slate-300 hover:text-blue-400 text-xs sm:text-sm transition-all duration-150 inline-block hover:translate-x-1">Pipe Bending (1&quot; – 4&quot;)</a></li>
              <li><a href="#rolling-works" className="text-slate-300 hover:text-blue-400 text-xs sm:text-sm transition-all duration-150 inline-block hover:translate-x-1">Structural Section Rolling</a></li>
              <li><a href="#products" className="text-slate-300 hover:text-blue-400 text-xs sm:text-sm transition-all duration-150 inline-block hover:translate-x-1">Heavy Custom Fabrication</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-7 after:h-0.5 after:bg-primary-light">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#products" className="text-slate-300 hover:text-blue-400 text-xs sm:text-sm transition-all duration-150 inline-block hover:translate-x-1">Technical Capabilities</a></li>
              <li><a href="#gallery" className="text-slate-300 hover:text-blue-400 text-xs sm:text-sm transition-all duration-150 inline-block hover:translate-x-1">Workshop Gallery</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-blue-400 text-xs sm:text-sm transition-all duration-150 inline-block hover:translate-x-1">About Our Heritage</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-blue-400 text-xs sm:text-sm transition-all duration-150 inline-block hover:translate-x-1">Workshop Location & Map</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-blue-400 text-xs sm:text-sm transition-all duration-150 inline-block hover:translate-x-1">Send Direct Inquiry</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Address */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-7 after:h-0.5 after:bg-primary-light">
              Workshop Address
            </h4>
            
            <div className="flex items-start gap-2.5 mb-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <MapPin size={18} className="text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Smart Hi-Tech Engg.</strong><br />
                {COMPANY_INFO.address.line1},<br />
                {COMPANY_INFO.address.line2},<br />
                {COMPANY_INFO.address.city} – {COMPANY_INFO.address.pincode}.
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <Phone size={18} className="text-blue-400 shrink-0 mt-0.5" />
              <div>
                <a href={`tel:${COMPANY_INFO.phones[0].number}`} className="hover:text-white transition-colors">{COMPANY_INFO.phones[0].formatted}</a> (N. Damodharan)<br />
                <a href={`tel:${COMPANY_INFO.phones[1].number}`} className="hover:text-white transition-colors">{COMPANY_INFO.phones[1].formatted}</a> (Office)
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10 text-xs text-slate-500">
          <div>
            © {CURRENT_YEAR} <strong className="text-slate-400">Smart Hi-Tech Engg.</strong> (Proprietor: {COMPANY_INFO.proprietor}). All rights reserved.
          </div>
          <div>
            Coimbatore, Tamil Nadu • Precision Heavy Engineering & Fabrication
          </div>
          <button 
            onClick={scrollToTop} 
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-primary px-3 py-1.5 rounded-lg border border-white/10 transition-all duration-200 cursor-pointer"
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
