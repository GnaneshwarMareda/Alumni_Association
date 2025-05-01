import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import URL from "../Store/Url";
import { getAlumniData } from "../Store/Data/FetchData";
import useAuth from "../hooks/useAuth";

const getOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${Cookie.get("jwtToken")}`,
  },
};

const postOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${Cookie.get("jwtToken")}`,
  },
};

const NetworkingHub = () => {
  const { userId, role } = useAuth();
  const [alumni, setAlumni] = useState([]);
  const [statusMap, setStatusMap] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("explore"); // explore | pending | network
  const [fieldFilter, setFieldFilter] = useState("");

  useEffect(() => {
    fetchAlumni();
  }, []);

  const fetchAlumni = async () => {
    try {
      const res = await getAlumniData();
      if (res.error) {
        console.error("Error fetching alumni data:", res.error);
        return;
      }

      setAlumni(res.data);

      const tempStatusMap = {};
      const fetchStatusRequests = res.data
        .filter((alum) => alum.Id !== userId)
        .map(async (alum) => {
          const response = await fetch(
            `${URL}/networkhub/connect/status/${userId}/${alum.Id}?fromRole=${role}&toRole=alumni`,
            getOptions
          );
          const statusResponse = await response.json();
          tempStatusMap[alum.Id] = statusResponse.data;
        });

      await Promise.all(fetchStatusRequests);
      setStatusMap(tempStatusMap);
    } catch (error) {
      console.error("Error fetching alumni status:", error);
    }
  };

  const handleAction = async (type, id) => {
    let url = `${URL}/networkhub/connect/${type}/${userId}/${id}?fromRole=${role}&toRole=alumni`;
    await fetch(url, postOptions);
    fetchAlumni();
  };

  const renderButton = (alumId) => {
    const status = statusMap[alumId];

    if (!status) {
      return (
        <button
          disabled
          className="bg-gray-400 text-white px-4 py-1 rounded cursor-not-allowed opacity-50"
        >
          Loading...
        </button>
      );
    }

    if (status.isConnected) {
      return <span className="text-green-600 font-semibold">Connected</span>;
    }

    if (status.isPending) {
      return <span className="text-yellow-500 font-semibold">Pending</span>;
    }

    if (status.isRequested) {
      return (
        <>
          <button
            onClick={() => handleAction("accept", alumId)}
            className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
          >
            Accept
          </button>
          <button
            onClick={() => handleAction("reject", alumId)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Reject
          </button>
        </>
      );
    }

    return (
      <button
        onClick={() => handleAction("connect", alumId)}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Connect
      </button>
    );
  };

  const uniqueFieldsOfStudy = [
    ...new Set(alumni.map((alum) => alum.fieldOfStudy)),
  ].filter((field) => field);

  const filteredAlumni = alumni
    .filter((alum) =>
      alum.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((alum) => (fieldFilter ? alum.fieldOfStudy === fieldFilter : true));

  const getAlumniByTab = () => {
    if (activeTab === "explore") {
      return filteredAlumni.filter(
        (alum) => !statusMap[alum.Id]?.isConnected && alum.Id !== userId
      );
    }
    if (activeTab === "pending") {
      return filteredAlumni.filter((alum) => statusMap[alum.Id]?.isPending);
    }
    if (activeTab === "network") {
      return filteredAlumni.filter((alum) => statusMap[alum.Id]?.isConnected);
    }
    return [];
  };

  const renderAlumniCards = (alumniList) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {alumniList.map((alum) => (
        <div key={alum.Id} className="bg-white p-4 rounded shadow text-center">
          <img
            src={alum.profilePicture || "/default-user.png"}
            className="w-20 h-20 rounded-full mx-auto mb-2"
          />
          <h2 className="font-bold text-lg">{alum.name}</h2>
          <p className="text-sm text-gray-600">
            {alum.jobRole} at {alum.company}
          </p>
          <p className="text-sm text-gray-500">{alum.location}</p>
          <p className="text-sm text-gray-400">{alum.fieldOfStudy}</p>
          <div className="mt-2">{renderButton(alum.Id)}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Networking Hub</h1>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center items-center">
        <input
          type="text"
          placeholder="Search alumni..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 w-full sm:w-1/2"
        />
        <select
          value={fieldFilter}
          onChange={(e) => setFieldFilter(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 w-full sm:w-1/4"
        >
          <option value="">All Fields</option>
          {uniqueFieldsOfStudy.map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "explore"
              ? "bg-indigo-600 text-white"
              : "bg-white border border-gray-300"
          }`}
          onClick={() => setActiveTab("explore")}
        >
          Explore Connections
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "pending"
              ? "bg-indigo-600 text-white"
              : "bg-white border border-gray-300"
          }`}
          onClick={() => setActiveTab("pending")}
        >
          Pending Requests
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "network"
              ? "bg-indigo-600 text-white"
              : "bg-white border border-gray-300"
          }`}
          onClick={() => setActiveTab("network")}
        >
          Your Network
        </button>
      </div>

      {/* Alumni Cards */}
      {renderAlumniCards(getAlumniByTab())}
    </div>
  );
};

export default NetworkingHub;
