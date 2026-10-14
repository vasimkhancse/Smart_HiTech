import { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    requirement: 'Dish Head / Dished Head',
    dimensions: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const sendDirectWhatsApp = () => {
    let msg = `*New Inquiry from Website*\n`;
    msg += `*Name:* ${formData.name || 'Not provided'}\n`;
    msg += `*Phone:* ${formData.phone || 'Not provided'}\n`;
    if (formData.company) msg += `*Company:* ${formData.company}\n`;
    msg += `*Requirement:* ${formData.requirement}\n`;
    if (formData.dimensions) msg += `*Dimensions/Specs:* ${formData.dimensions}\n`;
    if (formData.message) msg += `*Notes:* ${formData.message}\n`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-metallic-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-soft text-primary border border-primary/20 mb-3.5">
            <MapPin size={15} /> Contact & Workshop Visit
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-metallic-900 mb-3.5 tracking-tight">
            Get in Touch with Smart Hi-Tech Engg.
          </h2>
          <p className="text-sm sm:text-base text-metallic-600 leading-relaxed">
            Directly connect with Proprietor N. Damodharan for technical discussions, feasibility reviews, 
            or visit our fabrication facility in Chinnavedampatti, Coimbatore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Phone Cards & Location */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct Phone Numbers Card */}
            <div className="bg-navy-dark text-white rounded-2xl p-6 sm:p-7 border border-white/15 shadow-lg">
              <span className="text-xs text-blue-400 uppercase font-bold tracking-wider mb-2 block">
                Direct Proprietor & Yard Lines
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Call Our Engineering Team
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                Speak directly with our team for work schedules, drawing reviews, and project consultations.
              </p>

              <div className="space-y-3 mb-6">
                {COMPANY_INFO.phones.map((p, idx) => (
                  <a 
                    key={idx} 
                    href={`tel:${p.number}`} 
                    className="flex items-center justify-between bg-white/5 border border-white/10 p-3 sm:p-3.5 rounded-xl hover:bg-blue-600/25 hover:border-blue-400 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-600/25 flex items-center justify-center text-blue-400 shrink-0">
                        <Phone size={17} />
                      </div>
                      <div>
                        <div className="font-mono text-sm sm:text-base font-bold text-white">{p.formatted}</div>
                        <div className="text-[11px] text-slate-400">{p.name} {p.isPrimary ? '• Proprietor' : ''}</div>
                      </div>
                    </div>
                    <span className="text-xs text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                      Call Now →
                    </span>
                  </a>
                ))}
              </div>

              <div>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Damodharan,%20I%20would%20like%20to%20inquire%20about%20fabrication%20works.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-[#25d366] hover:bg-[#20ba5a] text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white border border-metallic-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <Building2 size={22} className="text-primary" />
                <h4 className="text-lg font-bold text-metallic-900">Workshop Address</h4>
              </div>

              <p className="text-xs sm:text-sm text-metallic-700 leading-relaxed mb-4">
                <strong>Smart Hi-Tech Engg.</strong><br />
                {COMPANY_INFO.address.line1},<br />
                {COMPANY_INFO.address.line2},<br />
                <strong>{COMPANY_INFO.address.city} – {COMPANY_INFO.address.pincode}</strong>,<br />
                Tamil Nadu, India.
              </p>

              <div className="flex items-center gap-2 text-xs text-metallic-600 mb-4">
                <Clock size={16} className="text-primary shrink-0" />
                <span>Working Hours: Mon – Sat (8:30 AM – 7:30 PM)</span>
              </div>

              {/* Map View */}
              <div className="rounded-xl overflow-hidden border border-metallic-200 h-44 mb-3.5">
                <iframe
                  title="Smart Hi-Tech Engineering Workshop Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?q=Vasanth%20Industrial%20Estate,%20Chinnavedampatti,%20Coimbatore&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  style={{ filter: 'contrast(1.05)' }}
                />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Vasanth+Industrial+Estate+Chinnavedampatti+Coimbatore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 active:translate-y-0"
              >
                <ExternalLink size={15} /> Open in Google Maps for Navigation
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-metallic-200 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-metallic-900 mb-2">
              Send an Engineering Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-metallic-600 mb-6">
              Fill out the details below and we will get back to you promptly with technical feasibility and quotation.
            </p>

            {submitted ? (
              <div className="space-y-4">
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-4 sm:p-5 rounded-xl flex items-start gap-3 text-sm">
                  <CheckCircle2 size={24} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold mb-1">Thank you, {formData.name}!</strong>
                    <p className="text-xs sm:text-sm text-emerald-800">
                      Your inquiry has been submitted. For immediate priority response, click below to forward this directly to Damodharan on WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={sendDirectWhatsApp}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-[#25d366] hover:bg-[#20ba5a] text-white shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <MessageCircle size={18} /> Forward to WhatsApp Now
                  </button>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-sm bg-metallic-800 hover:bg-metallic-900 text-white transition-all duration-200 cursor-pointer"
                  >
                    New Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-metallic-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-metallic-300 bg-metallic-50 text-metallic-900 text-sm focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-metallic-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-metallic-300 bg-metallic-50 text-metallic-900 text-sm focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-metallic-700 mb-1.5">Company / Factory Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Precision Equipments Ltd."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-metallic-300 bg-metallic-50 text-metallic-900 text-sm focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-metallic-700 mb-1.5">Requirement Category</label>
                    <select
                      className="w-full px-3.5 py-2.5 rounded-xl border border-metallic-300 bg-metallic-50 text-metallic-900 text-sm focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    >
                      <option value="Dish Head / Dished Head">Dish Head / Dished Head (140-3000mm)</option>
                      <option value="Sand & Carbon Filter Vessels">Sand & Carbon Filter Vessels</option>
                      <option value="Sheet Rolling">Sheet Rolling (3mm - 8mm)</option>
                      <option value="Pipe Bending">Pipe Bending (1 inch - 4 inch)</option>
                      <option value="Rolling Works">L-Angle / I-Beam / Channel / Flat Rolling</option>
                      <option value="Heavy Fabrication Work">All Kinds of Heavy Fabrication</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-metallic-700 mb-1.5">Dimensions / Thickness / Quantity</label>
                  <input
                    type="text"
                    placeholder="e.g. 1500mm Dia x 10mm Thk Torispherical, Qty: 4 nos"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-metallic-300 bg-metallic-50 text-metallic-900 text-sm focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-metallic-700 mb-1.5">Additional Instructions / Blueprints Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Provide material grade (e.g. SA516 Gr70, SS304, IS2062), delivery location, or timeline..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-metallic-300 bg-metallic-50 text-metallic-900 text-sm focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button 
                    type="submit" 
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#0b4db7] via-[#1e40af] to-[#0369a1] text-white shadow-md shadow-blue-900/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer active:translate-y-0"
                  >
                    <Send size={16} /> Submit Inquiry
                  </button>

                  <button 
                    type="button" 
                    onClick={sendDirectWhatsApp} 
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-[#25d366] hover:bg-[#20ba5a] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer active:translate-y-0"
                  >
                    <MessageCircle size={16} /> Send via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
