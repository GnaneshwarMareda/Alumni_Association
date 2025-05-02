import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Cookies from "js-cookie";
import logo from "../images/logo.jpeg";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = ({ headerContent }) => {
  const { name } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const jwtToken = Cookies.get("jwtToken");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    Cookies.remove("jwtToken");
    navigate("/login");
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <div className="flex flex-row items-center gap-x-6">
          <img
            src={logo}
            alt="Logo"
            style={{
              background: "white",
              height: "70px",
              borderRadius: "50%",
            }}
          />
          <a href="/" className="text-2xl font-bold text-red-600">
            ALUMNICONNECT
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {headerContent.map((item, index) => (
            <a key={index} href={item.link} className="hover:text-red-400">
              {item.title}
            </a>
          ))}
        </nav>

        {/* Desktop Actions (Login + Profile) */}
        <div className="hidden md:flex items-center space-x-6">
          {jwtToken ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <a
              href="/login"
              className="bg-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition duration-300"
            >
              Login
            </a>
          )}

          {jwtToken && (
            <div className="relative">
              <a href="/profile">
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-md"
                >
                  <svg
                    className="w-5 h-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                  <span className="text-sm font-medium">{name}</span>
                </button>
              </a>
            </div>
          )}
        </div>

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
            {headerContent.map((item, index) => (
              <a key={index} href={item.link} className="hover:text-red-400">
                {item.title}
              </a>
            ))}

            {jwtToken ? (
              <>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 px-4 py-2 mt-2 text-center rounded-md font-semibold hover:bg-red-700 transition duration-300"
                >
                  Logout
                </button>
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg mt-2"
                >
                  <svg
                    className="w-5 h-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                  <span className="text-sm font-medium">{name}</span>
                </button>
                {isProfileMenuOpen && (
                  <div className="bg-white text-gray-800 rounded-lg shadow-lg w-full mt-2 z-20">
                    <a
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                  </div>
                )}
              </>
            ) : (
              <a
                href="/login"
                className="bg-red-600 px-4 py-2 mt-2 text-center rounded-md font-semibold hover:bg-red-700 transition duration-300"
              >
                Login
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
