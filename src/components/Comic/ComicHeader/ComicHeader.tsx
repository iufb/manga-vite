import { Rating } from "../../Rating/Rating";
import { ComicHeaderProps } from "./ComicHeader.props";

export const ComicHeader = ({
  title,
  className,
  ...props
}: ComicHeaderProps): JSX.Element => {
  return (
    <header
      className={`${className}    desktop:text-white tablet:flex-row  desktop:text-start  mobile:text-gray-700 mobile:col desktop:justify-between mobile:py-2 desktop:py-0  desktop:block desktop:bg-inherit mobile:bg-white mobile:rounded-t    desktop:text-3xl  tablet:text-center justify-between `}
      {...props}
    >
      <span className="mobile:text-md mobile:px-1  mobile:text-center ">
        {title}
      </span>
      <Rating />
    </header>
  );
};
