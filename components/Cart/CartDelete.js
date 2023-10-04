"use client";
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
const CartDelete = ({ product_id }) => {
  const { removeCart } = useContext(CartContext);
  const onDeleteCartProduct = () => {
    removeCart(product_id);
  };
  return (
    <button className="absolute bottom-2 right-2" onClick={onDeleteCartProduct}>
      <AiFillDelete size={24} className="text-violet-900" />
    </button>
  );
};

export default CartDelete;
