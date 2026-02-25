"use client";
export function DeleteModal({ isOpen, onClose, onConfirm, itemName }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto">
          ⚠️
        </div>
        <h3 className="text-xl font-bold text-center mb-2">Are you sure?</h3>
        <p className="text-gray-500 text-center text-sm mb-8">
          You are about to delete <span className="font-bold text-black italic">"{itemName}"</span>. This action cannot be undone.
        </p>
        <div className="flex flex-col gap-3">
          <button className="w-full bg-red-500 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest active:scale-95 transition-all">
            Yes, Delete Product
          </button>
          <button onClick={onClose} className="w-full py-4 rounded-2xl font-bold text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-all">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}