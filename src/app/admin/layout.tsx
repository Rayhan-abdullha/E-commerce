"use client";
import React, { useState, useEffect } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // --- SESSION STATE ---
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null = loading
  const [passInput, setPassInput] = useState("");
  const [error, setError] = useState(false);
  const ACCESS_KEY = "admin123";

  // Check for existing session on mount
  useEffect(() => {
    const session = sessionStorage.getItem("admin_core_session");
    if (session === "active") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passInput === ACCESS_KEY) {
      sessionStorage.setItem("admin_core_session", "active"); // STORE SESSION
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_core_session"); // CLEAR SESSION
    setIsAuthenticated(false);
  };

  // --- PREVENT FLICKER WHILE CHECKING SESSION ---
  if (isAuthenticated === null) return null;

  // --- 1. LOCKED VIEW ---
  if (!isAuthenticated) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#FDFDFD] px-6">
        <div className="max-w-sm w-full bg-white p-12 rounded-[3rem] shadow-2xl shadow-black/5 border border-gray-100 text-center animate-in zoom-in-95 duration-500">
          <div className="text-2xl font-black italic tracking-tighter mb-2">ADMIN.CORE</div>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">Session Encrypted</p>
          
          <form onSubmit={handleUnlock} className="space-y-4">
            <input 
              autoFocus
              type="password" 
              placeholder="ENTER ACCESS KEY"
              className={`w-full p-5 bg-gray-50 border-none rounded-2xl text-center text-xs font-bold tracking-[0.5em] outline-none transition-all ${error ? 'ring-2 ring-red-100' : 'focus:ring-2 focus:ring-black/10'}`}
              value={passInput}
              onChange={(e) => setPassInput(e.target.value)}
            />
            <button className="w-full bg-black text-white py-5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] active:scale-95 transition-all">
              Unlock Session
            </button>
          </form>
          {error && <p className="text-[9px] font-black text-red-400 uppercase tracking-widest mt-4">Invalid Key</p>}
        </div>
      </div>
    );
  }

  // --- 2. AUTHENTICATED VIEW ---
  return (
    <div className="flex min-h-screen bg-[#FDFDFD]">
      {/* SIDEBAR */}
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
          
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-bold text-red-400 hover:bg-red-50 transition-all mt-10"
          >
            <span>🔒</span> End Session
          </button>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <main className="p-6 md:p-12 animate-in fade-in duration-700">
          {children}
        </main>
      </div>
    </div>
  );
}

function AdminNavLink({ href, label, icon, active = false }: any) {
  return (
    <a href={href} className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-bold transition-all ${active ? 'bg-black text-white' : 'text-gray-400 hover:text-black'}`}>
      <span>{icon}</span> {label}
    </a>
  );
}