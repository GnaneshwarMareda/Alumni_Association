import React, { useState } from "react";

const AlumniRequests = () => {
  // Example data for alumni requests
  const [alumniRequests, setAlumniRequests] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      graduationYear: "2020",
      requestDate: "2024-12-10",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      graduationYear: "2018",
      requestDate: "2024-12-12",
    },
  ]);

  // State to handle the selected alumni and modal visibility
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  // Function to open the modal with full info
  const viewFullInfo = (alumni) => {
    setSelectedAlumni(alumni);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedAlumni(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Alumni Requests
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Request Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {alumniRequests.map((alumni) => (
              <tr key={alumni.id} className="border-b">
                <td className="px-4 py-2 text-gray-700">{alumni.name}</td>
                <td className="px-4 py-2 text-gray-700">{alumni.email}</td>
                <td className="px-4 py-2 text-gray-700">
                  {alumni.requestDate}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => viewFullInfo(alumni)}
                    className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    View Full Info
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for full alumni info */}
      {selectedAlumni && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Alumni Full Info
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Name:</strong> {selectedAlumni.name}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> {selectedAlumni.email}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> {selectedAlumni.phone}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Graduation Year:</strong> {selectedAlumni.graduationYear}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Request Date:</strong> {selectedAlumni.requestDate}
            </p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniRequests;
