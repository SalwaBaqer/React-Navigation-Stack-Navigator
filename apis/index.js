import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.tvmaze.com/schedule/",
});

export default instance;
