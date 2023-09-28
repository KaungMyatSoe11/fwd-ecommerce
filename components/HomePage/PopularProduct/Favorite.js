import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Favorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickFavoriteHandler=()=>{
    setIsFavorite(!isFavorite)
  }
  return (
    <>
      {isFavorite ? (
        <AiFillHeart size={24} className="text-violet-900 cursor-pointer" onClick={onClickFavoriteHandler} />
      ) : (
        <AiOutlineHeart size={24} className="text-violet-900 cursor-pointer" onClick={onClickFavoriteHandler} />
      )}
    </>
  );
};

export default Favorite;
