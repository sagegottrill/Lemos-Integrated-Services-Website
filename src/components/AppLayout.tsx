import React, { useState, useRef } from 'react';
import { Product, CartItem } from '@/types/product';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import LookbookGrid from './LookbookGrid';
import ShopSection from './ShopSection';
import OrderForm from './OrderForm';
import CartModal from './CartModal';

const AppLayout: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const scrollToShop = () => {
    shopRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
        onNavigate={(section) => {
          if (section === 'shop') scrollToShop();
        }}
      />
      
      <HeroSection onShopClick={scrollToShop} />
      <MissionSection onExploreClick={scrollToShop} />
      <LookbookGrid />
      
      <div ref={shopRef}>
        <ShopSection onAddToCart={handleAddToCart} />
      </div>
      
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <OrderForm cartItems={cartItems.map(item => ({ name: item.name, quantity: item.quantity }))} />
      </section>

      <Footer />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default AppLayout;
