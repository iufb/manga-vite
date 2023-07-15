import { Link } from "react-router-dom";
import { UserMenuModalProps } from "./UserMenuModal.props";
import { FiSettings } from "react-icons/fi";
import { AiOutlineProfile, AiOutlineLogout } from "react-icons/ai";
import { useRef } from "react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { useDispatch } from "react-redux";
import { updateAuthModalStatus } from "../../../redux/features/modal/modalSlice";
export const UserMenuModal = ({
  logout,
  className,
  ...props
}: UserMenuModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  useOnClickOutside(modalRef, () => dispatch(updateAuthModalStatus("close")));
  return (
    <div className={`${className}`} {...props} ref={modalRef}>
      <div className="w-30 h-30  p-5 rounded bg-gray-700 absolute top-12 left-4  flex flex-col items-start z-20">
        <Link to={"user"} className="flex gap-2 center">
          <AiOutlineProfile className="w-3 h-3" />
          Profile
        </Link>
        <Link to={`user/edit`} className="flex gap-2 center">
          <FiSettings className="w-3 h-3" />
          Settings
        </Link>
        <button onClick={logout} className="flex gap-2 center">
          <AiOutlineLogout className="w-3 h-3" />
          Log out
        </button>
      </div>
    </div>
  );
};
