"use client";
import React, { useState } from 'react';
import CartDrawer from './components/cart/Drawer';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
// @ts-ignore
import './globals.css';
import SearchOverlay from './components/layout/SearchOverlay';
import Link from 'next/link';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F9F9F9] text-[#1A1A1A] antialiased`}>
        {/* Updated Header with Click Handler */}
        <header className="hidden md:flex justify-between items-center px-10 py-6 bg-white border-b border-gray-100 sticky top-0 z-40">
          <Link href="/" className="cursor-pointer hover:text-black transition-colors text-xl font-black tracking-tighter italic">LUXE.</Link>
          <nav className="flex gap-10 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="/" className="hover:text-black transition-colors text-black">Collections</a>
            <a href="#" className="hover:text-black transition-colors">New Arrivals</a>
            <a href="#" className="hover:text-black transition-colors">Journal</a>
          </nav>
          <div className="flex gap-6 text-sm items-center">
            <div className="flex gap-6 text-sm items-center">
            {/* SEARCH TRIGGER */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-400 hover:text-black transition-colors uppercase text-[10px] font-bold tracking-widest"
            >
              Search
              </button>
            </div>
            {/* THIS TRIGGERS THE DRAWER */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="font-bold flex items-center gap-2 group"
            >
              Cart <span className="bg-black text-white px-2 py-0.5 rounded-full text-[10px] group-hover:scale-110 transition-transform">0</span>
            </button>
          </div>
        </header>

        <main className="min-h-screen pb-28 md:pb-12">
          {children}
        </main>

        {/* The Cart Component */}
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        {/* Mobile Nav Trigger */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 flex justify-around p-4 md:hidden z-50">
           <button className="p-2">🏠</button>
           <button className="p-2">🔍</button>
           <button onClick={() => setIsCartOpen(true)} className="p-2 relative">
             🛍️
             <span className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full border border-white"></span>
           </button>
           <button className="p-2">👤</button>
        </nav>
      </body>
    </html>
  );
}