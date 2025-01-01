import React, { useState, useEffect } from "react";
import axios from "axios";
import { getEvents, getSuccessStories } from "../Store/Data/FetchData";
import { addSuccessStory } from "../Store/Data/PostData";

const ManageSuccessStories = () => {
  const [stories, setStories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newStory, setNewStory] = useState({
    title: "",
    description: "",
    image: null,
    directUrl: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getSuccessStories();
        setStories(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchData();
  }, []);

  const handlePost = async (e) => {
    console.log(newStory);
    e.preventDefault();

    try {
      let storyData;
      let imageUrl = "";

      if (newStory.directUrl && newStory.directUrl.length > 0) {
        storyData = {
          ...newStory,
          image: newStory.directUrl,
        };
      } else if (newStory.image) {
        const formData = new FormData();
        formData.append("file", newStory.image);
        formData.append("upload_preset", "image_preset"); // Replace with your preset
        formData.append("cloud_name", "dqztnamkx"); // Replace with your cloud name

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dqztnamkx/image/upload",
          formData
        );

        imageUrl = response.data.secure_url;
        storyData = { ...newStory, image: imageUrl };
      }

      const { message } = await addSuccessStory(storyData);
      alert(message);

      setNewStory({
        title: "",
        description: "",
        image: null,
        directUrl: "",
      });
      setShowForm(false);

      const { data } = await getEvents();
      setStories(data);
    } catch (error) {
      console.error("Error uploading event:", error);
      alert("Failed to add event. Please try again.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-0 to-indigo-100 shadow-lg rounded-xl p-8 mb-10">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🎉 Success Stories
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="mx-10 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md mb-6 transition-transform transform hover:scale-105"
        >
          {showForm ? "Hide Form" : "Add Story"}
        </button>
      </div>
      <hr className="border-gray-300 mb-8" />

      {showForm && (
        <div className="bg-white p-8 rounded-xl shadow-lg mx-auto max-w-2xl">
          <form onSubmit={handlePost} className="space-y-6">
            <div className="relative">
              <label className="left-4 top-3 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 transition-all text-sm peer-placeholder-shown:text-base">
                Event Title
              </label>
              <input
                type="text"
                placeholder=" "
                value={newStory.title}
                onChange={(e) =>
                  setNewStory({ ...newStory, title: e.target.value })
                }
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="relative">
              <label className="left-4 top-3 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 transition-all text-sm peer-placeholder-shown:text-base">
                Event Description
              </label>
              <textarea
                placeholder=" "
                value={newStory.description}
                onChange={(e) =>
                  setNewStory({ ...newStory, description: e.target.value })
                }
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>

            <div className="relative">
              <label className="left-4 top-3 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 transition-all text-sm peer-placeholder-shown:text-base">
                Upload Event Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setNewStory({ ...newStory, image: e.target.files[0] })
                }
                className="peer w-full px-4 py-3  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              or give Image URL
              <input
                type="text"
                value={newStory.directUrl}
                onChange={(e) =>
                  setNewStory({ ...newStory, directUrl: e.target.value })
                }
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Add Story
            </button>
          </form>
        </div>
      )}

      <div className="mb-8">
        {stories && stories.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {stories.map((event, index) => (
              <li
                key={index}
                className="p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {event.title}
                </h4>
                <p className="text-gray-600 mb-2">{event.description}</p>
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

export default ManageSuccessStories;
