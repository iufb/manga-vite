import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import { UserIcon } from "../UserIcon/UserIcon";
import { FiSettings } from "react-icons/fi";
export const UserHeader = () => {
  const { user } = useAuth();
  return (
    <div className=" w-full h-20 bg-indigoLight flex gap-4 items-center desktop:px-10 mobile:px-5 ">
      <UserIcon avatar={user?.avatar} width={42} height={42} />
      <div className="font-bold text-customWhite flex-1">
        <h2 className="text-xl ">{user?.name}</h2>
        <p>Role : {user?.role}</p>
      </div>
      <Link
        to={"edit"}
        className=" btn tablet:btn-md mobile:btn-sm flex gap-2 tablet:max-w-[145px] mobile:max-w-[40px]"
      >
        <FiSettings className="w-6 h-6" />
        <span className="mobile:hidden tablet:block">Settings</span>
      </Link>
    </div>
  );
};
