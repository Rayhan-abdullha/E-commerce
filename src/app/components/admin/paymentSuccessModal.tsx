"use client";
import React, { useEffect } from 'react';

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
  trxId: string;
  amount: string;
};

export default function SuccessModal({ isOpen, onClose, trxId, amount }: SuccessModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      {/* Backdrop with Heavy Blur */}
      <div 
        className="absolute inset-0 bg-white/60 backdrop-blur-xl animate-in fade-in duration-500" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-sm bg-white border border-gray-100 rounded-[3.5rem] p-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] text-center animate-in zoom-in-95 slide-in-from-bottom-10 duration-700">
        
        {/* Animated Icon */}
        <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-8 animate-bounce shadow-xl shadow-black/20">
          ✓
        </div>

        <h2 className="text-3xl font-black italic tracking-tighter mb-4">Object Secured.</h2>
        <p className="text-gray-400 text-xs leading-relaxed mb-10 px-4">
          Transaction verified. Your curated selection is moving to the fulfillment stage.
        </p>

        {/* Receipt Details */}
        <div className="bg-gray-50/50 border border-gray-100 p-6 rounded-[2rem] space-y-4 mb-10">
          <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-gray-400">
            <span>Ref. ID</span>
            <span className="text-black italic">{trxId}</span>
          </div>
          <div className="h-px bg-gray-100 w-full" />
          <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-gray-400">
            <span>Total Settled</span>
            <span className="text-black font-bold">${amount}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button 
            onClick={() => location.href = "/"}
            className="w-full bg-black text-white py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] active:scale-95 transition-all shadow-lg"
          >
            Continue Exploring
          </button>
          <button className="w-full text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
            Download Invoice PDF
          </button>
        </div>
      </div>
    </div>
  );
}