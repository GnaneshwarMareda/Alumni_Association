// src/components/Header.js
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-red-600">
          ALUMNICONNECT
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="/about" className="hover:text-red-400">
            Alumni Directory
          </a>
          <a href="/events" className="hover:text-red-400">
            Events
          </a>
          <a href="/careers" className="hover:text-red-400">
            Careers
          </a>
          <a href="/learn" className="hover:text-red-400">
            Learn
          </a>
          <a href="/volunteer" className="hover:text-red-400">
            Donation
          </a>
          <a href="/about" className="hover:text-red-400">
            About
          </a>
        </nav>

        {/* "Give Now" Button */}
        <a
          href="/login"
          className="hidden md:inline-block bg-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition duration-300"
        >
          Login
        </a>

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
            <a href="/about" className="hover:text-red-400">
              Alumni Directory
            </a>
            <a href="/events" className="hover:text-red-400">
              Events
            </a>
            <a href="/careers" className="hover:text-red-400">
              Careers
            </a>
            <a href="/learn" className="hover:text-red-400">
              Learn
            </a>
            <a href="/volunteer" className="hover:text-red-400">
              Volunteer
            </a>
            <a href="/about" className="hover:text-red-400">
              About
            </a>
            <a
              href="#give"
              className="bg-red-600 px-4 py-2 mt-2 text-center rounded-md font-semibold hover:bg-red-700 transition duration-300"
            >
              Give Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;