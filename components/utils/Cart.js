import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Cart = ({ product }) => {
  const { addCart } = useContext(CartContext);
  const onClickAddCart = () => {
    product.orderQuantity = 1;
    if (product.discountPercentage) {
      product.discountAmount = Math.round(
        product.price - product.price * (product.discountPercentage / 100)
      );
    }
    addCart(product);
  };
  return (
    <>
      <AiOutlineShoppingCart
        onClick={onClickAddCart}
        size={24}
        className="text-violet-900 cursor-pointer"
      />
    </>
  );
};

export default Cart;
