import React from "react";
import Careers from "../Routes/Careers";

const CareerEvents = () => {
  return (
    <Careers>

      <div className="bg-gray-100 px-6 py-10">
        <section className="flex-1 py-6 text-center">
          <div className="bg-white p-6 shadow rounded">
            <h1 className="text-4xl text-red-500 font-bold mb-4">
              Career Events & Programs
            </h1>
            <p className="text-gray-700">
              Sign up for webinars, events, and other professional development
              programs to enhance your individual skills for career growth.
            </p>
          </div>
        </section>
        {/* <h1 className="text-center text-2xl font-bold mb-6">CAREER EVENTS & PROGRAMS</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              India's Biggest Reading Festival- Read India Celebration (International)
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              Participate in India's Biggest Reading Festival- Read India Celebration (International)- Register for free & Win Exciting Prizes & Certification for all Participants
              <br />
              Hurry up!
            </p>
          </div>
          {/* Column 2 */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              CMR HACKFEST 2.0 - National Level 36-Hour Hackathon
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              CMR HACKFEST 2.0 is an exhilarating and innovative Hackathon and Project Competition that aims to bring together bright minds and creative thinkers from various institutions to collaborate, ideate, and innovate in the realm of technology and beyond.
            </p>
          </div>
          {/* Column 3 */}
          <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              RGUKT Skill Up: Technology Bootcamp
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              An intensive 2-week bootcamp aimed at equipping students with in-demand technical skills and hands-on project experience in areas such as AI, data science, full-stack development, and blockchain technology.
            </p>
          </div>
          {/* Column 4 */}
          <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              Career Empowerment Webinar Series
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              A webinar series designed to help students and graduates explore a variety of career opportunities. These webinars will feature industry leaders, alumni, and career experts sharing their experiences and offering guidance on career planning, skill enhancement, and emerging job trends.
            </p>
          </div>
        </div>
      </div>
    </Careers>
  );
};

export default CareerEvents;
