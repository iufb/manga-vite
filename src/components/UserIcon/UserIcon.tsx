import { UserIconProps } from "./UserIcon.props";
import defaultUser from "../../assets/default-image.png";
export const UserIcon = ({
  avatar,
  width,
  height,
  className,
  ...props
}: UserIconProps): JSX.Element => {
  return (
    <div {...props} className="cursor-pointer">
      <img
        src={
          avatar ? `${import.meta.env.VITE_API_HOST}/${avatar}` : defaultUser
        }
        alt="user"
        width={width}
        height={height}
        className={`${className} rounded-md`}
      />
    </div>
  );
};
