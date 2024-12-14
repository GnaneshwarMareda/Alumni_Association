import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../Store/Url";

const ManageSuccessStories = () => {
  const [successStories, setSuccessStories] = useState([]);

  const [newStory, setNewStory] = useState({
    name: "",
    story: "",
    image: "",
  });

  const [editingStory, setEditingStory] = useState(null);

  useEffect(() => {
    fetchSuccessStories();
  }, []);

  const fetchSuccessStories = async () => {
    try {
      const response = await axios.get(`${URL}/success-stories`);
      setSuccessStories(response.data.successStories);
    } catch (error) {
      console.error("Error fetching success stories:", error);
    }
  };

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
            <h3 className="text-lg font-bold text-gray-700">{story.name}</h3>
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
            onChange={(e) => setNewStory({ ...newStory, name: e.target.value })}
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
  );
};

export default ManageSuccessStories;
