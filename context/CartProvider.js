"use client";
import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isOpenCartPanel, setIsOpenCartPanel] = useState(false);
  const [cartCalculate, setCartCalculate] = useState(0);

  useEffect(() => {
    setCartCount(cartProducts.length);
  }, [cartProducts]);

  useEffect(() => {
    let cartTotalCost = 0;
    cartProducts.forEach((product) => {
      const eachProductCost = product.discountAmount
        ? product.discountAmount * product.orderQuantity
        : product.price * product.orderQuantity;
      cartTotalCost += eachProductCost;
    });
    setCartCalculate(cartTotalCost);
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
    const updatedProducts = cartProducts.map((product) => {
      if (product.id == update_product.id) {
        return update_product;
      }
      return product;
    });
    setCartProducts([...updatedProducts]);
  };

  const removeCart = (product_id) => {
    const deletedProduct = cartProducts.filter(
      (product) => product.id !== product_id
    );
    setCartProducts([...deletedProduct]);
  };

  const AddAllFavoriteProductsToCart = (favoriteProducts) => {
    debugger;
    let checkFavoriteProducts = [];
    favoriteProducts.forEach((product) => {
      const isExit = cartProducts.find((p) => p.id == product.id);
      if (!isExit) {
        product.orderQuantity = 1;
        if (product.discountPercentage) {
          product.discountAmount = Math.round(
            product.price - product.price * (product.discountPercentage / 100)
          );
        }
        checkFavoriteProducts.push(product);
      }
    });
    setCartProducts([...cartProducts, ...checkFavoriteProducts]);
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
        cartCalculate,
        removeCart,
        AddAllFavoriteProductsToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
