import React, { useEffect, useState } from "react";
import Events from "../pages/Events";
import { getUpcomingEvents } from "../Store/Data/FetchData";

const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUpcomingEvents();
      console.log(data);
      setUpcomingEvents(data);
    };

    fetchData();
  }, []);

  return (
    <Events>
      <div className="px-6">
        <section className="flex-1 py-6 text-center">
          {upcomingEvents.length > 0 && (
            <div className="bg-white p-6 shadow rounded">
              <img
                src={upcomingEvents[0].image}
                alt={upcomingEvents[0].title}
                class="max-w-full h-auto p-2"
              />
              <h1 className="text-4xl text-red-500 font-bold mb-4">
                {upcomingEvents[0].title}
              </h1>
              <p className="text-gray-700">{upcomingEvents[0].description}</p>
            </div>
          )}
        </section>
        {/* <h1 className="text-center text-2xl font-bold mb-6">CAREER EVENTS & PROGRAMS</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          {upcomingEvents &&
            upcomingEvents.map((event) => (
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
      </div>
    </Events>
  );
};

export default UpcomingEvents;
