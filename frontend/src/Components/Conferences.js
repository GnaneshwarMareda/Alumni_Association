import React, { useState, useEffect } from "react";
import axios from "axios";
import Careers from "../pages/Careers";
import Events from "../pages/Events";

const Conferences = () => {
  const [conferences, setConferences] = useState([]);
  const [filteredConferences, setFilteredConferences] = useState([]);

  useEffect(() => {
    // Fetch conferences data
    axios
      .get("/api/conferences")
      .then((response) => {
        setConferences(response.data);
        setFilteredConferences(response.data); // Default display
      })
      .catch((error) => console.error("Error fetching conferences:", error));
  }, []);

  // Filter handler (search bar)
  const handleSearch = (query) => {
    const filtered = conferences.filter((conference) =>
      conference.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredConferences(filtered);
  };

  return (
    <Events>
      <div className="flex">
        {/* Main Content */}
        <main className="w-3/4 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Events</h1>
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border rounded"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          {/* Conference Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredConferences.map((conference) => (
              <div
                key={conference.conferenceId}
                className="border rounded-lg p-4 shadow"
              >
                <img
                  src={conference.image}
                  alt={conference.title}
                  className="w-full h-40 object-cover"
                />
                <h3 className="mt-2 text-lg font-semibold">
                  {conference.title}
                </h3>
                <p className="text-gray-600">{conference.startDate}</p>
                <p className="text-gray-600">{conference.endDate}</p>
                <button
                  onClick={() => registerForConference(conference.conferenceId)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Register
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </Events>
  );
};

// Registration handler
const registerForConference = (id) => {
  axios
    .post(`/api/conferences/${id}/register`)
    .then(() => alert("Registered successfully!"))
    .catch((error) => console.error("Registration failed:", error));
};

export default Conferences;
