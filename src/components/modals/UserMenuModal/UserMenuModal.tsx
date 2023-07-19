import { Link } from "react-router-dom";
import { UserMenuModalProps } from "./UserMenuModal.props";
import { FiSettings } from "react-icons/fi";
import { AiOutlineProfile, AiOutlineLogout } from "react-icons/ai";
import { useRef } from "react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { useDispatch } from "react-redux";
import { updateModalStatus } from "../../../redux/features/modal/modalSlice";
import { IconLink } from "../../IconLink/IconLink";
export const UserMenuModal = ({
  logout,
  className,
  ...props
}: UserMenuModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  useOnClickOutside(modalRef, () =>
    dispatch(updateModalStatus({ status: "close", modal: "authModalState" }))
  );
  return (
    <div className={`${className}`} {...props} ref={modalRef}>
      <div className="w-30 h-30  p-5 rounded bg-gray-700 absolute top-12 left-4  flex flex-col items-start z-20">
        <IconLink to={"/user"} icon={<AiOutlineProfile className="w-3 h-3" />}>
          Profile
        </IconLink>
        <IconLink to={`/user/edit`} icon={<FiSettings className="w-3 h-3" />}>
          Settings
        </IconLink>
        <button onClick={logout} className="flex gap-2 center">
          <AiOutlineLogout className="w-3 h-3" />
          Log out
        </button>
      </div>
    </div>
  );
};
