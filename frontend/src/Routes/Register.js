// src/Register.js
import React, { useState } from "react";
//import axios from "axios";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userId: "",
    personalEmail: "",
    universityEmail: "",
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.userId &&
      formData.personalEmail
    ) {
      setStep(2);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleRegister = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.post("/register", formData);
    //   if (response.status === 200) {
    //     alert("Registration successful!");
    //   } else {
    //     alert("Registration failed. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Registration error:", error);
    //   alert("An error occurred during registration.");
    //}
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Create Account
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Please use the form below to create an account. Fields marked with{" "}
          <span className="text-red-500">*</span> are required.
        </p>

        <form onSubmit={handleRegister} className="space-y-6">
          {step === 1 && (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-medium text-gray-700"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-medium text-gray-700"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="userId"
                  className="block font-medium text-gray-700"
                >
                  User ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your 10-digit User ID"
                  required
                />
                <p className="text-xs text-gray-500 mt-2">
                  The user ID is a 6-digit number followed by 'B' assigned by
                  the RGUKT University.{" "}
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    try a different form
                  </a>{" "}
                  to create your account.
                </p>
              </div>

              <div>
                <label
                  htmlFor="personalEmail"
                  className="block font-medium text-gray-700"
                >
                  Email Address (Personal){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="personalEmail"
                  name="personalEmail"
                  value={formData.personalEmail}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="captcha"
                  className="mr-3 h-5 w-5 text-blue-600 focus:ring-2 focus:ring-blue-500 rounded"
                  required
                />
                <label htmlFor="captcha" className="text-gray-700">
                  I am human
                </label>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Agree and Continue
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label
                  htmlFor="universityEmail"
                  className="block font-medium text-gray-700"
                >
                  University Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="universityEmail"
                  name="universityEmail"
                  value={formData.universityEmail}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your university email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="otp"
                  className="block font-medium text-gray-700"
                >
                  OTP <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the OTP sent to your university email"
                  required
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
