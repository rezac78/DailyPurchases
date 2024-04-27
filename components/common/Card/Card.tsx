// components/ProductForm.tsx
import React, { useState } from "react";
import { Product } from "@/auth/interfaces";
interface CardProps {
  products: Product[];
}
export default function Card({ products }: CardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <div className="p-4">
            <h3 className="text-lg font-semibold text-blue-700">
              {product.name}
            </h3>
            <p className="text-gray-600 mt-1">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
