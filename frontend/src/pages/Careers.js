import React from "react";
import CareersLeftSidebar from "../Components/CareersLeftSidebar";

const Careers = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <CareersLeftSidebar />
          {/* Main Content */}
          <main className="w-full lg:w-3/4 rounded">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Careers;
