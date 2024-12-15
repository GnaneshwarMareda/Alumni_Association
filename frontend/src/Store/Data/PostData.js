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

const addSuccessStory = async (title, image, description) => {
  try {
    const url = `${URL}/success-stories`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        image,
      }),
    };

    const response = await fetch(url, options);
    const { message } = await response.json();

    console.log(message);
    return { message };
  } catch (error) {
    return { message: error.message };
  }
};

const addEvent = async (title, description, image, dateOfEvent) => {
  try {
    const url = `${URL}/events`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        image,
        dateOfEvent,
      }),
    };

    const response = await fetch(url, options);
    const { message } = await response.json();

    console.log(message);
    return { message };
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = { postJob, addSuccessStory, addEvent };
