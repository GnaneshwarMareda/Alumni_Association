import React from "react";
import { NavLink } from "react-router-dom";

const LeftSidebar = ({ data }) => {
  return (
    // <aside className="w-full lg:w-1/4 bg-white shadow rounded p-4">
    <aside className="w-full lg:w-1/4 rounded p-4">
      <ul className="space-y-4">
        {data.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-red-500"
                  : "font-semibold text-gray-800 hover:text-red-500"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
