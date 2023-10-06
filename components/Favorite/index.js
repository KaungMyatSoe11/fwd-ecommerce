"use client";
import { ProductContext } from "@/context/ProductProvider";
import { useContext } from "react";
import ProductCard from "../utils/ProductCard";
import EmptyFavorite from "./EmptyFavorite";

const FavoriteList = () => {
  const { favoriteProducts } = useContext(ProductContext);
  console.log(favoriteProducts.length);
  return (
    <div className="flex flex-wrap gap-y-5 mt-5 ">
      {favoriteProducts.map((fProduct) => (
        <ProductCard product={fProduct} key={fProduct.id + "favorite"} />
      ))}
      {favoriteProducts.length <= 0 && <EmptyFavorite />}
    </div>
  );
};

export default FavoriteList;
