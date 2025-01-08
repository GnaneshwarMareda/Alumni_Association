import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-white-900 text-red-600 py-6 px-4 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-center">
          About RGUKT Alumni Association
        </h1>
      </div>

      {/* Content Section */}
      <div className="mt-10 max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <p className="text-gray-800 text-lg leading-relaxed">
          RGUKT, Basar has a registered Alumni Association. Starting from the
          first batch of students that graduated in 2014 till the current
          batches, several students are active in this association.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Activities and Contributions
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-3">
            <li>
              The association conducts alumni-to-alumni activities and
              alumni-to-student activities regularly, fostering connections and
              mentorship.
            </li>
            <li>
              Recently, a three-day workshop was organized to provide current
              students with insights into entrepreneurship, self-employment, and
              regular employment.
            </li>
            <li>
              Alumni counsel students on various options available after
              graduation, guiding them to make informed career choices.
            </li>
            <li>
              Workshops conducted by the association keep students aware of
              market trends and the latest technologies, ensuring they remain
              competitive.
            </li>
            <li>
              Alumni who excelled in national-level exams like GATE also share
              their experiences and motivational tips to inspire students.
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Join the Alumni Network
          </h3>
          <p className="text-gray-700">
            Stay connected, inspire the next generation, and contribute to the
            growth of the RGUKT community.
          </p>
          <a href="/request-register">
            <button className="mt-4 px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700">
              Become a Member
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
