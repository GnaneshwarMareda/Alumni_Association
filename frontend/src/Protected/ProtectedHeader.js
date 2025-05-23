import React from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Layouts/Header";

const studentHeaderContent = [
  {
    title: "Alumni Directory",
    link: "/alumni-directory",
  },

  {
    title: "Careers",
    link: "/careers/career-events",
  },
  {
    title: "Donate",
    link: "/donation",
  },
  {
    title: "Events",
    link: "/events/upcoming-events",
  },
  {
    title: "Networking Hub",
    link: "/networking-hub",
  },
  {
    title: "About",
    link: "/about",
  },
];

const adminHeaderContent = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Alumni Directory",
    link: "/alumni-directory",
  },
  {
    title: "Dashboard",
    link: "/admin-panel",
  },
];

const ProtectedHeader = () => {
  try {
    const jwtToken = Cookies.get("jwtToken");
    if (!jwtToken) {
      return <Header headerContent={studentHeaderContent} />;
    }
    const user = jwtDecode(jwtToken);

    if (user.role === "admin")
      return <Header headerContent={adminHeaderContent} />;

    return <Header headerContent={studentHeaderContent} />;
  } catch (error) {
    console.error("Invalid JWT Token", error);
    return <Navigate to="/login" />;
  }
};

export default ProtectedHeader;
