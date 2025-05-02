import React, { useState, useEffect } from "react";
import { ThumbUpIcon } from "@heroicons/react/solid";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import Careers from "../pages/Careers";
import { getVerifiedJobs } from "../Store/Data/FetchData";
import { postJob } from "../Store/Data/PostData";
import URL from "../Store/Url";

const JobsPortal = () => {
  const [jobs, setJobs] = useState([]);
  const [showPostJobForm, setShowPostJobForm] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "",
    jobLink: "",
  });
  const [likedJobs, setLikedJobs] = useState({});

  const [searchQuery, setSearchQuery] = useState("");
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getVerifiedJobs();
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, [trigger]);

  const handlePostJob = async () => {
    if (
      !newJob.title ||
      !newJob.company ||
      !newJob.jobType ||
      !newJob.jobLink
    ) {
      alert("Please fill in all fields");
      return;
    }
    try {
      await postJob(newJob);
      setNewJob({
        title: "",
        company: "",
        location: "",
        jobType: "",
        jobLink: "",
      });
      setShowPostJobForm(false);
      setTrigger((prev) => !prev);
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  const handleProfileClick = (id) => {
    alert(`Redirecting to profile of user with job ID ${id}`);
  };

  const handleLikeToggle = async (jobId) => {
    const alreadyLiked = likedJobs[jobId];
    const action = alreadyLiked ? "unlike" : "like";

    try {
      await fetch(`${URL}/careers/jobs/react`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: jobId, action }),
      });

      setLikedJobs((prev) => ({
        ...prev,
        [jobId]: !alreadyLiked,
      }));

      setTrigger((prev) => !prev);
    } catch (err) {
      console.error("Error updating like:", err);
    }
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Careers>
      <div className="min-h-screen px-4 py-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Jobs Portal</h1>
            <button
              onClick={() => setShowPostJobForm(!showPostJobForm)}
              className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition"
            >
              {showPostJobForm ? "Back to Listings" : "Post a Job"}
            </button>
          </div>

          {/* Job Post Form */}
          {showPostJobForm && (
            <div className="bg-white p-6 shadow-lg rounded-lg max-w-xl mx-auto mb-10">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Post a New Job
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handlePostJob();
                }}
                className="space-y-4"
              >
                {["title", "company", "location", "jobLink"].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-600 capitalize">
                      {field}
                    </label>
                    <input
                      type={field === "jobLink" ? "url" : "text"}
                      value={newJob[field]}
                      onChange={(e) =>
                        setNewJob({ ...newJob, [field]: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      required
                    />
                  </div>
                ))}

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
                    <option value="">Select Type</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Post Job
                </button>
              </form>
            </div>
          )}

          {/* Jobs Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search jobs by title, company, or location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                className="bg-white border border-gray-200 shadow hover:shadow-xl rounded-xl p-6 flex flex-col justify-between transition duration-300"
              >
                {/* Poster Info */}
                <div
                  className="flex items-center mb-4 cursor-pointer"
                  onClick={() => handleProfileClick(job._id)}
                >
                  <img
                    src={job.posterProfile || "/default-user.png"}
                    alt="Poster"
                    className="w-12 h-12 rounded-full border-2 border-indigo-500 shadow-sm mr-3"
                  />
                  <p className="font-medium text-gray-800 hover:underline">
                    {job.postedBy}
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-indigo-700 mb-1">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{job.company}</p>

                <div className="text-sm text-gray-600 space-y-1 mb-3">
                  <p className="flex items-center">
                    <LocationMarkerIcon className="w-4 h-4 mr-2 text-gray-400" />
                    {job.location}
                  </p>
                  <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-medium">
                    {job.jobType}
                  </span>
                </div>

                <a
                  href={job.jobLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  Apply Here →
                </a>

                <hr className="my-4" />

                {/* Likes/Dislikes */}
                <div className="flex justify-between items-center text-sm">
                  <button
                    className={`flex items-center ${
                      likedJobs[job._id] ? "text-indigo-600" : "text-gray-500"
                    } hover:text-indigo-600`}
                    onClick={() => handleLikeToggle(job._id)}
                  >
                    <ThumbUpIcon className="w-5 h-5 mr-1" />
                    <span>{job.likes}</span>
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
