import React, { useState } from "react";
import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/solid";
import {
  LocationMarkerIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline";
import Careers from "../Routes/Careers";

const initialJobs = [
  {
    id: 1,
    title: "Software Developer",
    company: "ABC Technologies",
    location: "Hyderabad",
    jobType: "Full-Time",
    jobLink: "https://www.linkedin.com",
    postedBy: "John Doe",
    posterProfile: "https://via.placeholder.com/50",
    postedAt: "2024-11-26T11:09:57.391+00:00",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "XYZ Corp",
    location: "Bangalore",
    jobType: "Part-Time",
    jobLink: "https://www.linkedin.com",
    postedBy: "Jane Smith",
    posterProfile: "https://via.placeholder.com/50",
    postedAt: "2024-11-26T11:09:57.391+00:00",
    likes: 0,
    dislikes: 0,
  },
];

const JobsPortal = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [showPostJobForm, setShowPostJobForm] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "",
    jobLink: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const handlePostJob = () => {
    if (
      !newJob.title ||
      !newJob.company ||
      !newJob.location ||
      !newJob.jobType ||
      !newJob.jobLink
    ) {
      alert("Please fill in all fields");
      return;
    }
    setJobs([
      ...jobs,
      {
        id: jobs.length + 1,
        ...newJob,
        likes: 0,
        dislikes: 0,
        postedBy: "Anonymous",
        posterProfile: "https://via.placeholder.com/50",
        postedAt: new Date().toISOString(),
      },
    ]);
    setNewJob({
      title: "",
      company: "",
      location: "",
      jobType: "",
      jobLink: "",
    });
    setShowPostJobForm(false);
  };

  const handleProfileClick = (id) => {
    alert(`Redirecting to profile of user with job ID ${id}`);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Careers>
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto">
          <button
            onClick={() => setShowPostJobForm(!showPostJobForm)}
            className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 mb-8"
          >
            {showPostJobForm ? "Back to Job Listings" : "Post a Job"}
          </button>

          {showPostJobForm && (
            <div className="bg-white p-6 shadow-lg rounded-lg max-w-md ">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Post a New Job
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handlePostJob();
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-gray-600">Job Title</label>
                  <input
                    type="text"
                    value={newJob.title}
                    onChange={(e) =>
                      setNewJob({ ...newJob, title: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Company</label>
                  <input
                    type="text"
                    value={newJob.company}
                    onChange={(e) =>
                      setNewJob({ ...newJob, company: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Location</label>
                  <input
                    type="text"
                    value={newJob.location}
                    onChange={(e) =>
                      setNewJob({ ...newJob, location: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Job Type</label>
                  <select
                    value={newJob.jobType}
                    onChange={(e) =>
                      setNewJob({ ...newJob, jobType: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  >
                    <option value="">Select Job Type</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600">Job Link</label>
                  <input
                    type="url"
                    value={newJob.jobLink}
                    onChange={(e) =>
                      setNewJob({ ...newJob, jobLink: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 rounded-lg shadow-md hover:bg-red-700"
                >
                  Post Job
                </button>
              </form>
            </div>
          )}

          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Jobs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4 cursor-pointer">
                  <img
                    src={job.posterProfile}
                    alt="Poster Profile"
                    className="w-12 h-12 rounded-full mr-4"
                    onClick={() => handleProfileClick(job.id)}
                  />
                  <p
                    className="font-semibold text-gray-800 hover:underline"
                    onClick={() => handleProfileClick(job.id)}
                  >
                    {job.postedBy}
                  </p>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {job.title}
                </h2>
                <p className="text-gray-600 mb-1 flex items-center">
                  <LocationMarkerIcon className="w-5 h-5 mr-2 text-gray-500" />
                  {job.location}
                </p>
                <p className="text-gray-600 mb-1 flex items-center">
                  <OfficeBuildingIcon className="w-5 h-5 mr-2 text-gray-500" />
                  {job.company}
                </p>
                <p className="text-gray-600 mb-1">{job.jobType}</p>
                <a
                  href={job.jobLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Apply Here
                </a>
                <hr className="my-4 border-gray-300" />
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="flex items-center text-gray-500 hover:text-indigo-600"
                    onClick={() =>
                      setJobs(
                        jobs.map((j) =>
                          j.id === job.id ? { ...j, likes: j.likes + 1 } : j
                        )
                      )
                    }
                  >
                    <ThumbUpIcon className="w-5 h-5 mr-1" />
                    <span>{job.likes}</span>
                  </button>
                  <button
                    className="flex items-center text-gray-500 hover:text-red-600"
                    onClick={() =>
                      setJobs(
                        jobs.map((j) =>
                          j.id === job.id
                            ? { ...j, dislikes: j.dislikes + 1 }
                            : j
                        )
                      )
                    }
                  >
                    <ThumbDownIcon className="w-5 h-5 mr-1" />
                    <span>{job.dislikes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Careers>
  );
};

export default JobsPortal;
