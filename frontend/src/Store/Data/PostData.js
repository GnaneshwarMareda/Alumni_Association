import URL from "../Url";

const postJob = async (newJob) => {
  try {
    const url = `${URL}/jobs/postjob`;
    const options = {
      method: "GET",
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

export default postJob;
