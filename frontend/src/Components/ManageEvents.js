import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../Store/Url";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
  });

  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);
  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${URL}/events`);
      setEvents(response.data.events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

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
  return (
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
            <h3 className="text-lg font-bold text-gray-700">{event.title}</h3>
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
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
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
  );
};

export default ManageEvents;
