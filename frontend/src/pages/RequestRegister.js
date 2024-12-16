import React, { useState } from "react";

const RequestRegister = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    userId: "",
    personalEmail: "",
    graduationYear: "",
    mobile: "",
    fieldOfStudy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRequestRegister = async (event) => {
    event.preventDefault();
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

        <form onSubmit={handleRequestRegister} className="space-y-6">
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
                value={userDetails.firstName}
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
                value={userDetails.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="userId" className="block font-medium text-gray-700">
              User ID<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={userDetails.userId}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your University ID"
              required
            />
            <p className="text-xs text-gray-500 mt-2">
              The user ID is a 6-digit number followed by 'B' assigned by the
              RGUKT University.
            </p>
          </div>

          <div>
            <label
              htmlFor="personalEmail"
              className="block font-medium text-gray-700"
            >
              Email Address (Personal) <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="personalEmail"
              name="personalEmail"
              value={userDetails.personalEmail}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="graduationYear"
                className="block font-medium text-gray-700"
              >
                Graduation Year <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="graduationYear"
                name="graduationYear"
                value={userDetails.graduationYear}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Graduation Year"
                required
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block font-medium text-gray-700"
              >
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={userDetails.mobile}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fieldOfStudy"
                className="block font-medium text-gray-700"
              >
                Field of Study <span className="text-red-500">*</span>
              </label>
              <select
                id="fieldOfStudy"
                name="fieldOfStudy"
                value={userDetails.fieldOfStudy}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select your field
                </option>
                <option value="ComputerScience">Computer Science</option>
                <option value="ECE">ECE</option>
              </select>
            </div>
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
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
            >
              Request Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestRegister;
