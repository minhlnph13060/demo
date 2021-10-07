import axios from "axios";

const instance = axios.create({
  baseURL: "https://615ad1f14a360f0017a812b2.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
