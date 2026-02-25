"use client";
import React, { useState } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#FDFDFD]">
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR (Responsive) */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 transform transition-transform duration-300 ease-in-out p-8
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:block
      `}>
        <div className="flex items-center justify-between mb-12">
          <div className="text-xl font-black tracking-tighter">ADMIN.CORE</div>
          <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>✕</button>
        </div>
        
        <nav className="space-y-1">
          <AdminNavLink href="/admin" label="Dashboard" icon="📊" active />
          <AdminNavLink href="/admin/products" label="Products" icon="📦" />
          <AdminNavLink href="/admin/orders" label="Orders" icon="📑" />
          <AdminNavLink href="/admin/coupons" label="Coupons" icon="🏷️" />
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP MOBILE HEADER */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 md:hidden sticky top-0 z-30">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 -ml-2 text-2xl">
            ☰
          </button>
          <div className="font-bold text-sm tracking-tighter">ADMIN.CORE</div>
          <div className="w-8 h-8 bg-gray-100 rounded-full" /> {/* Avatar placeholder */}
        </header>

        <main className="p-6 md:p-12 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

function AdminNavLink({ href, label, icon, active = false }: any) {
  return (
    <a href={href} className={`
      flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-bold transition-all
      ${active ? 'bg-black text-white shadow-xl shadow-black/10' : 'text-gray-400 hover:bg-gray-50 hover:text-black'}
    `}>
      <span>{icon}</span>
      {label}
    </a>
  );
}