import React from "react";
import URL from "../Store/Url";

const AdminOverview = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Total Jobs</h3>
          <p className="text-lg">124</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Pending Events</h3>
          <p className="text-lg">7</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Success Stories</h3>
          <p className="text-lg">15</p>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
