import { Link } from "react-router-dom";
import { SidebarProps } from "./Sidebar.props";
import { IconLink } from "../IconLink/IconLink";
import { AiOutlineBook, AiOutlineHome } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { useAuth } from "../../hooks";
import { UserIcon } from "../UserIcon/UserIcon";
const sidebarlinks = [
  {
    icon: <AiOutlineHome />,
    name: "Home",
    path: "/",
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
  return (
    <div
      className={`${className} w-full h-full col gap-2 text-[16px] font-bold text-customWhite py-8 items-center bg-gray-800 [&>*:last-child]:border-b [&>*:last-child]:border-customWhite [&>*:last-child]:border-opacity-50 `}
      {...props}
    >
      <Link className="col center" to={"/user"}>
        <UserIcon avatar={user?.avatar} width={100} height={100} />
        <span className=" text-lg ">{user?.name}</span>
      </Link>
      {sidebarlinks.map(({ name, path, icon }) => (
        <IconLink
          icon={icon}
          to={path}
          className="w-full justify-start pl-8 py-[14px]  border-t border-customWhite border-opacity-50  "
          key={name}
        >
          {name}
        </IconLink>
      ))}
    </div>
  );
};
