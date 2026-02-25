"use client";
export default function OrderDetail({ isOpen, onClose, order }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        
        <div className="p-8 border-b flex justify-between items-center">
          <h2 className="text-2xl font-black italic tracking-tighter">Order Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-10">
          {/* Summary Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Status</p>
              <select className="bg-gray-50 border-none rounded-xl p-3 text-xs font-bold w-full outline-none focus:ring-1 focus:ring-black">
                <option>Pending</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Total Paid</p>
              <p className="text-xl font-bold">${order?.total}</p>
            </div>
          </div>

          {/* Items List */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Purchased Items</p>
            <div className="space-y-4">
              {[1, 2].map(item => (
                <div key={item} className="flex gap-4 items-center">
                  <div className="w-14 h-14 bg-gray-100 rounded-2xl overflow-hidden border">
                    <img src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=100" className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">Arc Table Lamp</p>
                    <p className="text-xs text-gray-400">Qty: 1 • Matte Black</p>
                  </div>
                  <p className="text-sm font-medium">$125.00</p>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Info */}
          <div className="bg-gray-50 p-6 rounded-[2rem]">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Shipping Address</p>
            <p className="text-sm font-medium leading-relaxed">
              Justin Mason<br />
              123 Studio Street, Apt 4B<br />
              Brooklyn, NY 11211<br />
              United States
            </p>
          </div>
        </div>

        <div className="p-8 border-t bg-gray-50/50">
          <button className="w-full bg-black text-white py-5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] active:scale-95 transition-all">
            Update Order Status
          </button>
        </div>
      </div>
    </div>
  );
}