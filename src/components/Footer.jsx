import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="border-t-2 py-10 text-center font text-md h-50">
        &copy; {new Date().getFullYear()} | E-Commerce Website Made By{" "}
        <Link to="https://facuperezm.vercel.app">
          <strong>Facundo Perez Montalvo</strong>
        </Link>
      </div>
    </>
  );
};

export default Footer;
