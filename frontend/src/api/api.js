import axios from "axios";

const API = axios.create({
  baseURL: "https://the-luxe-bazaar.onrender.com/api",
});

export default API;