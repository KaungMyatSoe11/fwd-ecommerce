import { useContext } from "react";
import CartEmpty from "./CartEmpty";
import CartProductList from "./CartProductList";
import CartTotal from "./CartTotal";
import CloseButton from "./CloseButton";
import { CartContext } from "@/context/CartProvider";

function CartPanel() {
  const { cartCount } = useContext(CartContext);
  return (
    <div className="px-5 flex flex-col justify-between fixed h-screen w-[40%] bg-slate-200 right-0 top-0 z-20">
      <div className="w-full flex flex-col ">
        <div className="flex justify-between my-4 w-full">
          <h1 className="text-lg font-semibold">Cart </h1>
          <CloseButton />
        </div>
        {cartCount > 0 && <CartProductList />}
      </div>

      {cartCount > 0 && <CartTotal />}
      {cartCount <= 0 && (
        <div className="h-screen flex items-center justify-center">
          <CartEmpty />
        </div>
      )}
    </div>
  );
}

export default CartPanel;
