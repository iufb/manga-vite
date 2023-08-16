import { Link } from "react-router-dom";
import { ImagePreview } from "../../ImagePreview/ImagePreview";
import { ComicCardProps } from "./ComicCard.props";

export const ComicCard = ({
  cover,
  name,
  type,
  className,
  ...props
}: ComicCardProps): JSX.Element => {
  return (
    <Link className={`${className}   col relative w-fit h-full    `} {...props}>
      <ImagePreview
        src={cover}
        width={147}
        height={206}
        className="rounded-md   h-[206px]"
      />
      <div className="absolute z-20 bottom-0 left-0 pl-1 col  overflow-hidden text-customWhite font-bold w-[147px]   cardTitle  rounded-b-md ">
        <span>{type}</span>
        <span className="">{name}</span>
      </div>
    </Link>
  );
};
