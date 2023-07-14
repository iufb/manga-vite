import useSWR from "swr";
import { userType } from "../types/user.type";
import fetcher from "../api/axios-client";
export const useAuth = () => {
  const { data: user } = useSWR<userType>("user", fetcher);
  return { user };
};
