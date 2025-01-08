import React from "react";
import { promoteStudents } from "../Store/Data/UpdateData";

const PromotionCard = ({ year, label, color, onPromote }) => (
  <div className="bg-white shadow-md p-6 rounded-lg flex justify-between items-center">
    <h2 className="text-lg font-semibold text-gray-700">{label}</h2>
    <button
      onClick={() => onPromote(year)}
      className={`${color} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-colors`}
    >
      Promote
    </button>
  </div>
);

const AcademicPromotion = () => {
  const onPromote = async (year) => {
    try {
      const { message } = await promoteStudents(year);
      alert(message);
    } catch (error) {
      alert("Promotion failed: " + error.message);
    }
  };

  const promotions = [
    {
      year: 1,
      label: "Promote Engineering 1st Year to 2nd Year",
      color: "bg-blue-500",
    },
    {
      year: 2,
      label: "Promote Engineering 2nd Year to 3rd Year",
      color: "bg-green-500",
    },
    {
      year: 3,
      label: "Promote Engineering 3rd Year to 4th Year",
      color: "bg-yellow-500",
    },
    {
      year: 4,
      label: "Promote Engineering 4th Year to Alumni",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Academic Year Promotion
      </h1>
      <div className="grid grid-cols-1 gap-6 max-w-xl">
        {promotions.map(({ year, label, color }) => (
          <PromotionCard
            key={year}
            year={year}
            label={label}
            color={color}
            onPromote={onPromote}
          />
        ))}
      </div>
    </div>
  );
};

export default AcademicPromotion;
