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
    },
    {
      id: 2,
      title: "Webinar: Career Growth Tips",
      description: "Learn from experienced alumni in various industries.",
      date: "November 30, 2024",
    },
    {
      id: 3,
      title: "Sports Day Reunion",
      description: "Relive the glory of your sporting days with a fun event.",
      date: "January 10, 2025",
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
    "https://via.placeholder.com/300x200?text=Photo+1",
    "https://via.placeholder.com/300x200?text=Photo+2",
    "https://via.placeholder.com/300x200?text=Photo+3",
    "https://via.placeholder.com/300x200?text=Photo+4",
    "https://via.placeholder.com/300x200?text=Photo+5",
    "https://via.placeholder.com/300x200?text=Photo+6",
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-blue-600 text-white px-6 py-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Alumni Association
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

      {/* Photos Section */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          Memories through Pictures
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo ${index + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-50 rounded-lg shadow-lg p-6 w-full sm:w-64 hover:shadow-xl transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <p className="text-sm text-gray-500 mb-4">{event.date}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-8">
          Alumni Success Stories
        </h2>
        <div className="relative flex items-center space-x-4 animate-marquee">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="relative bg-blue-50 rounded-lg shadow-lg p-6 min-w-[16rem] min-h-[20rem] max-w-[18rem] 
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
