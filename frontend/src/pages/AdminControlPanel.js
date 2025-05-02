import React, { useState, useEffect } from "react";

import AdminOverview from "../Components/AdminOverview";
import PendingJobs from "../Components/PendingJobs";
import ManageEvents from "../Components/ManageEvents";
import ManageSuccessStories from "../Components/ManageSuccessStories";
import AcademicPromotion from "../Components/AcademicPromotion";
import AlumniRequests from "../Components/AlumniRequests";
import RaiseFund from "../Components/RaiseFund";
import useAuth from "../hooks/useAuth";

const AdminControlPanel = () => {
  const { name } = useAuth();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [slide, setSlide] = useState(1);
  const [searchText, setSearchText] = useState("");

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const changeSlide = (id) => {
    setSlide(id);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-gray-900 text-gray-200 py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo and Dashboard Title */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                value={searchText}
                onChange={handleSearchChange}
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
        </div>
      </header>

      {/* Main Section */}
      <div className="container mx-auto px-6 py-8">
        <AdminOverview changeSlide={changeSlide} searchQuery={searchText} />
        {slide === 1 && <PendingJobs searchQuery={searchText} />}
        {slide === 2 && <ManageEvents searchQuery={searchText} />}
        {slide === 3 && <ManageSuccessStories searchQuery={searchText} />}
        {slide === 4 && <AcademicPromotion />}
        {slide === 5 && <AlumniRequests searchQuery={searchText} />}
        {slide === 6 && <RaiseFund />}
      </div>
    </div>
  );
};

export default AdminControlPanel;
