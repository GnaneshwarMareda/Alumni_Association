import React, { useState } from "react";
import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/solid";
import Careers from "./Careers";

const initialJobs = [
  {
    id: 1,
    title: "Software Developer",
    company: "ABC Technologies",
    location: "Hyderabad",
    type: "Full-Time",
    posterName: "John Doe",
    posterProfile: "https://via.placeholder.com/50",
    reactions: { likes: 0, dislikes: 0 },
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "XYZ Corp",
    location: "Bangalore",
    type: "Part-Time",
    posterName: "Jane Smith",
    posterProfile: "https://via.placeholder.com/50",
    reactions: { likes: 0, dislikes: 0 },
  },
];

const JobsPortal = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [showPostJobForm, setShowPostJobForm] = useState(false);

  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    posterBy: "",
    posterProfile: "",
  });

  const handlePostJob = () => {
    if (
      !newJob.title ||
      !newJob.company ||
      !newJob.location ||
      !newJob.type ||
      !newJob.posterName ||
      !newJob.posterProfile
    ) {
      alert("Please fill in all fields");
      return;
    }
    // setJobs([
    //   ...jobs,
    //   {
    //     id: jobs.length + 1,
    //     ...newJob,
    //     reactions: { likes: 0, dislikes: 0 },
    //   },
    // ]);

    const url = setNewJob({
      title: "",
      company: "",
      location: "",
      type: "",
      posterName: "",
      posterProfile: "",
    });
    setShowPostJobForm(false);
  };

  const handleReaction = (id, reactionType) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id
          ? {
              ...job,
              reactions: {
                ...job.reactions,
                [reactionType]: job.reactions[reactionType] + 1,
              },
            }
          : job
      )
    );
  };

  return (
    <Careers>
      <div className="bg-white-100 min-h-screen">
        {/* <div className="container mx-auto px-4 py-6"> */}
        {/* Toggle Job Posting Form */}
        <button
          onClick={() => setShowPostJobForm(!showPostJobForm)}
          className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 mb-6"
        >
          {showPostJobForm ? "Back to Job Listings" : "Post a Job"}
        </button>

        {/* Job Posting Form */}
        {showPostJobForm && (
          <div className="bg-white p-6 shadow-lg rounded-lg">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600">Job Type</label>
                <select
                  value={newJob.type}
                  onChange={(e) =>
                    setNewJob({ ...newJob, type: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                >
                  <option value="">Select Job Type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Internship">Internship</option>
                </select>
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

        {/* Job Listings */}
        {!showPostJobForm && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={job.posterProfile}
                    alt={job.posterName}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <h3 className="font-medium text-gray-800">
                    {job.posterName}
                  </h3>
                </div>
                <h2 className="text-lg font-bold text-gray-800">
                  Role : {job.title}
                </h2>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
                <p className="text-sm text-green-500">{job.type}</p>
                <hr className="my-2 border-gray-300" />

                <div className="mt-4 flex ">
                  <button
                    onClick={() => handleReaction(job.id, "likes")}
                    className="flex  mr-2 text-blue-500 hover:text-blue-600"
                  >
                    <ThumbUpIcon className="w-5 h-5 mr-1" />
                    <span className="text-sm">{job.reactions.likes}</span>
                  </button>
                  <button
                    onClick={() => handleReaction(job.id, "dislikes")}
                    className="flex  items-center text-gray-500 hover:text-gray-600"
                  >
                    <ThumbDownIcon className="w-5 h-5 mr-1" />
                    <span className="text-sm">{job.reactions.dislikes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* </div> */}
    </Careers>
  );
};

export default JobsPortal;
