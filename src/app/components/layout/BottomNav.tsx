// components/layout/BottomNav.tsx
import { Home, Search, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';

export default function BottomNav({setOpenSearch, setOpenCart}: {setOpenSearch: () => void, setOpenCart: () => void}) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 flex justify-around p-4 md:hidden z-50">
      <Link href="/">
      <Home className="w-6 h-6 text-gray-900" /></Link>
      <Search className="w-6 h-6 text-gray-400 cursor-pointer" onClick={setOpenSearch} />
      <ShoppingBag  className="w-6 h-6 text-gray-400 cursor-pointer" onClick={setOpenCart} />
      <User className="w-6 h-6 text-gray-400" />
    </nav>
  );
}