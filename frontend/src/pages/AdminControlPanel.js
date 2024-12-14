import React, { useState } from "react";

import AdminOverview from "../Components/AdminOverview";
import PendingJobs from "../Components/PendingJobs";
import ManageEvents from "../Components/ManageEvents";
import ManageSuccessStories from "../Components/ManageSuccessStories";

const AdminControlPanel = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // You can implement additional logic to toggle the theme in your app (e.g., add/remove classes, update localStorage).
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    // Implement logout functionality here (e.g., clearing session, redirecting to login page)
    console.log("Logging out...");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-gray-900 text-gray-200 py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo and Dashboard Title */}
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-full shadow-md">
              <span className="text-white text-xl font-bold">A</span>
            </div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M15.5 11a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* User Menu and Theme Switcher */}
          <div className="flex items-center space-x-6">
            {/* Theme Switcher */}
            <button
              className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-2 rounded-lg"
              onClick={toggleTheme}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.66-9h-1.41M4.75 12h-1.4M18.36 6.36l-.71-.71M6.36 18.36l-.71-.71M16.95 17.05l-.71-.71M7.05 7.05l-.71-.71M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>

            {/* Notifications */}
            <button className="relative text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .415-.162.816-.437 1.116L4 17h11z"
                />
              </svg>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                3
              </span>
            </button>

            {/* Profile Menu */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg"
                onClick={toggleProfileMenu}
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-200 text-sm font-medium">Admin</span>
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg w-48">
                  <a
                    href="#profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="#settings"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <AdminOverview />
        <PendingJobs />
        <ManageEvents />
        <ManageSuccessStories />
      </div>
    </div>
  );
};

export default AdminControlPanel;
