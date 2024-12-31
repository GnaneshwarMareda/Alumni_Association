import React from "react";

import LeftSidebar from "./LeftSidebar";

const data = [
  { name: "Upcoming Events", path: "/events/upcoming-events" },
  {
    name: "Conferences",
    path: "/events/conferences",
  },
  { name: "Tech Reunions", path: "/events/tech-reunions" },
  { name: "Workshops", path: "/events/workshops" },
];

const EventsLeftSidebar = () => {
  return <LeftSidebar data={data} title="Events" titleLink="/events" />;
};

export default EventsLeftSidebar;
