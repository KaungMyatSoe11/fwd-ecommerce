"use client"
import ProductCard from "@/components/utils/ProductCard";
import { ProductContext } from "@/context/ProductProvider";
import { useContext } from "react";

const ForYouProduct = () => {
  const { forYouProducts } = useContext(ProductContext);
  console.log(forYouProducts);
  return (
    <section className="my-12">
      <h2 className="text-lg font-semibold">Popular Products</h2>
      <div className="flex flex-wrap gap-y-5 mt-5 ">
        {forYouProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ForYouProduct;
