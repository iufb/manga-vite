import axios from "axios";
export const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  },
});

const fetcher = (url: string, params?: Record<string, unknown>) =>
  instance.get(url, { params }).then((res) => res.data);
export default fetcher;
