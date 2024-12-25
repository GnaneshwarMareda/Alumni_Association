import Cookie from "js-cookie";
const { default: URL } = require("../Url");

export const getAlumniData = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookie.get("jwtToken")}`,
      },
    };
    const url = `${URL}/alumni/directory`;
    const response = await fetch(url, options);
    if (response.ok) {
      const { data, message } = await response.json();
      return { data, message };
    }
  } catch (error) {
    console.log("Error");
  }
};

export const getAlumniSimilarMatches = async ({
  fieldOfStudy,
  graduationYear,
  company,
}) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookie.get("jwtToken")}`,
      },
    };
    const url = `${URL}/alumni/simlar-matches?fieldOfStudy=${fieldOfStudy}&graduationYear=${graduationYear}&company=${company}`;
    const response = await fetch(url, options);
    if (response.ok) {
      const { data } = await response.json();
      return data;
    }
  } catch (error) {
    console.log("Error");
  }
};

export const getVerifiedJobs = async () => {
  const url = `${URL}/careers/jobs/students`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Cookie.get("jwtToken")}`,
    },
  };
  const response = await fetch(url, options);
  //console.log(response);
  if (response.ok) {
    const { message, jobs } = await response.json();
    return { data: jobs, message };
  } else {
    const { message } = await response.json();
    return { data: [], message };
  }
};

export const getUnverifiedJobs = async () => {
  const url = `${URL}/careers/jobs/admin`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Cookie.get("jwtToken")}`,
    },
  };
  const response = await fetch(url, options);
  //console.log(response);
  if (response.ok) {
    const { message, jobs } = await response.json();
    return { data: jobs, message };
  } else {
    const { message } = await response.json();
    return { data: [], message };
  }
};

// module.exports = {
//   getAlumniData,
//   getAlumniSimilarMatches,
//   getVerifiedJobs,
//   getUnverifiedJobs,
// };
