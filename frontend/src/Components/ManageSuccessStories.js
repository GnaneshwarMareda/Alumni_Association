import React from "react";
import { useState } from "react";
import { addSuccessStory } from "../Store/Data/PostData";

const ManageSuccessStories = () => {
  const [newStory, setNewStory] = useState({
    name: "",
    story: "",
    image: "",
  });

  const handlePost = async (event) => {
    event.preventDefault();
    const { title, description, image } = newStory;
    const response = await addSuccessStory(title, image, description);
    alert(response.message);
  };

  return (
    <section className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Manage Success Stories
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
            placeholder="Title"
            value={newStory.title}
            onChange={(e) =>
              setNewStory({ ...newStory, title: e.target.value })
            }
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            placeholder="Description"
            value={newStory.description}
            onChange={(e) =>
              setNewStory({ ...newStory, description: e.target.value })
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
            Add Story
          </button>
        </form>
      </div>
    </section>
  );
};

export default ManageSuccessStories;
