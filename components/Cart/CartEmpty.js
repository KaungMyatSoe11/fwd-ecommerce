import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";

const CartEmpty = () => {
  const { setIsOpenCartPanel } = useContext(CartContext);
  return (
    <div className="flex  justify-center gap-5 flex-col">
      <p>There is no items in this cart!</p>
      <button
        onClick={() => setIsOpenCartPanel(false)}
        className="bg-violet-900 text-sm text-white py-4 px-3"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default CartEmpty;
