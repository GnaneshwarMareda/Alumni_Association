import React, { useState } from "react";

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [initiative, setInitiative] = useState("");
  const [message, setMessage] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();
    alert(
      `Donation of ₹${donationAmount} for ${initiative} successfully initiated!`
    );
    setDonationAmount("");
    setInitiative("");
    setMessage("");
  };

  return (
    <div className="min-h-[80vh] ">
      <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Support Your Alma Mater
        </h1>
        <form onSubmit={handleDonate} className="space-y-4">
          {/* Donation Amount */}
          <div>
            <label
              htmlFor="amount"
              className="block text-gray-700 font-semibold"
            >
              Donation Amount (₹)
            </label>
            <input
              type="number"
              id="amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Initiatives Dropdown */}
          <div>
            <label
              htmlFor="initiative"
              className="block text-gray-700 font-semibold"
            >
              Select Initiative
            </label>
            <select
              id="initiative"
              value={initiative}
              onChange={(e) => setInitiative(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Choose an initiative
              </option>
              <option value="Scholarship Fund">Scholarship Fund</option>
              <option value="Infrastructure Development">
                Infrastructure Development
              </option>
              <option value="Research & Innovation">
                Research & Innovation
              </option>
              <option value="Student Support Services">
                Student Support Services
              </option>
            </select>
          </div>

          {/* Optional Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold"
            >
              Leave a Message (Optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your thoughts or specify preferences"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
      <h1 className="text-3xl text-center">Site in Progress</h1>
    </div>
  );
};

export default Donation;
