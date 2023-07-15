import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import { UserIcon } from "../UserIcon/UserIcon";
import { FiSettings } from "react-icons/fi";
export const UserHeader = () => {
  const { user } = useAuth();
  return (
    <div className=" w-full h-20 bg-indigoLight grid grid-cols-userHeader gap-4 items-center px-10">
      <UserIcon avatar={user?.avatar} width={42} height={42} />
      <div className="font-bold text-customWhite">
        <h2 className="text-xl ">{user?.name}</h2>
        <p>Role : {user?.role}</p>
      </div>
      <Link to={"edit"} className="btn  flex gap-2 max-w-[145px]">
        <FiSettings className="w-6 h-6" />
        <span>Settings</span>
      </Link>
    </div>
  );
};
