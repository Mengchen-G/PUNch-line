import axios from "axios";

const getJoke = () => {
  return axios.get("https://official-joke-api.appspot.com/random_joke");
};

export { getJoke };
