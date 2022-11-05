import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="flex flex-row justify-between bg-red-100">
        <div classaName="p-5 flex flex-row gap-5 border border-white rounded-full">
          <Link to="/">
            <h1 className="border border-white rounded-full p-5">Home</h1>
          </Link>
        </div>
        <h1 className="font-bold text-2xl flex flex-row stext-center align-center justify-between m-auto">
          E-COMMERCE
        </h1>
        <div className="flex flex-row gap-5 ">
          <Link to="/Cart">
            <h1 className="border border-white rounded-full p-5">Cart</h1>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
