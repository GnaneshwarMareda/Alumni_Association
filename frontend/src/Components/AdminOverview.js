import React from "react";

const AdminOverview = ({ changeSlide }) => {
  const handleChangeSlide = (id) => {
    changeSlide(id);
  };

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

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
      <div className="grid grid-cols-3 gap-6">
        {overviewData.map((item) => (
          <div
            key={item.id}
            className={`${item.color} text-white p-4 rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity`}
            onClick={() => handleChangeSlide(item.id)}
          >
            <div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-lg">{item.count}</p>
            </div>
            <p className="text-right">view {">>"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOverview;
