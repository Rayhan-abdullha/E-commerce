// components/layout/BottomNav.tsx
import { Home, Search, ShoppingBag, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 flex justify-around p-4 md:hidden z-50">
      <Home className="w-6 h-6 text-gray-900" />
      <Search className="w-6 h-6 text-gray-400" />
      <ShoppingBag className="w-6 h-6 text-gray-400" />
      <User className="w-6 h-6 text-gray-400" />
    </nav>
  );
}