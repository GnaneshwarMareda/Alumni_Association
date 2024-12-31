import React, { useState, useEffect } from "react";
import axios from "axios";
import { getEvents } from "../Store/Data/FetchData";
import { addEvent } from "../Store/Data/PostData";

const ManageEvents = () => {
  const [events, setEvents] = useState([]); // To hold existing events
  const [showForm, setShowForm] = useState(false); // To toggle form visibility
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    image: null, // Update for file input
    dateOfEvent: "",
    timeOfEvent: "",
    eventType: "",
  });

  // Fetch existing events from the database
  useEffect(() => {
    const fetchData = async () => {
      const { events } = await getEvents();
      setEvents(events);
    };
    fetchData();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = "";

      if (newEvent.image) {
        const formData = new FormData();
        formData.append("file", newEvent.image);
        formData.append("upload_preset", "image_preset");
        formData.append("cloud_name", "dqztnamkx"); // Replace with your Cloudinary cloud name

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dqztnamkx/image/upload",
          formData
        );

        imageUrl = response.data.secure_url; // Get the uploaded image URL
      }

      // Prepare event data
      const eventData = {
        ...newEvent,
        image: imageUrl, // Set the Cloudinary image URL
      };

      // Send the event data to the backend
      const { message } = await addEvent(eventData);
      alert(message);

      // Reset form and fetch updated events
      setNewEvent({
        title: "",
        description: "",
        image: null,
        dateOfEvent: "",
        timeOfEvent: "",
        eventType: "",
      });
      setShowForm(false);
      const { events } = await getEvents();
      setEvents(events);
    } catch (error) {
      console.error("Error uploading event:", error);
      alert("Failed to add event. Please try again.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 shadow-lg rounded-xl p-8 mb-10">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🎉 Manage Events
        </h2>
        {/* Toggle Form Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="mx-10 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md mb-6 transition-transform transform hover:scale-105"
        >
          {showForm ? "Hide Form" : "Add Event"}
        </button>
      </div>
      <hr className="border-gray-300 mb-8" />

      {/* Event Form */}
      {showForm && (
        <div className="bg-white p-8 rounded-xl shadow-lg mx-auto max-w-2xl">
          <form onSubmit={handlePost} className="space-y-6">
            {/* Event Title */}

            <div className="relative">
              <label className="left-4 top-3 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 transition-all text-sm peer-placeholder-shown:text-base">
                Event Title
              </label>
              <input
                type="text"
                placeholder=" "
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Event Description */}
            <div className="relative">
              <label className="left-4 top-3 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 transition-all text-sm peer-placeholder-shown:text-base">
                Event Description
              </label>
              <textarea
                placeholder=" "
                value={newEvent.description}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, description: e.target.value })
                }
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>

            {/* Event Image (File Input) */}
            <div className="relative">
              <label className="left-4 top-3 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 transition-all text-sm peer-placeholder-shown:text-base">
                Upload Event Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setNewEvent({ ...newEvent, image: e.target.files[0] })
                }
                className="peer w-full px-4 py-3  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="left-4 top-3 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 transition-all text-sm peer-placeholder-shown:text-base">
                  Event Date
                </label>
                <input
                  type="date"
                  value={newEvent.dateOfEvent}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, dateOfEvent: e.target.value })
                  }
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="relative">
                <label className="left-4 top-3 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 transition-all text-sm peer-placeholder-shown:text-base">
                  Event Time
                </label>
                <input
                  type="time"
                  value={newEvent.timeOfEvent}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, timeOfEvent: e.target.value })
                  }
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            {/* Event Category */}
            <div className="relative">
              <label className="left-4 top-3 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 transition-all text-sm peer-placeholder-shown:text-base">
                Event Category
              </label>
              <select
                value={newEvent.eventType}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, eventType: e.target.value })
                }
                className="peer w-full px-4 py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Conference">Conference</option>
                <option value="Tech Reunion">Tech Reunion</option>
                <option value="Workshops">Workshops</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Add Event
            </button>
          </form>
        </div>
      )}

      {/* Existing Events */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Existing Events
        </h3>
        {events ? (
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li key={index} className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-800">
                  {event.title}
                </h4>
                <p className="text-gray-600">{event.description}</p>
                <span className="text-sm text-gray-500">
                  {event.dateOfEvent} at {event.timeOfEvent} | {event.category}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No events available. Add one now!</p>
        )}
      </div>
    </section>
  );
};

export default ManageEvents;
