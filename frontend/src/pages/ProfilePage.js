import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Cookie from "js-cookie";
import URL from "../Store/Url";

const ProfilePage = () => {
  const { userId, role } = useAuth();
  const [formData, setFormData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState("");

  const getProfile = async () => {
    const res = await fetch(`${URL}/profile/${role}/${userId}`, {
      headers: {
        Authorization: `Bearer ${Cookie.get("jwtToken")}`,
      },
    });
    const data = await res.json();
    if (data.success) {
      setFormData(data.data);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleUpdate = async () => {
    const updatedData = {
      ...formData,
      interests: formData.interests
        ?.split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };

    const res = await fetch(`${URL}/profile/${role}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookie.get("jwtToken")}`,
      },
      body: JSON.stringify(updatedData),
    });

    const result = await res.json();
    if (result.success) {
      setStatus("✅ Profile updated successfully!");
      setIsEditing(false);
    } else {
      setStatus("❌ Error updating profile.");
    }
  };

  if (!formData)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading...
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        My Profile
      </h1>

      <div className="space-y-6">
        {Object.entries(formData).map(([key, value]) => {
          if (
            [
              "_id",
              "password",
              "__v",
              "connections",
              "pendingRequests",
              "sentRequests",
            ].includes(key)
          )
            return null;

          const editableFields = ["personalEmail", "mobile", "interests"];
          const isEditable = isEditing && editableFields.includes(key);

          const commonStyles =
            "w-full px-4 py-2 rounded-lg shadow-sm border focus:outline-none";
          const inputStyles = isEditable
            ? `${commonStyles} border-gray-300 focus:ring-2 focus:ring-indigo-500`
            : `${commonStyles} bg-gray-100 text-gray-600 cursor-not-allowed`;

          return (
            <div key={key}>
              <label className="block text-gray-700 font-medium mb-1 capitalize">
                {key}
              </label>
              {key === "interests" ? (
                <textarea
                  rows={2}
                  value={Array.isArray(value) ? value.join(", ") : value || ""}
                  disabled={!isEditable}
                  onChange={(e) =>
                    setFormData({ ...formData, interests: e.target.value })
                  }
                  className={inputStyles}
                  placeholder="AI, Web Development, Cloud"
                />
              ) : (
                <input
                  type="text"
                  value={value || ""}
                  disabled={!isEditable}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                  className={inputStyles}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-end mt-8 space-x-4">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Edit Profile
          </button>
        ) : (
          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Save Changes
          </button>
        )}
      </div>

      {status && (
        <p className="mt-6 text-center text-sm font-medium text-green-600">
          {status}
        </p>
      )}
    </div>
  );
};

export default ProfilePage;
