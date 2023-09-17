import { PropsWithChildren } from "react";
import { useAuth } from "../../hooks";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();
  if (!user) return <Navigate to={"/login"} />;
  return children;
};
