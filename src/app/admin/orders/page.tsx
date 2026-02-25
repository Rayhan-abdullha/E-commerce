"use client";
import OrderDetail from '@/app/components/admin/OrderDetails';
import React, { useState } from 'react';

// --- DEMO DATA ---
const ORDERS = [
  { id: "ORD-7721", customer: "sarah.j@email.com", date: "Feb 24, 2026", total: 210.00, status: "Pending", items: [
    { name: "Arc Lamp", qty: 1, price: 125, img: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=100" },
    { name: "Ceramic Vase", qty: 1, price: 85, img: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=100" }
  ], address: "123 Studio St, Brooklyn, NY" },
  { id: "ORD-7720", customer: "marcus.v@email.com", date: "Feb 23, 2026", total: 85.00, status: "Shipped", items: [
    { name: "Ceramic Vase", qty: 1, price: 85, img: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=100" }
  ], address: "456 Design Ave, Austin, TX" },
];

export default function AdminOrders() {
  const [filter, setFilter] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // --- ACTIONS ---
  const handleOpenDetails = (order: any) => {
    setSelectedOrder(order);
    setIsSidebarOpen(true);
  };

  const handleClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="max-w-full relative">
      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black italic tracking-tighter">Orders</h1>
          <p className="text-gray-400 text-sm">Manage customer fulfillment and status.</p>
        </div>
        <div className="flex gap-2 bg-gray-100 p-1 rounded-2xl">
          {['All', 'Pending', 'Shipped'].map((s) => (
            <button 
              key={s}
              onClick={() => setFilter(s)}
              className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === s ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="p-6 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">Order ID</th>
                <th className="p-6 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">Customer</th>
                <th className="p-6 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">Amount</th>
                <th className="p-6 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">Status</th>
                <th className="p-6 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {ORDERS.filter(o => filter === 'All' || o.status === filter).map((order) => (
                <tr key={order.id} className="group hover:bg-gray-50/30 transition-colors">
                  <td className="p-6 text-sm font-bold tracking-tighter">{order.id}</td>
                  <td className="p-6 text-sm font-medium">{order.customer}</td>
                  <td className="p-6 text-sm font-bold">${order.total.toFixed(2)}</td>
                  <td className="p-6">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      order.status === 'Pending' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <button 
                      onClick={() => handleOpenDetails(order)}
                      className="text-[10px] font-black uppercase tracking-widest text-black bg-gray-50 px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-all active:scale-95"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- ORDER DETAIL SIDEBAR --- */}
      {isSidebarOpen && <OrderDetail isOpen={isSidebarOpen} onClose={handleClose} order={selectedOrder} />}
    </div>
  );
}