"use client";
import React, { useState, useEffect } from 'react';

interface EditProductProps {
  product: any; // The product data passed from the table
  isOpen: boolean;
  onClose: () => void;
  onSave?: (updatedProduct: any) => void;
}

export default function EditProductDrawer({ product, isOpen, onClose, onSave }: EditProductProps) {
  const [formData, setFormData] = useState(product);

  // Sync state when a different product is selected
  useEffect(() => {
    setFormData(product);
  }, [product]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[150] flex justify-end">
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-xs animate-in fade-in duration-300" 
        onClick={onClose} 
      />

      {/* Main Drawer */}
      <div className="relative w-full max-w-xl bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 ease-out">
        
        {/* Header */}
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-black italic tracking-tighter">Edit Product</h2>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Product ID: #{formData?.id}</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Form Content */}
        <form id="edit-form" onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
          
          {/* Visual Preview Section */}
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Media Assets</label>
            <div className="group relative aspect-video w-full rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100">
              <img 
                src={formData?.image} 
                alt="Preview" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button type="button" className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold shadow-lg">Change Image</button>
              </div>
            </div>
          </div>

          {/* Basic Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Title</label>
              <input 
                name="name"
                value={formData?.name}
                onChange={handleChange}
                className="w-full p-5 bg-gray-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-black/5 outline-none transition-all" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Price ($)</label>
                <input 
                  name="price"
                  type="number"
                  value={formData?.price}
                  onChange={handleChange}
                  className="w-full p-5 bg-gray-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-black/5 outline-none" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Stock Unit</label>
                <input 
                  name="stock"
                  type="number"
                  value={formData?.stock}
                  onChange={handleChange}
                  className="w-full p-5 bg-gray-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-black/5 outline-none" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Category</label>
              <select 
                name="category"
                value={formData?.category}
                onChange={handleChange}
                className="w-full p-5 bg-gray-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-black/5 outline-none appearance-none cursor-pointer"
              >
                <option value="Furniture">Furniture</option>
                <option value="Lighting">Lighting</option>
                <option value="Decor">Decor</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Description</label>
              <textarea 
                name="description"
                rows={4}
                value={formData?.description}
                onChange={handleChange}
                className="w-full p-5 bg-gray-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-black/5 outline-none resize-none"
              />
            </div>
          </div>
        </form>

        {/* Action Footer */}
        <div className="p-8 border-t border-gray-100 bg-white sticky bottom-0 flex gap-4">
          <button 
            type="submit" 
            form="edit-form"
            className="flex-1 bg-black text-white py-5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] shadow-xl shadow-black/10 active:scale-95 transition-all"
          >
            Update Product
          </button>
          <button 
            type="button"
            onClick={onClose}
            className="px-8 py-5 rounded-2xl border border-gray-200 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-black hover:border-black transition-all"
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}