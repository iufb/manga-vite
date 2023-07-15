import axios from "axios";
export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}/api`,
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
