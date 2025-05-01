import React from "react";

const AdminOverview = ({ changeSlide, searchQuery = "" }) => {
  const overviewData = [
    { id: 1, title: "Jobs to be Approved", count: 2, color: "bg-blue-500" },
    { id: 2, title: "Upcoming Events", count: 2, color: "bg-green-500" },
    { id: 3, title: "Success Stories", count: 3, color: "bg-red-500" },
    {
      id: 4,
      title: "Academic Year Promotion",
      count: 15,
      color: "bg-green-500",
    },
    { id: 5, title: "Alumni Requests", count: 2, color: "bg-purple-500" },
    { id: 6, title: "Raise Fund", count: 15, color: "bg-blue-500" },
  ];

  const handleChangeSlide = (id) => {
    changeSlide(id);
  };

  const matchesSearch = (title) => {
    if (!searchQuery) return false;
    return title.toLowerCase().includes(searchQuery.toLowerCase());
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {overviewData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleChangeSlide(item.id)}
            className={`${
              item.color
            } p-5 rounded-lg cursor-pointer shadow-md transition-all duration-300
              ${
                matchesSearch(item.title)
                  ? "scale-105 ring-4 ring-indigo-400"
                  : "hover:scale-105"
              }
            `}
          >
            <div className="flex flex-col justify-between h-full text-white">
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-lg mt-2">{item.count}</p>
              </div>
              <p className="text-right mt-4 font-semibold text-sm opacity-90">
                View {">>"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOverview;
