import Cookie from "js-cookie";
const { default: URL } = require("../Url");

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${Cookie.get("jwtToken")}`,
  },
};

export const getAlumniData = async () => {
  try {
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

// export const getAlumniSimilarMatches = async ({ graduationYear, company }) => {
//   try {
//     const url = `${URL}/alumni/similar-matches?graduationYear=${graduationYear}&company=${company}`;
//     const response = await fetch(url, options);
//     if (response.ok) {
//       const { data, message } = await response.json();
//       return { data, message };
//     }
//   } catch (error) {
//     return { message: error.message };
//   }
// };

export const getVerifiedJobs = async () => {
  const url = `${URL}/careers/jobs/students`;
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

export const getEvents = async () => {
  try {
    const url = `${URL}/events`;
    const response = await fetch(url, options);
    const { message, events } = await response.json();
    return { message, events };
  } catch (error) {
    return { message: error.message };
  }
};

export const getUpcomingEvents = async () => {
  try {
    const url = `${URL}/events/upcoming-events`;

    const response = await fetch(url, options);
    const { message, events } = await response.json();
    return { message, data: events };
  } catch (error) {
    return { message: error.message };
  }
};

export const getConferences = async () => {
  try {
    const url = `${URL}/events/conferences`;
    const response = await fetch(url, options);
    const { message, upcomingData, pastData } = await response.json();
    return { message, upcomingData, pastData };
  } catch (error) {
    return { message: error.message };
  }
};

export const getTechReunions = async () => {
  try {
    const url = `${URL}/events/conferences`;
    const response = await fetch(url, options);
    const { message, upcomingData, pastData } = await response.json();
    return { message, upcomingData, pastData };
  } catch (error) {
    return { message: error.message };
  }
};

export const getSuccessStories = async () => {
  try {
    const url = `${URL}/success-stories`;
    const response = await fetch(url, options);
    const { message, data } = await response.json();
    return { message, data };
  } catch (error) {
    return { message: error.message };
  }
};

// module.exports = {
//   getAlumniData,
//   getAlumniSimilarMatches,
//   getVerifiedJobs,
//   getUnverifiedJobs,
// };
