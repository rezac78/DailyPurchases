"use client";
import React, { useState } from "react";
import ProductForm from "../components/common/ProductForm/ProductForm";
import { Product } from "../auth/interfaces";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import Card from "@/components/common/Card/Card";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  return (
    <>
      <Header />
      <div
        className="p-4 max-w-7xl mx-auto"
        style={{ minHeight: "calc(100vh - 128px)" }}
      >
        <ProductForm addProduct={addProduct} />
        <Card products={products} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
