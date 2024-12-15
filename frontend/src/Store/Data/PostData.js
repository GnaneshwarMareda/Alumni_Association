const { default: URL } = require("../Url");

const postJob = async (newJob) => {
  try {
    const url = `${URL}/careers/jobs/postjob`;
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    };
    const response = await fetch(url, options);
    const { message } = response;
    return message;
  } catch (error) {
    return error.message;
  }
};

module.exports = { postJob };
