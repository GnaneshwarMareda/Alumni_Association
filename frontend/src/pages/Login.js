// src/Routes/Login.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../Store/Data/PostData";
import Cookie from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    userId: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await loginUser(userDetails);
    if (response.status === 201) {
      const { jwtToken } = response;
      Cookie.set("jwtToken", jwtToken, { expires: 1 });
      if (userDetails.role === "admin") navigate("/admin-panel");
      else navigate("/");
    } else {
      const { message } = response;
      alert(message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-red-600">
          Login to AlumniConnect
        </h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              UserId (University Id)
            </label>
            <input
              type="text"
              name="userId"
              value={userDetails.userId}
              onChange={handleChange}
              placeholder="Enter your UserId"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring focus:ring-red-400 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userDetails.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring focus:ring-red-400 focus:outline-none"
              required
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Select Role
            </label>
            <select
              name="role"
              value={userDetails.role}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring focus:ring-red-400 focus:outline-none"
              required
            >
              <option value="" disabled>
                Choose your role
              </option>
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="text-red-600 focus:ring-red-400 focus:ring-opacity-25 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-red-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Registration Link */}
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-600 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
