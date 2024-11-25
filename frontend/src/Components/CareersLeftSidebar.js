import React from "react";
import { NavLink } from "react-router-dom";

const CareersLeftSidebar = () => {
  const links = [
    { name: "Career Events & Programs", path: "/career-events" },
    { name: "Career Advising and Networking", path: "/career-advising" },
    { name: "Jobs", path: "/jobs" },
    { name: "Career Resources", path: "/career-resources" },
    { name: "Hire MIT Alumni", path: "/hire" },
    { name: "Online Alumni Directory", path: "/alumni-directory" },
  ];

  return (
    // <aside className="w-full lg:w-1/4 bg-white shadow rounded p-4">
    <aside className="w-full lg:w-1/4 rounded p-4">
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-red-500"
                  : "font-semibold text-gray-800 hover:text-red-500"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CareersLeftSidebar;
