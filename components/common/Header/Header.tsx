import ButtonPart from "@/components/shared/ButtonPart/ButtonPart";
import React from "react";
export default function Header() {
  return (
    <header className="bg-dark-blue text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Your Logo Here</h1>
        <button className="bg-button-blue hover:bg-blue-700 transition-colors text-white py-2 px-6 rounded-md">
          Add Product
        </button>
        <ButtonPart className="bg-button-blue hover:bg-blue-700 transition-colors text-white py-2 px-6 rounded-md" label="addButton">Add Product</ButtonPart>
      </div>
    </header>
  );
}
