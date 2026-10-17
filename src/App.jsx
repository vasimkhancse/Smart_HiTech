import { useState } from 'react';
import Header from './components/Header';
import HeroBannerSlider from './components/HeroBannerSlider';
import ProductsServices from './components/ProductsServices';
import GallerySection from './components/GallerySection';
import AboutCompany from './components/AboutCompany';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [activeLightbox, setActiveLightbox] = useState(null);

  const handleOpenLightbox = (src, title, desc = '') => {
    setActiveLightbox({ src, title, desc });
  };

  const handleCloseLightbox = () => {
    setActiveLightbox(null);
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-metallic-50 pb-16 md:pb-0 selection:bg-primary-light selection:text-white">
      {/* Top Header & Sticky Navigation */}
      <Header />

      <main className="flex-1">
        {/* 3 Auto-Sliding Banners (Cycles Every 3 Seconds, Click to Move in Site) */}
        <HeroBannerSlider />

        {/* Core Products & Services Portfolio */}
        <ProductsServices />

        {/* Fabrication Yard & Machine Gallery with Zoom Lightbox */}
        <GallerySection
          activeLightbox={activeLightbox}
          onCloseLightbox={handleCloseLightbox}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Company Heritage & Leadership (Estd 2012 by R. Natarajan, Prop: N. Damodharan) */}
        <AboutCompany />

        {/* Workshop Address, Direct Lines & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
