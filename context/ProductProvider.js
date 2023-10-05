"use client";
import { createContext, useEffect, useState } from "react";
import randomItem from "random-item";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [forYouProducts, setForYouProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const ForYouProduct = (products_array) => {
    let forU = [];
    while (forU.length != 8) {
      const randProduct = randomItem(products_array);
      const isExist = forU.find((item) => item.id == randProduct.id);
      if (!isExist) {
        forU.push(randProduct);
      }
    }
    setForYouProducts([...forU]);
  };

  const loadProduct = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const { products } = await res.json();

    ForYouProduct(products);
    setProducts([...products]);
    const productFilter = products.filter((product) => product.rating > 4.5);
    const pProduct = productFilter.slice(0, 4);
    console.log(pProduct);
    // productFilter = productFilter.slice(0, 5);
    setPopularProducts([...pProduct]);
  };

  const addFavoriteProduct = (product) => {
    //add to favorite products state
    setFavoriteProducts([...favoriteProducts, product]);
  };

  const removeFavoriteProduct = (product_id) => {
    //remove product from favoriteProducts state
    const filterProducts = favoriteProducts.filter(
      (pd) => pd.id !== product_id
    );
    setFavoriteProducts([...filterProducts]);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        popularProducts,
        forYouProducts,
        addFavoriteProduct,
        removeFavoriteProduct,
        favoriteProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
