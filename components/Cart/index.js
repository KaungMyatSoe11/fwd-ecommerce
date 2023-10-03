"use client"
import { useContext } from "react";
import CartPanel from "./CartPanel";
import { CartContext } from "@/context/CartProvider";

const Cart = () => {
  const {isOpenCartPanel} = useContext(CartContext)
  return (
    <>
    {
      isOpenCartPanel && <CartPanel />
    }
  </>
  );
};

export default Cart;
