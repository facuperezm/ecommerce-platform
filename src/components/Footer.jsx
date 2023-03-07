import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-5 text-center text-sm w-full bg-white">
        &copy; {new Date().getFullYear()} | Made by{" "}
        <a href="https://facuperezm.com">
          <span className="font-semibold">Facundo Perez Montalvo</span>
        </a>
      </div>
    </>
  );
};

export default Footer;
