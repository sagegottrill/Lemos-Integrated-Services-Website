import React, { useState } from 'react';

interface OrderFormProps {
  cartItems: Array<{ name: string; quantity: number }>;
}

const OrderForm: React.FC<OrderFormProps> = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
      <h2 className="text-3xl font-black text-[#0D9BFF] mb-6">ELEVATE YOUR VIBE</h2>
      <p className="text-gray-600 mb-6">
        Fill out the form to place your order, and we'll deliver fresh style to your door.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Your name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0D9BFF] focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Email address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0D9BFF] focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Quantity</label>
          <input
            type="number"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0D9BFF] focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Delivery address</label>
          <textarea
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0D9BFF] focus:outline-none"
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-3 rounded-full transition-colors"
        >
          {submitted ? '✓ Order Submitted!' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
