import React, { useState, useEffect } from "react";
import Events from "../pages/Events";
import { getConferences } from "../Store/Data/FetchData";

const Conferences = () => {
  const [upcomingConferences, setUpcomingEvents] = useState([]);
  const [pastConferences, setPastConfereces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { upcomingData, pastData } = await getConferences();
      setUpcomingEvents(upcomingData);
      setPastConfereces(pastData);
    };
    fetchData();
  }, []);

  return (
    <Events>
      <div className="flex">
        <main className="w-3/4 p-4">
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border rounded"
            />
          </div>

          <h1 className="font-bold text-xl">Upcoming Conferences</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingConferences &&
              upcomingConferences.map((event) => (
                <div className="bg-white rounded shadow">
                  <img
                    src={event.image}
                    alt={event.title}
                    class="max-w-full h-auto p-2"
                  />
                  <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
                    {event.title}
                    <span className="text-red-500 ml-2">→</span>
                  </h2>
                  <p>{event.description}</p>
                </div>
              ))}
          </div>

          <hr />
          <h1 className="font-bold text-xl">Past Conferences</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastConferences &&
              pastConferences.map((event) => (
                <div className="bg-white p-6 rounded shadow">
                  <img
                    src={event.image}
                    alt={event.title}
                    class="max-w-full h-auto p-2"
                  />
                  <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
                    {event.title}
                    <span className="text-red-500 ml-2">→</span>
                  </h2>
                  <p>{event.description}</p>
                </div>
              ))}
          </div>
        </main>
      </div>
    </Events>
  );
};

export default Conferences;
