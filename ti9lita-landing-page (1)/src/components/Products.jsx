import React from "react";

export const Products = () => (
  <section className="p-8 bg-gray-100">
    <h2 className="text-2xl font-semibold text-center mb-6">Discover the Collection</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div className="bg-white p-4 rounded shadow text-center">
        <img src="/tee.png" alt="T-shirt" className="mx-auto mb-2 h-40 object-contain" />
        <h3 className="font-semibold">Ti9lita Tee</h3>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <img src="/mug.png" alt="Mug" className="mx-auto mb-2 h-40 object-contain" />
        <h3 className="font-semibold">Ti9lita Mug</h3>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <img src="/hoodie.png" alt="Hoodie" className="mx-auto mb-2 h-40 object-contain" />
        <h3 className="font-semibold">Ti9lita Hoodie</h3>
      </div>
    </div>
  </section>
);