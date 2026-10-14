import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

const BANNERS = [
  {
    id: 'dish-head',
    targetId: '#dish-head',
    tag: 'Diameter: 140 mm – 3,000 mm • Thickness: 3 mm – 32 mm',
    title: 'Dish Head / Dished Head',
    subtitle: 'Precision Hydraulic Pressed & Spun Heads',
    desc: 'Manufactured for pressure vessels, boilers, and industrial tanks according to ASME and DIN standards with edge weld beveling.',
    image: '/images/dished_heads.jpg',
    actionText: 'Explore Dish Heads'
  },
  {
    id: 'filter-vessels',
    targetId: '#filter-vessels',
    tag: 'In-House Fabricated Dual Train Systems',
    title: 'Sand Filter & Carbon Filter Vessels',
    subtitle: 'Industrial Water & Process Treatment Vessels',
    desc: 'Complete pressure filter vessels with interconnecting frontal manifolds, distribution laterals, tripod legs, and hydrostatic testing.',
    image: '/images/filter_vessels_1.jpg',
    actionText: 'View Filter Vessels'
  },
  {
    id: 'rolling-works',
    targetId: '#rolling-works',
    tag: 'Sheet Rolling: 3mm – 8mm • Pipe Bending: 1" – 4"',
    title: 'Sheet Rolling & Structural Section Works',
    subtitle: 'L-Angle • I-Beam • C-Channel • MS Flat Rolling',
    desc: '3-roller cold plate bending for cylinders/cones and specialized hydraulic section rolling preventing flange distortion.',
    image: '/images/sheet_rolling.jpg',
    actionText: 'View Rolling Works'
  }
];

export default function HeroBannerSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const timerRef = useRef(null);

  // Auto-slide every 3 seconds (3000ms)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % BANNERS.length);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIdx]);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrentIdx((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrentIdx((prev) => (prev + 1) % BANNERS.length);
  };

  const handleDotClick = (idx, e) => {
    e.stopPropagation();
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrentIdx(idx);
  };

  // When clicking anywhere on banner or button, move to respective section
  const handleMoveToSection = (targetId) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-navy-dark text-white overflow-hidden h-[540px] md:h-[600px] lg:h-[620px]">
      {/* Quick Jump Pills on top right */}
      <div className="hidden md:flex absolute top-5 right-6 z-30 gap-2">
        {BANNERS.map((banner, idx) => {
          const isActive = currentIdx === idx;
          return (
            <button
              key={banner.id}
              onClick={(e) => {
                e.stopPropagation();
                handleDotClick(idx, e);
                handleMoveToSection(banner.targetId);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border backdrop-blur-md cursor-pointer ${isActive
                  ? 'bg-primary text-white border-blue-400 shadow-md shadow-blue-900/40'
                  : 'bg-slate-900/80 text-slate-300 border-white/20 hover:bg-slate-800 hover:text-white'
                }`}
            >
              {idx + 1}. {banner.title.split(' ')[0]}
            </button>
          );
        })}
      </div>

      {/* 3 Slides */}
      <div className="relative w-full h-full">
        {BANNERS.map((banner, idx) => {
          const isActive = currentIdx === idx;
          return (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out cursor-pointer ${isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                }`}
              onClick={() => handleMoveToSection(banner.targetId)}
              title={`Click to jump to ${banner.title}`}
            >
              {/* Background Photo with smooth zoom */}
              <div
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[3500ms] ease-out ${isActive ? 'scale-100' : 'scale-105'
                  }`}
                style={{ backgroundImage: `url(${banner.image})` }}
              />



              {/* Centered Content Container */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pt-8 pb-16 sm:py-0">
                <div className="max-w-2xl lg:max-w-3xl">







                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => handleMoveToSection(banner.targetId)}
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base bg-gradient-to-r from-[#0b4db7] via-[#1e40af] to-[#0369a1] text-white shadow-lg shadow-blue-950/50 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200 border border-white/20 active:translate-y-0 cursor-pointer"
                    >
                      {banner.actionText} <ArrowRight size={18} />
                    </button>


                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrow Controls */}
      <button
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full items-center justify-center bg-slate-900/70 hover:bg-primary text-white border border-white/20 hover:border-blue-400 backdrop-blur-md transition-all duration-200 hover:scale-105 cursor-pointer shadow-lg"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full items-center justify-center bg-slate-900/70 hover:bg-primary text-white border border-white/20 hover:border-blue-400 backdrop-blur-md transition-all duration-200 hover:scale-105 cursor-pointer shadow-lg"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Bottom Indicators with 3-second animated progress */}
      <div className="absolute bottom-5 inset-x-0 z-30 flex items-center justify-center gap-3">
        {BANNERS.map((banner, idx) => {
          const isActive = currentIdx === idx;
          return (
            <button
              key={banner.id}
              className={`h-1.5 rounded-full transition-all duration-300 relative overflow-hidden cursor-pointer ${isActive ? 'w-14 bg-white/40' : 'w-9 bg-white/25 hover:bg-white/40'
                }`}
              onClick={(e) => handleDotClick(idx, e)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {isActive && <span className="absolute inset-0 bg-sky-400 animate-progress" key={currentIdx} />}
            </button>
          );
        })}
      </div>
    </section>
  );
}
