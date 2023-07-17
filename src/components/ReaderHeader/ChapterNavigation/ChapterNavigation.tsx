import { useNavigate, useParams } from "react-router-dom";
import { ChapterNavigationProps } from "./ChapterNavigation.props";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const ChapterNavigation = ({
  className,
  ...props
}: ChapterNavigationProps): JSX.Element => {
  const { chapterNumber } = useParams();
  return (
    <div className={`${className} center gap-1`} {...props}>
      <button
        className="h-full readerLinkHover px-3 py-4 center"
        onClick={() => {}}
      >
        <MdArrowBackIos />
      </button>
      <button className="readerLinkHover px-2 h-full ">
        Chapter {chapterNumber && chapterNumber[1]}
      </button>

      <button className="h-full readerLinkHover px-3 py-4 center disabled:text-gray-100 disabled:cursor-not-allowed">
        <MdArrowForwardIos />
      </button>
    </div>
  );
};
