"use client";
import React, { useState, useEffect } from 'react';

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  // Lock scroll when search is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] bg-white animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        
        {/* Search Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="text-xl font-black tracking-tighter italic">LUXE.</div>
          <button 
            onClick={onClose}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] hover:text-gray-400 transition-colors"
          >
            Close <span className="text-lg">✕</span>
          </button>
        </div>

        {/* Input Field */}
        <div className="max-w-4xl mx-auto mb-20">
          <input 
            autoFocus
            type="text"
            placeholder="Search for objects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-5xl md:text-7xl font-light tracking-tighter outline-none placeholder:text-gray-100 italic"
          />
          <div className="h-px bg-gray-100 w-full mt-8" />
        </div>

        {/* Dynamic Content */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Trending/Recent Section */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Trending Searches</p>
            <ul className="space-y-4">
              {['Minimalist Lighting', 'Ceramic Sets', 'Travel Canvas', 'Office Objects'].map(term => (
                <li key={term}>
                  <button className="text-xl font-medium hover:italic hover:pl-2 transition-all duration-300">
                    {term}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Results Preview */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Quick Results</p>
            {query.length > 0 ? (
              <div className="space-y-6">
                 <div className="flex gap-4 items-center group cursor-pointer">
                   <div className="w-16 h-20 bg-gray-50 rounded-2xl overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=200" className="object-cover w-full h-full" />
                   </div>
                   <div>
                     <p className="text-sm font-bold group-hover:underline">Obsidian Desk Lamp</p>
                     <p className="text-xs text-gray-400">$210.00</p>
                   </div>
                 </div>
                 {/* Repeat or Map results here */}
              </div>
            ) : (
              <p className="text-sm text-gray-300 italic">Start typing to see curated results...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}