import useSWR from "swr";
import { userType } from "../types/user.type";
import fetcher from "../api/axios-client";
export const useAuth = () => {
  const { data: user, error } = useSWR<userType>("user", () =>
    fetcher("user", `Bearer ${localStorage.getItem("token")}`, {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    })
  );
  if (error) return { user: undefined };
  return { user };
};
