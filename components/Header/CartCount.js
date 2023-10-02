"use client"
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";

const CartCount = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <div className="relative w-fit ">
        <span className="absolute text-sm -top-3 -right-2 p-1 rounded-xl text-white bg-violet-500 text-center">{cartCount}</span>
      <BsFillCartFill
        size={28}
        className="text-violet-900 "
      />
    </div>
  );
};

export default CartCount;
