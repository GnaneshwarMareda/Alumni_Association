import React from "react";
import { useEffect, useState } from "react";
import { getSuccessStories, getUpcomingEvents } from "../Store/Data/FetchData";
import DateFormater from "../Store/DateFormater";
import photos from "../Store/HomeData";

const Home = () => {
  const [stories, setStories] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const { data } = await getSuccessStories();
        setStories(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    const fetchUpComingEvents = async () => {
      try {
        const { data } = await getUpcomingEvents();
        setUpcomingEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchSuccessStories();
    fetchUpComingEvents();
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-blue-600 text-white px-6 py-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the RGUKT Alumni Association
          </h1>
          <p className="text-lg mb-6">
            Stay connected, share your stories, and celebrate success.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://www.rgukt.ac.in/assets/images/rgukt/convocation.JPG"
            alt="Alumni Gathering"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
      <hr className="my-2 border-gray-300" />

      <section className="py-12">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Photos Section */}
          <div className="flex-1 lg:pr-4">
            <h3 className="text-xl font-bold ml-6 mb-4">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 border rounded-lg shadow-sm">
              {photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gray-300"></div>

          {/* Events Section */}
          <div className="flex-1 lg:pl-4">
            <h3 className="text-xl font-bold ml-5 mb-4">Upcoming Events</h3>
            <ul className="divide-y divide-gray-300">
              {upcomingEvents.map((event) => (
                <li key={event._id} className="p-4 hover:bg-gray-50">
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-600 hover:underline cursor-pointer"
                  >
                    {event.title}
                  </a>
                  <p className="text-sm text-gray-600">{event.description}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {DateFormater(event.dateOfEvent)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-2 border-gray-300" />

      {/* Success Stories Section */}
      <section className="py-2 overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-8">
          Success Stories and Achievements
        </h2>
        <div className="mb-8">
          {stories && stories.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-marquee">
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
      <hr className="my-2 border-gray-300" />

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: flex;
          gap: 1rem;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
