"use client";
import AddToCartModal from '@/app/components/cart/AddToCartModal';
import React, { useState } from 'react';

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('Standard');
  const [isCartDone, setIsCartDone] = useState(false);
  const handleAddToCart = () => {
    setIsCartDone(true);
  }
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Sticky Image Gallery */}
        <div className="space-y-4 lg:sticky lg:top-32">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-white border border-gray-100 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=1200" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square rounded-2xl bg-gray-100 border border-transparent hover:border-black cursor-pointer transition-all overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=200" className="object-cover w-full h-full opacity-50 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-4 lg:pt-0">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-4">New Collection / Interior</p>
          <h1 className="text-5xl font-light italic tracking-tighter mb-6">Obsidian Desk Lamp</h1>
          <p className="text-2xl font-bold mb-8">$210.00</p>
          
          <div className="h-px bg-gray-100 w-full mb-8" />

          <div className="space-y-8">
            <p className="text-gray-500 leading-relaxed max-w-md">
              A masterclass in brutalist design. Hand-poured concrete base paired with a matte-finished obsidian steel arm. Perfect for focused creative work.
            </p>

            {/* Selection */}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Select Variant</label>
              <div className="flex gap-3">
                {['Standard', 'Limited Noir', 'Architect'].map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${selectedSize === size ? 'bg-black text-white border-black shadow-lg' : 'bg-transparent text-gray-400 border-gray-100 hover:border-gray-200'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button onClick={handleAddToCart} className="flex-1 bg-black text-white py-6 rounded-[2rem] font-bold text-[10px] uppercase tracking-[0.3em] active:scale-95 transition-all shadow-2xl shadow-black/20">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
      {
        isCartDone && <AddToCartModal isOpen={true} onClose={() => setIsCartDone(false)} product={{ name: "Obsidian Desk Lamp", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=200" }} />
      }
    </div>
  );
}