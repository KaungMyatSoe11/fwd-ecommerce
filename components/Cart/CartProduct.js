import Image from "next/image";
import CartProductAction from "./CartProductAction";

const CartProduct = ({ product }) => {
  return (
    <div className="flex gap-x-5 mb-5">
      <div className="w-[20%]">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-[100px] object-cover"
        />
      </div>
      <div>
        <h3>{product.title}</h3>
        {product.discountPercentage && (
          <p className="text-violet-900 text-base font-medium">
            $
            {Math.round(
              product.price - product.price * (product.discountPercentage / 100)
            )}
          </p>
        )}
      <CartProductAction product={product} />
      </div>
    </div>
  );
};

export default CartProduct;
