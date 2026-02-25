"use client";
import React from 'react';

const PRODUCTS = [
  { id: 1, name: "Obsidian Desk Lamp", price: 210, img: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=600", cat: "Interior" },
  { id: 2, name: "Terra Cotta Set", price: 85, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600", cat: "Dining" },
  { id: 3, name: "Canvas Weekender", price: 340, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600", cat: "Travel" },
  { id: 4, name: "Noir Notebook", price: 35, img: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600", cat: "Office" }
];

export default function HomePage() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  return (
    <div className="max-w-7xl mx-auto px-6 pt-12">
      <div className="mb-12">
        <h1 className="text-5xl font-light mb-4">Essence.</h1>
        <p className="text-gray-500 max-w-md">Objects designed for a life of purpose and simplicity.</p>
      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar mb-10 pb-2">
        {['All Objects', 'Interior', 'Dining', 'Workspace', 'Travel'].map((label, i) => (
          <button key={label} className={`whitespace-nowrap px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${i === 0 ? 'bg-black text-white shadow-lg' : 'bg-white text-gray-400 hover:text-black border border-gray-100'}`}>
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
      {PRODUCTS.map((p) => (
        <div key={p.id} className="group cursor-pointer">
          <div className="relative aspect-[3/4] bg-white rounded-[2rem] overflow-hidden mb-5 border border-gray-50 shadow-sm">
            
            <img
              src={p.img}
              alt={p.name}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay Buttons */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-4 
                            flex flex-col sm:flex-row gap-3 justify-center items-center 
                            opacity-0 group-hover:opacity-100 transition duration-300">

              <button
                onClick={() => setIsCartOpen(true)}
                className="w-full sm:w-auto bg-white px-4 py-2 rounded-full 
                          text-[10px] font-bold uppercase shadow-xl hover:bg-black hover:text-white transition"
              >
                Quick Add +
              </button>

              <button
                onClick={() => window.location.href = `/product/${p.id}`}
                className="w-full sm:w-auto bg-white px-4 py-2 rounded-full 
                          text-[10px] font-bold uppercase shadow-xl hover:bg-black hover:text-white transition"
              >
                View Details
              </button>

            </div>

          </div>

          <div className="px-1">
            <p className="text-[10px] uppercase font-black text-gray-300 mb-1">
              {p.cat}
            </p>
            <h3 className="text-sm font-medium text-gray-800">{p.name}</h3>
            <p className="text-sm font-light mt-1 text-gray-500">
              ${p.price}.00
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}