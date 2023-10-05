import { ProductContext } from "@/context/ProductProvider";
import { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Favorite = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const {
    addFavoriteProduct,
    removeFavoriteProduct,
  } = useContext(ProductContext);
  const onClickFavoriteHandler = () => {
    if (!isFavorite) {
      addFavoriteProduct(product);
    } else {
      removeFavoriteProduct(product.id);
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <button
      className="absolute top-2 right-2"
      onClick={() => onClickFavoriteHandler()}
    >
      {isFavorite ? (
        <AiFillHeart size={24} className="text-violet-900 cursor-pointer" />
      ) : (
        <AiOutlineHeart size={24} className="text-violet-900 cursor-pointer" />
      )}
    </button>
  );
};

export default Favorite;
