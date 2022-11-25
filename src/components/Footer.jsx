import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="py-10 text-center text-sm w-full  bg-white">
        &copy; {new Date().getFullYear()} | Made By{" "}
        <Link to="https://facuperezm.vercel.app">
          <strong>Facundo Perez Montalvo</strong>
        </Link>
      </div>
    </>
  );
};

export default Footer;
