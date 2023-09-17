import { Link } from "react-router-dom";
import { SidebarProps } from "./Sidebar.props";
import { AiOutlineClose } from "react-icons/ai";
import { IconLink } from "../IconLink/IconLink";
import { AiOutlineBook, AiOutlineHome } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { useAuth } from "../../hooks";
import { UserIcon } from "../UserIcon/UserIcon";
import { useAppDispatch } from "../../redux/hooks";
import { updateModalStatus } from "../../redux/features/modal/modalSlice";
import { mutate } from "swr";
import { BiLogOutCircle } from "react-icons/bi";
const sidebarlinks = [
  {
    icon: <AiOutlineHome />,
    name: "Home",
    path: "/home",
  },
  {
    icon: <AiOutlineBook />,
    name: "Catalog",
    path: "/catalog",
  },
  {
    icon: <BsPencil />,
    name: "Add comic",
    path: "/add",
  },
];
export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const logout = () => {
    localStorage.removeItem("token");
    mutate("user");
  };
  const handleClose = () => {
    dispatch(
      updateModalStatus({ modal: "sidebarModalState", status: "close" })
    );
  };
  return (
    <div
      className={`${className} w-full h-full col relative gap-2 text-[16px] font-bold text-customWhite py-8 items-center bg-gray-800 [&>*:last-child]:border-b [&>*:last-child]:border-customWhite [&>*:last-child]:border-opacity-50 `}
      {...props}
    >
      {user ? (
        <Link className="col center" to={"/user"} onClick={handleClose}>
          <UserIcon avatar={user?.avatar} width={100} height={100} />
          <span className=" text-lg ">{user?.name}</span>
          <button onClick={logout} className="flex items-center gap-1">
            <BiLogOutCircle />
            Logout
          </button>
        </Link>
      ) : (
        <span>
          <Link to={"/login"} className="text-lg underline ">
            Login
          </Link>{" "}
          or{" "}
          <Link to={"/register"} className="text-lg underline ">
            Register
          </Link>
        </span>
      )}
      <AiOutlineClose
        className="absolute right-1 top-1 text-2xl hover:fill-gray-500  "
        onClick={handleClose}
      />
      {sidebarlinks.map(({ name, path, icon }) => (
        <IconLink
          icon={icon}
          to={path}
          className="w-full justify-start px-8 py-[14px]  border-t border-customWhite border-opacity-50  "
          key={name}
          onClick={handleClose}
        >
          {name}
        </IconLink>
      ))}
    </div>
  );
};
