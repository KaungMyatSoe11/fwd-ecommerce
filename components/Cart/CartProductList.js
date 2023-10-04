"use client";
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";
import CartProduct from "./CartProduct";


const CartProductList = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <div className="h-[75vh] overflow-y-auto" >
      
      {cartProducts.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartProductList;
