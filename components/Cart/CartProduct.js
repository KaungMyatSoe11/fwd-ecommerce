import Image from "next/image";
import CartProductAction from "./CartProductAction";
import CartDelete from "./CartDelete";

const CartProduct = ({ product }) => {
  return (
    <div className="flex gap-x-5 mb-5 relative">
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
        <p className="text-xs ">{product.stock} items left!</p>
      <CartProductAction product={product} />
      </div>
      <CartDelete product_id={product.id}/>
    </div>
  );
};

export default CartProduct;
