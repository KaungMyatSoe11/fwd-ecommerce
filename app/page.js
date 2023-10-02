import Category from "@/components/HomePage/Category";
import ForYouProduct from "@/components/HomePage/ForYouProduct";
import PopularProduct from "@/components/HomePage/PopularProduct";
import ProductProvider from "@/context/ProductProvider";
import Image from "next/image";

export default async function Home() {
  return (
    <ProductProvider>
      <main>
        <div className="container mx-auto">
          <h1>Home Page</h1>
          <br />
          <Category />
          <PopularProduct />
          <ForYouProduct/>
        </div>
      </main>
    </ProductProvider>
  );
}
