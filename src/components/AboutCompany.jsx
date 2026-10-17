import { COMPANY_INFO } from '../data/companyData';
import { 
  Award, 
  ShieldCheck, 
  Factory, 
  Users, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';

export default function AboutCompany() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition with Experience Badge */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-metallic-200 h-80 sm:h-[440px] bg-metallic-900 group relative">
              <img 
                src="/images/about_facility_press.jpeg" 
                alt="Smart Hi-Tech Engineering Workshop Heavy Hydraulic Press and Fabrication Facility" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-semibold border border-white/20 flex items-center gap-1.5">
                <Factory size={14} className="text-blue-400" /> Chinnavedampatti Plant
              </div>
            </div>

            {/* Inset Secondary Image Card: Technicians at Work */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 w-48 lg:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white flex-col z-20">
              <div className="h-28 overflow-hidden">
                <img 
                  src="/images/about_workshop_team.jpeg" 
                  alt="Technicians operating 3-roll plate bending machine" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2.5 bg-slate-900 text-white">
                <div className="text-[11px] font-bold text-sky-400 leading-tight">In-House Rolling Works</div>
                <div className="text-[10px] text-slate-300 leading-tight mt-0.5">Hydraulic Plate Bending</div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-5 right-5 sm:right-6 bg-gradient-to-r from-[#0b4db7] via-[#1e40af] to-[#0369a1] text-white p-5 sm:p-6 rounded-2xl shadow-2xl border-2 border-white/30 text-center z-20">
              <div className="font-heading text-3xl sm:text-4xl font-black leading-none">12+</div>
              <div className="text-xs uppercase tracking-wider text-blue-200 mt-1.5 font-semibold">Years of Craftsmanship</div>
              <div className="text-[11px] text-blue-100 mt-0.5">
                Since {COMPANY_INFO.established}
              </div>
            </div>
          </div>

          {/* Right Column: Company Heritage & Leadership */}
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-soft text-primary border border-primary/20 mb-3.5">
              <Award size={15} /> Company Background & Leadership
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-metallic-900 mb-4 leading-tight">
              Committed to Developing Skills & Engineering Excellence
            </h3>
            <p className="text-base sm:text-lg text-primary-dark font-semibold mb-4 leading-relaxed">
              Established in {COMPANY_INFO.established} by founder <strong>{COMPANY_INFO.founder}</strong>, 
              now led by Proprietor <strong>{COMPANY_INFO.proprietor}</strong>.
            </p>
            <p className="text-sm sm:text-base text-metallic-600 leading-relaxed mb-6">
              Located in the industrial heartbeat of Coimbatore at <strong>#16, Vasanth Industrial Estate, Chinnavedampatti</strong>, 
              Smart Hi-Tech Engg. has earned a stellar reputation across Tamil Nadu and South India for high-tonnage dish head forming, 
              precision sheet rolling, hydraulic pipe bending, and customized pressure filter vessel fabrication.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-metallic-50 border border-metallic-200/70">
                <div className="w-9 h-9 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                  <Factory size={18} />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-metallic-900 mb-1">Heavy-Duty Infrastructure</h5>
                  <p className="text-xs text-metallic-500 leading-relaxed">Equipped with hydraulic presses and spinning machines handling up to 3,000 mm diameter and 32 mm thickness.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-metallic-50 border border-metallic-200/70">
                <div className="w-9 h-9 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-metallic-900 mb-1">Stringent Quality Testing</h5>
                  <p className="text-xs text-metallic-500 leading-relaxed">Strict dimensional checking, ultrasonic testing compatibility, and hydraulic pressure testing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-metallic-50 border border-metallic-200/70">
                <div className="w-9 h-9 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                  <Users size={18} />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-metallic-900 mb-1">Proprietor Direct Care</h5>
                  <p className="text-xs text-metallic-500 leading-relaxed">Direct communication with Proprietor N. Damodharan for prompt quotation and immediate job scheduling.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-metallic-50 border border-metallic-200/70">
                <div className="w-9 h-9 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-metallic-900 mb-1">Coimbatore Industrial Corridor</h5>
                  <p className="text-xs text-metallic-500 leading-relaxed">Easily accessible for logistics, raw material transport, and client visits in Chinnavedampatti.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <a 
                href={`tel:${COMPANY_INFO.phones[0].number}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-[#0b4db7] via-[#1e40af] to-[#0369a1] text-white shadow-md shadow-blue-900/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
              >
                Contact Proprietor Damodharan: {COMPANY_INFO.phones[0].formatted}
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
              >
                Get Directions to Workshop <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
