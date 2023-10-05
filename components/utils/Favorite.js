import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Favorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickFavoriteHandler = () => {
    setIsFavorite(!isFavorite);
    //check condition
  };
  return (
    <button className="absolute top-2 right-2" onClick={onClickFavoriteHandler}>
      {isFavorite ? (
        <AiFillHeart size={24} className="text-violet-900 cursor-pointer" />
      ) : (
        <AiOutlineHeart size={24} className="text-violet-900 cursor-pointer" />
      )}
    </button>
  );
};

export default Favorite;
