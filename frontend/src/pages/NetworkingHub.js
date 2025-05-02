import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import URL from "../Store/Url";
import { getAlumniData } from "../Store/Data/FetchData";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [activeTab, setActiveTab] = useState("explore");
  const [fieldFilter, setFieldFilter] = useState("");

  useEffect(() => {
    fetchAlumniAndStatuses();
  }, []);

  const fetchAlumniAndStatuses = async () => {
    try {
      const res = await getAlumniData();
      if (res.error) {
        console.error("Error fetching alumni:", res.error);
        return;
      }

      const alumniList = res.data;
      setAlumni(alumniList);

      const tempMap = {};
      const statusRequests = alumniList
        .filter((a) => a.Id !== userId)
        .map(async (a) => {
          const res = await fetch(
            `${URL}/networkhub/connect/status/${userId}/${a.Id}?fromRole=${role}&toRole=alumni`,
            getOptions
          );
          const json = await res.json();
          tempMap[a.Id] = json.data;
        });

      await Promise.all(statusRequests);
      setStatusMap(tempMap);
    } catch (err) {
      console.error("Status fetch error:", err);
    }
  };

  const handleAction = async (type, targetId) => {
    const endpoint = `${URL}/networkhub/connect/${type}/${userId}/${targetId}?fromRole=${role}&toRole=alumni`;
    const res = await fetch(endpoint, postOptions);

    if (res.ok) {
      if (type === "accept") toast.success("Connection accepted!");
      else if (type === "reject") toast.info("Connection rejected.");
      else if (type === "connect") toast.success("Request sent!");
    } else {
      toast.error("Something went wrong.");
    }

    fetchAlumniAndStatuses();
  };

  const renderConnectionButton = (alumId) => {
    const status = statusMap[alumId];

    if (!status) {
      return (
        <button disabled className="bg-gray-300 px-4 py-1 rounded">
          Loading...
        </button>
      );
    }

    if (status.isConnected) {
      return <span className="text-green-600 font-semibold">Connected</span>;
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

    if (status.isPending) {
      return <span className="text-yellow-500 font-semibold">Pending</span>;
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

  const uniqueFields = [...new Set(alumni.map((a) => a.fieldOfStudy))].filter(
    Boolean
  );

  const filteredAlumni = alumni
    .filter((a) => a.name?.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((a) => (fieldFilter ? a.fieldOfStudy === fieldFilter : true));

  const getAlumniToShow = () => {
    if (activeTab === "explore") {
      return filteredAlumni.filter(
        (a) => !statusMap[a.Id]?.isConnected && a.Id !== userId
      );
    }
    if (activeTab === "pending") {
      return filteredAlumni.filter((a) => statusMap[a.Id]?.isRequested);
    }
    if (activeTab === "network") {
      return filteredAlumni.filter((a) => statusMap[a.Id]?.isConnected);
    }
    return [];
  };

  const renderAlumniCards = (list) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {list.map((alum) => (
        <div key={alum.Id} className="bg-white p-4 rounded shadow text-center">
          <img
            src={alum.profilePicture || "/default-user.png"}
            alt={alum.name}
            className="w-20 h-20 rounded-full mx-auto mb-2"
          />
          <h2 className="font-bold text-lg">{alum.name}</h2>
          <p className="text-sm text-gray-600">
            {alum.jobRole} at {alum.company}
          </p>
          <p className="text-sm text-gray-500">{alum.location}</p>
          <p className="text-sm text-gray-400">{alum.fieldOfStudy}</p>
          <div className="mt-2">{renderConnectionButton(alum.Id)}</div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Networking Hub</h1>

        {/* Search & Filter */}
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
            {uniqueFields.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {["explore", "pending", "network"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${
                activeTab === tab
                  ? "bg-indigo-600 text-white"
                  : "bg-white border border-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "explore"
                ? "Explore Connections"
                : tab === "pending"
                ? "Requests"
                : "Your Network"}
            </button>
          ))}
        </div>

        {renderAlumniCards(getAlumniToShow())}
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
};

export default NetworkingHub;
