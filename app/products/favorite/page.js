"use client";
import FavoriteList from "@/components/Favorite";
import AddToCartAllProduct from "@/components/Favorite/AddToCartAllProduct";
import { ProductContext } from "@/context/ProductProvider";
import { useContext } from "react";

const Favorite = () => {
  const { favoriteProducts } = useContext(ProductContext);
  return (
    <div className="container mx-auto px-4 mt-5">
      <h1 className="text-lg font-bold">
        Favorite Items <span>{favoriteProducts.length}</span>
      </h1>
      {favoriteProducts.length>0 && <AddToCartAllProduct/>}
      <FavoriteList/>
    </div>
  );
};

export default Favorite;
