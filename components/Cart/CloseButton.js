"use client";
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
const CloseButton = () => {
  const { setIsOpenCartPanel } = useContext(CartContext);
  return (
    <div>
      <AiFillCloseCircle
        size={32}
        className="text-violet-900"
        onClick={() => setIsOpenCartPanel(false)}
      />
    </div>
  );
};

export default CloseButton;
