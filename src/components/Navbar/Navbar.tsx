import { Link } from "react-router-dom";
import { Navlinks } from "./Navlinks/Navlinks";
import { AuthStatus } from "./AuthStatus/AuthStatus";

export const Navbar = () => {
  return (
    <header className="  navbar desktop:px-56 laptop:px-44 tablet:px-32 mobile:px-20 bg-indigoGrey  text-customWhite ">
      <nav className="w-full grid grid-cols-navbar  ">
        <Link to={"/"} className="font-bold text-2xl cursor-pointer ">
          Manga
        </Link>
        <Navlinks />
        <AuthStatus />
      </nav>
    </header>
  );
};
