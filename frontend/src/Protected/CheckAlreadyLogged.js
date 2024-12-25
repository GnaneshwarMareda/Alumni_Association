import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const CheckAlreadyLogged = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwtToken");

  useEffect(() => {
    if (jwtToken) {
      navigate("/");
    }
  }, [jwtToken, navigate]);

  return <Component {...rest} />;
};

export default CheckAlreadyLogged;
