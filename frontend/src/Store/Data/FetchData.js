const { default: URL } = require("../Url");

const getAlumniData = async () => {
  try {
    const options = {
      method: "GET",
    };
    const url = `${URL}/alumni/directory`;
    const response = await fetch(url, options);
    if (response.ok) {
      const { data, message } = await response.json();
      console.log(message);
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log("Error");
  }
};

const getAlumniSimilarMatches = async ({
  fieldOfStudy,
  graduationYear,
  company,
}) => {
  try {
    const options = {
      method: "GET",
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

const getJobs = async () => {
  const url = `${URL}/jobs`;
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  if (response.ok) {
    const { message, data } = await response.json();
    return { data, message };
  } else {
    const { message } = await response.json();
    return { data: [], message };
  }
};

module.exports = { getAlumniData, getAlumniSimilarMatches, getJobs };
