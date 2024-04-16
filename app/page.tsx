"use client"
import { useState } from "react";
import ProductForm from '../components/common/ProductForm/ProductForm';

export default function Home() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  return (
    <div className="p-4 max-w-7xl mx-auto">
    <ProductForm addProduct={addProduct} />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {products.map((product, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-blue-700">{product.name}</h3>
            <p className="text-gray-600 mt-1">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
