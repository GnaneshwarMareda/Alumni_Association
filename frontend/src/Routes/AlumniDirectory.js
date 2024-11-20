import React, { useState } from "react";
import alumniData from "./alumniData.js";

import { useNavigate } from "react-router-dom";

function AlumniDirectory() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    graduationYear: "",
    degree: "",
    fieldOfStudy: "",
    location: "",
  });

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const filteredAlumni = alumniData.filter((alumnus) => {
    const matchesSearch =
      alumnus.name.toLowerCase().includes(search.toLowerCase()) ||
      alumnus.location.toLowerCase().includes(search.toLowerCase()) ||
      alumnus.job_title.toLowerCase().includes(search.toLowerCase()) ||
      alumnus.company.toLowerCase().includes(search.toLowerCase());

    const matchesFilters =
      (!filters.graduationYear ||
        alumnus.graduationYear.toString() === filters.graduationYear) &&
      (!filters.degree || alumnus.degree === filters.degree) &&
      (!filters.fieldOfStudy ||
        alumnus.fieldOfStudy === filters.fieldOfStudy) &&
      (!filters.location || alumnus.location === filters.location);

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="container mx-auto p-6">
      {/* Search and Filters Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 space-y-4 lg:space-y-0">
        {/* Search Input */}
        <input
          type="text"
          className="input input-bordered w-full lg:w-1/2 px-4 py-2 rounded-lg shadow-sm border-2 border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200"
          placeholder="Search by name, location, job title, or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filters Section */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-end space-x-4">
          {/* Graduation Year Filter */}
          <select
            className="select select-bordered px-3 py-2 rounded-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={filters.graduationYear}
            onChange={(e) =>
              handleFilterChange("graduationYear", e.target.value)
            }
          >
            <option value="">All Years</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>

          {/* Degree Filter */}
          <select
            className="select select-bordered px-3 py-2 rounded-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={filters.degree}
            onChange={(e) => handleFilterChange("degree", e.target.value)}
          >
            <option value="">All Degrees</option>
            <option value="BSc">BSc</option>
            <option value="MSc">MSc</option>
          </select>

          {/* Field of Study Filter */}
          <select
            className="select select-bordered px-3 py-2 rounded-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={filters.fieldOfStudy}
            onChange={(e) => handleFilterChange("fieldOfStudy", e.target.value)}
          >
            <option value="">All Fields</option>
            <option value="Engineering">Engineering</option>
            <option value="Medicine">Medicine</option>
          </select>

          {/* Location Filter */}
          <select
            className="select select-bordered px-3 py-2 rounded-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="New York">New York</option>
            <option value="California">California</option>
          </select>
        </div>
      </div>

      {/* Alumni Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.length > 0 ? (
          filteredAlumni.map((alumnus) => (
            <div
              key={alumnus._id}
              className="bg-white shadow-lg rounded-lg p-4"
            >
              <img
                src={alumnus.profilePicture}
                alt={`${alumnus.name}`}
                className="rounded-full w-20 h-20 mx-auto"
              />
              <h2 className="text-center font-semibold text-xl mt-2">
                {alumnus.name}
              </h2>
              <p className="text-center text-sm text-gray-500">
                {alumnus.jobRole} at {alumnus.company}
              </p>
              <div className="text-center text-gray-600 text-sm mt-2">
                <p>{alumnus.location}</p>
                <p>Graduated: {alumnus.graduationYear}</p>
                <p>
                  {alumnus.degree} in {alumnus.fieldOfStudy}
                </p>
              </div>
              <button
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                onClick={() =>
                  navigate(`/alumni-directory/${alumnus._id}`, {
                    state: { alumnus },
                  })
                }
              >
                View Profile
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No alumni found matching the criteria.
          </p>
        )}
      </div>
    </div>
  );
}

export default AlumniDirectory;
