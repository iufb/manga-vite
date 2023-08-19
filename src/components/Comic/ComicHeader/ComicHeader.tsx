import { Rating } from "../../Rating/Rating";
import { ComicHeaderProps } from "./ComicHeader.props";

export const ComicHeader = ({
  title,
  className,
  ...props
}: ComicHeaderProps): JSX.Element => {
  return (
    <header
      className={`${className} desktop:text-white  desktop:text-start  mobile:text-gray-700 mobile:justify-around desktop:justify-between mobile:py-2 desktop:py-0  desktop:block desktop:bg-inherit mobile:bg-white mobile:rounded-t    desktop:text-3xl mobile:text-xl tablet:text-center justify-between `}
      {...props}
    >
      {title}
      <Rating />
    </header>
  );
};
