import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onNavigate }) => {
  return (
    <header className="bg-[#0D9BFF] text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight cursor-pointer" onClick={() => onNavigate('home')}>
          FRESH THREADS
        </h1>
        <nav className="flex items-center gap-6">
          <button onClick={() => onNavigate('shop')} className="hover:text-yellow-300 transition-colors font-semibold">
            Shop
          </button>
          <button onClick={() => onNavigate('lookbook')} className="hover:text-yellow-300 transition-colors font-semibold">
            Lookbook
          </button>
          <button onClick={onCartClick} className="relative hover:text-yellow-300 transition-colors">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
