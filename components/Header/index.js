import Link from "next/link";
import CartCount from "./CartCount";

const Header = () => {
  return (
    <header className="py-4 bg-violet-100 sticky top-0 z-10 ">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between ">
          <div>logo</div>
          <div className="flex gap-4">
            <Link href={"/favorite"}>Favorite Product</Link>
            <div className="cart">
              <CartCount />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
