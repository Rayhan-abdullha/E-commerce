"use client";
import React, { useState } from 'react';
import CartDrawer from './components/cart/Drawer';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
// @ts-ignore
import './globals.css';
import SearchOverlay from './components/layout/SearchOverlay';
import Link from 'next/link';
import BottomNav from './components/layout/BottomNav';


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
            <Link href="/" className="hover:text-black transition-colors text-black">Home</Link>
            <Link href="/admin" className="hover:text-black transition-colors">Admin</Link>
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
        <BottomNav setOpenSearch={() => setIsSearchOpen(true)} setOpenCart={() => setIsCartOpen(true)} />
      </body>
    </html>
  );
}