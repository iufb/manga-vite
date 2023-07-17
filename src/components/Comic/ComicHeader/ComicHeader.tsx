import { ComicHeaderProps } from "./ComicHeader.props";

export const ComicHeader = ({
  title,
  className,
  ...props
}: ComicHeaderProps): JSX.Element => {
  return (
    <header className={`${className} text-white text-3xl `} {...props}>
      {title}
    </header>
  );
};
