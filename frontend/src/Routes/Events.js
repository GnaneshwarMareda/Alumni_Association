import React from "react";
import EventsLeftSidebar from "../Components/EventsLeftSidebar";

const Events = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <EventsLeftSidebar />
          {/* Main Content */}
          <main className="w-full lg:w-3/4 rounded p-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Events;
