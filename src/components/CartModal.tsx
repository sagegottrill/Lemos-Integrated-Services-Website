import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem } from '@/types/product';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartModal: React.FC<CartModalProps> = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem 
}) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-end">
      <div className="bg-white h-full w-full max-w-md shadow-2xl overflow-y-auto">
        <div className="sticky top-0 bg-[#0D9BFF] text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-black">YOUR CART</h2>
          <button onClick={onClose} className="hover:bg-white/20 rounded-full p-2 transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-12">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-[#0D9BFF] font-bold">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 hover:bg-gray-300 rounded-full p-1"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 hover:bg-gray-300 rounded-full p-1"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="ml-auto text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t-2 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold">Total:</span>
                  <span className="text-3xl font-black text-[#0D9BFF]">${total}</span>
                </div>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-3 rounded-full transition-colors">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
