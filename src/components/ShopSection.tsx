import React, { useState } from 'react';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import CategoryCard from './CategoryCard';

interface ShopSectionProps {
  onAddToCart: (product: Product) => void;
}

const ShopSection: React.FC<ShopSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  const categories = [
    { id: 'tops', title: 'Tops that talk', image: products.find(p => p.category === 'tops')?.image || '' },
    { id: 'pants', title: 'Power pants', image: products.find(p => p.category === 'pants')?.image || '' },
    { id: 'accessories', title: 'Accessories', image: products.find(p => p.category === 'accessories')?.image || '' },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-[#0D9BFF] mb-4">FIND YOUR FRESH</h2>
          <p className="text-xl text-gray-600">Scroll, click, and strut</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              title={cat.title}
              image={cat.image}
              onClick={() => setSelectedCategory(cat.id)}
            />
          ))}
        </div>

        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-8 text-[#0D9BFF] font-bold hover:underline"
          >
            ← Show all products
          </button>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
