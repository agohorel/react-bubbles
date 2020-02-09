import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    }
  });
};
