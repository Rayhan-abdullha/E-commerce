"use client";
export default function ProductDrawer({ isOpen, onClose, initialData = null }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      
      {/* Drawer Content */}
      <div className="relative w-full max-w-xl bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-black">{initialData ? 'Edit Product' : 'Add New Product'}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">✕</button>
        </div>

        <form className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar">
          {/* Image Upload Area */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Product Image</label>
            <div className="border-2 border-dashed border-gray-100 rounded-[2rem] p-10 flex flex-col items-center justify-center hover:border-black/10 transition-colors cursor-pointer bg-gray-50/50">
              <span className="text-2xl mb-2">📸</span>
              <p className="text-xs text-gray-500 font-medium">Click to upload or drag and drop</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Product Name</label>
              <input type="text" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-black/5" placeholder="e.g. Minimalist Lamp" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Price ($)</label>
              <input type="number" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-black/5" placeholder="0.00" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Stock Quantity</label>
              <input type="number" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-black/5" placeholder="100" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Category</label>
            <select className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-black/5 appearance-none">
              <option>Furniture</option>
              <option>Lighting</option>
              <option>Decor</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Description</label>
            <textarea rows={4} className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-black/5 resize-none" placeholder="Describe your product..."></textarea>
          </div>
        </form>

        <div className="p-8 border-t border-gray-100 bg-gray-50/50 flex gap-4">
          <button className="flex-1 bg-black text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest active:scale-95 transition-all">
            {initialData ? 'Save Changes' : 'Publish Product'}
          </button>
          <button onClick={onClose} className="px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest border border-gray-200 hover:bg-white active:scale-95 transition-all">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}