"use client";
import React, { useEffect } from 'react';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  const handleCheckout = () => {
    location.href = '/checkout';
    onClose();
  };
    useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);
  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in" onClick={onClose} />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-black italic tracking-tighter">Your Bag</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar">
          {/* Cart Item */}
          <div className="flex gap-4 items-center">
            <div className="w-20 h-24 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              <img src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=200" className="object-cover w-full h-full" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold">Obsidian Desk Lamp</h3>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Interior</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm font-medium">$210.00</span>
                <div className="flex items-center gap-3 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 text-xs">
                  <button>-</button>
                  <span className="font-bold">1</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 border-t border-gray-100 space-y-4">
          <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
            <span className="text-gray-400">Subtotal</span>
            <span>$210.00</span>
          </div>
          <button onClick={handleCheckout} className="w-full bg-black text-white py-5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] active:scale-95 transition-all shadow-xl shadow-black/10">
            Checkout Now
          </button>
          <p className="text-[9px] text-gray-400 text-center uppercase tracking-tighter">Shipping & taxes calculated at checkout</p>
        </div>
      </div>
    </div>
  );
}