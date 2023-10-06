"use client"
import { CartContext } from "@/context/CartProvider";
import { ProductContext } from "@/context/ProductProvider";
import { useContext } from "react";

const AddToCartAllProduct = () => {
  const { favoriteProducts } = useContext(ProductContext);
  const { AddAllFavoriteProductsToCart } = useContext(CartContext);

  return (
    <button
      onClick={() => AddAllFavoriteProductsToCart(favoriteProducts)}
      className="mt-4 bg-violet-900 text-sm text-white py-3 px-3 w-fit"
    >
      Add All To Cart
    </button>
  );
};

export default AddToCartAllProduct;
