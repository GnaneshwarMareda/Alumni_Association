const { default: URL } = require("../Url");

const updateJob = async (jobId, reactionType) => {
  try {
    const url = `${URL}/careers/jobs:${jobId}`;
    const options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ reactionType }),
    };
    const response = await fetch(url, options);
    console.log(response);
  } catch (error) {
    return { message: error.message };
  }
};

const updateJobStatus = async (id, status) => {
  try {
    const url = `${URL}/careers/jobs/admin`;
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    };
    const response = await fetch(url, options);
    const { message } = await response.json();
    return { message };
  } catch (error) {
    return { message: error.message };
  }
};

const promoteStudents = async (year) => {
  try {
    const url = `${URL}/admin/promote-students`;
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ year }),
    };
    const response = await fetch(url, options);
    const { message } = await response.json();
    return { message };
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = { updateJob, updateJobStatus, promoteStudents };
