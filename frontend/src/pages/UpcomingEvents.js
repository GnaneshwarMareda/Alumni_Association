import React from "react";
import Events from "../Routes/Events";
import Gatherings from "../images/gatherings.jpg";
import Leadership from "../images/leadership.jpg";
import Reunion from "../images/reunion.jpeg";
import Upcoming from "../images/upcoming.jpg";
import Event from "../images/events.jpg";

const UpcomingEvents = () => {
  return (
    <Events>
      <div className="px-6">
        <section className="flex-1 py-6 text-center">
          <div className="bg-white p-6 shadow rounded">
            <img
              src={Event}
              alt="Responsive Image"
              class="max-w-full h-auto p-2"
            />
            <h1 className="text-4xl text-red-500 font-bold mb-4">
              You're Invited!
            </h1>
            <p className="text-gray-700">
              From regional club events to Tech Reunions to volunteer
              gatherings, the RGUKT Alumni Association offers a host of
              events–and endless ways to engage.
            </p>
          </div>
        </section>
        {/* <h1 className="text-center text-2xl font-bold mb-6">CAREER EVENTS & PROGRAMS</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div className="bg-white p-6 rounded shadow">
            <img
              src={Upcoming}
              alt="Responsive Image"
              class="max-w-full h-auto p-2"
            />
            <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              All Upcoming Events
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              Check out the Association's full listing of in-person and online
              events. There's something for everyone!
            </p>
          </div>
          {/* Column 2 */}
          <div className="bg-white p-6 rounded shadow">
            <img
              src={Reunion}
              alt="Responsive Image"
              class="max-w-full h-auto p-2"
            />
            <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              Tech Reunions
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              Join RGUKT alumni from around the globe for MIT Tech Reunions,
              which will feature only-at-RGUKT events that you won’t want to
              miss.
            </p>
          </div>
          {/* Column 3 */}
          <div className="bg-white p-6 rounded shadow">
            <img
              src={Leadership}
              alt="Responsive Image"
              class="max-w-full h-auto p-2"
            />
            <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              Alumni Leadership Conference
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              Join your fellow RGUKT volunteers for two days of learning,
              inspiration, and achievement. Find out about the annual ALC.
            </p>
          </div>
          {/* Column 4 */}
          <div className="bg-white p-6 rounded shadow">
            <img
              src={Gatherings}
              alt="Responsive Image"
              class="max-w-full h-auto p-2"
            />
            <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              Women's Conference
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              The 2025 RGUKT Women’s Conference will gather RGUKT alumnae from
              around the globe to celebrate connections to the University and
              one another
            </p>
          </div>
        </div>
      </div>
    </Events>
  );
};

export default UpcomingEvents;
