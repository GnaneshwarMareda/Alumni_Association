import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Cookies from "js-cookie";
import logo from "../images/logo.jpeg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const jwtToken = Cookies.get("jwtToken");
  //const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    Cookies.remove("jwtToken");
    // navigate("/login");
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{
            background: "white",
            height: "70px",
            borderRadius: "50%",
            //marginRight: "16px",
          }}
        />
        <a href="/" className="text-2xl font-bold text-red-600">
          ALUMNICONNECT
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="/alumni-directory" className="hover:text-red-400">
            Alumni Directory
          </a>
          <a href="/events/upcoming-events" className="hover:text-red-400">
            Events
          </a>
          <a href="/careers/career-events" className="hover:text-red-400">
            Careers
          </a>
          <a href="/networking-hub" className="hover:text-red-400">
            Networking Hub
          </a>
          <a href="/donation" className="hover:text-red-400">
            Donation
          </a>
          <a href="/about" className="hover:text-red-400">
            About
          </a>
        </nav>

        {/* Login Button */}
        {jwtToken ? (
          <button
            onClick={handleLogout}
            className="hidden md:inline-block bg-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        ) : (
          <a
            href="/login"
            className="hidden md:inline-block bg-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition duration-300"
          >
            Login
          </a>
        )}
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <XIcon className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 text-white">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="/alumni-directory" className="hover:text-red-400">
              Alumni Directory
            </a>
            <a href="/events/upcoming-events" className="hover:text-red-400">
              Events
            </a>
            <a href="/careers/career-events" className="hover:text-red-400">
              Careers
            </a>
            <a href="/networking-hub" className="hover:text-red-400">
              Networking Hub
            </a>
            <a href="/donation" className="hover:text-red-400">
              Donation
            </a>
            <a href="/about" className="hover:text-red-400">
              About
            </a>
            <a
              href="/login"
              className="bg-red-600 px-4 py-2 mt-2 text-center rounded-md font-semibold hover:bg-red-700 transition duration-300"
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
