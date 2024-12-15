import React from "react";
import { useState } from "react";
import { addEvent } from "../Store/Data/PostData";

const ManageEvents = () => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handlePost = async (event) => {
    event.preventDefault();
    const { title, description, image, dateOfEvent } = newEvent;
    console.log(newEvent);
    const response = await addEvent(title, description, image, dateOfEvent);
    alert(response.message);
  };

  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Manage Events
      </h2>
      <hr className="border-gray-300 mb-6" />
      <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-6">
        <form
          onSubmit={(e) => {
            handlePost(e);
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
            type="url"
            placeholder="Image URL"
            value={newEvent.image}
            onChange={(e) =>
              setNewEvent({ ...newEvent, image: e.target.value })
            }
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="date"
            value={newEvent.dateOfEvent}
            onChange={(e) =>
              setNewEvent({ ...newEvent, dateOfEvent: e.target.value })
            }
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg"
          >
            Add Event
          </button>
        </form>
      </div>
    </section>
  );
};

export default ManageEvents;
