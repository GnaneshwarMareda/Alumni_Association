import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import URL from "../Store/Url";
import Cookie from "js-cookie";

function AlumniDetailSection() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [similarAlumniData, setSimilarAlumniData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const alumnus = state?.alumnus;

  useEffect(() => {
    const fetchSimilarAlumni = async () => {
      if (!alumnus || !alumnus.company || !alumnus.fieldOfStudy) {
        setError("Missing alumnus data.");
        setLoading(false);
        return;
      }

      try {
        const similarProfiles = await fetch(`${URL}/alumni/similar-matches`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${Cookie.get("jwtToken")}`,
          },
          body: JSON.stringify({
            company: alumnus.company,
            fieldOfStudy: alumnus.fieldOfStudy,
            graduationYear: alumnus.graduationYear,
          }),
        });

        const result = await similarProfiles.json();

        if (result.success && Array.isArray(result.data)) {
          const data = result.data.filter((item) => item._id !== alumnus._id);
          setSimilarAlumniData(data);
        } else {
          setSimilarAlumniData([]); // fallback
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarAlumni();
  }, [alumnus]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  }

  if (!alumnus) {
    return (
      <h1 className="text-center text-gray-500 mt-10">
        Alumnus information not available.
      </h1>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <button
        onClick={() => navigate(-1)}
        className="self-start bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full hover:shadow-lg mb-4"
      >
        Back
      </button>

      <div className="w-full max-w-4xl text-center">
        <img
          src={alumnus.profilePicture || "/placeholder-profile.jpg"}
          alt={alumnus.name}
          className="rounded-full w-32 h-32 mx-auto border-4 border-blue-500"
        />
        <h1 className="font-extrabold text-3xl mt-4 text-gray-800">
          {alumnus.name}
        </h1>
        <p className="text-indigo-600 text-lg font-medium mt-2">
          {alumnus.jobRole} at {alumnus.company}
        </p>
        <div className="mt-6 text-gray-600 text-base space-y-2">
          <p>
            <span className="font-semibold">Location:</span> {alumnus.location}
          </p>
          <p>
            <span className="font-semibold">Graduation Year:</span>{" "}
            {alumnus.graduationYear}
          </p>
          <p>
            <span className="font-semibold">Degree:</span> {alumnus.degree}
          </p>
          <p>
            <span className="font-semibold">Field of Study:</span>{" "}
            {alumnus.fieldOfStudy}
          </p>
        </div>
        <hr className="my-4 border-gray-300" />
      </div>

      <div className="mt-8 w-full">
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
                className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
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
