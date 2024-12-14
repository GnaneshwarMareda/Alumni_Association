import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import URL from "../Store/Url";

const PendingJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetchJobs();
  }, []);
  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${URL}/careers/jobs`);
      //console.log(response.data.jobs);
      setJobs(response.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };
  const handleJobVerification = async (id, status) => {
    try {
      await axios.patch(`${URL}/jobs/${id}`, { verified: status });
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job.id === id ? { ...job, verified: status } : job
        )
      );
    } catch (error) {
      console.error("Error verifying job:", error);
    }
  };

  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Pending Job Verifications
      </h2>
      <hr className="border-gray-300 mb-6" />
      {jobs.filter((job) => !job.verified).length === 0 ? (
        <p className="text-gray-600">No pending jobs to verify.</p>
      ) : (
        jobs
          .filter((job) => !job.verified)
          .map((job) => (
            <div
              key={job.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4 shadow-sm"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-700">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-600">{job.location}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleJobVerification(job.id, true)}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg shadow"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleJobVerification(job.id, false)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
      )}
    </section>
  );
};

export default PendingJobs;
