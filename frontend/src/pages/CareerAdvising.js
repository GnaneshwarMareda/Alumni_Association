import React from "react";
import Careers from "../Routes/Careers";

import Undergraduate from "../images/Undergraduate.jpg";
import Alumni from "../images/Alumni.jpg";
import Graduate from "../images/Graduate.jpeg";
import Advice from "../images/Advice.jpg";
import Resume from "../images/resume.jpg";
import LinkedIn from "../images/linkedin.jpg";

const CareerAdvising = () => {
  return (
    <Careers>

      <div className="bg-gray-100 px-6 py-10">
        <section className="flex-1 py-6 text-center">
          <div className="bg-white p-6 shadow rounded">
            <h1 className="text-4xl text-red-500 font-bold mb-4">
              Career Advising & Networking
            </h1>
            <p className="text-gray-700">
              As you manage your lifelong professional journey, the RGUKT Alumni Association can connect you to career advising and networking opportunities within the RGUKT community and recommend help from RGUKT experts in your professional areas of interest.
            </p>
            <br />
            <a href="https://hub.rgukt.ac.in/hub/" className="inline-block bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
              Access the Alumni Advisors Hub
            </a>

          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div className="bg-white p-6 rounded shadow">
            <img src={Undergraduate} alt="Responsive Image" class="max-w-full h-auto p-2" />
            <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              Undergraduate Student Quick Start Guide
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              Undergraduate students, learn more about the Hub and how to get started.
            </p>
          </div>
          {/* Column 2 */}
          <div className="bg-white p-6 rounded shadow">
            <img src={Graduate} alt="Responsive Image" class="max-w-full h-auto p-2" />
            <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              Graduate Student Quick Start Guide
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              Graduate students, learn more about the Hub and get started.
            </p>
          </div>
          {/* Column 3 */}
          <div className="bg-white p-6 rounded shadow">
            <img src={Alumni} alt="Responsive Image" class="max-w-full h-auto p-2" />
            <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              Alumni Willing to Give Advice Quick Start Guide
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              Alumni who want to volunteer their time and sign up to be an advisor and give advice to students and fellow alumni, learn more here.</p>
          </div>
          {/* Column 4 */}
          <div className="bg-white p-6 rounded shadow">
            <img src={Advice} alt="Responsive Image" class="max-w-full h-auto p-2" />
            <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              Give Advice | Get Advice from Alumni
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              Connecting to RGUKT alumni for professional advice and navigating your career has never been easier. Get started here, login with your credentials to create a profile, or access the platform.
            </p>
          </div>
          {/* Column 5 */}
          <div className="bg-white p-6 rounded shadow">
            <img src={LinkedIn} alt="Responsive Image" class="max-w-full h-auto p-2" />
            <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              Undergraduate Student Quick Start Guide
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              Undergraduate students, learn more about the Hub and how to get started.
            </p>
          </div>
          {/* Column 6 */}
          <div className="bg-white p-6 rounded shadow">
            <img src={Resume} alt="Responsive Image" class="max-w-full h-auto p-2" />
            <h2 className="text-xl text-blue-900 font-bold mb-2 hover:text-red-500">
              Graduate Student Quick Start Guide
              <span className="text-red-500 ml-2">→</span>
            </h2>
            <p>
              Graduate students, learn more about the Hub and get started.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 href="https://hub.rgukt.ac.in/hub/" className="text-2xl text-red-500 m-4 text-center">
              More about RGUKT Alumni Advisors Hub
              <span className="text-red-500 ml-2">→</span>
            </h1>
          </div>
        </div>
      </div>
    </Careers>
  );
};

export default CareerAdvising;
