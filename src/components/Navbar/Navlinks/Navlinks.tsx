import { NavLink } from "react-router-dom";
import { NavlinksProps } from "./Navlinks.props";
const links = [
  {
    href: "/catalog",
    name: "Catalog",
  },
  {
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
      className={`${className}  items-center flex-1 justify-self-end flex gap-4 text-lg`}
      {...props}
    >
      {links.map(({ name, href }) => (
        <NavLink
          key={name}
          to={href}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
};
