import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAlumniSimilarMatches } from "../Store/Data/FetchData";

function AlumniDetailSection() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [similarAlumniData, setSimilarAlumniData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(state);
        const response = await getAlumniSimilarMatches({
          graduationYear: state.graduationYear,
          company: state.company,
          fieldOfStudy: state.fieldOfStudy,
        });

        console.log(response);
        const data = response;
        setSimilarAlumniData(data || []);
      } catch (error) {
        setError(error.message || "Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const alumnus = state?.alumnus;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!alumnus) {
    return <h1 className="text-center text-gray-500">Alumnus not found.</h1>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Back
      </button>

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center mt-20">
        <img
          src={alumnus.profilePicture || "/placeholder-profile.jpg"}
          alt={alumnus.name}
          className="rounded-full w-32 h-32 mx-auto"
        />
        <h1 className="font-bold text-2xl mt-4">{alumnus.name}</h1>
        <p className="text-gray-500">
          {alumnus.jobRole} at {alumnus.company}
        </p>
        <div className="mt-4 text-gray-600 text-sm">
          <p>Location: {alumnus.location}</p>
          <p>Graduation Year: {alumnus.graduationYear}</p>
          <p>Degree: {alumnus.degree}</p>
          <p>Field of Study: {alumnus.fieldOfStudy}</p>
        </div>
      </div>

      {/* Similar Alumni Section */}
      <div className="mt-12 w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Similar Alumni
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {similarAlumniData.map((alumni) => (
            <div
              key={alumni._id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-lg text-gray-800">{alumni.name}</h3>
              <p className="text-sm text-gray-600">
                {alumni.jobRole} at {alumni.company}
              </p>
              <div className="mt-2 text-sm text-gray-600">
                <p>Graduation Year: {alumni.graduationYear}</p>
                <p>Field of Study: {alumni.fieldOfStudy}</p>
                <p>Location: {alumni.location}</p>
              </div>
              <button
                onClick={() =>
                  navigate("/alumni-detail", { state: { alumnus: alumni } })
                }
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlumniDetailSection;
