"use client";
import { DeleteModal } from '@/app/components/admin/DeleteModal';
import EditProductDrawer from '@/app/components/admin/EditProduct';
import ProductDrawer from '@/app/components/admin/ProductForm';
import React, { useState } from 'react';

export default function AdminProducts() {

  // --- STATE MANAGEMENT ---
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Demo Data
  const products = [
    { id: 1, name: "Arc Lamp", price: 125.00, stock: 42, image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=100" },
    { id: 2, name: "Ceramic Vase", price: 45.00, stock: 12, image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=100" },
  ];

  // --- HANDLERS ---
  const openEdit = (product: any) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

  const openAdd = () => {
    setSelectedProduct(null); // important
    setIsDrawerOpen(true);
  };

  const openDelete = (product: any) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="max-w-full">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black italic tracking-tighter">Inventory</h1>
          <p className="text-gray-400 text-sm">Manage your product listings and stock.</p>
        </div>
        <button 
          onClick={openAdd}
          className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest active:scale-95 transition-all shadow-xl shadow-black/10"
        >
          + Add Product
        </button>
      </div>

      {/* SEARCH */}
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="w-full p-4 bg-white border border-gray-100 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-sm"
        />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="p-6 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">Product</th>
                <th className="p-6 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 hidden sm:table-cell">Price</th>
                <th className="p-6 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">Stock</th>
                <th className="p-6 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((p) => (
                <tr key={p.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                        <img src={p.image} className="object-cover w-full h-full" alt="" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">{p.name}</p>
                        <p className="text-[10px] text-gray-400 sm:hidden">${p.price}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-sm font-medium text-gray-500 hidden sm:table-cell">${p.price}</td>
                  <td className="p-6">
                    <span className="text-xs font-bold bg-green-50 text-green-600 px-3 py-1 rounded-full">
                      {p.stock} in stock
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => openEdit(p)} 
                        className="text-xs font-bold text-black bg-gray-100 px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-all"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => openDelete(p)} 
                        className="text-xs font-bold text-red-500 bg-red-50 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ ADD DRAWER */}
      {isDrawerOpen && !selectedProduct && (
        <ProductDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          initialData={null}
        />
      )}

      {/* ✅ EDIT DRAWER */}
      {isDrawerOpen && selectedProduct && (
        <EditProductDrawer
          isOpen={isDrawerOpen}
          product={selectedProduct}
          onClose={() => setIsDrawerOpen(false)}
        />
      )}

      {/* DELETE MODAL */}
      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          itemName={selectedProduct?.name || ''}
        />
      )}
    </div>
  );
}