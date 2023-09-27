import Category from "@/components/HomePage/Category";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <h1>Home Page</h1>
        <br />
        <Category />
      </div>
    </main>
  );
}
