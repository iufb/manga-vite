import axios from "axios";
export const instance = (auth?: string) =>
  axios.create({
    baseURL: `${import.meta.env.VITE_API_HOST}/api`,
    headers: {
      common: {
        Authorization: auth ?? `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    },
  });
const fetcher = (
  url: string,
  auth?: string,
  params?: Record<string, unknown>
) =>
  instance(auth)
    .get(url, {
      params,
    })
    .then((res) => res.data);
export default fetcher;
