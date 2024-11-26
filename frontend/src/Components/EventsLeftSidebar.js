import React from "react";

import LeftSidebar from "./LeftSidebar";

const data = [
  { name: "Career Events & Programs", path: "/career-events" },
  { name: "Career Advising and Networking", path: "/career-advising" },
  { name: "Jobs", path: "/jobs" },
  { name: "Career Resources", path: "/career-resources" },
  { name: "Hire MIT Alumni", path: "/hire" },
  { name: "Online Alumni Directory", path: "/alumni-directory" },
];

const EventsLeftSidebar = () => {
  return <LeftSidebar data={data} />;
};

export default EventsLeftSidebar;
