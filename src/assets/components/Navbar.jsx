import React, { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Avatar from "@mui/material/Avatar";
import AccountMenu from "./profile";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="mb-[150px]">
      <nav className="bg-transparent bg-opacity-50 fixed top-0 w-full pt-6 z-50 flex justify-center items-center backdrop-blur-lg pb-6 mb-[100px] shadow ">
        <div className="p-3 text-[30px]   ">
          <img
            className="w-[300px]"
            src="https://i.ibb.co/Yk9f6ZH/logo.png"
            alt="ETHCrops"
          />
        </div>

        <div className="container mx-auto py-4">
          <ul className="flex justify-center align-middle">
            <li className="mr-6">
              <Link
                to="/"
                className={`text-black hover:text-yellow-500 transition duration-300 mr-[50px] ${
                  activeLink === "/" ? "text-yellow-500" : ""
                }`}
                onClick={() => handleClick("/")}
              >
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link
                to="/claim"
                className={`text-black hover:text-yellow-500 transition duration-300 mr-[50px] ${
                  activeLink === "/claim" ? "text-yellow-500" : ""
                }`}
                onClick={() => handleClick("/claim")}
              >
                Claims
              </Link>
            </li>
            <li className="mr-6">
              <Link
                to="/incentives"
                className={`text-black hover:text-yellow-500 transition duration-300 mr-[50px] ${
                  activeLink === "/incentives" ? "text-yellow-500" : ""
                }`}
                onClick={() => handleClick("/incentives")}
              >
                Incentives
              </Link>
            </li>
            <li>
              <Link to="/contact"
                href="#"
                className={`text-black hover:text-yellow-500 transition duration-300 mr-[50px] ${
                  activeLink === "/contact" ? "text-yellow-500" : ""
                }`}
                onClick={() => handleClick("/contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className=" justify-end mr-[50px]">
          {/* <button>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </button>
           */}
          <AccountMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
