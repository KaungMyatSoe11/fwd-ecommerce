"use client";
import { ProductContext } from "@/context/ProductProvider";
import { useContext } from "react";

const Favorite = () => {
  const { favoriteProducts } = useContext(ProductContext);
  console.log(favoriteProducts);
  return (
    <div className="container mx-auto px-4 mt-5">
      <h1 className="text-lg font-bold">
        Favorite Items <span>{favoriteProducts.length}</span>
      </h1>
      {/* <FavoriteList/> */}
    </div>
  );
};

export default Favorite;
