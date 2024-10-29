import React, { useState } from "react";
import alumniData from "./alumniData.js";

function AlumniDirectory() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    graduationYear: "",
    degree: "",
    fieldOfStudy: "",
    location: "",
  });

  const filteredAlumni = alumniData.filter((alumnus) => {
    const matchesSearch =
      alumnus.name.toLowerCase().includes(search.toLowerCase()) ||
      alumnus.location.toLowerCase().includes(search.toLowerCase()) ||
      alumnus.job_title.toLowerCase().includes(search.toLowerCase()) ||
      alumnus.company.toLowerCase().includes(search.toLowerCase());

    const matchesFilters =
      (!filters.graduationYear ||
        alumnus.graduation_year === filters.graduationYear) &&
      (!filters.degree || alumnus.degree === filters.degree) &&
      (!filters.fieldOfStudy ||
        alumnus.field_of_study === filters.fieldOfStudy) &&
      (!filters.location || alumnus.location === filters.location);

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 space-y-4 lg:space-y-0">
        <input
          type="text"
          className="input input-bordered w-full lg:w-1/2"
          placeholder="Search by name, location, job title, or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex space-x-4">
          <select
            className="select select-bordered"
            onChange={(e) =>
              setFilters({ ...filters, graduationYear: e.target.value })
            }
          >
            <option value="">All Years</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
          <select
            className="select select-bordered"
            onChange={(e) => setFilters({ ...filters, degree: e.target.value })}
          >
            <option value="">All Degrees</option>
            <option value="BSc">BSc</option>
            <option value="MSc">MSc</option>
          </select>
          <select
            className="select select-bordered"
            onChange={(e) =>
              setFilters({ ...filters, fieldOfStudy: e.target.value })
            }
          >
            <option value="">All Fields</option>
            <option value="Engineering">Engineering</option>
            <option value="Medicine">Medicine</option>
          </select>
          <select
            className="select select-bordered"
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          >
            <option value="">All Locations</option>
            <option value="New York">New York</option>
            <option value="California">California</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.map((alumnus) => (
          <div key={alumnus._id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={alumnus.profile_picture}
              alt={`${alumnus.name}`}
              className="rounded-full w-20 h-20 mx-auto"
            />
            <h2 className="text-center font-semibold text-xl mt-2">
              {alumnus.name}
            </h2>
            <p className="text-center text-sm text-gray-500">
              {alumnus.job_title} at {alumnus.company}
            </p>
            <div className="text-center text-gray-600 text-sm mt-2">
              <p>{alumnus.location}</p>
              <p>Graduated: {alumnus.graduation_year}</p>
              <p>
                {alumnus.degree} in {alumnus.field_of_study}
              </p>
            </div>
            <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlumniDirectory;
