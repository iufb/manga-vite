import { Link } from "react-router-dom";
import { Navlinks } from "./Navlinks/Navlinks";
import { AuthStatus } from "./AuthStatus/AuthStatus";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAppDispatch } from "../../redux/hooks";
import { updateModalStatus } from "../../redux/features/modal/modalSlice";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  return (
    <header className="  py-2   desktop:px-56 laptop:px-44 tablet:px-32 mobile:px-5   bg-indigoGrey  text-customWhite ">
      <RxHamburgerMenu
        className="w-8  h-8 active:scale-110 tablet:hidden"
        onClick={() => {
          dispatch(
            updateModalStatus({ status: "open", modal: "sidebarModalState" })
          );
        }}
      />
      <nav className="w-full  grid-cols-navbar mobile:hidden tablet:grid  ">
        <Link to={"/"} className="font-bold text-2xl cursor-pointer ">
          Manga
        </Link>
        <Navlinks />
        <AuthStatus />
      </nav>
    </header>
  );
};
