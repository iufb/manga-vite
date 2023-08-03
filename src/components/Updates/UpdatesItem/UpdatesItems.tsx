import { Link } from "react-router-dom";
import { ImagePreview } from "../../ImagePreview/ImagePreview";
import { UpdatesItemProps } from "./UpdatesItem.props";

export const UpdatesItem = ({
  className,
  chapter,
  ...props
}: UpdatesItemProps): JSX.Element => {
  return (
    <div className={`${className} flex gap-2 w-full`} {...props}>
      <Link to={`/comic/${chapter.comicId}`}>
        <ImagePreview
          src={chapter.comic.comicCover}
          width={100}
          height={140}
          className="h-full"
        />
      </Link>
      <div className="flex-1">
        <div className="border-b border-gray-400 ">
          <Link
            to={`/comic/${chapter.comicId}`}
            className="text-lg font-bold hover:text-indigoLight"
          >
            {chapter.comic.title}
          </Link>
          <h4 className="text-sm text-gray-400">
            {chapter.comic.alternativeTitle}
          </h4>
        </div>
        <Link
          to={`/reader/${chapter.comicId}/${chapter.chapterNumber}?page=1`}
          className="text-lg font-bold hover:text-indigoLight"
        >
          Chapter {chapter.chapterNumber}{" "}
          <span className="text-gray-400 text-[15px] hover:text-black">
            {chapter.name}
          </span>
        </Link>
      </div>
    </div>
  );
};
