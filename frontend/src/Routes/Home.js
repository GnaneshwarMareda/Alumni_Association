import React from "react";

import b13_AEE from "../images/success_stories/B13_AEE.jpeg";
import b14_AEE from "../images/success_stories/B14_AEE.jpeg";
import b16_AEE from "../images/success_stories/B16_AEE.jpeg";
import Maruthi_b14 from "../images/success_stories/Maruthi_B14.jpeg";

const Home = () => {
  // Dummy data
  const events = [
    {
      id: 1,
      title: "Annual Alumni Meet 2024",
      description: "Reconnect with old friends and celebrate achievements.",
      date: "December 15, 2024",
      link: "http://localhost:3000/",
    },
    {
      id: 2,
      title: "Webinar: Career Growth Tips",
      description: "Learn from experienced alumni in various industries.",
      date: "November 30, 2024",
      link: "http://localhost:3000/",
    },
    {
      id: 3,
      title: "Sports Day Reunion",
      description: "Relive the glory of your sporting days with a fun event.",
      date: "January 10, 2025",
      link: "http://localhost:3000/",
    },
  ];

  const successStories = [
    {
      id: 1,
      name: "B13 Batch",
      story:
        "Congratulations to all the alumni from the B13 batch selected for AEE positions in Telangana State",
      image: b13_AEE,
    },
    {
      id: 2,
      name: "B14 Batch",
      story:
        "Congratulations to all the alumni from the B14 batch selected for AEE positions in Telangana State",
      image: b14_AEE,
    },
    {
      id: 3,
      name: "B16 Batch",
      story:
        "Congratulations to all the alumni from the B16 batch selected for AEE positions in Telangana State",
      image: b16_AEE,
    },
    {
      id: 4,
      name: "Mr. Maruthi",
      story:
        "Congratulations, Mr. Maruthi from the B14 Batch of Mechanical Engineering, for your incredible achievement of conquering the highest peak in Europe, Mt. Elbrus at 5,642 meters!",
      image: Maruthi_b14,
    },
  ];

  const photos = [
    { url: "https://via.placeholder.com/150", alt: "Photo 1" },
    { url: "https://via.placeholder.com/150", alt: "Photo 2" },
    { url: "https://via.placeholder.com/150", alt: "Photo 3" },
    { url: "https://via.placeholder.com/150", alt: "Photo 4" },
    { url: "https://via.placeholder.com/150", alt: "Photo 5" },
    { url: "https://via.placeholder.com/150", alt: "Photo 6" },
  ];

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
              {events.map((event) => (
                <li key={event.id} className="p-4 hover:bg-gray-50">
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-600 hover:underline cursor-pointer"
                  >
                    {event.title}
                  </a>
                  <p className="text-sm text-gray-600">{event.description}</p>
                  <p className="text-sm text-gray-500 mt-1">{event.date}</p>
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
        <div className="relative flex items-center space-x-4 animate-marquee">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="relative bg-blue-50 rounded-lg shadow-lg p-4 min-w-[16rem] min-h-[20rem] max-w-[18rem] 
                    flex-shrink-0 hover:shadow-xl transition-shadow flex flex-col items-center justify-between"
            >
              <img
                src={story.image}
                alt={story.name}
                className="w-70 h-40 object-cover  mb-4"
              />
              <h3 className="text-lg font-semibold text-center">
                {story.name}
              </h3>
              <p className="text-gray-600 text-center text-sm mt-2">
                {story.story}
              </p>
            </div>
          ))}
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
