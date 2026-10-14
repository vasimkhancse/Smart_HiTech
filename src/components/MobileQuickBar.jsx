import { COMPANY_INFO } from '../data/companyData';
import { Phone, MessageCircle, Send, MapPin } from 'lucide-react';

export default function MobileQuickBar() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 bg-navy-dark border-t border-white/15 shadow-2xl z-40 p-2">
      <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
        <a 
          href={`tel:${COMPANY_INFO.phones[0].number}`}
          className="flex flex-col items-center justify-center gap-1 text-[11px] font-semibold py-1.5 px-2 rounded-lg flex-1 bg-blue-600/25 text-blue-200 border border-blue-400/30 active:scale-95 transition-transform"
        >
          <Phone size={17} />
          <span>Call</span>
        </a>

        <a 
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Smart%20Hi-Tech%20Engineering,%20I%20am%20interested%20in%20your%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[11px] font-semibold py-1.5 px-2 rounded-lg flex-1 bg-[#25d366] text-white active:scale-95 transition-transform"
        >
          <MessageCircle size={17} />
          <span>WhatsApp</span>
        </a>

        <a 
          href="#contact"
          onClick={handleScrollToContact}
          className="flex flex-col items-center justify-center gap-1 text-[11px] font-semibold py-1.5 px-2 rounded-lg flex-1 bg-gradient-to-r from-[#0b4db7] to-[#1e40af] text-white active:scale-95 transition-transform"
        >
          <Send size={17} />
          <span>Inquire</span>
        </a>

        <a 
          href="https://www.google.com/maps/search/?api=1&query=Vasanth+Industrial+Estate+Chinnavedampatti+Coimbatore"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[11px] font-semibold py-1.5 px-2 rounded-lg flex-1 bg-white/10 text-slate-200 active:scale-95 transition-transform"
        >
          <MapPin size={17} />
          <span>Map</span>
        </a>
      </div>
    </div>
  );
}
