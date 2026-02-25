"use client";
import React, { useState } from 'react';

export default function Checkout() {
  const [method, setMethod] = useState('bkash');
  const [isLoading, setIsLoading] = useState(false);

  // --- bKash Payment Handler ---
  const handlePayment = async () => {
    setIsLoading(true);
    try {
      // Calls the API route we created in the previous step
      const res = await fetch('/api/checkout/bkash', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          amount: "450.00", 
          orderId: `LUXE-${Math.floor(Math.random() * 10000)}` 
        }),
      });

      const data = await res.json();
      
      if (data.bkashURL) {
        window.location.href = data.bkashURL; // Redirect to bKash portal
      } else {
        alert("Payment initiation failed. Please check credentials.");
      }
    } catch (err) {
      console.error("Payment Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-6 pt-16 pb-20">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-light italic tracking-tighter">My Bag</h2>
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">1 Item</span>
      </div>

      <div className="space-y-6">
        {/* Item Card (Preserved) */}
        <div className="flex gap-6 p-5 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm">
          <div className="w-24 h-24 bg-gray-50 rounded-3xl overflow-hidden flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-sm font-bold tracking-tight">Minimalist Lounge Chair</h3>
            <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-1">Furniture</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-sm font-bold">$450.00</span>
              <div className="flex gap-4 items-center bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                <button className="text-xs hover:text-gray-400">-</button>
                <span className="text-xs font-bold">1</span>
                <button className="text-xs hover:text-gray-400">+</button>
              </div>
            </div>
          </div>
        </div>

        {/* --- NEW: Payment Method Selection --- */}
        <div className="space-y-3 pt-4">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Payment Method</p>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => setMethod('bkash')}
              className={`p-4 rounded-2xl border transition-all flex flex-col gap-3 ${method === 'bkash' ? 'border-black bg-white shadow-md' : 'border-gray-100 bg-gray-50 text-gray-400'}`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold italic text-[8px] ${method === 'bkash' ? 'bg-[#D12053] text-white' : 'bg-gray-200 text-gray-400'}`}>bKash</div>
              <span className="text-[10px] font-black uppercase tracking-widest">bKash Wallet</span>
            </button>
            <button 
              onClick={() => setMethod('card')}
              className={`p-4 rounded-2xl border transition-all flex flex-col gap-3 ${method === 'card' ? 'border-black bg-white shadow-md' : 'border-gray-100 bg-gray-50 text-gray-400'}`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[8px] ${method === 'card' ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'}`}>CARD</div>
              <span className="text-[10px] font-black uppercase tracking-widest">Credit Card</span>
            </button>
          </div>
        </div>

        {/* Promo Input (Preserved) */}
        <div className="relative group pt-4">
          <input 
            type="text" 
            placeholder="ADD PROMO CODE" 
            className="w-full p-6 bg-white rounded-3xl border border-gray-100 text-[10px] font-bold tracking-[0.3em] uppercase focus:ring-1 focus:ring-black outline-none transition-all"
          />
          <button className="absolute right-6 top-[calc(50%+8px)] -translate-y-1/2 text-[10px] font-black underline uppercase">Apply</button>
        </div>

        {/* Price Summary (Preserved) */}
        <div className="space-y-4 pt-10 px-2">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <span>Subtotal</span>
            <span className="text-black">$450.00</span>
          </div>
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between text-2xl font-light pt-6 border-t border-gray-100 mt-6 tracking-tighter italic">
            <span>Total</span>
            <span className="font-bold not-italic">$450.00</span>
          </div>
        </div>

        {/* Payment CTA (Updated with Loading & Logic) */}
        <button 
          onClick={handlePayment}
          disabled={isLoading}
          className="w-full bg-black text-white py-6 rounded-[2.5rem] font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl hover:shadow-black/20 active:scale-95 transition-all mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-3">
              <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              Securely Connecting...
            </div>
          ) : (
            `Complete with ${method.toUpperCase()}`
          )}
        </button>
        
        <p className="text-[9px] text-center text-gray-400 uppercase tracking-widest mt-4">
          All transactions are encrypted and secure.
        </p>
      </div>
    </div>
  );
}