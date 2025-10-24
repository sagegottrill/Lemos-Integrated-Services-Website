import React from 'react';

interface MissionSectionProps {
  onExploreClick: () => void;
}

const MissionSection: React.FC<MissionSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-[#0D9BFF] mb-6">
              OUR<br />MISSION
            </h2>
            <button
              onClick={onExploreClick}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-black py-3 px-8 rounded-full transition-all hover:scale-105 mb-8"
            >
              Explore our collections
            </button>
            <p className="text-lg text-[#0D9BFF] leading-relaxed">
              Fresh Threads exists to shake up wardrobes with color and confidence. Fashion should be fun, 
              fearless, and 100% you!
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68fb7910ffc67425074d7800_1761311015763_20060c6c.jpg" 
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
