import React, { useState } from "react";
import { addUser } from "../Store/Data/PostData";
import { sendOtp } from "../Store/Data/Otp";

const Register = () => {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    userId: "",
    personalEmail: "",
    universityEmail: "",
    graduationYear: "",
    mobile: "",
    fieldOfStudy: "",
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = async () => {
    console.log(userDetails);
    if (
      userDetails.firstName &&
      userDetails.lastName &&
      userDetails.userId &&
      userDetails.personalEmail &&
      step === 1
    ) {
      setStep(2);
    } else if (
      userDetails.yearOfStudy &&
      userDetails.fieldOfStudy &&
      userDetails.mobile &&
      userDetails.universityEmail
    ) {
      // sent OTP
      // const { status } = await sendOtp({
      //   universityEmail: userDetails.universityEmail,
      // });
      //if (status === 200) setStep(3);
      setStep(3);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const { message, status } = await addUser(userDetails);
    if (status) {
      alert(message);
    } else {
      alert(message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Create Account
        </h1>
        {step !== 3 && (
          <p className="text-center text-gray-600 mb-8">
            Please use the form below to create an account. Fields marked with{" "}
            <span className="text-red-500">*</span> are required.
          </p>
        )}

        {step === 3 && (
          <p className="text-center text-gray-600 mb-8">
            OTP has been sent to you University Email, Please Enter the OTP to
            complete the Registration.
            <span className="text-red-500">*</span> are required.
          </p>
        )}

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
                  value={userDetails.userId}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your University ID"
                  required
                />
                <p className="text-xs text-gray-500 mt-2">
                  The user ID is a 6-digit number followed by 'B' assigned by
                  the RGUKT University.
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
                  value={userDetails.personalEmail}
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

              <div>
                <p className="text-red-600">
                  <span className="font-bold">NOTE : </span>The Registration
                  process requires OTP send to University email. So if you are a
                  Alumni{" "}
                  <span className="text-blue-400 underline">
                    try different form.
                  </span>
                </p>
              </div>
            </>
          )}

          {step === 2 && (
            <>
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
                    htmlFor="yearOfStudy"
                    className="block font-medium text-gray-700"
                  >
                    Year of Study <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="yearOfStudy"
                    name="yearOfStudy"
                    value={userDetails.yearOfStudy}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled>
                      Select your year
                    </option>
                    <option value="1st year">1st year</option>
                    <option value="2nd year">2nd year</option>
                    <option value="3rd year">3rd year</option>
                    <option value="4th year">4th year</option>
                  </select>
                </div>

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

              <div>
                <label
                  htmlFor="personalEmail"
                  className="block font-medium text-gray-700"
                >
                  University Email Address
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="universityEmail"
                  name="universityEmail"
                  value={userDetails.universityEmail}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-medium text-gray-700"
                  >
                    OTP <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    value={userDetails.otp}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter OTP"
                    required
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleRegister}
                  className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Register
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
