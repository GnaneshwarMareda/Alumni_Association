const { default: URL } = require("../Url");

const getAlumniData = async () => {
  try {
    const options = {
      method: "GET",
    };
    const url = `${URL}/alumni`;
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

module.exports = { getAlumniData };
