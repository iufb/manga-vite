import { Link } from "react-router-dom";
import { IconLinkProps } from "./IconLink.props";

export const IconLink = ({
  icon,
  className,
  children,
  ...props
}: IconLinkProps): JSX.Element => {
  return (
    <Link {...props} className={`${className} flex gap-2 center`}>
      {icon}
      {children}
    </Link>
  );
};
