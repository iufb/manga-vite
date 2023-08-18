import { Link } from "react-router-dom";
import { TagProps } from "./Tag.props";

export const Tag = ({ name, className, ...props }: TagProps): JSX.Element => {
  return (
    <Link
      className={`${className} capitalize text-md  px-2  bg-gray-100 border border-gray-400 rounded-md text-gray-400`}
      {...props}
    >
      {name}
    </Link>
  );
};
