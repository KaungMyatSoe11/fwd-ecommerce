import CartCount from "./CartCount";

const Header = () => {
  return (
    <header className="py-4 bg-violet-100 sticky top-0 z-10">
      <div className="container mx-auto">
        <nav className="flex justify-between ">
          <div>logo</div>
          <div className="cart">
            <CartCount />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
