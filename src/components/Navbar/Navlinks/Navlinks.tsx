import { NavLink } from "react-router-dom";
import { NavlinksProps } from "./Navlinks.props";
import { AiOutlineBook } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
export const links = [
  {
    icon: <AiOutlineBook />,
    href: "/catalog",
    name: "Catalog",
  },
  {
    icon: <BsPencil />,
    href: "/add",
    name: "Add new",
  },
];
export const Navlinks = ({
  className,
  ...props
}: NavlinksProps): JSX.Element => {
  return (
    <div
      className={`${className}  items-center flex-1 justify-self-center flex gap-4 text-lg`}
      {...props}
    >
      {links.map(({ name, href, icon }) => (
        <NavLink
          key={name}
          to={href}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          <span className="center gap-2 text-lg text-customWhite fill-customWhite">
            {icon}
            {name}
          </span>
        </NavLink>
      ))}
    </div>
  );
};
