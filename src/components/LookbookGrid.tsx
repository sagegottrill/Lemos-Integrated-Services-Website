import React from 'react';

const lookbookImages = [
  'https://d64gsuwffb70l.cloudfront.net/68fb7910ffc67425074d7800_1761311008155_e5447d3e.jpg',
  'https://d64gsuwffb70l.cloudfront.net/68fb7910ffc67425074d7800_1761311011915_e6e74bfa.jpg',
  'https://d64gsuwffb70l.cloudfront.net/68fb7910ffc67425074d7800_1761311015763_20060c6c.jpg',
];

const LookbookGrid: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#0D9BFF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4">LOOKBOOK</h2>
        <p className="text-white text-xl mb-12 max-w-2xl">
          See how our fans rock our boldest looks. Get inspired, remix your style, and show us yours.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lookbookImages.map((img, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
              <img src={img} alt={`Lookbook ${idx + 1}`} className="w-full h-full object-cover aspect-square" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookbookGrid;
