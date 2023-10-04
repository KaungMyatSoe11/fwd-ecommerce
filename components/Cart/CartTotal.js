"use client"
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";

const CartTotal = () => {
    const {cartCalculate} = useContext(CartContext)
    return (
        <div className="bg-slate-200">
            <p className="text-lg font-semibold" >Total : <span>${cartCalculate}</span> </p>
            <button className="bg-violet-900 text-white w-full py-4 my-4">Check Out</button>
        </div>
    );
}

export default CartTotal;