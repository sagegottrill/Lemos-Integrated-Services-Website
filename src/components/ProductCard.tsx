import React from 'react';
import { Product } from '@/types/product';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-black text-[#0D9BFF]">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full flex items-center gap-2 transition-colors"
          >
            <Plus size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
