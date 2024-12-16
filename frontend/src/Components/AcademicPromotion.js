import React from "react";

const AcademicPromotion = () => {
  // Functions to handle promotion API calls
  const promoteFirstToSecond = () => {
    // Example API call for promoting 1st year to 2nd year
    fetch("/api/promote/1st-to-2nd", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => alert(`Success: ${data.message}`))
      .catch((error) => alert(`Error: ${error.message}`));
  };

  const promoteSecondToThird = () => {
    // Example API call for promoting 2nd year to 3rd year
    fetch("/api/promote/2nd-to-3rd", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => alert(`Success: ${data.message}`))
      .catch((error) => alert(`Error: ${error.message}`));
  };

  const promoteThirdToFourth = () => {
    // Example API call for promoting 3rd year to 4th year
    fetch("/api/promote/3rd-to-4th", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => alert(`Success: ${data.message}`))
      .catch((error) => alert(`Error: ${error.message}`));
  };

  const promoteFourthToAlumni = () => {
    // Example API call for promoting 4th year to alumni
    fetch("/api/promote/4th-to-alumni", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => alert(`Success: ${data.message}`))
      .catch((error) => alert(`Error: ${error.message}`));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Academic Year Promotion
      </h1>
      <div className="grid grid-cols-1 gap-6 max-w-xl">
        {/* Promote 1st Year to 2nd Year */}
        <div className="bg-white shadow-md p-6 rounded-lg flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Promote Engineering 1st Year to 2nd Year
          </h2>
          <button
            onClick={promoteFirstToSecond}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Promote
          </button>
        </div>

        {/* Promote 2nd Year to 3rd Year */}
        <div className="bg-white shadow-md p-6 rounded-lg flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Promote Engineering 2nd Year to 3rd Year
          </h2>
          <button
            onClick={promoteSecondToThird}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
          >
            Promote
          </button>
        </div>

        {/* Promote 3rd Year to 4th Year */}
        <div className="bg-white shadow-md p-6 rounded-lg flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Promote Engineering 3rd Year to 4th Year
          </h2>
          <button
            onClick={promoteThirdToFourth}
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Promote
          </button>
        </div>

        {/* Promote 4th Year to Alumni */}
        <div className="bg-white shadow-md p-6 rounded-lg flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Promote Engineering 4th Year to Alumni
          </h2>
          <button
            onClick={promoteFourthToAlumni}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
          >
            Promote
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicPromotion;
