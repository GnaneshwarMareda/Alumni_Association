import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ component: Component, requiredRoles, ...rest }) => {
  const jwtToken = Cookies.get("jwtToken");

  if (!jwtToken) {
    return <Navigate to="/login" />;
  }

  try {
    const user = jwtDecode(jwtToken);

    if (user.role === requiredRoles[0] || user.role === requiredRoles[1]) {
      return <Component {...rest} />;
    }
    return <Navigate to="/unauthorized" />;
  } catch (error) {
    console.error("Invalid JWT Token", error);
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
