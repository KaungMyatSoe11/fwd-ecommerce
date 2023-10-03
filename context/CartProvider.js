"use client";
import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isOpenCartPanel, setIsOpenCartPanel] = useState(false);

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

  const cartUpdate = (update_product) => {
    console.log(update_product);
   const updatedProducts= cartProducts.map(product=>{
      if(product.id == update_product.id){
        return update_product
      }
      return product
    })
    setCartProducts([...updatedProducts])
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addCart,
        cartCount,
        isOpenCartPanel,
        setIsOpenCartPanel,
        cartUpdate,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
