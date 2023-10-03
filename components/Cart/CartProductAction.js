import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const CartProductAction = ({ product }) => {
  return (
    <div className="flex gap-3 mt-3">
      <div>
        <AiOutlineMinus size={26} className="text-violet-700" />
      </div>
      <p>{product.orderQuantity}</p>
      <div>
        <AiOutlinePlus size={26} className="text-violet-700" />
      </div>
    </div>
  );
};

export default CartProductAction;
