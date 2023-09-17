import { Link } from "react-router-dom";
import { ImagePreview } from "../../ImagePreview/ImagePreview";
import { UpdatesItemProps } from "./UpdatesItem.props";
import { useState } from "react";

export const UpdatesItem = ({
  className,
  chapter,
  ...props
}: UpdatesItemProps): JSX.Element => {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <div className={`${className} flex gap-2 w-full `} {...props}>
      <Link to={`/comic/${chapter.comicId}`}>
        <ImagePreview
          src={chapter.comic.comicCover}
          width={100}
          height={140}
          className="desktop:h-[140px] mobile:h-[100px] mobile:w-[90px]"
        />
      </Link>
      <div className="flex-1">
        <div className="border-b border-gray-400 ">
          <Link
            to={`/comic/${chapter.comicId}`}
            className="desktop:text-lg mobile:text-md font-bold hover:text-indigoLight"
          >
            {chapter.comic.title}
          </Link>
          <h4 className="text-sm text-gray-400">
            {chapter.comic.alternativeTitle}
          </h4>
        </div>
        <div
          className={`col gap-1  ${
            expand ? "h-fit" : "h-[85px] overflow-hidden"
          } `}
        >
          {chapter.chapterNumbers.map(({ chapter: c, name }) => (
            <Link
              to={`/reader/${chapter.comicId}/${c}?page=1`}
              className="text-md font-bold hover:text-indigoLight first:bg-gray-200 pl-1"
              key={c}
            >
              Chapter {c}{" "}
              <span className="text-gray-400 text-[15px] hover:text-black">
                {name}
              </span>
            </Link>
          ))}
        </div>
        <button
          onClick={() => setExpand((prev) => !prev)}
          className={`text-gray-400 text-sm hover:text-indigoGrey hover:underline pl-1 ${
            chapter.chapterNumbers.length < 3 && "hidden"
          }`}
        >
          {expand ? "collapse" : "show all"}
        </button>
      </div>
    </div>
  );
};
