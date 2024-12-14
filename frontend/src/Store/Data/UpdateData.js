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
    console.error("Error updating job:", error);
  }
};

module.exports = updateJob;
