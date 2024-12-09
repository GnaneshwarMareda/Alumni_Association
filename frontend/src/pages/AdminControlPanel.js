import React, { useState, useEffect } from "react";
import axios from "axios";

import URL from "../Store/Url";

const AdminControlPanel = () => {
  // State for toggling theme and profile menu
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // You can implement additional logic to toggle the theme in your app (e.g., add/remove classes, update localStorage).
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  // Toggle Profile Menu function
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  // Logout function
  const handleLogout = () => {
    // Implement logout functionality here (e.g., clearing session, redirecting to login page)
    console.log("Logging out...");
  };

  const [jobs, setJobs] = useState([]);
  const [events, setEvents] = useState([]);
  const [successStories, setSuccessStories] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
  });
  const [newStory, setNewStory] = useState({ name: "", story: "", image: "" });
  const [editingEvent, setEditingEvent] = useState(null);
  const [editingStory, setEditingStory] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    fetchJobs();
    fetchEvents();
    fetchSuccessStories();
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

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${URL}/events`);
      setEvents(response.data.events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const fetchSuccessStories = async () => {
    try {
      const response = await axios.get(`${URL}/success-stories`);
      setSuccessStories(response.data.successStories);
    } catch (error) {
      console.error("Error fetching success stories:", error);
    }
  };

  // Handle job verification
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

  // Handle event management
  const handlePostEvent = async () => {
    if (!newEvent.title || !newEvent.description || !newEvent.date) {
      alert("Please fill in all event fields.");
      return;
    }
    try {
      const response = await axios.post(`${URL}/events`, newEvent);
      setEvents([...events, response.data]);
      setNewEvent({ title: "", description: "", date: "" });
    } catch (error) {
      console.error("Error posting event:", error);
    }
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setNewEvent({ ...event });
  };

  const handleSaveEvent = async () => {
    try {
      await axios.put(`${URL}/events/${editingEvent.id}`, newEvent);
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === editingEvent.id
            ? { ...editingEvent, ...newEvent }
            : event
        )
      );
      setEditingEvent(null);
      setNewEvent({ title: "", description: "", date: "" });
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`${URL}/events/${id}`);
      setEvents(events.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  // Handle success story management
  const handlePostStory = async () => {
    if (!newStory.name || !newStory.story || !newStory.image) {
      alert("Please fill in all success story fields.");
      return;
    }
    try {
      const response = await axios.post(`${URL}/success-stories`, newStory);
      setSuccessStories([...successStories, response.data]);
      setNewStory({ name: "", story: "", image: "" });
    } catch (error) {
      console.error("Error posting success story:", error);
    }
  };

  const handleEditStory = (story) => {
    setEditingStory(story);
    setNewStory({ ...story });
  };

  const handleSaveStory = async () => {
    try {
      await axios.put(`${URL}/success-stories/${editingStory.id}`, newStory);
      setSuccessStories((prevStories) =>
        prevStories.map((story) =>
          story.id === editingStory.id
            ? { ...editingStory, ...newStory }
            : story
        )
      );
      setEditingStory(null);
      setNewStory({ name: "", story: "", image: "" });
    } catch (error) {
      console.error("Error saving success story:", error);
    }
  };

  const handleDeleteStory = async (id) => {
    try {
      await axios.delete(`${URL}/success-stories/${id}`);
      setSuccessStories(successStories.filter((story) => story.id !== id));
    } catch (error) {
      console.error("Error deleting success story:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-gray-900 text-gray-200 py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo and Dashboard Title */}
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-full shadow-md">
              <span className="text-white text-xl font-bold">A</span>
            </div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M15.5 11a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* User Menu and Theme Switcher */}
          <div className="flex items-center space-x-6">
            {/* Theme Switcher */}
            <button
              className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-2 rounded-lg"
              onClick={toggleTheme}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.66-9h-1.41M4.75 12h-1.4M18.36 6.36l-.71-.71M6.36 18.36l-.71-.71M16.95 17.05l-.71-.71M7.05 7.05l-.71-.71M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>

            {/* Notifications */}
            <button className="relative text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .415-.162.816-.437 1.116L4 17h11z"
                />
              </svg>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                3
              </span>
            </button>

            {/* Profile Menu */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg"
                onClick={toggleProfileMenu}
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-200 text-sm font-medium">Admin</span>
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg w-48">
                  <a
                    href="#profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="#settings"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Metrics */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Overview
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Total Jobs</h3>
              <p className="text-lg">124</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Pending Events</h3>
              <p className="text-lg">7</p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Success Stories</h3>
              <p className="text-lg">15</p>
            </div>
          </div>
        </div>

        {/*Manage Jobs*/}
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
                    <h3 className="text-lg font-bold text-gray-700">
                      {job.title}
                    </h3>
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

        {/* Manage Events*/}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Manage Events
          </h2>
          <hr className="border-gray-300 mb-6" />
          {events.map((event) => (
            <div
              key={event.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4 shadow-sm"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-700">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">{event.description}</p>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEditEvent(event)}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg shadow"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {editingEvent ? "Edit Event" : "Add New Event"}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editingEvent ? handleSaveEvent() : handlePostEvent();
              }}
            >
              <input
                type="text"
                placeholder="Event Title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <textarea
                placeholder="Event Description"
                value={newEvent.description}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, description: e.target.value })
                }
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                required
              ></textarea>
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, date: e.target.value })
                }
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg"
              >
                {editingEvent ? "Save Changes" : "Add Event"}
              </button>
            </form>
          </div>
        </section>

        {/* Manage Success Stories*/}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Manage Success Stories
          </h2>
          <hr className="border-gray-300 mb-6" />
          {successStories.map((story) => (
            <div
              key={story.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4 shadow-sm"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-700">
                  {story.name}
                </h3>
                <p className="text-sm text-gray-600">{story.story}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEditStory(story)}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg shadow"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteStory(story.id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {editingStory ? "Edit Success Story" : "Add New Success Story"}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editingStory ? handleSaveStory() : handlePostStory();
              }}
            >
              <input
                type="text"
                placeholder="Name"
                value={newStory.name}
                onChange={(e) =>
                  setNewStory({ ...newStory, name: e.target.value })
                }
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <textarea
                placeholder="Story"
                value={newStory.story}
                onChange={(e) =>
                  setNewStory({ ...newStory, story: e.target.value })
                }
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                required
              ></textarea>
              <input
                type="url"
                placeholder="Image URL"
                value={newStory.image}
                onChange={(e) =>
                  setNewStory({ ...newStory, image: e.target.value })
                }
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg"
              >
                {editingStory ? "Save Changes" : "Add Story"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminControlPanel;
