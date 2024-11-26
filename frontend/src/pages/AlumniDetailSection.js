import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AlumniDetailSection() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const alumnus = state?.alumnus; // Access the alumni data from state

  if (!alumnus) {
    return <h1 className="text-center text-gray-500">Alumnus not found.</h1>;
  }

  return (
    <div className="fixed w-full bg-gray-50 flex flex-col items-center justify-center">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Back
      </button>

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center mt-20">
        <img
          src={alumnus.profilePicture}
          alt={alumnus.name}
          className="rounded-full w-32 h-32 mx-auto"
        />
        <h1 className="font-bold text-2xl mt-4">{alumnus.name}</h1>
        <p className="text-gray-500">
          {alumnus.jobRole} at {alumnus.company}
        </p>
        <div className="mt-4 text-gray-600">
          <p>Location: {alumnus.location}</p>
          <p>Graduation Year: {alumnus.graduationYear}</p>
          <p>Degree: {alumnus.degree}</p>
          <p>Field of Study: {alumnus.fieldOfStudy}</p>
        </div>
      </div>
    </div>
  );
}

export default AlumniDetailSection;
