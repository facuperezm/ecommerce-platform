import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="py-5 text-center text-sm w-full bg-white">
        &copy; {new Date().getFullYear()} | Made by{" "}
        <Link to="https://facuperezm.com">
          <span className="font-semibold">Facundo Perez Montalvo</span>
        </Link>
      </div>
    </>
  );
};

export default Footer;
