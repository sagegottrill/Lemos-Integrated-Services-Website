import React from 'react';

interface HeroSectionProps {
  onShopClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onShopClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-[#0D9BFF] to-[#0B7ACC] text-white py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68fb792cf485dc546d72cf48_1761311120014_7a5d51dd.webp" 
          alt="Fashion background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            FRESH LOOKS<br />FRESH ENERGY!
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            See how our fans rock our boldest looks. Get inspired, remix your style, and show us yours.
          </p>
          <button
            onClick={onShopClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-black py-4 px-8 rounded-full text-lg transition-all hover:scale-105"
          >
            Shop the latest drop
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
