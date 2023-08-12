import { ComicHeaderProps } from "./ComicHeader.props";

export const ComicHeader = ({
  title,
  className,
  ...props
}: ComicHeaderProps): JSX.Element => {
  return (
    <header
      className={`${className} desktop:text-white  desktop:text-start  mobile:text-gray-700 mobile:text-center   desktop:block desktop:bg-inherit mobile:bg-white mobile:rounded-t    desktop:text-3xl mobile:text-xl tablet:text-center  `}
      {...props}
    >
      {title}
    </header>
  );
};
