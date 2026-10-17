import { useState } from 'react';
import { PRODUCTS_SERVICES, COMPANY_INFO } from '../data/companyData';
import { 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Wrench 
} from 'lucide-react';

export default function ProductsServices() {
  const [selectedImages, setSelectedImages] = useState({});

  const getActiveImage = (product) => {
    return selectedImages[product.id] || product.image;
  };

  const getWhatsAppLink = (product) => {
    const text = encodeURIComponent(
      `Hello Smart Hi-Tech Engineering,\nI am interested in getting information for *${product.title}*.\nPlease share technical details and capacity availability.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-metallic-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-soft text-primary border border-primary/20 mb-3.5">
            <Wrench size={15} /> Core Capabilities & Products
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-metallic-900 mb-3.5 tracking-tight">
            Engineered to Exact Specifications
          </h2>
          <p className="text-sm sm:text-base text-metallic-600 leading-relaxed">
            From precision hot/cold formed dish heads to turnkey water filter pressure vessels and 
            heavy structural profile rolling, explore our complete manufacturing portfolio in Coimbatore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PRODUCTS_SERVICES.map((product) => {
            const activeImg = getActiveImage(product);
            return (
              <article 
                key={product.id} 
                id={product.id}
                className="bg-white border border-metallic-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 shadow-sm hover:shadow-xl hover:border-primary-light hover:-translate-y-1.5 scroll-mt-24 group"
              >
                <div className="relative h-56 overflow-hidden bg-metallic-900">
                  <img 
                    src={activeImg} 
                    alt={product.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3.5 right-3.5 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide backdrop-blur-sm shadow-md z-10">
                    {product.badge}
                  </span>

                  {product.secondaryImage && (
                    <div className="absolute bottom-3 right-3 flex gap-1 z-10 bg-black/70 backdrop-blur-md p-1 rounded-lg border border-white/20">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedImages(prev => ({ ...prev, [product.id]: product.image }));
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                          activeImg === product.image ? 'bg-primary text-white shadow-sm' : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        View 1
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedImages(prev => ({ ...prev, [product.id]: product.secondaryImage }));
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                          activeImg === product.secondaryImage ? 'bg-primary text-white shadow-sm' : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        View 2
                      </button>
                    </div>
                  )}
                </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-extrabold text-metallic-900 mb-2 leading-snug">
                  {product.title}
                </h3>
                <p className="text-sm text-metallic-600 leading-relaxed mb-4">
                  {product.shortDesc}
                </p>

                {/* Technical Specs Box */}
                <div className="bg-metallic-100 border border-metallic-200 rounded-xl p-3.5 mb-5">
                  {product.specs.map((spec, i) => (
                    <div 
                      key={i} 
                      className="flex justify-between items-start text-xs py-1.5 border-b border-dashed border-metallic-300 last:border-b-0 gap-2"
                    >
                      <span className="text-metallic-500 font-semibold shrink-0">{spec.label}:</span>
                      <span className="text-primary-dark font-bold text-right font-mono">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Key Features List */}
                <ul className="space-y-2 mb-6 flex-1">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-metallic-700">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Actions */}
                <div className="mt-auto grid grid-cols-2 gap-2.5">
                  <a 
                    href={getWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold bg-[#25d366] hover:bg-[#20ba5a] text-white shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageCircle size={15} /> WhatsApp
                  </a>

                  <a 
                    href={`tel:${COMPANY_INFO.phones[0].number}`}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
