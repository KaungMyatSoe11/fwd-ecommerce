"use client";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const loadProduct = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const { products } = await res.json();

    setProducts([...products]);
    const productFilter = products.filter((product) => product.rating > 4.5);
    const pProduct = productFilter.slice(0, 4);
    console.log(pProduct);
    // productFilter = productFilter.slice(0, 5);
    setPopularProducts([...pProduct]);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products, popularProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
