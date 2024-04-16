// components/ProductForm.tsx
import React, { useState } from 'react';
import { ProductFormProps } from '../../../auth/interfaces';

const ProductForm: React.FC<ProductFormProps> = ({ addProduct }) => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct({ name, price });
    setName('');
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        className="p-2 border border-gray-300 rounded-md"
        required
      />
      <input
        type="number"
        value={price.toString()}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        placeholder="Price"
        className="p-2 border border-gray-300 rounded-md"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
