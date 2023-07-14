import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateAuthModalStatus } from "../../../redux/features/modal/modalSlice";
import { UserIcon } from "../../UserIcon/UserIcon";
import { UserMenuModal } from "../..";
import { useState } from "react";
const LoginOrRegister = () => (
  <div className="flex gap-2 text-md">
    <Link to={"/login"}>Login </Link>
    or
    <Link to={"/register"}>Register</Link>
  </div>
);
export const AuthStatus = () => {
  const { user: user } = useAuth();
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );
  const dispatch = useAppDispatch();
  console.log(user);
  const logout = () => {
    localStorage.removeItem("auth_token");
    setToken(null);
  };
  const { authModalState } = useAppSelector((state) => state.modal);
  return (
    <div className="ml-10 relative">
      {token && user ? (
        <div className=" gap-2 center w-[100px]  ">
          <UserIcon
            avatar={user.avatar}
            width={35}
            height={40}
            onClick={() => dispatch(updateAuthModalStatus("open"))}
          />
        </div>
      ) : (
        <LoginOrRegister />
      )}
      {authModalState == "open" && <UserMenuModal logout={logout} />}
    </div>
  );
};
