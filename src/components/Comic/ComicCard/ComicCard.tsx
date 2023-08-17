import { Link } from "react-router-dom";
import { ImagePreview } from "../../ImagePreview/ImagePreview";
import { ComicCardProps } from "./ComicCard.props";
import { motion } from "framer-motion";
import { slideAnimation } from "../../../utils/motion";
export const ComicCard = ({
  cover,
  id,
  name,
  comicLayout,
  createdAt,
  lastChapter,
  type,
  className,
  ...props
}: ComicCardProps): JSX.Element => {
  const createdDate =
    createdAt &&
    new Date(createdAt)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .toString();

  return (
    <motion.div
      {...slideAnimation("left")}
      className={`${comicLayout == "list" && "w-full px-4"}`}
      {...props}
    >
      {comicLayout == "tile" && (
        <Link
          className={`${className}   col relative w-fit h-full    `}
          to={`/comic/${id}`}
        >
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
      )}
      {comicLayout == "list" && (
        <div className="flex gap-2 w-full border-b border-gray-400 pb-3 center">
          <ImagePreview
            src={cover}
            width={60}
            height={84}
            className="rounded-md h-[84px]"
          />
          <div className="flex-1 col">
            <Link to={`/comic/${id}`} className="text-lg">
              {name}
            </Link>
            <Link
              to={`/reader/${id}/${lastChapter}?page=1`}
              className="text-gray-400"
            >
              Continue {lastChapter} chapter
            </Link>
          </div>
          <div>
            <h3 className="text-gray-400">Added</h3>
            <span>{createdDate}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};
