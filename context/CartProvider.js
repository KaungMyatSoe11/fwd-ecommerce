"use client";
import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartProducts.length);
  }, [cartProducts]);

  const addCart = (product) => {
    console.log(product);
    const isExistProduct = cartProducts.find(
      (cProduct) => cProduct.id == product.id
    );

    if (isExistProduct) {
      return;
    }
    setCartProducts([...cartProducts, product]);
  };

  return (
    <CartContext.Provider value={{ cartProducts, addCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
