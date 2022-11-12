import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="flex flex-row justify-between bg-yellow-300 w-full h-14 opacity-95">
        <Link to="/">
          <h1 className="font-bold">HOME</h1>
        </Link>
        <h1 className="font-bold text-2xl">E-COMMERCE</h1>
        <Link to="/Cart">
          <h1 className="font-bold">CART</h1>
        </Link>
      </nav>
    </>
  );
};

export default Header;
