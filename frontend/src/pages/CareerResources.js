import Careers from "../Routes/Careers";
import React, { useState } from "react";

const CareerResources = () => {
  const [openSection, setOpenSection] = useState(null);

  // Function to toggle sections
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <Careers>
      <div className="px-6">
        <section className="flex-1 py-6 text-center">
          <div className="bg-white p-6 shadow rounded">
            <h1 className="text-4xl text-red-500 font-bold mb-4">
              Career Resources
            </h1>
            <p className="text-gray-700">
              Job searches and career changes can be equally daunting. From
              researching career paths to honing your interviewing skills, these
              career tools and resources offer you tips, assessments, books, and
              other learning aids to help you along the journey.
            </p>
          </div>
        </section>

        {/* Accordion Section 1 */}
        <div>
          <h2
            className="text-xl font-semibold cursor-pointer text-gray-800 py-3 border-b hover:text-red-500"
            onClick={() => toggleSection("jobBoards")}
          >
            Online Job Boards and Search Engines
          </h2>
          {openSection === "jobBoards" && (
            <div className="pl-4 py-2 text-gray-600">
              <p>
                Explore various job boards and search engines to aid your career
                development.
              </p>
            </div>
          )}
        </div>

        {/* Accordion Section 2 */}
        <div>
          <h2
            className="text-xl font-semibold cursor-pointer text-gray-800 py-3 border-b hover:text-red-500"
            onClick={() => toggleSection("books")}
          >
            Books and Workbooks
          </h2>
          {openSection === "books" && (
            <div className="pl-4 py-2 text-gray-600">
              <ul className="list-disc pl-5">
                <li>
                  <strong>The Pathfinder:</strong> How To Choose or Change Your
                  Career For a Lifetime of Satisfaction by Nicholas Lore
                </li>
                <li>
                  <strong>Do What You Are:</strong> Discover the Perfect Career
                  for You Through the Secrets of Personality Type by Paul
                  Tieger, Barbara Barron, and Kelly Tieger
                </li>
                <li>
                  <strong>What Color Is Your Parachute?:</strong> A Practical
                  Manual for Job-Hunters and Career-Changers by Richard N.
                  Bolles
                </li>
                <li>
                  <strong>Strengths Finder 2.0</strong> by Tom Rath
                </li>
                <li>
                  <strong>Put Your Science To Work:</strong> The Take-Charge
                  Career Guide for Scientists by Peter S. Fiske
                </li>
                <li>
                  <strong>Bounce:</strong> Mozart, Federer, Picasso, Beckham,
                  and the Science of Success by Matthew Syed
                </li>
                <li>
                  <strong>Love It Don't Leave It:</strong> 26 Ways to Get What
                  You Want At Work by Beverly Kaye
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Accordion Section 3 */}
        <div>
          <h2
            className="text-xl font-semibold cursor-pointer text-gray-800 py-3 border-b hover:text-red-500"
            onClick={() => toggleSection("tools")}
          >
            O*NET: Occupational Information and Tools
          </h2>
          {openSection === "tools" && (
            <div className="pl-4 py-2 text-gray-600">
              <p>
                Discover occupational tools and resources for career planning.
              </p>
            </div>
          )}
        </div>

        {/* Accordion Section 4 */}
        <div>
          <h2
            className="text-xl font-semibold cursor-pointer text-gray-800 py-3 border-b hover:text-red-500"
            onClick={() => toggleSection("careerPaths")}
          >
            My IDP: Career Paths for PhDs
          </h2>
          {openSection === "careerPaths" && (
            <div className="pl-4 py-2 text-gray-600">
              <p>Explore personalized career paths designed for PhD holders.</p>
            </div>
          )}
        </div>

        {/* Accordion Section 5 */}
        <div>
          <h2
            className="text-xl font-semibold cursor-pointer text-gray-800 py-3 border-b hover:text-red-500"
            onClick={() => toggleSection("tools")}
          >
            Skills Profiler
          </h2>
          {openSection === "tools" && (
            <div className="pl-4 py-2 text-gray-600">
              <p>
                The free Skills Profiler tool can help create a basic list of
                your skills and match them to job types that use those skills.
                The Profiler also provide words to use in your job search
                documents.
              </p>
            </div>
          )}
        </div>

        {/* Accordion Section 6 */}
        <div>
          <h2
            className="text-xl font-semibold cursor-pointer text-gray-800 py-3 border-b hover:text-red-500"
            onClick={() => toggleSection("careerPaths")}
          >
            RGUKT Career Advising and Professional Development (CAPD)
          </h2>
          {openSection === "careerPaths" && (
            <div className="pl-4 py-2 text-gray-600">
              <p>
                Alumni like you are always welcome to attend most RGUKT CAPD
                on-campus workshops, company information sessions,
                presentations, webinars, and career fairs. Advance registration
                is often required. Alumni who have graduated in the last 24
                months are eligible to schedule career services appointments at
                CAPD. All undergraduate alumni, regardless of graduation year,
                are eligible for Prehealth advising appointments.
              </p>
            </div>
          )}
        </div>

        {/* Accordion Section 7 */}
        <div>
          <h2
            className="text-xl font-semibold cursor-pointer text-gray-800 py-3 border-b hover:text-red-500"
            onClick={() => toggleSection("careerPaths")}
          >
            RGUKT Alumni Advisors Hub
          </h2>
          {openSection === "careerPaths" && (
            <div className="pl-4 py-2 text-gray-600">
              <p>
                The RGUKT Alumni Advisors Hub is an online platform that
                facilitates one to one career conversations with alumni
                volunteers who are willing to chat and share career and
                professional advice with students of their fellow alumni. As an
                Alumni you can offer advice or your experience OR you can
                receive advice from the MIT community mindshare of your fellow
                alumni. There's a robust list of Alumni Advisor
                consultation/conversation types – Career Advising: (Resume
                Critiques, Mock Interviews, Job Shadowing Opportunities, Case
                Interviews, Portfolio Review Coding Interview Prep, Work-Life
                Balance) and more! Startup & Business Advice” (Team Management,
                Fundraising, Engineering Management, Product Design, Developing
                a Business Plan) Admissions Advice: (Applying to Business,
                Medical or Law School) Academic Advice: (What to do with my
                major, Navigating my PhD, Writing a Dissertation, Politics of a
                Research Lab, etc.)
              </p>
            </div>
          )}
        </div>
      </div>
    </Careers>
  );
};

export default CareerResources;
