import CartProductList from "./CartProductList";
import CloseButton from "./CloseButton";

function CartPanel() {
    return (
        <div className="fixed h-screen w-[40%] bg-slate-200 right-0 top-0 z-20">
        <div className="flex justify-between px-5 my-4">
          <h1 className="text-lg font-semibold">Cart </h1>
          <CloseButton />
        </div>
        <CartProductList/>
      </div>
    );
}

export default CartPanel;