import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateModalStatus } from "../../../redux/features/modal/modalSlice";
import { UserIcon } from "../../UserIcon/UserIcon";
import { UserMenuModal } from "../..";
import { useEffect, useState } from "react";
import { mutate } from "swr";
import { AnimatePresence } from "framer-motion";
const LoginOrRegister = () => (
  <div className="flex gap-2 text-md center ">
    <Link
      to={"/login"}
      className="p-2 rounded-md hover:bg-white hover:bg-opacity-30"
    >
      Login{" "}
    </Link>

    <Link
      to={"/register"}
      className="p-2 border border-customWhite rounded-md hover:bg-white hover:bg-opacity-30"
    >
      Register
    </Link>
  </div>
);
export const AuthStatus = () => {
  const { user } = useAuth();
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );
  const dispatch = useAppDispatch();
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    dispatch(updateModalStatus({ status: "close", modal: "authModalState" }));
  };
  const { authModalState } = useAppSelector((state) => state.modal);
  useEffect(() => {
    mutate("user");
  }, []);
  return (
    <div className="ml-10 relative">
      {token ? (
        <div className=" gap-2 center w-[100px]  ">
          <UserIcon
            avatar={user?.avatar}
            width={50}
            height={50}
            onClick={() =>
              dispatch(
                updateModalStatus({ status: "open", modal: "authModalState" })
              )
            }
          />
        </div>
      ) : (
        <LoginOrRegister />
      )}
      <AnimatePresence>
        {authModalState == "open" && <UserMenuModal logout={logout} />}
      </AnimatePresence>
    </div>
  );
};
