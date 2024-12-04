import React from "react";
import { Link, NavLink } from "react-router-dom";

const LeftSidebar = ({ data, title, titleLink }) => {
  return (
    // <aside className="w-full lg:w-1/4 bg-white shadow rounded p-4">
    <aside className="w-full lg:w-1/4 rounded p-4 ml-[100px]">
      <h1>
        <Link className="text-3xl font-bold" to={titleLink}>
          {title}
        </Link>
      </h1>
      <ul className="space-y-4 my-5">
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
