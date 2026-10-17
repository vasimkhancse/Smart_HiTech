import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/companyData';
import { Image as ImageIcon, X } from 'lucide-react';

const CATEGORIES = ['All', 'Filter Vessels', 'Dish Heads', 'Sheet Rolling', 'Rolling Works', 'Fabrication'];

export default function GallerySection({ activeLightbox, onCloseLightbox, onOpenLightbox }) {
  const [selectedCat, setSelectedCat] = useState('All');

  const filteredItems = selectedCat === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCat);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-metallic-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-soft text-primary border border-primary/20 mb-3.5">
            <ImageIcon size={15} /> Workshop & Fabrication Gallery
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-metallic-900 mb-3.5 tracking-tight">
            Visual Showcase of Our Engineering Works
          </h2>
          <p className="text-sm sm:text-base text-metallic-600 leading-relaxed">
            Browse our completed equipment and workshop operations, including actual pressure filter vessels, 
            dish heads, and heavy section rolling in Coimbatore.
          </p>
        </div>

        {/* Filter buttons with item counts */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-10">
          {CATEGORIES.map((cat, idx) => {
            const count = cat === 'All' 
              ? GALLERY_ITEMS.length 
              : GALLERY_ITEMS.filter(item => item.category === cat).length;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer flex items-center gap-2 ${
                  selectedCat === cat
                    ? 'bg-primary text-white border-primary shadow-md shadow-blue-900/20'
                    : 'bg-white text-metallic-700 border-metallic-300 hover:border-primary hover:text-primary'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  selectedCat === cat ? 'bg-white/25 text-white' : 'bg-metallic-200 text-metallic-700'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden shadow-sm border border-metallic-200 bg-metallic-900 cursor-pointer aspect-[16/11] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary group"
              onClick={() => onOpenLightbox(item.image, item.title, item.desc)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
           
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div 
          className="fixed inset-0 bg-navy-deep/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onCloseLightbox}
        >
          <div 
            className="relative max-w-4xl w-full bg-metallic-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-3.5 right-3.5 bg-black/60 hover:bg-red-600/80 text-white p-2 rounded-full z-10 transition-colors border border-white/20 cursor-pointer"
              onClick={onCloseLightbox} 
              aria-label="Close image"
            >
              <X size={20} />
            </button>
            <div className="w-full max-h-[70vh] flex items-center justify-center bg-black/90">
              <img 
                src={activeLightbox.src} 
                alt={activeLightbox.title} 
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="p-5 bg-metallic-800 text-white border-t border-metallic-700">
              <h4 className="text-blue-400 text-lg font-bold mb-1">{activeLightbox.title}</h4>
              <p className="text-slate-300 text-sm">{activeLightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
